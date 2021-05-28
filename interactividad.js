function limpiarFormulario(){
	document.getElementById("FORM").reset()
}

var menor= function(n1, n2, n3){

	var n1= parseInt(document.getElementById("numero1").value);
	var n2= parseInt(document.getElementById("numero2").value);
	var n3= parseInt(document.getElementById("numero3").value);

	if (n1<n2 && n1<n3) {
		return n1;
	}
	else {
		if (n2<n3) {
		return n2;
		}
		else{
			return n3;
		}
	}
}

var cmapul= function(cm){
	var cm=parseFloat(document.getElementById('cm').value);

	pul= (cm/2.54).toFixed(4);

	return alert(cm+ " centimetros son: " +pul+ " pulgadas.")
}

var mtsayar= function(m){
	var m=parseFloat(document.getElementById('m').value);

	var yar= (m*1.094).toFixed(4);

	return alert(m+ " metros son: " +yar+ " yardas.")
}