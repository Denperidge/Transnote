# Trans(cribed) notes



## How-to's
### Make-ing whisper.wasm

*Pre-requirements: [cmake](https://cmake.org/download/#latest), g++\*, emscripten*

For Windows users:
- Cygwin can be used for g++. Make sure to enable the gcc-core, gcc-g++ and ninja (for emscripten) package and to add `C:\cygwin64\bin` to path
- An emscripten installer is in [utils/install-emscripten.bat](utils/install-emscripten.bat)
- If cmake (`C:\Program Files\CMake\bin\`) is not in PATH, you might get [an error, as shown in this GitHub Issue](https://github.com/emscripten-core/emscripten/issues/18583#issuecomment-1401160138)

```bash

```