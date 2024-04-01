(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  taxSwitch.addEventListener("click", ()=>{
      let beforeTax = document.getElementsByClassName("before-tax");
      let afterTax = document.getElementsByClassName("after-tax");

      for(tax of beforeTax){
          if(tax.style.display != "none"){
              tax.style.display = "none";
          }else{
              tax.style.display = "inline";
          }
      }

      for(tax of afterTax){
          if(tax.style.display != "inline"){
              tax.style.display = "inline";
          }else{
              tax.style.display = "none";
          }
      }
  });