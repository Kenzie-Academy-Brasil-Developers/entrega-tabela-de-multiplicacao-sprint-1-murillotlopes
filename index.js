console.table(matriz(10))


function matriz (n){
    let mtz=[], a=0, b=[]


    for (let i=0; i<=n; i++){
       
        for (let j=0; j<=n; j++){
    
            b.push(a)
            a++
        }
        mtz.push(b)
        b=[]
    }
    return mtz
}