
function frequency(arr){
    dict={};
    arr.forEach(item => {
        if(!dict[item])
        dict[item]=0;
        dict[item]++;
    });
    
    minCount=Math.min(...Object.values(dict));
    maxCount=Math.max(...Object.values(dict));
    minFreq=Object.keys(dict)[Object.values(dict).indexOf(minCount)];
    mostFreq=Object.keys(dict)[Object.values(dict).indexOf(maxCount)];

    console.log(mostFreq,minFreq);
    return [mostFreq,minFreq];
}
