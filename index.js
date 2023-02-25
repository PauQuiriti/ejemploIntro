 const inputs = document.getElementsByTagName('input')
const button = document.getElementById('login-button')
button.addEventListener('click', (e) => {
    e.preventDefault()
    sigIn()
})

 function sigIn(){
    for(let i=0 ; i< inputs.length ; i++){
        if(inputs[i].value.length === 0) {
            swal("Failed", "Fill out all fields","error") 
        }
        if(inputs[i].value.length > 0 && inputs[i].value.length <4){
            inputs[i].classList.add('border-2')
            inputs[i].classList.add('border-rose-600')
            const p = inputs[i].parentElement.children[2]
            p.textContent='Your answer is too short'
            p.classList.add('text-center')
            p.classList.add('text-rose-600')
        }
    }
    }
    
    for(let i=0 ; i< inputs.length ; i++){
        inputs[i].addEventListener('input',(e)=>{
            console.log(e.target.value)
            if(e.target.value.length > 4 ){
                const p = inputs[i].parentElement.children[2]
                p.textContent=''
            }
        })
    }


    
    
    //  for (let type in inputValues){
    //     if(inputValues[type].length === 0){
    //         swal("Failed", "Fill out all fields","error");
    //     }
    //     if(inputValues[type].length <= 3  && inputValues[type].length > 0){
            
    //         swal("Failed", `Choose a longer value for the ${type} field`,"error");
    //     }
    //  }
    //  inputValues = {}
 