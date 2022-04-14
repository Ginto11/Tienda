const app = new Vue({
	el:"#app",
	data: {

		mostrarListaCarros: false,

		mostrarListaMotos: false,

		listaCarros: [
			{ id: 0,marca: "TOYOTA", color: "ROJO", costo: 26000000},
			{ id: 1,marca: "CHEROLET", color: "VERDE", costo: 50000000},
			{ id: 2,marca: "FORD", color: "AZUL", costo: 30000000},
			{ id: 3,marca: "BMW", color: "VIOLETA", costo: 60000000},
			{ id: 4,marca: "Mercedes-Benz", color: "VERDE", costo: 120000000},
			{ id: 5,marca: "Renault", color: "NEGRO", costo: 40000000}],

		listaMotos: [
			{ id: 0, marca: "HONDA", color: "Azul", costo: 12000000},
			{ id: 1, marca: "Susuki", color: "rojo", costo: 8000000},
			{ id: 2, marca: "ktm", color: "negro", costo: 20000000},
			{ id: 3, marca: "auteco", color: "negro", costo: 10000000},
			{ id: 4, marca: "akt", color: "rojo", costo: 30000000}]

	},
	methods: {

		mostrarCarros(){
			this.mostrarListaCarros = true
		}, 

		mostrarMotos(){
			this.mostrarListaMotos = true;
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

		},

		comprarMoto(){
			let compra = Number(prompt("¿Cual es el id del elemento?"))

			this.listaMotos.forEach(element =>{
				if (element.id === compra) {
					let efectivo = Number(prompt("Cuanto es el efectivo actual"))

					if (efectivo > element.costo) {
						this.listaMotos.splice(compra, 1);
						return alert("Lo has comprado correctamente")
					}

					return alert("No tienes suficiente dinero para comprar")
				}
			})

		}

	}
})