const $ = document.querySelector.bind(document);

var nome = $('#nome');

nome.addEventListener('blur', () => {
    event.preventDefault();
    console.log(nome.value);
})