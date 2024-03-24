#!/bin/bash

# Download emcake

# Build instructions: https://github.com/ggerganov/whisper.cpp/tree/master/examples/whisper.wasm#build-instructions
git clone https://github.com/ggerganov/whisper.cpp
pushd whisper.cpp
mkdir build-em && cd build-em

# Customise the following exports in case they do not run locally
#export PYTHON=python
#export CC=gcc

emcmake cmake ..
make -j



popd
rm -r whisper.cpp/