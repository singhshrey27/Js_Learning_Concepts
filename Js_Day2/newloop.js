//for of loop and for in loop


const names=["youtube","facebook","insta","netflix"];

//For of loop
for(const n of names){
    console.log(n);
}

const symbols={
    yt: "youtube",
    ig: "insta",
    fb: "facebook",
};

//for In loop
for (const n in symbols){
    console.log(`Key is: ${n} and value is ${symbols[n]}`);
 // console.log(symbols[n]);
}
