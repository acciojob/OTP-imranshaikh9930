. const inputs = document.querySelectorAll('.code');


   for(let i = 0 ; i< inputs.length;i++){

    const currentInput = inputs[i];

    // Next input focus
    currentInput.addEventListener("input",function(){
    
      if(this.value.length === 1 && i < inputs.length-1){

          inputs[i+1].focus();
      }
    })

    // Previous Focus

    currentInput.addEventListener("keydown",function(e){

      if(e.key === 'Backspace' && i > 0 && this.value.length === 0){

        inputs[i-1].focus();
      }
    })


   }