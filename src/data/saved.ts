import { Counter } from "../Counter";

let savedCounters : Counter[] = [];

savedCounters.push(
    new Counter({description:"A Test Description", timeSpan: 10, wordsToSpeech: 'teste!'})
);

// savedCounters.push(
//     new Counter({description:"Lactase", timeSpan: 5, audioFileToPlay: '~/Documents/temp/teste.m4a'})
// );

export default savedCounters;