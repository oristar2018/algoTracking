




//pairing socks

function sockMerchant(n, ar) {
 ar.sort((a, b) => a - b );
var count = 0;
    
 for ( var i = 0; i < ar.length; i++ ) {
    if (ar[i] === ar[i + 1]) { count += 1; i += 1 }
     if (ar[i] !== ar[i + 1 ]) { i = i }
 }
    
    return count
 
}

// pageTurn from start or end 

function pageCount(n, p) {
  
// formula = Math.floor(p / 2) or Math.floor( (n - p ) / 2)
    
 if (p === 1) { return 0}   
if ( p === n / 2 ) { return Math.floor( p / 2 )}
    
if (n % 2 === 0 && p === n - 1) { //even and closer to end of the boook
      return 1
  }
    
else if (n % 2 === 0 && (n - p) < p) { //even and closer to end of the boook
      return Math.floor((n - p) / 2)
  }
else if (n % 2 === 0 && p < (n - p)) { // even and closer to beginning of the book
  return Math.floor( (p / 2))
  }


 if (n % 2 > 0 && (n - p) < p) { //odd and closer to end of the boook
      return Math.floor((n - p) / 2) 
  }
 else if (n % 2 > 0 && p < (n - p)) { // odd and closer to beginning of the book
  return Math.floor( (p / 2))
  }
}

//hikeValleyCount

function countingValleys(n, s) {

var arr = s.split('');
var seaLevel = 0;
var valleys = 0;
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === "U") {
            seaLevel += 1;           
        }
        
    else if (arr[i] === "D") { 
            seaLevel -= 1
     }
        
        if (seaLevel === - 1 && arr[i + 1] === "U") {
            valleys += 1
        }
        
        

}
    return valleys 
}

//budget for maxPair

function getMoneySpent(keyboards, drives, b) {
    
    drives.sort( (a, b) => a - b);
    keyboards.sort( (a, b) => a - b);
    var arr = [];
    
    if (drives[0] + keyboards[0] > b) { return - 1}

    for (var i = 0; i < drives.length; i++) {
        for (var j = 0; j < keyboards.length; j++) {
            
            if (drives[i] + keyboards[j] <= b) { arr.push((drives[i] + keyboards[j]))}
        }
        
    }
    
    if (drives[0] + keyboards[0] < b) {
        return Math.max.apply(null, arr)
    }

}


//remove duplicates

    scores.reduce( (acc, val) => {
      if (acc !== val) { newArr.push(val); return acc = val}
    else {return acc = acc}
    }, scores[0]);


function catAndMouse(x, y, z) {
    // z is my determining coordinate
    //x and y are starting points
    //i want to know Math.abs(z - x) && Math.abs(z - y)
    
    var distA = Math.abs(z - x);
    var distB = Math.abs(z - y);
    
    if (distA === distB) { return 'Mouse C'}
else if (distA < distB) { return 'Cat A'}
else if (distA > distB) { return 'Cat B'}

}

//to be bettered.
function cavityMap(grid) {

    for (var i = 0; i < grid.length; i++) {
        
        for (var j = 0; j < grid[i].length; j++) {
        
            if (
                (parseInt(grid[i][j]) < parseInt(grid[i][j + 1]))
                
                &&
                
                (parseInt(grid[i][j + 2]) < parseInt(grid[i][j + 1]))
            
            ) { 
            
               let array = grid[i].split('');
               array[j + 1] = "X";
               grid[i] = array.join('')
              
            
            }
           
        
        }
    }
    return grid
}

//bettered version for edges up, right, down and left //

// Complete the cavityMap function below.
function cavityMap(grid) {

    for (var i = 0; i < grid.length; i++) {
        
        for (var j = 0; j < grid[i].length; j++) {
            
            if (
                (parseInt(grid[i][j]) < parseInt(grid[i][j + 1]))
                
                &&
                
                (parseInt(grid[i][j + 2]) < parseInt(grid[i][j + 1]))
                
            
            ) { 
                
               if (grid[i+1] !== undefined && grid[i-1] !== undefined) {
                   
                   if (parseInt(grid[i+1][j+1]) < parseInt(grid[i][j+1]) && 
                      parseInt(grid[i-1][j+1]) < parseInt(grid[i][j+1])) {
                           let array = grid[i].split('');
               array[j + 1] = "X";
               grid[i] = array.join('')
                   }
               }
            
           
              
            
            }
           
        
        }
    }
    return grid
}


