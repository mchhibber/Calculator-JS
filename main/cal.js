var buttons= document.getElementsByClassName("btn");
var display= document.getElementById("display");
var op1="";
var op2="";
var opr=null;



for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var val=this.getAttribute('data-value');
        if(val=="ac")
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
        else if(val=="=")
        {
            
            display.innerText=eval(op1+opr+op2);
            op1=display.textContent;
            op2="";
            opr=null;
        }
       
        else
        {
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
    });
}