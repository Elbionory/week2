const input = document.querySelector("input")
const btn = document.querySelector("button")
const span = document.querySelector("#span");
btn.addEventListener("click", () => {
    if (input.value == '' || !(input.validity.valid)) {
        input.classList.add('border-LightRed');
        input.classList.add('text-LighRed');
        span.classList.remove('hidden')
        
    } else {
    
        input.classList.remove('border-LightRed');
        input.classList.remove('text-LighRed');
        span.classList.add('hidden')
    }
})