class Sitios{

	constructor(name,decription){

       this.name = name;
       this.decription = decription;

	}
}


class Interfaz{

	add(notas){
 
    const cards = document.querySelector(".cards")
    const element = document.createElement("div")
    element.innerHTML += `
                          <div class= "text-center card mb-3">
                          <p><strong>Sitio</strong></p> ${notas.name}
                          <p><strong>Nota</strong></p> ${notas.decription}
                          <a href= "#" class= "btn btn-danger" width:20%
                          name="delete">Delete</a>
                         </div>
    `
    cards.appendChild(element)



	}

	resetform(){

		document.getElementById("form").reset()
	}

	delete(element){
          
          if(element.name === "delete"){

          	 console.log (element.parentElement.remove())
          }

	}
}

//DOM EVENTOS	

document.getElementById('form').addEventListener("submit", (e)=>{

    const name = document.querySelector(".name").value;
    const decription = document.querySelector(".decription").value;


   const notas = new Sitios(name,decription) 
   const ui = new Interfaz()
   ui.add(notas)
   ui.resetform()


   e.preventDefault()
})


document.querySelector(".cards").addEventListener("click", (e)=>{

   const ui = new Interfaz ()
   ui.delete (e.target)

})


	





