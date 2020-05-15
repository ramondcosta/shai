import moment from "moment";
import colors from "colors";
import {Counter} from "./Counter";
import savedCounters from "./data/saved";
import { clearInterval } from "timers";
import { playSound } from "./sound/AppSound"
console.log(moment().format("DD/MM/YYYY"));


function callCounting(counter: Counter){
    let counting = counter.getCounting();
    let interval = setInterval(async () =>{
        let iterator = counting.next();
        if(iterator.done){
            await playSound(counter);
            clearInterval(interval);
            console.log("teste");
        } else {
            console.log(iterator.value);
        }
    
    }, 1000)    
}

savedCounters.forEach(callCounting);


