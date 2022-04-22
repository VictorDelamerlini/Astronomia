/*Kauã(turma A), Lucas(turma B), Renan(turma A) e Victor(turma B) - 2° TII*/

//Variáveis
const canvas = document.querySelector('#canvas')
canvas.width = 1000
canvas.height = 1000
const ctx = canvas.getContext('2d')
var id = 8 //comça de acordo com a qnt de astros já existentes
var categoria = "geral"
var ids = ["estrelas", "planetas", "luas", "asteroides", "sondas", "geral"]

//Exemplos
var geral = [
   {name: "estrelas" , value: [
      {x: 800, y: 100, raio: 50, anel: false, nome: "Betelguese", desc: "Grande estrela massiva", inclinacao: 2, id: 0},
   ]},
   {name: "planetas" , value: [
      {x: 100, y: 100, raio: 15, anel: true, nome: "Saturno", desc: "Possui lindos anéis", inclinacao: 4, id: 1},
      {x: 200, y: 400, raio: 10, anel: false, nome: "Terra", desc: "Pequeno pontinho azulado", inclinacao: 4, id: 2},
   ]},
   {name: "luas" , value: [
      {x: 120, y: 105, raio: 5, anel: false, nome: "Titã", desc: "Lua de Saturno", inclinacao: 2.5, id: 3},
      {x: 70, y: 80, raio: 6, anel: false, nome: "Reia", desc: "Lua de Saturno", inclinacao: 2.5, id: 4},
      {x: 210, y: 415, raio: 5, anel: false, nome: "Lua", desc: "A única lua da Terra", inclinacao: 2.5, id: 5},
   ]},
   {name: "asteroides" , value: [
      {x: 300, y: 150, raio: 4, anel: false, nome: "Bennu", desc: "Grande asteroide", inclinacao: 2.5, id: 6},
   ]},
   {name: "sondas" , value: [
      {x: 700, y: 650, raio: 2, anel: false, nome: "Voyager I", desc: "Sonda muito importante", inclinacao: 2.5, id: 7},
   ]},
]



//Funções
const form = document.querySelector("form")
form.addEventListener('submit', (e)=>{
   geral = Create(e, geral, id)
   id++
   Select(categoria)
   
})

document.addEventListener('click', (e)=>{
   let id = e.target.id
   if(ids.includes(id)){
      categoria = id
   }
   Select(categoria)
})

function Geral(){
   document.querySelector("ul").innerHTML = ""
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   for(let i = 0; i < geral.length; i++){
      Draw(geral[i].value, false)
      Show(geral[i].value, false)
   }
}

function Select(categoria){
   if(categoria == "geral"){
      Geral()
   }
   else{
      for(let i = 0; i < geral.length; i++){
         if(geral[i].name == categoria){
            Draw(geral[i].value, true)
            Show(geral[i].value, true)
         }
      }
   }
}

Geral()