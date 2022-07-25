const Champs =[
    {'Nombre':'Darius','Linea':'Top','Tipo de campeon':'Bruiser','Tipo de ataque':'Melee'},
    {'Nombre':'Gnar','Linea':'Top','Tipo de campeon':'Tanque','Tipo de ataque':'Rango/Melee'},
    {'Nombre':'Katarina','Linea':'Mid','Tipo de campeon':'Asesino','Tipo de ataque':'Melee'}

]

function DescribirChamp(){
    const MostrarDatos = Champs.map((e)=>console.log(e))
}

function champsLol(operacion,datos){
    let tabla = operacion(datos)
    console.log(tabla)
    return tabla
}

champsLol(DescribirChamp, Champs)