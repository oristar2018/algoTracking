//slice, substr is always from to even minus - substr reverses order is end > start

// Complete the encryption function below.
function encryption(s) {
  let reg = new RegExp(/\S*/, "ig");
  var Str1 = s.match(reg)[0];

  var Str1Arr = Str1.split("");
  var Space = " ";
  var Arr = [];
  var jStart = 0;

  /*console.log(Str1, Str1Arr);*/

  var Length = Str1.length;
  var L = Math.sqrt(Length);
  var rws = Math.floor(L);
  var col = Math.ceil(L);

  while (col * rws < Length) {
    rws++;
  }

  /*console.log(Length, L, rws, col);*/

  if (col * rws >= Length) {
    for (var i = 0; i < col; i++) {
      /*console.log(Arr);*/
      if (i > 0) {
        Arr.push("/");
      }

      for (var j = jStart; j < col * rws; j += col) {
        Arr.push(Str1Arr[j]);
        var z = col * rws - col + jStart;
        /*console.log(z);*/
        if (j === z && z < Str1Arr.length) {
          jStart += 1; /*console.log(jStart, j)*/
        } else if (z === Str1Arr.length && j === Str1Arr.length - col) {
          jStart += 1; /*console.log(jStart, j)*/
        } else if (z > Str1Arr.length && j === z) {
          jStart += 1; /*console.log(jStart, j)*/
        }
      }
    }
  }

  let Output = Arr;
  /*console.log(Arr)*/

  for (var x = 0; x < Output.length; x += 1) {
    if (x > 0 && Output[x] === "/") {
      Output.splice(x, 1, Space);
    }
  }

  return Output.join("");
}

function kaprekarNumbers(p, q) {
  var arr = [p];

  if (p === 1) {
    arr = [1];
  } else {
    arr = arr;
  }

  for (var i = p; i <= q; i++) {
    let Str = Math.pow(i, 2).toString();
    let I = i.toString();
    let p1 = parseInt(Str.slice(0, Str.length - I.length));
    let p2 = parseInt(Str.slice(-I.length));

    if (p1 + p2 === i) {
      arr.push(i);
    }
  }

  if (arr.length > 2) {
    console.log(arr.join(" "));
  } else {
    console.log("INVALID RANGE");
  }
}

//pairing socks

function sockMerchant(n, ar) {
  ar.sort((a, b) => a - b);
  var count = 0;

  for (var i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      count += 1;
      i += 1;
    }
    if (ar[i] !== ar[i + 1]) {
      i = i;
    }
  }

  return count;
}

// pageTurn from start or end

function pageCount(n, p) {
  // formula = Math.floor(p / 2) or Math.floor( (n - p ) / 2)

  if (p === 1) {
    return 0;
  }
  if (p === n / 2) {
    return Math.floor(p / 2);
  }

  if (n % 2 === 0 && p === n - 1) {
    //even and closer to end of the boook
    return 1;
  } else if (n % 2 === 0 && n - p < p) {
    //even and closer to end of the boook
    return Math.floor((n - p) / 2);
  } else if (n % 2 === 0 && p < n - p) {
    // even and closer to beginning of the book
    return Math.floor(p / 2);
  }

  if (n % 2 > 0 && n - p < p) {
    //odd and closer to end of the boook
    return Math.floor((n - p) / 2);
  } else if (n % 2 > 0 && p < n - p) {
    // odd and closer to beginning of the book
    return Math.floor(p / 2);
  }
}

//hikeValleyCount

function countingValleys(n, s) {
  var arr = s.split("");
  var seaLevel = 0;
  var valleys = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "U") {
      seaLevel += 1;
    } else if (arr[i] === "D") {
      seaLevel -= 1;
    }

    if (seaLevel === -1 && arr[i + 1] === "U") {
      valleys += 1;
    }
  }
  return valleys;
}

//budget for maxPair

