# Trans(cribed) notes



## How-to's
### Installing emscripten
Either...
- Install using a package manager (recommended by Denperidge due to less dependency goofery)
- Install using the [emsdk instructions on the emscripten website](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions-using-the-emsdk-recommended) (recommended by emscripten)
- Install using the Windows and Linux build scripts ([utils/install-emscripten.bat](utils/install-emscripten.bat) and [utils/install-emscripten.sh](utils/install-emscripten.sh) respectively). These are experimental and not guaranteed to work, but with some modifying and troubleshooting they might.

### Make-ing whisper.wasm
*Pre-requirements: Node\*, g++\*\*, [cmake](https://cmake.org/download/#latest), [emscripten](#installing-emscripten)*

Simply run the following command and follow the prompts!
```bash
node utils/make-whisper-wasm.js
```

*: ensure you have a recent version of Node! For Windows/Mac, you can use the [Node installer on the website](https://nodejs.org/en/download). For Mac/Linux, you can use [nvm (node version manager)](https://github.com/nvm-sh/nvm).

\*\*: On Windows...
- Cygwin can be used for g++. Make sure to enable the gcc-core, gcc-g++ and ninja (ninja is only needed if you're building emscripten) package and to add `C:\cygwin64\bin` to path
- If cmake (`C:\Program Files\CMake\bin\`) is not in PATH, you might get [an error, as shown in this GitHub Issue](https://github.com/emscripten-core/emscripten/issues/18583#issuecomment-1401160138)
