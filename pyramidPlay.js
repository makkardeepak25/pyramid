function pyramid(input){
    for(var i=1; i<input;i++){
        var pyra="";
        for(var j=1;j<=input-i;j++){
            pyra=pyra+".";
        }
        for(var k=1;k<=i-1;k++){
            pyra=pyra+"o.";
        }
        console.log(pyra);
    }
}
pyramid(6);


function pyram(input){
    for(var i=1; i<input;i++){
        var pyra="";
        for(var j=1;j<i;j++){
            pyra=pyra+".";
        }
        for(var k=i-1;k<=(2*i-1);k++){
            pyra=pyra+"o.";
        }
        console.log(pyra);
    }
}
pyram(6);

function rhombus(input){
    for(var i=1; i<input;i++){
        var pyra="";
        for(var j=1;j<input-1;j++){
            pyra=pyra+".";
        }
        var k =0;
        while(k != (2*i-1)){
            console.log("o.")
        }       
        console.log(pyra);
    }
}
rhombus(6);



