buttonVoltar = document.getElementById('voltar')
console.log(buttonVoltar)

buttonVoltar.addEventListener('click', function() {
    window.history.back();
})