import { Counter } from "../Counter";
import child_process from "child_process";

function playSoundFromFile(counter : Counter) : Promise<any>{
    let Afplay = require('afplay');
    console.log(counter.audioFileToPlay);
    let player = new Afplay;           
    return player.play(counter.audioFileToPlay)
    .then(() => {
        console.log('Audio done playing');
    })
    .catch((error: any) => {
        console.log('Error playing file',error);
    });
}

function playSound(counter : Counter) : Promise<any>{

    var proc = child_process.exec(`say -v Victoria ${counter.wordsToSpeech!}`); 
    let result = new Promise((resolve) =>{
        proc.addListener('close', () =>{
            resolve();
        });
    })

    
    return result;
}

export {
    playSoundFromFile,
    playSound
}