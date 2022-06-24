function visualizar(pagina){
    document.body.setAttribute('page', pagina)
    if(pagina == 'Slide'){
        listaImagens()
    }
}
const KEY_BD = '@Slide'

let listaImagens = {
    ultimoID : 0,
    imagens : []
}
function gravarBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(listaImagens));
}

function lerBD(){
    const data = localStorage.getItem(KEY_BD)
    if(data){
        listaImagens = JSON.parse(data);
    }
    desenhar();
}
function salvar(praia, praia1){
    const id = listaImagens.ultimoID + 1
    listaImagens.ultimoID = id;
    listaImagens.imagens.push({
        id, praia, praia1
    })
    gravarBD();

}