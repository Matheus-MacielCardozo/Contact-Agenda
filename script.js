let lista = localStorage.getItem("minhaLista")
const formulario = document.querySelector("form")
const ulPessoas = document.querySelector("ul")

if (lista) {
    lista = JSON.parse(lista);
} else {
    lista = [];
}

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    let novaPessoa = new Object();
    novaPessoa.nome = this.nome.value;
    novaPessoa.telefone = this.telefone.value;
    
    lista.push(novaPessoa);

    this.reset();

    localStorage.setItem("minhaLista", JSON.stringify(lista));

    listar()
})

function listar() {
    ulPessoas.innerHTML = "";
    lista.forEach((item, key) => {
        linha = document.createElement('li');

        let s = `<button>[Excluir]</button><button>[Editar]</button>`

        linha.innerHTML = "Nome: " + item.nome + "Telefone: " + item.telefone + s;
        ulPessoas.appendChild(linha);
    })
}