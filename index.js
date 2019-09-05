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


var i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
}

iLoveTheBeatles = (num) => {
  let emptyArr = [];
  do{
    emptyArr.push("I love the beatles!");
  } while(iincrementVariable() < num);
  return emptyArr;
}
