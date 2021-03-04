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

var selectionGroup = new Array();
var userName = "";

function realizeProcess(){
    userName=document.getElementById("user_name").value;
    let algSelected = document.getElementById("algoritmoSeleccionado").value;
    let groupSelected = document.getElementById("imgSelect").value;
    let radioButtons = document.getElementsByName("order");
    let orderSelected = "";
    radioButtons.forEach(i => {
        if(i.checked){
            orderSelected = i.value;
        }
    });
    if((algSelected != "") && (groupSelected != "") && (orderSelected != "")){
        orderingProcess(algSelected,orderSelected);
    }else{
        alertError(algSelected,groupSelected,orderSelected);
    }
}

function selectGroup(){
    let groupSelection = document.getElementById("imgSelect").value;
    if(groupSelection === "1"){
        groupReorder(grupo1);
    }else if(groupSelection === "2"){
        groupReorder(grupo2);
    }else if(groupSelection === "3"){
        groupReorder(grupo3);
    }
}

function groupReorder(array){
    selectionGroup = array;
    selectionGroup.sort(function() { return Math.random() - 0.5 });
    var input = document.getElementsByName('ubi[]');
    for (var i = 0; i < input.length; i++) {
        input[i].src = selectionGroup[i].scrImg;
    }
}
function bubbleUp(){
    var aux;
    for (let i = 0; i< selectionGroup.length; i++) {
       for (let j = 0; j < selectionGroup.length; j++) {
           if(selectionGroup[i].order < selectionGroup[j].order){
               aux = selectionGroup[i];
               selectionGroup[i] = selectionGroup[j];
               selectionGroup[j] = aux;
           }
       }
    }
}
function bubbleDown(){
    var input = document.getElementsByName('ubi[]');
    var aux;
    for (let i = 0; i< selectionGroup.length; i++) {
       for (let j = 0; j < selectionGroup.length; j++) {
           if(selectionGroup[i].order > selectionGroup[j].order){
               aux = selectionGroup[i];
               selectionGroup[i] = selectionGroup[j];
               selectionGroup[j] = aux;
           }
       }
    }
}

function insertionUp(){
    var v;
    var j;
    for (let i = 1; i < selectionGroup.length; i++) {
        v = selectionGroup[i];
        j = i - 1;
        while( (j>=0) && (selectionGroup[j].order>v.order) ){
            selectionGroup[j+1] = selectionGroup[j];
			j = j - 1;
        }
        selectionGroup[j+1] = v;
    }
}

function insertionDown(){
    var v;
    var j;
    for (let i = 1; i < selectionGroup.length; i++) {
        v = selectionGroup[i];
        j = i - 1;
        while( (j>=0) && (selectionGroup[j].order<v.order) ){
            selectionGroup[j+1] = selectionGroup[j];
			j = j - 1;
        }
        selectionGroup[j+1] = v;
    }
}

function selectionUp(){
    var aux;
    var min;
	for(let i = 0; i < (selectionGroup.length - 1); i++){
		min=i;
		for(let j=i+1;j<selectionGroup.length;j++){
			if(selectionGroup[j].order < selectionGroup[min].order){
				min=j;
			}
		}
        aux = selectionGroup[i];
        selectionGroup[i] = selectionGroup[min];
        selectionGroup[min] = aux;
	}
}

function selectionDown(){
    var aux;
    var min;
	for(let i = 0; i < (selectionGroup.length - 1); i++){
		min=i;
		for(let j=i+1;j<selectionGroup.length;j++){
			if(selectionGroup[j].order > selectionGroup[min].order){
				min=j;
			}
		}
        aux = selectionGroup[i];
        selectionGroup[i] = selectionGroup[min];
        selectionGroup[min] = aux;
	}
}

function mergeSortUp(array,half = array.length/2){
    if(array.length < 2){
      return array;
    }
    const left = array.splice(0,half);
    return mergerUp( mergeSortUp(left),mergeSortUp(array));
}

function mergerUp(left, right) {
    const arr = new Array();
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push( left.shift());
        } else {
            arr.push( right.shift());
        }
    }
    return [ ...arr, ...left, ...right ];
}

function mergeSortDown(array,half = array.length/2){
    if(array.length < 2){
      return array;
    }
    const left = array.splice(0,half);
    return mergerDown(mergeSortDown(left),mergeSortDown(array));
}

function mergerDown(left, right) {
    const arr = new Array();
    while (left.length && right.length) {
        if (left[ 0 ] > right[ 0 ]) {
            arr.push( left.shift()); 
        } else {
            arr.push( right.shift());
        }
    }
    return [ ...arr, ...left, ...right ];
}


