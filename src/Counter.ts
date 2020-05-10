import moment from "moment";

function secondsToFormated(seconds: number) : string{
    return moment.utc(seconds*1000).format('HH:mm:ss');
}

export class Counter{

    initialDate : Date = new Date();
    description : string = "";
    timeSpan : number = 0;
    wordsToSpeech: string = "";

    constructor(params: any) {
        Object.assign(this, params);
    }

    *getCounting () {

        let initialDate = new Date();
        while (true){
            let secondsPassed = moment().diff(initialDate, "seconds");
            if((this.timeSpan - secondsPassed) < 0) return;
            let formatedTime = secondsToFormated( this.timeSpan - secondsPassed);
            yield formatedTime;
        }
    }    

}