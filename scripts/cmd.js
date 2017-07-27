function Delete(){
    var input=document.getElementById("input");
    var pos=getCursortPosition(input);
	input.value=input.value.slice(0,pos-1)+input.value.slice(pos,input.value.length);
	pos=pos-1;
	setCaretPosition(input, pos);
}

function Clear(){
    var input=document.getElementById("input");
    input.value="";
	setCaretPosition(input, 0);
}

function cur2left(){
    var input=document.getElementById("input");
    var pos=getCursortPosition(input);
    var newpos=pos>0?pos-1:0;
    setCaretPosition(input, newpos);
}

function cur2right(){
    var input=document.getElementById("input");
    var pos=getCursortPosition(input);
    setCaretPosition(input, pos+1);
}