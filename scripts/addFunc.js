function addFunc(func,argvnum){
    var input=document.getElementById("input");
    var pos=getCursortPosition(input);
    input.value=input.value.slice(0,pos)+func+input.value.slice(pos,input.value.length);
    pos = argvnum==1? pos+func.length-1 : pos+func.length-2;
	setCaretPosition(input, pos);

    // if(func==="!()"){
    //     input.placeholder="x! → !()";
    // }
}