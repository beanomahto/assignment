const fs=require('fs')

fs.readFile('./animal.txt',function(err,data){
    if(err) throw err;
    let str=data.toString();
    str=str.replace(/\r\n|\r/g, '\n');
    let arr=str.split('\n');

    let mp=new Map();
    for(let it of arr){
        if(it){
            mp.set(it,(mp.get(it)||0)+1);
        }
    }

    for (const [a, b] of mp) {
        data=`${a}->${b}\n`;
        fs.appendFile('./freq.txt',data,function(err){
            if(err) throw err;
        })
    }
})