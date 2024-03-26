/* 
This script is meant to be run once locally to make whisper.wasm
and (optionally) strip the needed parts for transnote.

Ensure you have the needed requirements! Check README.md

Simply run
  node make-whisper-wasm.js
*/

const fs = require("fs");
const process = require("process");
const { spawnSync } = require("child_process");

const commandExists = require("command-exists");
const yesno = require("yesno");

const envVars = {};

const scriptDir = __dirname.replaceAll("\\", "/") + "/";
const whisperDir = scriptDir + "whisper.cpp/";
const buildDir = whisperDir + "build-em/";
const outputDir = scriptDir + "whisper.wasm/";

function _run(command, params, cwd) {
    const gitProcess = spawnSync(command, params, {
        cwd: cwd,
        shell: true
    });
    
    const err = (gitProcess.stderr != null ? gitProcess.stderr.toString() : null);
    const out = (gitProcess.stdout != null ? gitProcess.stdout.toString() : null);
    
    if (err) {
        console.error(err)
    };
    console.log(out)
}

function start() {
    process.chdir(scriptDir);
    configureEnvironmentVariables();
}

function configureEnvironmentVariables() {
    commandExists("python", (err, exists) => {
        if (err) { throw (err); }
        else {
            if (exists) {
                envVars["PYTHON"] = "python";
            } else {
                envVars["PYTHON"] = "python3";
            }
            envVars["CC"] = "gcc";
            cloneIfNotExists();
        }
    });
}

function cloneIfNotExists() {
    if (fs.existsSync("whisper.cpp")) {
        console.log("Whisper.cpp found! Pulling latest changes...")
        _run("git", ["pull"], whisperDir);
    } else {
        console.log("Cloning ggerganov/whisper.cpp...")
        _run("git", ["clone", "https://github.com/ggerganov/whisper.cpp"], scriptDir)
    }

    build();
}

function build() {
    if (fs.existsSync(buildDir)) {
        fs.rmSync(buildDir, { recursive: true, force: true });
    }
    fs.mkdirSync(buildDir, { recursive: true });
    process.chdir(buildDir);

    console.log("Building...")
    console.log("Running emcmake...")
    _run("emcmake", ["cmake", ".."], buildDir);
    console.log("Running make...")
    _run("make", ["-j"], buildDir);

    console.log(`Building finished @ ${buildDir}`)
    yesno({
        question: "Extract the parts needed for transnote? [Y/n]: ",
        defaultValue: true
    }).then((strip) => {
        if (strip) {
            extractFunctionsFromIndexHtml();
        } else {
            console.log("User selected No to stripping");
        }
        console.log("Finished!")
    });

}

function extractFunctionsFromIndexHtml() {
    process.chdir(buildDir);
    fs.cpSync("bin/whisper.wasm/", outputDir, {recursive: true});;
    fs.copyFileSync("bin/libmain.worker.js", outputDir + "libmain.worker.js");
}

start();
