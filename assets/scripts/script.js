let words = document.querySelector(".write")

//Efeito de Máquina de Escrever
function writer(words){

    //Pegando cada letra do meu headline
    let wordsArray = words.innerHTML.split('')

    //Zerando meu headline
    words.innerHTML = "" 

    //Passando por cada letra do meu array
    wordsArray.forEach((letter, i) => {
        
        //Exibindo cada letra do meu headline
        setTimeout(() => {words.innerHTML += letter}, 105 * i)

        //Executando novamente o meu efeito
        setInterval(() => writer(words), 15000)

    });

}

//Pegando todos os links que possuem href para um id
let links = document.querySelectorAll('a[href^="#"]')

//Função para pegar a distância do meu elemento ao topo da página
function getDistance(element){

    let id = element.getAttribute('href')
    return document.querySelector(id).offsetTop;

}

//Função para descer a página conforme a distancia
function scrolling(distance){
    window.scroll({
        top: distance,
        behavior: 'smooth'
    })
}

//Função para executar meu scroll suave e cancelar a execução natural do meu link
function smoothScroll(e){

    e.preventDefault()
    let distance = getDistance(e.target)
    scrolling(distance)

}

//Adicionando o evento de clique e a função para cada link
links.forEach((link) => {
    link.addEventListener('click', smoothScroll)
})

//Executando a função de escrita
writer(words)

