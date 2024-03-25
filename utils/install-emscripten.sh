echo "The following instructions have been added from https://emscripten.org/docs/getting_started/downloads.html#installation-instructions-using-the-emsdk-recommended"
echo "Installing git, python3 and cmake"
sudo apt-get install git python3 cmake

echo Installing emscripten for  at ~/.emsdk ...
cd ~

echo "Cloning emsdk..."
git clone https://github.com/emscripten-core/emsdk.git .emsdk
echo "Change directory to .emsdk"
cd .emsdk

echo "Pulling latest changes..."
git pull

echo "Installing emscripten..."
./emsdk install latest 
echo "Activating emscripten..."
./emsdk activate latest

echo "Updating current terminal..."
source ./emsdk_env.sh
