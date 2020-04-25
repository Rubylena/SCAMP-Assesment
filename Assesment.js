function fibonacciSeries(num) {
    if (num === 1) {return [0,1];} 
    else {
        let s = fibonacciSeries(num -1);
        s.push (s[s.length -1] + s[s.length - 2]);
        return s;
    }
}
console.log(fibonacciSeries(10));

document.getElementById("display").innerHTML = fibonacciSeries(10);