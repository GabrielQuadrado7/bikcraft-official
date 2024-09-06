console.log("javascript".includes("a")); //Método que verifica se a palavra existe nesta string ou não. Caso sim retorna TRUE

// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add("ativo");
    }
}   	

links.forEach(ativarLink);

// Ativar Items do Orçamento, tipo e produto, extraindo diretamente os parametros da URL

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

