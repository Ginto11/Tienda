const app = new Vue({
	el:"#app",
	data: {

		mostrarListaCarros: false,

		listaCarros: [
			{ id: 0,marca: "TOYOTA", color: "ROJO", costo: 26000000},
			{ id: 1,marca: "CHEROLET", color: "VERDE", costo: 50000000},
			{ id: 2,marca: "FORD", color: "AZUL", costo: 30000000},
			{ id: 3,marca: "BMW", color: "VIOLETA", costo: 60000000},
			{ id: 4,marca: "Mercedes-Benz", color: "VERDE", costo: 120000000},
			{ id: 5,marca: "Renault", color: "NEGRO", costo: 40000000}]

	},
	methods: {

		mostrarCarros(){
			this.mostrarListaCarros = true
		}, 

		comprarCarro(){
			
			let compra = Number(prompt("¿Cual es el id del elemento?"))
			
			this.listaCarros.forEach(elemento => {
				
				if(elemento.id === compra){
					let efectivo = Number(prompt("Cuanto es su efectivo actual"))
					
					if (efectivo > elemento.costo) {
						this.listaCarros.splice(compra, 1)
						return alert("Lo has comprado correctamente")
					}

					return alert("No tienes suficiente dinero para comprar")
				}
			})

		}

	}
})