function getMoneySpent(keyboards, drives, b) {
  drives.sort((a, b) => a - b);
  keyboards.sort((a, b) => a - b);
  var arr = [];

  if (drives[0] + keyboards[0] > b) {
    return -1;
  }

  for (var i = 0; i < drives.length; i++) {
    for (var j = 0; j < keyboards.length; j++) {
      if (drives[i] + keyboards[j] <= b) {
        arr.push(drives[i] + keyboards[j]);
      }
    }
  }

  if (drives[0] + keyboards[0] < b) {
    return Math.max.apply(null, arr);
  }
}

//remove duplicates

scores.reduce((acc, val) => {
  if (acc !== val) {
    newArr.push(val);
    return (acc = val);
  } else {
    return (acc = acc);
  }
}, scores[0]);

function catAndMouse(x, y, z) {
  // z is my determining coordinate
  //x and y are starting points
  //i want to know Math.abs(z - x) && Math.abs(z - y)

  var distA = Math.abs(z - x);
  var distB = Math.abs(z - y);

  if (distA === distB) {
    return "Mouse C";
  } else if (distA < distB) {
    return "Cat A";
  } else if (distA > distB) {
    return "Cat B";
  }
}

//to be bettered.
function cavityMap(grid) {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (
        parseInt(grid[i][j]) < parseInt(grid[i][j + 1]) &&
        parseInt(grid[i][j + 2]) < parseInt(grid[i][j + 1])
      ) {
        let array = grid[i].split("");
        array[j + 1] = "X";
        grid[i] = array.join("");
      }
    }
  }
  return grid;
}

//bettered version for edges up, right, down and left //

// Complete the cavityMap function below.
function cavityMap(grid) {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (
        parseInt(grid[i][j]) < parseInt(grid[i][j + 1]) &&
        parseInt(grid[i][j + 2]) < parseInt(grid[i][j + 1])
      ) {
        if (grid[i + 1] !== undefined && grid[i - 1] !== undefined) {
          if (
            parseInt(grid[i + 1][j + 1]) < parseInt(grid[i][j + 1]) &&
            parseInt(grid[i - 1][j + 1]) < parseInt(grid[i][j + 1])
          ) {
            let array = grid[i].split("");
            array[j + 1] = "X";
            grid[i] = array.join("");
          }
        }
      }
    }
  }
  return grid;
}

//picking numbers test when they fixed input or solve in c ++

var arr = [];
var globalArr = [];

for (var i = 0; i < a.length; i++) {
  a.reduce((acc, val) => {
    if (acc === 0) {
      return (acc = acc);
    }
    if (Math.abs(acc - val) <= 1) {
      arr.push(val);
      return (acc = acc);
    }
    if (Math.abs(acc - val > 1) > 1) {
      return (acc = acc);
    }
  }, 0);
  globalArr.push(arr);
  arr = [];
}

// Complete the taumBday function below. 19/25pts. debug 11-12 solve 64 bit integers with external library

function taumBday(b, w, bc, wc, z) {
  var basicFormula = b * bc + w * wc;
  var formula1 = w * wc + b * (z + wc);
  var formula2 = b * bc + w * (z + bc);

  if (bc >= wc && z + wc <= bc) {
    return formula1;
  } else if (wc >= bc && z + bc <= wc) {
    return formula2;
  }
  //else if (bc === wc) { return basicFormula }
  //else if (z > bc && z > wc ) { return basicFormula}
  else {
    return basicFormula;
  }
}

//area of pdf viewer select rectangle

function designerPdfViewer(h, word) {
  // area = L * w;
  // width:

  var w = word.length;

  //L (length) :

  var arr = [];

  // map charcodes of the string to match array's index to find height

  let newWord = word.split("").map(x => {
    return [x, x.charCodeAt(0) - 97];
  });

  newWord.forEach(item => {
    let letter = item[0];
    //let letterIndex = item[1];
    let valueToPush = [item[0], h[item[1]]];
    arr.push(valueToPush);
  });

  arr.sort((a, b) => {
    return b[1] - a[1];
  });
  let L = arr[0][1];
  let area = L * w;

  return area;

  //console.log(newWord)
}

