
module.exports = function () {
  var data = {
    usuarios: [
      {
        id:1,
		username:"Rengar",
		password:"zzzzzzzzzz",
		email:"emilg29090@gmail.com",
		nombres_usuario:"Emilio",
		apellidos_usuario:"Gonzales Castro",
		fecha_nacimiento:"2001-08-18",
		idalerta:1,
		iddistrito:5,
		idsuscripcion:1
	  },
      {
        id:2,
		username:"Hanzo",
		password:"gaaaaaaaaaa",
		email:"hudosino00@gmail.com",
		nombres_usuario:"Arnold Samir",
		apellidos_usuario:"Torres Rotas",
		fecha_nacimiento:"2000-01-20",
		idalerta:2,
		iddistrito:10,
		idsuscripcion:2
      },
      {
        id:3,
		username:"Hanzo",
		password:"gaaaaaaaaaa",
		email:"hudosino00@gmail.com",
		nombres_usuario:"Arnold Samir",
		apellidos_usuario:"Torres Rotas",
		fecha_nacimiento:"2000-10-10",
		idalerta:3,
		iddistrito:1,
		idsuscripcion:3
      },
    
    ],
	Delitos: [
		{
			id:1,
            Hora:"12",
            Fecha:"2000-10-10",
            Distrito:"Surco",
            Distrito_idZona:1,
            IdTipoDelitos:2
		},
	    {
			id:2,
            Hora:"11",
            Fecha:"2000-10-19",
            Distrito:"Surco",
            Distrito_idZona:3,
            IdTipoDelitos:5
		}
	
	]
  }
  return data
}