let numero
let operacion=[]
let numero2
let separa=[]
let prueba
let count
let hola
let papu=[]
let element
const numeros=document.querySelectorAll(".number");
const pantalla=document.querySelector(".pantalla");
const deletes=document.querySelector(".delete");
const igual=document.querySelector(".igual");
const sumar1=document.querySelector(".mas");
const resta=document.querySelector(".menos")
const por=document.querySelector(".por")
const dividir=document.querySelector(".dividir");
const puntos=document.querySelector(".punt");
const delete2=document.querySelector(".delete1");
// agregar numeros pantalla

const agregar=()=>{
    numeros.forEach((num)=>{
        num.addEventListener("click",()=>{
          
            pantalla.value+=num.textContent
        })
        
    })
}
addEventListener("keydown",(e)=>{
   
    if(e.key=="Backspace"){
        delete1();
    }
    if(!isNaN(e.key)){
        pantalla.value+=e.key
    }
   
})
 asignacion=()=>{

        console.log(operacion)
        prueba=pantalla.value.split(/[-+/X]/g);
        console.log(prueba)
      
        for (let i = 0; i < operacion.length; i++) {
        if(operacion[i]=="*"){
         
            if(prueba[1]==""){
                element = Number(prueba[0])*Number(prueba[0]);
            }else{
                element = Number(prueba[0])*Number(prueba[1]);
            }
        }else if(operacion[i]=="/"){
            if(prueba[1]!="0"  ){
                if(prueba[1]==""){
                    element = Number(prueba[0])/Number(prueba[0]);
                }
                else{
                    element = Number(prueba[0])/Number(prueba[1]);
                }
            }else{
                alert("bob")
                return pantalla.value=""
            }
            }
           
        else if(operacion[i]=="+"){
                element = Number(prueba[0])+Number(prueba[1]);
            }
        else if(operacion[i]=="-"){
                element = Number(prueba[0])-Number(prueba[1]);
        
            }
           
        }
        prueba=[]
        pantalla.value=element;
        element=0
        operacion=[]
    
            }
          
  


   

const delete1=()=>{
    deletes.addEventListener("click",()=>{
        operacion=[];
        prueba=[]
        pantalla.value=""
        puntos.removeAttribute("disabled")
    })
    operacion=[];
    prueba=[]
    pantalla.value=""
    puntos.removeAttribute("disabled")
}
sumar1.addEventListener("click",()=>{
   
    // numero=Number(separa.join(""));
    // separa=[]

    if(operacion.length>=1){
        asignacion();
        pantalla.value+=sumar1.textContent;
        operacion.push("+") 
    }else{
        operacion.push("+")
        pantalla.value+=sumar1.textContent;
    }
});
resta.addEventListener("click",()=>{
 
 
    if(operacion.length>=1){
        asignacion();
        pantalla.value+=resta.textContent;
        operacion.push("-") 
    }else{
        operacion.push("-")
        pantalla.value+=resta.textContent;
    }
});
por.addEventListener("click",()=>{
   
    if(operacion.length>=1){
        asignacion();
        pantalla.value+=por.textContent;
        operacion.push("*") 
    }else{
        operacion.push("*")
        pantalla.value+=por.textContent;
    }
});
dividir.addEventListener("click",()=>{
  
    if(operacion.length>=1){
        asignacion();
        pantalla.value+=dividir.textContent;
        operacion.push("/")
  
    }else{
        operacion.push("/")
        pantalla.value+=dividir.textContent;
    }
});
puntos.addEventListener("click",()=>{
    pantalla.value+=puntos.textContent;
    puntos.setAttribute("disabled",true)
})
delete2.addEventListener("click",()=>{
    papu=[]
    console.log(papu)
    for (let i = 0; i < pantalla.value.length; i++) {
        papu.push(pantalla.value[i]);
        
    }

    let borrado=papu.pop()
    if(borrado=="+"){
        operacion.pop();
    }else if(borrado=="X"){
        operacion.pop();
    }else if(borrado=="/"){
        operacion.pop();
    }else if(borrado=="-"){
        operacion.pop();
    }
    let hos=papu.join("");
    console.log(hos)
    pantalla.value=hos
})
delete1()
agregar()


igual.addEventListener("click",asignacion)


