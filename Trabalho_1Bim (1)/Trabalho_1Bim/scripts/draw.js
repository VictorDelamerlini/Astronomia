/*Kauã(turma A), Lucas(turma B), Renan(turma A) e Victor(turma B) - 2° TII*/

//Desenhar no canvas
function Draw(List, clear){
	const canvas = document.querySelector('#canvas')
	const ctx = canvas.getContext('2d')
	if(clear){
		ctx.clearRect(0,0, canvas.width, canvas.height)
	}
	for(let i = 0; i < List.length; i++){
		ctx.beginPath()
		ctx.shadowColor = "white"
      	ctx.shadowBlur = 40
      	ctx.shadowOffsetX = 2;
      	ctx.shadowOffsetY = 2;
		ctx.fillStyle = "white"
		ctx.arc(List[i].x, List[i].y, List[i].raio, 0, Math.PI * 2)
		ctx.fill()
		if(List[i].anel){
			ctx.beginPath()
			ctx.strokeStyle = "white"
			ctx.lineWidth = 4
			ctx.ellipse(List[i].x, List[i].y, List[i].raio-5, List[i].raio+10, Math.PI/List[i].inclinacao, 0, Math.PI*2)
			ctx.stroke()
		}
	}
}

//Mostrar na tela (li)
function Show(List, clear){
	var UL = document.querySelector("ul")
	if(clear){
		UL.innerHTML = ""
	}
	if(List.length > 0){
		for(let i = 0; i < List.length; i++){
			let item = List[i]
			let button = document.createElement("button")
			button.innerText = "Excluir"
			button.addEventListener('click', (e)=>{
				Remove(e)
			})

			let LI = document.createElement("li")
			LI.setAttribute("id", item.id)
			LI.innerText = `${item.nome} - ${item.desc} | X: ${item.x} Y: ${item.y}`
			LI.append(button)
			UL.append(LI)
		}
	}
}
