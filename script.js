
        let expression="";
        
   let output=document.querySelector(".output");
let input=document.querySelector(".input");
let btns = document.querySelectorAll("button");
let pre_btn="";
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
         let current_btn=e.target;  
         if(expression==="" && current_btn.className==="operator")
            {
                input.innerText="Error";git
                return;
            }

            if( pre_btn.className==="operator" && current_btn.className==="operator")
                {   
                     expression = expression.slice(0, -1) + current_btn.innerText;
                    input.innerText = expression;
                    return;      
                }

                if(current_btn.id==="clear")
                    {
                        expression="";
                        input.innerText=""; 
                        output.innerText="";
                        return;
                    }     
                    if(current_btn.id==="equal" && pre_btn.className==="operator")
                        { 
                            
                            return;
                        }

                    if(current_btn.id==="equal")
                        { 
                            input.innerText=expression+"=";
                            output.innerText=eval(expression);
                            return;
                        }
                               
                                        expression+=current_btn.innerText;       
                                        input.innerText=expression;
                                        pre_btn=current_btn;
    });
});

