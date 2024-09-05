const links = document.querySelectorAll('.header-menu a');

console.log("javascript".includes("a")); //Método que verifica se a palavra existe nesta string ou não. Caso sim retorna TRUE

function ativarLink(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add("ativo");
    }
}   	

links.forEach(ativarLink);