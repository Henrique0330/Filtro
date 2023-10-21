document.addEventListener('DOMContentLoaded', function () {
    const inputNome = document.getElementById('inputNome');
    const listaNomes = document.getElementById('listaNomes');

    inputNome.addEventListener('input', function () {
        const nomeDigitado = inputNome.value.toLowerCase();
        const nomes = listaNomes.getElementsByTagName('li');

        for (let i = 0; i < nomes.length; i++) {
            const nome = nomes[i].textContent.toLowerCase();

            if (nome.includes(nomeDigitado)) {
                nomes[i].innerHTML = nome.replace(nomeDigitado, '<b>' + nomeDigitado + '</b>');
            } else {
                nomes[i].innerHTML = nome;
            }
        }
    });
});