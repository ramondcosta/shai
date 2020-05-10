import moment from "moment";
import colors from "colors";


colors.setTheme({
    info: 'bgGreen',
    help: 'cyan',
    warn: 'yellow',
    success: 'bgBlue',
    error: 'red'
  });

console.log(moment().format("DD/MM/YYYY"));

function secondsToFormated(seconds: number) : string{
    return moment.utc(seconds*1000).format('HH:mm:ss');
}

function* generator(seconds : number) { 
    let initialDate = new Date();
    
    while (true){
        let secondsPassed = moment().diff(initialDate, "seconds");
        let formatedTime = secondsToFormated( seconds - secondsPassed);
        yield formatedTime;
    }
  }

function startCountdown(seconds:number, color: any){
    setInterval(() =>{
        let initialDate = new Date();
        let secondsPassed = moment().diff(initialDate, "seconds");
        let formatedTime = secondsToFormated( seconds - secondsPassed);
        console.log( color(formatedTime));
    }, 1000);
}

[colors.red,colors.yellow,colors.cyan].forEach((color) => startCountdown(60*30, color));

