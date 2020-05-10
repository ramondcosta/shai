import { Counter } from "../Counter";

let savedCounters : Counter[] = [];

savedCounters.push(
    new Counter({description:"A Test Description", timeSpan: 5, wordsToSpeech: 'A test!'})
);

// savedCounters.push(
//     new Counter({description:"Lactase", timeSpan: 5, wordsToSpeech: 'It Is Time(Lac)!'})
// );

export default savedCounters;