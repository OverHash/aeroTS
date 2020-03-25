# aeroTS
[![NPM](https://nodei.co/npm/@rbxts/aerots.png)](https://npmjs.org/package/@rbxts/aerots)

A port of [AeroGameFramework](https://sleitnick.github.io/AeroGameFramework/) to [roblox-ts](https://roblox-ts.github.io/)

This was updated as of commit [42ef782](https://github.com/Sleitnick/AeroGameFramework/commit/42ef7820b1696881ef8d7eb6ec44db2669dfb571)

Features:
- IntelliSense for modules/service/controllers
- Lazy loaded modules. No more cyclic dependencies!

## Installation
It is easiest to clone this repository and copy relevant files across from there

## Usage
- AeroGameFramework comes with a lot of preinstalled files. These can be removed
- Create a file under your desired location, and add it to `src/GlobalRegistry.d.ts` in the defined format
- For examples on how to do this, see [examples](https://github.com/OverHash/aeroTS/tree/master/examples)

## Recommendations
I suggest you hide the folder `src/internal`, in Visual Studio Code this can be done by
- Opening settings with File > Preferences > Settings
- Choosing User/Workspace depending on global/local file exclusion
- Searching for `Files: Exclude`
- Adding `**/src/internal` and `**/.vscode` to the patterns to hide
