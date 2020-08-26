// Procurar o botao
document.querySelector("#add_time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //bolean: true ou false
    
    // pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        field.value = ""
    })

    // Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