//picking numbers test when they fixed input or solve in c ++  

var arr = [];
   var globalArr = [];
    
    for (var i = 0; i < a.length; i++) {
    
     a.reduce( (acc, val) => {
        if (acc === 0 ) { return acc = acc}
        if (Math.abs(acc - val) <= 1) { arr.push(val); return acc = acc}
        if (Math.abs(acc - val > 1) > 1) {return acc = acc}
    }, 0);
    globalArr.push(arr);    
    arr = [];
        
    
        
        
    }
    
    // Complete the taumBday function below. 19/25pts. debug 11-12 solve 64 bit integers with external library

function taumBday(b, w, bc, wc, z) {
var basicFormula = (b * bc) + (w * wc);
var formula1 = (w * wc) + (b * (z + wc));
var formula2 = (b * bc) + (w * (z + bc));
    
if (bc >= wc && (z + wc) <= bc) {  return formula1 }
else if (wc >= bc && (z + bc) <= wc) { return formula2 }
//else if (bc === wc) { return basicFormula }
//else if (z > bc && z > wc ) { return basicFormula}
else { return basicFormula}



}


//area of pdf viewer select rectangle

function designerPdfViewer(h, word) {
    // area = L * w;
    // width:

    var w = word.length;
    
    //L (length) : 
    
    var arr = [];
    
    // map charcodes of the string to match array's index to find height
    
    let newWord = word.split('').map( (x) => {
        return [x, (x.charCodeAt(0) - 97)]
    });
    
    newWord.forEach( (item) => {
        let letter = item[0];
        //let letterIndex = item[1];
        let valueToPush = [item[0], h[item[1]]];
        arr.push(valueToPush)
        
    });
    
    arr.sort( (a, b) => { return b[1] - a[1]});
    let L = arr[0][1];
    let area = L * w;
    
    return area
    
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
        
    }}
    
    else if (a > b) {
        
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
        
        
        
        
    }
    
    else if (a === b) {
        var value = a * (n - 1);
        var arr = [value];
    
       
        
        
        
        
    }

  return arr
    
}

// Complete the happyLadybugs function below.

function happyLadybugs(b) {
    
    var arr = b.split('');
    var arr1 = [];
    var arr2 = [];
    var count = 0;
    var count1 = 0;
    var countPairs = 0;
    var underscore = "_";
 
    // creating an array of charcodes 
    
    for (var i = 0; i < arr.length; i++) {
        
        if ( arr[i] === "_" ) { count += 1 }

        // if array of underscores 

        if (count === arr.length) { return "YES"}
        
        arr1.push(arr[i].charCodeAt(0));
        
        
        
        
        
        
    }
    
    // sorting and removing the underscores
   
    
   arr1.sort( (a, b) => a - b);
   arr2 = arr1.filter( (x) => { return x !== 95})
  
    
  for (var j = 0; j < arr2.length; j++) {
      
        //determining if single character? 

      if ( (arr2[j - 1] !== arr2[j]) && (arr2[j + 1] !== arr2[j]) ) {
          
          count1 += 1;
          
          
      }
      
      // counting Pairs 

      if ( arr2[j] === arr2[j + 1]) {
          
          countPairs += 1;
          
          
      }
      
      
      
      
  }

  // incrementing for the last character if single
   
   if (arr2[(arr2.length - 1) - 1] !== arr2[arr2.length - 1] ) { count1 += 1 }
    
    // compiled possibilities according to counters

   if (count1 > 0) { return "NO" }
else if ( count === 0 && (arr[0] !== arr[1])) { console.log(arr[0], arr[1]); return "NO"}
else if (count === 0 && (countPairs >= arr2.length / 2)) { return "YES"}
else if (count === 0) { console.log(countPairs); return "NO"}
   else { return "YES" }
    
  
}

