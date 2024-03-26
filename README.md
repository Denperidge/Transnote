# Trans(cribed) notes



## How-to's
### Installing emscripten
Either...
- Install using a package manager (recommended)
- Install using the Windows and Linux build scripts ([utils/install-emscripten.bat](utils/install-emscripten.bat) and [utils/install-emscripten.sh](utils/install-emscripten.sh) respectively). These are experimental and not guaranteed to work, but with some modifying and troubleshooting they might.

### Make-ing whisper.wasm
*Pre-requirements: [cmake](https://cmake.org/download/#latest), g++\*, [emscripten](#installing-emscripten)*

For Windows users:
- Cygwin can be used for g++. Make sure to enable the gcc-core, gcc-g++ and ninja (ninja is used for emscripten) package and to add `C:\cygwin64\bin` to path
- If cmake (`C:\Program Files\CMake\bin\`) is not in PATH, you might get [an error, as shown in this GitHub Issue](https://github.com/emscripten-core/emscripten/issues/18583#issuecomment-1401160138)

