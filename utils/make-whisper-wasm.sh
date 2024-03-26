#!/bin/bash

# https://stackoverflow.com/a/242550
UTILSDIR=$(dirname $(realpath "$0"))
OUTPUTDIR="$UTILSDIR/output"
cd $UTILSDIR
mkdir -p $OUTPUTDIR

# Customise the following exports in case they do not run locally
if ! command -v python &> /dev/null
then
    export PYTHON=python3
else
    export PYTHON=python
fi
export CC=gcc

# Build instructions from https://github.com/ggerganov/whisper.cpp/tree/master/examples/whisper.wasm#build-instructions
git clone https://github.com/ggerganov/whisper.cpp
cd whisper.cpp

rm -rf build-em
mkdir build-em && cd build-em

emcmake cmake ..
make -j

cp bin/whisper.wasm/* $OUTPUTDIR
cp bin/libmain.worker.js $OUTPUTDIR
