var arr = [-5, 8, 15, 20, 45];

// Print 1 - 255
function oneto255() {
    for (var idx = 1; idx <= 255; idx++) {
        console.log('Print 1 to 255:', idx);
    }

}
oneto255();

// Print all odd integers from 1 to 255.
function printodds() {
    var num = 1;
    while (num <= 255) {
        console.log('Odd Numbers:', num);
        num = num + 2;
    }

}
printodds();

// Print integers from 0 to 255, and with each integer print the sum so far.
function intSum() {
    var sum = 0;
    for (var num = 0; num <= 255; num++) {
        sum += num;
        console.log('Number:', num, 'Sum =', sum);
    }
}
intSum();

// Iterate through a given array, printing each value.
function iteArr() {
    for (var i = 0; i < arr.length; i++) {
        console.log('Array Value:', arr[i]);
    }

}
iteArr();

// Given an array, find and print its largest element.
function findMax() {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('Max:', max);
}
findMax();

// Get and Print Average
function GetAvg() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log('Average:', sum / arr.length);
}
GetAvg();

// Array with Odds
function arrOdds() {
    var odds = [];
    for (var i = 1; i <= 255; i++)
        if (i % 2 !== 0) {
            odds.push(i);
        }
    console.log('Array Odds:', odds);
}
arrOdds();

// Square each value in a given array, returning that same array with changed values.
function squArr() {
    var squ = [];
    for (var i = 0; i < arr.length; i++) {
        squ.push(arr[i] * arr[i]);
    }
    console.log('Array Squared:', squ);
}
squArr();

// Given an array and a value Y, count and print the number of array values greater than Y.
function grtY() {
    var arrVal = [-4, 22, 31, 55, 60]
    var Y = 32;
    var cnt = 0;
    for (var i = 0; i < arrVal.length; i++) {
        if (arrVal[i] > Y) {
            cnt += 1;
        }
    }
    console.log('Values Greater than Y:', cnt)
}
grtY();

// Return the given array after setting any negative values to zero.
function zeroOut() {
    var zarray = [-5,-25,20,-55];
    for (var i = 0; i < zarray.length; i++) {
        if (zarray[i] < 0) {
            zarray[i] = 0;
        }
    }
    console.log('Zeroed Out:', zarray)
}
zeroOut();

// Given an array, print the max, min and average values for that array.
function findMinMaxAvg(){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    console.log('Max:', max, 'Min:', min, 'Avg:', avg)
}
findMinMaxAvg();

// Given an array, move all values forward by one index, dropping the first and leaving a 0 value at the end.
function ShiftArrayValues(){
    var myarray = [5,10,25,88,100];
    for (var i = 1; i < myarray.length; i++){
        myarray[i-1] = myarray[i]
    }
    myarray[myarray.length-1]=0;
    console.log('Shift Array:', myarray);
}
ShiftArrayValues();
// Swap String For Array Negative Values

function SwapString(){
    var swaparray = [-5,-4,-2,5,20];
    for (var i = 0; i < swaparray.length; i++){
        if(swaparray[i] < 0){
            swaparray[i] = 'Dojo';
        }
    }
    console.log('Swap String:', swaparray)
}
SwapString();

//Push front
function pushNew(){
    var pusharr = [8,89,300,600];
    var val = 3;
    // run from 4 to 0
    for(var i = pusharr.length; i > 0; i --){
        // copies array values over until 0.
        pusharr[i] = pusharr[i-1];
    }
    //sets the array[0] to val which was same as array[1]
    pusharr[0] = val;
    console.log('Push:', pusharr)
}
pushNew();

// Pop front array
function popFront(){
                //0, 1 ,2 , 3
    var poparr = [22,45,66,99];

    for(var i = 0; i <poparr.length;i++){
        poparr[i] = poparr[i+1];
    }
    poparr.length = poparr.length - 1;
    console.log('Pop:', poparr)
}
popFront();

//Insert At
// Given array, index, and one additional value, insert the value into array at given index.
function insertAt(){
    var myarr = [5,10,25,88,100];
    var idx = 2;
    var val = 55;

    for (var i = myarr.length; i > idx; i --){
        myarr[i] = myarr[i-1];
    }
    myarr[idx] = val;
    console.log(myarr)
}
insertAt();

// Remove At
// Given array and an index in the array, remove and return the array value for that index. Do this without using built-in array methods except pop(). Think of PopFront(arr) as equivalent to RemoveAt(arr,0).
function removeAt(){
    var arr = [5,30,55,60,84]
    var idx = 2;
    var val = arr[idx];

    for(var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    console.log(arr, val)
}
removeAt();

// Swap Array Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change final element. For [1,2,3,4], return [2,1,4,3]. For [false,true,42], return [true,false,42].
function SwapPair(){
    var arr = [2,5,8,9,22,55,88,399,450];
    var a = 0;
    var b = 0;

    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !==0 ){
            a = arr[i];
            b = arr[i-1];
            arr[i] = b;
            arr[i-1] = a;
        }
    }
    console.log(arr)
}
SwapPair();

// Array Remove Duplicates

// Reverse array

// Remove Negative
function removeNegative() {
    var arr = [-5,-20,-55,-90,-40,-700];
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            console.log('Count before assignment: ' + count);
            arr[count++] = arr[i];
            console.log('Count after assignment: ' + count);
            console.log('arr is currently: ' + arr);
        }
    }
    arr.length = count;
    return arr;
}
console.log(removeNegative());

function ReverseArr(){
    var arr = [1,2,3,4,5,6];
    // var len = arr.length-1;

    for(var i = 0; i < Math.floor(arr.length/2); i++ ){
            var temp = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
            // len--;

    }
    console.log(arr);
}
ReverseArr();

// Second-to-last
// Return the second-to-last element of an array. Given [42,true,4,"Liam",7], return "Liam". If array is too short, return null.
function secontolast() {
    var arr = [5,10,55];
    var val;

    if (arr.length > 1){
        val = arr[arr.length-2]
    }else{
        val = null;
    }
    console.log(val);
}
secontolast();

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
