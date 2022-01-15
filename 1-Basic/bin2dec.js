const bin = "10010000"

function toBin(){ 
    if(bin.length<=8){
        if(!isNaN(bin)){
            let falso;
            for(let a=0; a<bin.length; a++){
                const char = bin.charAt(a)
                char<2 ? null : falso=true 
            }
            return falso!=true ? console.log( {Bin:bin, Dec: parseInt(bin,2)}): null
        }
    }
}
toBin()