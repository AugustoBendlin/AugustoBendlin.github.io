var modal = document.getElementById("modal-ultra-voice");
var btnVerMais = document.getElementById("ver-mais-ultra-voice");
var span = document.getElementsByClassName("modal-fechar")[0];

btnVerMais.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}