// add solution here
function theBeatlesPlay(musicianArr, instrumentArr) {
  let emptyArr = [];
  for(let i = 0; i < musicianArr.length; i++){
    let musicianName = musicianArr[i];
    let instrumentName = instrumentArr[i];
    emptyArr.push(musicianName + " plays " + instrumentName);
  }
  return emptyArr;
}


function johnLennonFacts(facts) {
  let newArr = [];
  let i = 0;
  while(i < facts.length){
    newArr.push(facts[i] + "!!!");
    i++;
  }
  return newArr;
}


iLoveTheBeatles = (num) => {
  let emptyArr = [];
  let i = 0;
  do{
    emptyArr.push("I love the Beatles!");
  } while(i < num);
   i++;
  if(i < 15 ) {
    return emptyArr[i];
} else {
  return emptyArr;
  }
}
