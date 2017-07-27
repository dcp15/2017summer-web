function mode(){
    var input=document.getElementById("input");
    var status=document.getElementById("status");
    input.value="";
    input.placeholder="1:scientific  2:kinship  3:currency";
    status.innerText="mode selection";
}

function calculate(){
    var input=document.getElementById("input");
    var status=document.getElementById("status");
    var trigFuncDiv=document.getElementById("trig-func");
    var relDiv=document.getElementById("relation");
    
    input.placeholder="";

    if(status.innerText==="mode selection"){
        if(input.value==="1"){
            input.value="";
            trigFuncDiv.style.display="inline-block";
            relDiv.style.display="none";
            status.innerText="Rad, scientific";

        } else if(input.value==="2"){
            input.value="";
            trigFuncDiv.style.display="none";
            relDiv.style.display="inline-block";
            status.innerText="kinship";

        } else if(input.value==="3"){
            input.value="";
            trigFuncDiv.style.display="inline-block";
            relDiv.style.display="none";
            status.innerText="currency exchange";

        } else if(input.value===""){
            input.placeholder="1:scientific  2:kinship  3:currency";
        } else {
            input.value="illegal value";
        }
    } else if(status.innerText==="Rad, scientific"){
        //
    } else if(status.innerText==="kinship"){
        //
    } else if(status.innerText==="currency exchange"){
        //
    }
}