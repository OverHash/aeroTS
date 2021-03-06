# aeroTS
A port of [AeroGameFramework](https://sleitnick.github.io/AeroGameFramework/) to [roblox-ts](https://roblox-ts.github.io/)

This was updated as of release [1.7.1 - b3cb92b](https://github.com/Sleitnick/AeroGameFramework/releases/tag/v1.7.1)

Features:
- IntelliSense for modules/service/controllers
- Lazy loaded modules. No more cyclic dependencies!

## Installation
It is easiest to clone this repository and copy relevant files across from there
- The most relevant files is the src/ folder. Copy this folder over and you can edit it to your liking!
- `default.project.json` should also be copied over, and replace your old `default.project.json`

## Usage
- AeroGameFramework comes with a lot of preinstalled files. These can be removed
	- The `Promise` library under Shared *must* exist - or the AeroClient will not be able to load.
	- The `Internal` folder under Shared *must* exist - or the AeroClient will not be able to load.
- Create a file under your desired location, and add it to `src/GlobalRegistry.d.ts` in the defined format
- You will need to export a class which extends from an `Aero.x` class. This class has to be exported either as the only object exported, or through `export default`
- For examples on how to do this, see [examples](https://github.com/OverHash/aeroTS/tree/master/examples)

## Recommendations
I suggest you hide the folder `src/internal`, in Visual Studio Code this can be done by
- Opening settings with File > Preferences > Settings
- Choosing User/Workspace depending on global/local file exclusion
- Searching for `Files: Exclude`
- Adding `**/src/internal` and `**/.vscode` to the patterns to hide
