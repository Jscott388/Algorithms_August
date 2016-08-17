// Nth-to-last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

function nfromlast() {
    var arr = [5,10,55,22,777];
    var n = 6;
    var val;

    if (arr.length > n-1){
        val = arr[arr.length-n]
    }else{
        val = null;
    }
    console.log(val);
}
nfromlast();
