#!/bin/bash

# Build instructions: https://github.com/ggerganov/whisper.cpp/tree/master/examples/whisper.wasm#build-instructions
git clone https://github.com/ggerganov/whisper.cpp
pushd whisper.cpp

rm -rf build-em
mkdir build-em && cd build-em

# Customise the following exports in case they do not run locally
if ! command -v python &> /dev/null
then
    export PYTHON=python3
else
    export PYTHON=python
fi
export CC=gcc

emcmake cmake ..
make -j



#popd
#rm -rf whisper.cpp/