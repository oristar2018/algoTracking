




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