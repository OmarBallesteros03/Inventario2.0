let inventario1 = new Inventario();

const guardar=document.getElementById("guardar");
guardar.addEventListener('click',()=>{
    let nombre=document.getElementById("pName").value;
    let codigo = document.getElementById("pCode").value;
    let cantidad = document.getElementById("pAmount").value;
    let costo = document.getElementById("pCosto").value;

    let pNuevo = new Producto(nombre, codigo, cantidad, costo);
    inventario1.agregarProducto(pNuevo);
})

const eliminar=document.getElementById("eliminar");
eliminar.addEventListener('click',()=>{
console.log(inventario1.eliminarProducto(document.getElementById("pCode").value));
})

const buscar=document.getElementById("buscar");
buscar.addEventListener('click',()=>{
    inventario1.buscar()
})

const listar=document.getElementById("listar");
listar.addEventListener('click',()=>{
    console.log(inventario1.listado())
})

const listarInverso=document.getElementById("listarInverso");
listarInverso.addEventListener('click',()=>{
    console.log(inventario1.listadoInverso())
})