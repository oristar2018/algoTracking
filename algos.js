//slice, substr is always from to even minus - substr reverses order is end > start
// Complete the flatlandSpaceStations function below.

function superReducedString(s) {
  let s1 = s.split("");
  var count = 0;

  for (var j = 0; j < s1.length*s1.length; j++) {
    for (var i = 0; i < s1.length; i++) {
      if (s1[i] === s1[i + 1]) {
        s1.splice(i, 2);
        i -= 1;
      }

      if (i === s1.length - 1) {
        count++;
      }
    }
  }

  if (s1.length < 2) {
    return "Empty String";
  } else {
    return s1.join("");
  }
}

function flatlandSpaceStations(n, c) {
  var arr1 = [];
  if (n === c.length) {
    return 0;
  }

  c.unshift(0);
  c.push(n - 1);
  let s = new Set(c);
  let arr = Array.from(s).sort((a, b) => a - b);
  //console.log(arr)

  arr.reduce((acc, val, currentIndex) => {
    if (currentIndex === 0) {
      return (acc = val);
    } else {
      arr1.push(Math.abs(acc - val));
      return (acc = val);
    }
  }, 0);
  console.log(arr, arr1);
  //arr1.sort((a,b) => a - b);
  let max = Math.max.apply(null, arr1);
  let edg1 = arr1[0];
  let edg2 = arr1[arr1.length - 1];
  console.log(max);
  if (max === 4) {
    return 2;
  } else if (max / 2 < edg1 && edg1 > edg2) {
    return edg1;
  } else if (max / 2 < edg2 && edg2 > edg1) {
    return edg2;
  } else if (max === edg2) {
    return max;
  } else if (max === edg1) {
    return max;
  } else {
    return Math.floor(max / 2);
  }
  return max;
}

function workbook(n, k, arr) {
  var currentPage = 1;
  var count = 0;
  var m = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j <= arr[i]; j++) {
      if (j === 1 && currentPage === 0) {
        count++;
      } else if (j === currentPage && currentPage !== 0) {
        count++;
        console.log(j);
      }

      if (j === arr[i] && j <= k) {
        currentPage++;
        console.log("currentInf", currentPage);
      } else if (j === arr[i] && j > (m - 1) * k && j < m * k) {
        currentPage++;
        console.log("currentArri", currentPage);
      } else if (j === m * k) {
        currentPage++;
        m++;
        console.log("currentMulti", currentPage);
      }

      if (j === arr[i]) {
        m = 1;
      }
    }
  }

  return count;
}

function findDigits(n) {
  var count = 0;

  var N = n.toString().split("");

  N.forEach(item => (n % item === 0 ? count++ : console.log("no")));

  return count;
}
//matrix rotation

function matrixRotation(matrix, r) {
  //console.log(matrix, r)
  var m = matrix.length;
  var n = matrix[0].length;
  var formula = 2 * m + 2 * n;

  if (r > formula) {
    r = r % (formula2 - 3);
  }

  for (var g = 0; g < r; g++) {
    var v = 0;
    var x = 1;

    for (var c = matrix.length; c > 2; c -= 2) {
      var topLeft = matrix[v][v];
      var topRight = matrix[v][n - x];

      var bottomLeft = matrix[m - x][v];
      var bottomRight = matrix[m - x][n - x];

      var arrSave = [];

      // here you must push the value to be spliced somewhere
      arrSave.push(matrix[v][v]);
      matrix[v].splice(v, 1);

      matrix[v].splice(n - x, 1, matrix[v + 1][n - x]);

      // here you must push the value to be spliced somewhere
      //console.log(matrix[m-x])

      arrSave.push(matrix[m - x][n - x]);
      matrix[m - x].pop();
      matrix[m - x].unshift(matrix[m - (x + 1)][v]);
      //console.log(matrix)
      for (var i = v + 1; i < m - x; i++) {
        if (i === v + 1) {
          matrix[i + 1][0] = matrix[i][0];
          matrix[i][0] = arrSave[0];
          matrix[i][n - x] = matrix[i + 1][n - x];
        } else if (i === m - x - 1) {
          matrix[i][n - x] = arrSave[1];
        } else {
          matrix[i][0] = matrix[i - 1][0];
          matrix[i][n - x] = matrix[i + 1][n - x];
        }
      }

      v += 1;
      x += 1;
    }

    if (c === 2) {
      let tempArr = [
        matrix[v][v],
        matrix[m - x][v],
        matrix[m - x][n - x],
        matrix[v][n - x]
      ];

      matrix[v][v] = tempArr[3];
      matrix[m - x][v] = tempArr[0];
      matrix[m - x][n - x] = tempArr[1];
      matrix[v][n - x] = tempArr[2];

      //console.log(tempArr)
    }
  }

  //console.log(matrix)
  for (var h = 0; h < matrix.length; h++) {
    console.log(
      matrix[h]
        .join(",")
        .split(",")
        .join(" ")
    );
  }

  // console.log(/*matrix[v], matrix[m - x],*/ matrix)
}
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