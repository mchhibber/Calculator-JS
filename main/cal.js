
var buttons= document.getElementsByClassName("btn");
var display= document.getElementById("display");
var op1="";
var op2="";
var opr=null;
var flag=0;
document.addEventListener("keydown",keycal);

function keycal(e)
{
    var val=e.key;
    if((val>="0"&&val<="9")||(val=="%"||val=="/"||val=="*"||val=="-"||val=="+"||val=="="||val=="."||val=="Enter"||val=="Escape"))
    calculate(val);
}

function calculate( val)
{
    if(val=="ac"||val=="Escape")
    {
        display.innerText="";
        op1="";
        op2="";
        opr=null;
    }
    else if(val=="+-")
    {
        display.innerText=eval("-1 * "+op1); 
        op1=display.textContent;
    }
    else if(val=='%')
    {
        display.innerText=eval(op1+" / 100");
        op1=display.textContent;
    }
    else if(val=='/')
    {
        opr=" / ";
        display.innerText+='/';
    }
    else if(val=="*")
    {
        
        opr=" * ";
        display.innerText+="*";
    }
    else if(val=="-")
    {
        opr=" - ";
        display.innerText+="-";
    }
    else if(val=="+")
    {
        opr=" + ";
        display.innerText+="+";
    }
    else if(val=="="||val=='Enter')
    {
        var z=eval(op1+opr+op2);
        if(z=="NaN"||z==null||z==Infinity)
        {
            display.innerText="Error";
            op1="";
            op2="";
            opr=null;
        }
        else{
            display.innerText=z;
            op1=display.textContent;
            op2="";
            opr=null;
        }
        flag=1
    }
    
    else
    {
        if(flag)
        {
            display.innerText="";
            flag=0;
            if(opr==null)
                op1="";
        }
        if(opr==null)
        {
            op1+=val;
            display.innerText+=val;
        }
        else
        {
            op2+=val;
            display.innerText+=val;
        }
    }
}


for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var val=this.getAttribute('data-value');
        calculate(val);
    });
}
