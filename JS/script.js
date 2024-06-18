/*troca de cor de fundo*/
var indexButton= 1
const colorsOne = [ '#afeeee', '#5dffc9', '#78ff83', '#fcaaff'] //background

const changeBackground = () => {
    const body = document.querySelector('body')
    const btnColor = document.getElementById('btn_color')

    body.style.background = colorsOne[indexButton]
    btnColor.style.background = colorsOne[indexButton]

    if (indexButton == 3) {
        btnColor.style.color = "#000000"
        btnColor.style.border = "2px solid #000000";
        indexButton = 0
    } else {
        btnColor.style.color = "#000000"
        btnColor.style.border = "2px solid #000000";
        indexButton++
    }
}

/*Slideshow*/
function createSlideshow(images, targetId) {
    let index = 0;
    function transition() {
        document.getElementById(targetId).style.opacity = 0.2;
        setTimeout(() => {
            document.getElementById(targetId).src = images[index];
            document.getElementById(targetId).style.opacity = 1;
            index = (index + 1) % images.length;
        });
    }
    function slideshow() {
        transition();
        setTimeout(slideshow, time);
    }
    slideshow();
}

let time = 2500;
createSlideshow(["././search/img/bateria/bateria1.avif", "././search/img/bateria/bateria1.avif", "././search/img/bateria/bateria1.avif"], "slideshowImage1");
createSlideshow(["././search/img/microfone/microfone1.jpg", "././search/img/microfone/microfone2.jpg", "././search/img/microfone/microfone3.avif"], "slideshowImage2");
createSlideshow(["././search/img/violao/violao1.avif", "././search/img/violao/violao2.jpg", "././search/img/violao/violao3.avif"], "slideshowImage3");


/*login*/
function validar(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario ==="usuario" && senha==="senha"){
        window.open("quiz.html");
    }
    else{
        window.open("quiz.html"); /*Comando de alerta substituído por conta do código não reconhecer corretamente o usuário e senha, apesar das tentativas de correção eu ainda não fui capaz de resolver esse erro.
        Abaixo está o comando de alerta correto que aparece caso o usuário ou senha estejam incorretos.*/

        /*alert("Usuario ou senha inválidos.")*/
    }
}

/*contato*/
function enviar(){
    let UsuarioContato = document.getElementById("idNome").value;
    let Telefone = document.getElementById("idTelefone").value;
    let Email = document.getElementById("idEmail").value;

    alert("Contato enviado!");
}

/*quiz*/
function mostrarQuiz(){

    let pergunta1=prompt("1- Quantas cordas existem no violão?")
    let pergunta2=prompt("2- Em que país foi o maior show de rock do mundo?")
    let pergunta3=prompt("3- O violino pertence à qual família?")
    let pergunta4=prompt("4- Qual o instrumento mais popular do mundo?")
    let pergunta5=prompt("5- Qual é o outro nome dado à palheta?")

    let mostrarQuizElement = document.getElementById("mostrarQuiz");

        mostrarQuizElement.innerHTML = `<div id="div_resposta"> 
        <p id="=resposta_quiz"> Na primeira pergunta, sua resposta foi: "<b>${pergunta1}</b>" e a resposta é: <b>7!</b> <br> <br>
        
        Na segunda pergunta, sua resposta foi: "<b>${pergunta2}</b>" e a resposta é: <b>Brasil!</b> <br> <br>
        
        Na terceira pergunta, sua resposta foi: "<b>${pergunta3}</b>" e a resposta é: <b>Cordas!</b> <br> <br>
        
        Na quarta pergunta, sua resposta foi: "<b>${pergunta4}</b>" e a resposta é: <b>Violão!</b> <br><br>
        
        Na quinta pergunta, sua resposta foi: "<b>${pergunta5}</b>" e a resposta é: <b>Plectro!</b></p>
        </div>
        
<div id="tabela_pontuacao"> <p id="pontuacao" >Veja abaixo os resultados com base no seu desempenho:<br> 1 acertos: Poderia ter sido melhor...  <br> 2 acertos: Ainda pode melhorar. <br> 3 acertos: Está indo bem. <br> 4 acertos: Conhece bastante sobre música, boa!  <br> 5 acertos: Parabéns, você é o mestre da música!</p></div>.`
    }