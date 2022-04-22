/*Kauã(turma A), Lucas(turma B), Renan(turma A) e Victor(turma B) - 2° TII*/

//Criar item
function Create(e, geral, id){
    e.preventDefault()
    const values_Get = ["nome", "text", "raio", "X", "Y", "anel"]
    let values = []
    for(let i = 0; i < values_Get.length; i++){
        let get = `input[name=${values_Get[i]}]`
        let item = document.querySelector(get)
        if(values_Get[i] == "anel"){
            if(item.checked){
                item = true
            }
            else{
                item = false
            }
        }
        else{
            item = document.querySelector(get).value
        }
        values.push(item)
        document.querySelector(get).value = ""
    }
    let anel = false
    let raio = values[2]
    let categoria = "planetas"
    if(raio >= 30){
        categoria = "estrelas"
    }
    else if(raio >= 10){
        categoria = "planetas"
        anel = values[5]
    }
    else if(raio >= 5){
        categoria = "luas"
    }
    else if(raio >= 3){
        categoria = "asteroides"
    }
    else if(raio >= 1){
        categoria = "sondas"
    }
    var obj = {
        x: parseInt(values[3]),
        y: parseInt(values[4]),
        raio: parseInt(raio),
        anel: anel,
        nome: values[0],
        desc: values[1],
        inclinacao: Math.floor(Math.random() * (2 - 0)) + 1,
        id: id
    }
    for(let i = 0; i < geral.length; i++){
        if(geral[i].name == categoria){
            geral[i].value.push(obj)
            return geral
        }
    }
}

//Remover item
function Remove(e){
    var UL = document.querySelector("ul")
    let id = e.target.parentNode.id
    let excluir = document.getElementById(id)
    UL.removeChild(excluir)

    for(let i = 0; i < geral.length; i++){
      for(let c = 0; c < geral[i].value.length; c++){
        console.log(geral[i].value[c].id)
        if(geral[i].value[c].id == id){
            geral[i].value.splice(c, 1)
            console.log(geral[i].value[c])
        }
      }
   }
   Draw(geral[2].value, true)
}