function QuickSortUp(arrayOrder){
    arrayOrder = quickSort(arrayOrder, 0, arrayOrder.length - 1);
    function quickSort(array, left, right) {
        let index;
        if (array.length > 1) {
            index = partition(array, left, right);
            if (left < index - 1) {
                quickSort(array, left, index - 1);
            }
            if (index < right) {
                quickSort(array, index, right);
            }
        }
        return array;
    }
    function swap(array, leftIndex, rightIndex){
        var temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
    }
    function partition(array, left, right) {
        let pivot = array[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;
        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    }
    return arrayOrder;
}

function QuickSortDown(arrayOrder){
    arrayOrder = quickSort(arrayOrder, 0, arrayOrder.length - 1);
    function quickSort(array, left, right) {
        let index;
        if (array.length > 1) {
            index = partition(array, left, right);
            if (left < index - 1) {
                quickSort(array, left, index - 1);
            }
            if (index < right) {
                quickSort(array, index, right);
            }
        }
        return array;
    }
    function swap(array, leftIndex, rightIndex){
        var temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
    }
    function partition(array, left, right) {
        let pivot = array[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;
        while (i <= j) {
            while (array[i] > pivot) {
                i++;
            }
            while (array[j] < pivot) {
                j--;
            }
            if (i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    }
    return arrayOrder;
}

function ShellSortUp(array) {
	let n = array.length;
	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = array[i];
			let j;
			for (j = i; j >= gap && array[j-gap] > temp; j-=gap)  {
				array[j] = array[j-gap];
			}
			array[j] = temp;
		}
	}
	return array;
}

function ShellSortDown(array){
    let n = array.length;
	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = array[i];
			let j;
			for (j = i; j >= gap && array[j-gap] < temp; j-=gap)  {
				array[j] = array[j-gap];
			}
			array[j] = temp;
		}
	}
	return array;
}

function updateData(){
    var input = document.getElementsByName('ubi[]');
    for (var i = 0; i < input.length; i++) {
        input[i].src = selectionGroup[i].scrImg;
    }
}

function alertError(alg,group,order){
    if ((alg === "") && (group === "") && (order === "")){
        alert("Usuario " + userName + " ha dejado todas las casillas en blanco\nElija las opciones y intente nuevamente");
    }else if((alg === "") && (group !== "") && (order !== "")){
        alert("Usuario " + userName + " le ha faltado elegir el algoritmo de ordenamiento\nIntente nuevamente");
    }else if((alg !== "") && (group === "") && (order !== "")){
        alert("Usuario " + userName + " le ha faltado elegir el grupo de imagenes\nIntente nuevamente");
    }else if((alg !== "") && (group !== "") && (order === "")){
        alert("Usuario " + userName + " le ha faltado elegir el modo de ordenamiento\nIntente nuevamente");
    }else if((alg === "") && (group === "") && (order !== "")){
        alert("Usuario " + userName + " le ha faltado elegir el modo de ordenamiento y el grupo de imagenes\nIntente nuevamente");
    }else if((alg !== "") && (group === "") && (order === "")){
        alert("Usuario " + userName + " le ha faltado elegir el grupo de imagenes y el modo de ordenamiento\nIntente nuevamente");
    }else if((alg === "") && (group !== "") && (order === "")){
        alert("Usuario " + userName + " le ha faltado elegir el algoritmo de ordenamiento y el modo de ordenamiento\nIntente nuevamente");
    }
}


function orderingProcess(alg,order){
    if((alg === "1") && (order == "upward")){
        bubbleUp();
        alert("Se ordenará el grupo de imagenes de manera ascendente mediante ordenamiento burbuja");
    }else if((alg === "1") && (order == "downward")){
        bubbleDown();
        alert("Se ordenará el grupo de imagenes de manera descendente mediante ordenamiento burbuja");
    }else if((alg === "2") && (order == "upward")){
        insertionUp();
        alert("Se ordenará el grupo de imagenes de manera ascendente mediante ordenamiento por insersión");
    }else if((alg === "2") && (order == "downward")){
        insertionDown();
        alert("Se ordenará el grupo de imagenes de manera descendente mediante ordenamiento por insersión");
    }else if((alg === "3") && (order == "upward")){
        selectionUp();
        alert("Se ordenará el grupo de imagenes de manera ascendente mediante ordenamiento por selección");
    }else if((alg === "3") && (order == "downward")){
        selectionDown();
        alert("Se ordenará el grupo de imagenes de manera descendente mediante ordenamiento por selección");
    }else if((alg === "4") && (order == "upward")){
        mergeSortUp(selectionGroup);
        alert("Se ordenará el grupo de imagenes de manera ascendente mediante ordenamiento por mergeSort");
    }else if((alg === "4") && (order == "downward")){
        mergeSortDown(selectionGroup);
        alert("Se ordenará el grupo de imagenes de manera descendente mediante ordenamiento por mergeSort");
    }else if((alg === "5") && (order == "upward")){
        QuickSortUp(selectionGroup);
        alert("Se ordenará el grupo de imagenes de manera ascendente mediante ordenamiento por QuickSort");
    }else if((alg === "5") && (order == "downward")){
        QuickSortDown(selectionGroup);
        alert("Se ordenará el grupo de imagenes de manera descendente mediante ordenamiento por QuickSort");
    }else if((alg === "6") && (order == "upward")){
        ShellSortUp(selectionGroup);
        alert("Se ordenará el grupo de imagenes de manera ascendente mediante ordenamiento por ShellSort");
    }else if((alg === "6") && (order == "downward")){
        ShellSortDown(selectionGroup);
        alert("Se ordenará el grupo de imagenes de manera descendente mediante ordenamiento por ShellSort");
    }
    updateData();
}

