
function pesquisar() {

    let section = document.getElementById("pesquisa");
    let inputPesquisa = document.getElementById("input-pesquisa").value;

    if (!inputPesquisa) {
        section.innerHTML = "<p>Equipamento não encontrado. Digite o patrimônio do equipamento ou o local da unidade.</p>"
        return
    };

    inputPesquisa = inputPesquisa.toLowerCase();

    let resultados = "";
    let patrimonio = "";
    let tags = "";
    
    for (let dado of equipamentos) {
        tags = dado.tags.toLowerCase();

        //criando um array de palavras para verificar uma string completa e não somente uma letra utilizando o includes()
        const frase = tags +","+ dado.patrimonio;
        const palavrasDaFrase = frase.split(",");

        if (palavrasDaFrase.includes(inputPesquisa)) {
            resultados += `
                <div class ="item-resultado">
                    <h2>PATRIMÔNIO: ${dado.patrimonio}</h2>
                    <p>TIPO: ${dado.tipo}</p>
                    <p>Descrição: ${dado.descricao}</p>
                    <p>MARCA: ${dado.marca}</p>
                    <p>LOCALIDADE DO EQUIPAMENTO: ${dado.localidade}</p> 
                </div> 
            `
        }
    };

    if(!resultados){
        resultados = "<p>Equipamento não localizado</p>";
    }

    section.innerHTML = resultados;
}