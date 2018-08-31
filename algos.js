




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
