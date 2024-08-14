const validaTelefone = (event) => {
    let input = event.target;
    input.value = mascaraTelefone(input.value);
}
  
const mascaraTelefone = (valor) => {
    if (!valor) {
        return '';
    }

    valor = valor.replace(/\D/g,'');
    valor = valor.replace(/(\d{2})(\d)/,"($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");

    return valor;
}