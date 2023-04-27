'use strict';

const ecovacsDeebot = require('./../index');
const tools = require('./tools');
const EcoVacsAPI = ecovacsDeebot.EcoVacsAPI;
const nodeMachineId = require('node-machine-id');

let settingsFile = tools.getSettingsFile();


const accountId = process.argv[2];
const password = process.argv[3];
const countryCode = settingsFile.COUNTRY_CODE;
const deviceNumber = process.argv[4];
const domain = settingsFile.AUTH_DOMAIN ? settingsFile.AUTH_DOMAIN : '';

console.log(accountId);

// The passwordHash is a md5 hash of your Ecovacs password.
const passwordHash = EcoVacsAPI.md5(password);
// You need to provide a device ID uniquely identifying the machine you're using to connect
const deviceId = EcoVacsAPI.getDeviceId(nodeMachineId.machineIdSync(), deviceNumber);

const api = new EcoVacsAPI(deviceId, countryCode, '', domain);

// This logs you in through the HTTP API and retrieves the required
// access tokens from the server side. This allows you to requests
// the devices linked to your account to prepare connectivity to your vacuum.
api.connect(accountId, passwordHash).then(() => {

  api.devices().then((devices) => {

    let vacuum = devices[deviceNumber];
    let vacbot = api.getVacBot(api.uid, EcoVacsAPI.REALM, api.resource, api.user_access_token, vacuum, api.getContinent());

    // Once the session has started the bot will fire a "ready" event.
    // At this point you can request information from your vacuum or send actions to it.
    vacbot.on('ready', () => {

      api.logEvent(`${(new Date()).toLocaleTimeString()} Ready`);
      vacbot.on('ErrorCode', (code) => {
        api.logEvent(`${(new Date()).toLocaleTimeString()} ErrorCode`, code);
        if (code == "128" || code == "1026") setTimeout(() => {vacbot.resume();}, 5000);
        if (code == "1021") {
          api.logEvent(`${(new Date()).toLocaleTimeString()} Cleaning complete`);
          disconnect();
        }
      });
      
      vacbot.clean();
      
    });
    vacbot.connect();

    //
    // Catch ctrl-c to exit program
    //
    process.on('SIGINT', function () {
      api.logInfo('\nGracefully shutting down from SIGINT (Ctrl+C)');
      disconnect();
    });

    function disconnect() {
      (async () => {
        try {
          await vacbot.disconnectAsync();
          api.logEvent("Exiting...");
          process.exit();
        } catch (e) {
          api.logError('Failure in disconnecting: ', e.message);
        }
      })();
    }
  });
}).catch((e) => {
  console.error(`Failure in connecting: ${e.message}`);
});
