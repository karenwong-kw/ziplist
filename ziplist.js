const letters = ['a', 'b', 'c'];
const nums = [1, 2, 3];

function zipList(listLetter, listNum) {
  const final = [];
  for (let i = 0; i < listLetter.length; i++) {
    final.push(listLetter[i]);
    final.push(listNum[i]);
  }
  return final;
}

console.log(zipList(letters, nums));

function zipListTheSimpleWay(listLetter, listNum) {
  const sort = _.zip(listLetter, listNum);
  return _.flatten(sort);
}

console.log(zipListTheSimpleWay(letters, nums));
