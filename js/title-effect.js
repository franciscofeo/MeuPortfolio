
function typeWriter(element){
    const textArray = element.innerText.split("")
    element.innerText = ""; // limpar o texto
    textArray.forEach((letra,i) => {
        setTimeout(function(){
            element.innerText += letra;
        }, 90*i) // vai adicionar uma letra a cada 90ms
    });                
}       

const titulo = document.querySelector('h4');
typeWriter(titulo);