//30 poiints
function stones(n, a, b) {
  if (a < b) {
    var k0 = a * (n - 1);
    var kLast = b * (n - 1);
    var kIncrement = Math.abs(b - a);
    var arr = [];
    var count = k0;
    //console.log(...arguments, a, k0)
    //console.log('ko', k0, 'klast', kLast, 'kIncrement', kIncrement)

    for (var i = 0; i < n; i++) {
      arr.push(count);
      count = count + kIncrement;
    }
  } else if (a > b) {
    var k0 = b * (n - 1);
    var kLast = a * (n - 1);
    var kIncrement = Math.abs(b - a);
    var arr = [];
    var count = k0;
    //console.log(...arguments, a, k0)
    //console.log('ko', k0, 'klast', kLast, 'kIncrement', kIncrement)

    for (var i = 0; i < n; i++) {
      arr.push(count);
      count = count + kIncrement;
    }
  } else if (a === b) {
    var value = a * (n - 1);
    var arr = [value];
  }

  return arr;
}

// Complete the happyLadybugs function below.

function happyLadybugs(b) {
  var arr = b.split("");
  var arr1 = [];
  var arr2 = [];
  var count = 0;
  var count1 = 0;
  var countPairs = 0;
  var underscore = "_";

  // creating an array of charcodes

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "_") {
      count += 1;
    }

    // if array of underscores

    if (count === arr.length) {
      return "YES";
    }

    arr1.push(arr[i].charCodeAt(0));
  }

  // sorting and removing the underscores

  arr1.sort((a, b) => a - b);
  arr2 = arr1.filter(x => {
    return x !== 95;
  });

  for (var j = 0; j < arr2.length; j++) {
    //determining if single character?

    if (arr2[j - 1] !== arr2[j] && arr2[j + 1] !== arr2[j]) {
      count1 += 1;
    }

    // counting Pairs

    if (arr2[j] === arr2[j + 1]) {
      countPairs += 1;
    }
  }

  // incrementing for the last character if single

  if (arr2[arr2.length - 1 - 1] !== arr2[arr2.length - 1]) {
    count1 += 1;
  }

  // compiled possibilities according to counters

  if (count1 > 0) {
    return "NO";
  } else if (count === 0 && arr[0] !== arr[1]) {
    console.log(arr[0], arr[1]);
    return "NO";
  } else if (count === 0 && countPairs >= arr2.length / 2) {
    return "YES";
  } else if (count === 0) {
    console.log(countPairs);
    return "NO";
  } else {
    return "YES";
  }
}

//count permutations and maxes trough array comparison/generation

function acmTeam(topic) {
  var i = 1;
  var globalArr = [];

  topic.forEach(item => {
    //item.split('');
    //console.log(item, i)

    for (var x = i; x < topic.length; x++) {
      var arr = [];

      for (var j = 0; j < topic[x].length; j++) {
        if (parseInt(item[j]) === 1) {
          arr.push(1);
        } else if (
          topic[x] !== undefined &&
          parseInt(item[j]) === 0 &&
          parseInt(topic[x][j]) === 1
        ) {
          arr.push(1);
        } else if (topic[x] !== undefined && parseInt(topic[x][j]) === 0) {
          arr.push(0);
        }
      }
      if (arr !== undefined) {
        globalArr.push(arr);
      }
    }

    i += 1;
  });

  var newArr = globalArr
    .map(x => {
      return x.reduce((acc, val) => {
        return acc + val;
      }, 0);
    })
    .sort((a, b) => b - a);

  var countTeams = 0;

  let filtered = newArr.filter(item => {
    return item === newArr[0];
  });

  var output = [newArr[0], filtered.length];

  return output;
}