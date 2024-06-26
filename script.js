


// let btn=document.querySelectorAll("button");
// btn.addEventListener("click",(e)=>{
//     console.dir(e.target());
// })


// let btns = document.querySelectorAll("button");
// btns.forEach((btn) => {
    //     btn.addEventListener("click", (e) => {
        //         console.dir((e.target).innertext);
        //     });
        // });
        
        
        
        let str="";
        
   let out=document.querySelector(".output");
let inp=document.querySelector(".input");
let btns = document.querySelectorAll("button");
let p_btn="";
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let c_btn=e.target;
        inp.innerText=c_btn.className;
          
         if(str==="" && c_btn.className==="op")
            {
                inp.innerText="Error";
                
            }
            else{

                if( p_btn.className==="op" && c_btn.className==="op")
                    {   
                         str = str.slice(0, -1) + c_btn.innerText;
                        inp.innerText = str;
                    }
                    else
                    {

                        if(c_btn.innerText!="C")
                            {
                                if(c_btn.innerText==="=")
                                    { 
                                        inp.innerText=str+"=";
                                        out.innerText=eval(str);
                                    }
                                    else
                                    {
                                        str+=c_btn.innerText;       
                                        inp.innerText=str;
                                    }
                            

                            }
                            else
                            {
                                str="";
                                inp.innerText=""; 
                                out.innerText="";
                            }
                    }
            }
      p_btn=c_btn;
        
    
    });
});

