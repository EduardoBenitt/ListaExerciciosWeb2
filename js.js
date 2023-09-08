

const filtroInput = document.getElementById('filtro');
const linhas = document.querySelectorAll('#lista tr'); //Seleciona todos as linhas '<tr>' dentro da tabela com o ID 'Lista'
const enviarButton = document.getElementById('enviar');
let linhaSelecionada = null;

filtroInput.addEventListener('input', function() {
    const filtro = filtroInput.value.toLowerCase();

    for (let i = 0; i < linhas.length; i++) {

        const nome = linhas[i].textContent.toLowerCase();

        if (nome.includes(filtro)) {

        linhas[i].style.display = 'table-row';

        } else {

        linhas[i].style.display = 'none';

        }
    }
    //loop realizado para verificar linha por linha da tabela. 
});

for (let i = 0; i < linhas.length; i++) {
    linhas[i].addEventListener('click', function() {
        // Redefinir a cor de fundo das linhas
        for (let j = 0; j < linhas.length; j++) {
            linhas[j].style.backgroundColor = '';
        }

        if(linhaSelecionada !== linhas[i]){
            linhas[i].style.backgroundColor = 'lightblue';
            linhaSelecionada = linhas[i];
            enviarButton.style.display = 'inline'; //Faz o botão de enviar aparecer

        }else{
            linhaSelecionada = null;
            enviarButton.style.display = 'none'; //Faz o botão de enviar desaparecer
        }
        
    });
}


const redacaoTextArea = document.getElementById('redacao');
const restamSpan = document.getElementById('restam');

redacaoTextArea.addEventListener('input', function() {
    const maxCaracteres = 150;
    const texto = redacaoTextArea.value;
    const caracteresDigitados = texto.length;

    if (caracteresDigitados > maxCaracteres) {
        // Limita o texto a 150 caracteres
        redacaoTextArea.value = redacaoTextArea.value.substring(0, maxCaracteres);
        
    }

    restamSpan.textContent = `${caracteresDigitados}/${maxCaracteres}`;
});

redacaoTextArea.addEventListener('blur', function() {
    const maxCaracteres = 150;
    const texto = redacaoTextArea.value;
    const caracteresDigitados = texto.length;

    if (caracteresDigitados > maxCaracteres) {
        // Limita o texto a 150 caracteres
        redacaoTextArea.value = redacaoTextArea.value.substring(0, maxCaracteres);
    }

    restamSpan.innerHTML = `${caracteresDigitados}/${maxCaracteres}`;
});


const resultadoSpan = document.getElementById('resultado');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        let soma = 0;
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                soma += parseInt(checkbox.value);
            }
        });
        resultadoSpan.textContent = soma;
    });
});