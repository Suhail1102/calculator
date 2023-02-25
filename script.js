// console.log("wecoome to js")


// let string= '';

// let buttons= document.querySelectorAll('.button');

// Array.from(buttons).forEach((button)=>{
   
//     button.addEventListener('click',(e)=>{

//         if(e.target.innerHTML== "="){
//             string= eval(string);
//             document.querySelector('input').value = string;
//         }
//        else if(e.target.innerHTML== "C"){
//             string= " ";
//             document.querySelector('input').value = string;
//         }

//         else{

//         string= string + e.target.innerHTML;

//             document.querySelector('input').value = string;
//         }
//     })

// })

let string= "";

let buttons=document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
   
    button.addEventListener('click', (e)=>{
        if(e.target.innerText== "="){
       
            string= eval(string);
            
    document.querySelector('.input').value= string;
        
        }

        else if
            (e.target.innerText== "C"){
       
                string= "";
                
        document.querySelector('.input').value= string;
        }

        else if
            (e.target.innerText== "X"){
       
                string= string.slice(0 , -1);
                
        document.querySelector('.input').value= string;
        }
        
        else{
          
        string= string + e.target.innerText;

    document.querySelector('.input').value= string;
        }
    })
})
