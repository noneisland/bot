![Logo](ecovacs-deebot.png)

# ecovacs-deebot.js

[![Latest version](http://img.shields.io/npm/v/ecovacs-deebot/latest?label=stable)](https://www.npmjs.com/package/ecovacs-deebot)
[![Latest version](http://img.shields.io/npm/v/ecovacs-deebot/beta?label=beta)](https://www.npmjs.com/package/ecovacs-deebot/v/beta)
[![Latest version](http://img.shields.io/npm/v/ecovacs-deebot/alpha?label=alpha)](https://www.npmjs.com/package/ecovacs-deebot/v/alpha)
[![Number of monthly downloads](https://img.shields.io/npm/dm/ecovacs-deebot.svg)](https://www.npmjs.com/package/ecovacs-deebot)
[![Number of downloads](https://img.shields.io/npm/dt/ecovacs-deebot.svg)](https://www.npmjs.com/package/ecovacs-deebot)
[![github-workflow](https://github.com/mrbungle64/ecovacs-deebot.js/actions/workflows/node.js.yml/badge.svg)](https://github.com/mrbungle64/ecovacs-deebot.js)

Library for running Ecovacs Deebot (and also some yeedi) vacuum cleaner robots

## Installation

Information on how to install this library can be found [here](https://github.com/mrbungle64/ecovacs-deebot.js/wiki/Installation).

The minimum required version of Node.js is 14.x. It is recommended to use version 14.x or 16.x

## Usage

Information on how to use this library can be found [here](https://github.com/mrbungle64/ecovacs-deebot.js/wiki/Usage).

## Models

### Fully supported models

The fully supported models are those that I own myself:

* Deebot OZMO 920
* Deebot T8 AIVI

### Other supported models

These models should work properly or at least partially.
They are either already known to work or are technically similar to these models.
Nevertheless, the functionality may be partially limited.

I try to achieve a wide range of functionality, but decide this case by case depending on complexity and various other criteria.
There is of course no claim to full functionality.

#### Ecovacs Deebot

* Deebot OZMO 950/T5
* Deebot N8 series
* Deebot U2 series
* Deebot T8 series
* Deebot T9 series
* Deebot T10 series
* Deebot X1 series

#### yeedi

* yeedi k650
* yeedi 2 hybrid
* yeedi vac hybrid
* yeedi vac max
* yeedi vac 2 pro
* yeedi mop station

#### Ecovacs Airbot (experimental)

* AIRBOT Z1

#### Legacy models (soon to be discontinued)

These models use XML for data transport and also different characteristics for commands and events than the current models.
I also don't use my Slim 2, Deebot 901 and OZMO 930 anymore.

**Support for these models will therefore soon be discontinued**.

* Deebot Slim 2
* Deebot N79 series
* Deebot M88
* Deebot 500
* Deebot 600/601/605
* Deebot 710/711
* Deebot 900/901
* Deebot OZMO 610
* Deebot OZMO 900/905
* Deebot OZMO 930
* Deebot OZMO Slim 10/11

## Known issues

* The generation of map images may not be stable on 32-bit systems (e.g. most Raspberry Pi systems)
* The "Edge" command does not work with Deebot U2 (starts auto clean instead)
* The "Move" commands do not work with Deebot OZMO T8 AIVI (and maybe also for some other models)
* The generation of map image data does not work properly with the Deebot X1 series

## Changelog

### 0.9.3 (alpha)
* Added several commands and events for X1 series (and also maybe other models)
  * e.g. HostedCleanMode, StationState, Washing, Drying, WashIntervalState, AICleanItemState
* Several other improvements and optimizations

### 0.9.2
* Some improvements for auto empty station, dnd mode, cleaning logs, mopping modes
* Handle cleaning incoming sequence and preference for each spot area
* Improved disconnecting from the MQTT server
* Improved logging (dev environment)
* Some other improvements and fixes

### 0.9.1
* (bhuebschen) Added some commands for T9 series and yeedi mop station
* (bhuebschen) Implemented cleaning log call for T9 based models
* (bhuebschen) Added numerous commands for AIRBOT Z1 (Air Purifier)
* Added MapPoint_V2 shortcut command for T9 based models
* Added round mops to models dictionary

### 0.9.0
* Breaking change: Bump minimum required version of Node.js to 14.x
* (apfelnutzer) Added handling for the air drying message (yeedi Mop Station)
* Bugfix issue #219
* Added some error codes
* Bump dependencies (incl. fix for CVE-2022-39353)

### 0.8.3
* Added initial support for yeedi login
* and also for a few models
  * yeedi k650
  * yeedi 2 hybrid
  * yeedi vac hybrid
  * yeedi mop station
* Added CurrentStats event for XMPP devices
* Added commands for air drying the wiper blades
* Added 'donotClean' for CustomArea_V2 command
* Bumped canvas to 2.9.3
* Some minor improvements

### 0.8.2
* Added Deebot T10 series
* Some minor improvements

### 0.8.1
* Handle FwBuryPoint messages (e.g. T8/T9 series, experimental)
* Handle some additional events (e.g. T8/T9 series)
* Added commands to enable/disable Clean Preference (e.g. T8/T9 series)
* Some fixes and improvements
* Updated dependencies

### 0.8.0
* (m8schmit) Added types for TypeScript
* Lots of code documentation
* Lots of code improvements
* Added some new models to config
* Added unit care to LifeSpan components
* Added current spot area name to the events
* Implemented getCleanCount/setCleanCount command
* Add CurrentSpotAreas and CurrentCustomAreaValues events
* Some fixes
* Updated dependencies

### 0.7.2
* Bumped mqtt to 4.3.6
* Stability improvements
* A lot of code refactoring
* Bumped several dependencies
* Switched to axios

### 0.7.1
* Bumped mqtt to 4.3.4
* Bumped xmldom to 0.8.0
* Bumped follow-redirects to 1.14.7 (fix for CVE-2022-0155)

### 0.7.0
* Breaking change: Bumped required Node.js version to 12.x
* Added some new models
* Implement ContinuousCleaning and ContinuousCleaning commands (950 type models)
* Start implementing V2 commands (e.g. T8 and T9 series)
* Some minor changes and improvements
* Fix for Deebot 710 series
* Added Deebot X1 series

### 0.0.2 - 0.6.8
* [Changelog archive](https://github.com/mrbungle64/ecovacs-deebot.js/wiki/Changelog-(archive))

## Thanks and credits

* @joostth ([sucks.js](https://github.com/joostth/sucks.js))
* @wpietri ([sucks](https://github.com/wpietri/sucks))
* @bmartin5692 ([sucks](https://github.com/bmartin5692/sucks), [bumber](https://github.com/bmartin5692/bumper))
* @Ligio ([ozmo](https://github.com/Ligio/ozmo))
* @And3rsL ([Deebotozmo](https://github.com/And3rsL/Deebotozmo))
* @edenhaus ([Client Library for Deebot Vacuums](https://github.com/DeebotUniverse/client.py), [Deebot-4-Home-Assistant](https://github.com/DeebotUniverse/Deebot-4-Home-Assistant))

All credits for originally figuring out and documenting the protocol go to [@wpietri](https://github.com/wpietri).
He documented his [findings on the protocol](http://github.com/wpietri/sucks/blob/master/protocol.md) in his repository.

## Disclaimer

I am in no way affiliated with Ecovacs Robotics Co., Ltd. or yeedi Technology Limited.

## License

GNU GENERAL PUBLIC LICENSE

Copyright (c) 2023 Sascha Hölzel <mrb1232@posteo.de>
