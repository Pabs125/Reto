var grupo1=[
    {order: 1, scrImg: "img/Grupo 1/elonsito.jpg"},
    {order: 2, scrImg:"img/Grupo 1/Jeffsito.jpg"},
    {order: 3, scrImg:"img/Grupo 1/bill.jpg"},
    {order: 4, scrImg:"img/Grupo 1/Bernard 4.jpg"},
    {order: 5, scrImg:"img/Grupo 1/Mark-Zuckerberg 5.jpg"},
    {order: 6, scrImg:"img/Grupo 1/el 6.jpg"}
]
var grupo2=[
    {order:1, scrImg: "img/Grupo 2/thor 1.jpg"},
    {order:2, scrImg: "img/Grupo 2/wanda 2.png"},
    {order:3, scrImg: "img/Grupo 2/vision 3.jpg"},
    {order:4, scrImg: "img/Grupo 2/hulk 4.jpg"},
    {order:5, scrImg: "img/Grupo 2/cap 5.jpg"},
    {order:6, scrImg: "img/Grupo 2/iron man 6.jpg"}
]
var grupo3=[
    {order:1, scrImg: "img/Grupo 3/1.jpg"},
    {order:2, scrImg: "img/Grupo 3/2.jpg"},
    {order:3, scrImg: "img/Grupo 3/3.jpg"},
    {order:4, scrImg: "img/Grupo 3/4.jpg"},
    {order:5, scrImg: "img/Grupo 3/5.jpg"},
    {order:6, scrImg: "img/Grupo 3/6.jpg"}
]

function seleccionGrupo(){
    let grupoSeleccionado = document.getElementById("imgSelect").value;
    if(grupoSeleccionado==="1"){
        reordenar(grupo1);
    }else if(grupoSeleccionado==="2"){
        reordenar(grupo2);
    }else if(grupoSeleccionado==="3"){
        reordenar(grupo3);
    }
}

function reordenar(array){
    grupoSeleccion = array;
    grupoSeleccion.sort(function(){return Math.random() - 0.5});
    var input = document.getElementsByName('ubi[]');
    for(var i=0; i< input.length; i++){
        input[i].src = seleccionGrupo[i].scrImg;
    }
}

function algoritmoBurbuja1() {
    
    var aux;
    for(let i =0;i< grupoSeleccion.length; i++){
        for( let j=0; j < grupoSeleccion.length; j++){
            if(grupoSeleccion[i].order < grupoSeleccion[j].order){
                aux= grupoSeleccion[i];
                grupoSeleccion[i] = grupoSeleccion[j];
                grupoSeleccion[j] = aux;
            }
        }
    }
}

function algoritmoSeleccion() {
    var aux;
    var min;
    for( let i =0; i<(grupoSeleccion.length -1); i++){
        min=i;
        for(let j=i+1; j<grupoSeleccion.length; j++){
            if(grupoSeleccion[j].order<grupoSeleccion[min].order){
                min=j;
            }
        }
        aux=grupoSeleccion[i];
        grupoSeleccion[i]=grupoSeleccion[min];
        grupoSeleccion[min]=aux;
    }
}

function algoritmoInsercion() {
    var v;
    var j;
    for(let i = 1; i<grupoSeleccion.length; i++){
        v=grupoSeleccion[i];
        j=i-1;
        while ((j>=0)&&(grupoSeleccion[j].order<v.order)) {
            grupoSeleccion[j+1] = grupoSeleccion[j];
            j=j-1;
        }
        grupoSeleccion[j+1]=v;
    }
}

function showSelected() {
    let seleccion = document.getElementById("algoritmoSeleccionado").value;
    document.getElementById("algSelected").innerHTML = seleccion;
    /* Para obtener el texto que ve el usuario */
    let selected_name = document.getElementById("algoritmoSeleccionado");
    let opcion = selected_name.options[selected_name.selectedIndex].text;
    alert(opcion);
    if (seleccion === "1")
        algoritmoBurbuja();
    else if (seleccion === "2")
        algoritmoInsercion();
    else
        algoritmoSeleccion();

}