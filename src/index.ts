import moment from "moment";
import colors from "colors";
import {Counter} from "./Counter";
import child_process from "child_process";
import savedCounters from "./data/saved";

console.log(moment().format("DD/MM/YYYY"));

function secondsToFormated(seconds: number) : string{
    return moment.utc(seconds*1000).format('HH:mm:ss');
}

function callCounting(counter: Counter){
    let counting = counter.getCounting();
    setInterval(() =>{
        let iterator = counting.next();
        if(iterator.done){
            var proc = child_process.exec(`say -v Victoria ${counter.wordsToSpeech!}`); 
            console.log(proc.pid);
        } else {
            console.log(iterator.value);
        }
    
    }, 1000)    
}

savedCounters.forEach(callCounting);


