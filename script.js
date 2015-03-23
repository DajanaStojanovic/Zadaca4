function podaci(){
	var ime = prompt(" Ime ");
	var prezime = prompt(" Prezime ");
	var spol = prompt(" Spol ");
	var email = prompt(" E-mail ");
	alert(ime + " " + prezime + " , " + email + " , " + spol + " su Vaši podaci ");
	alert(" Potvrdite Vaše podatke. ");
}

function comm(){
	var komentar = prompt(" Vaš komentar ");
	alert(" Hvala Vam! ");
}

function veza(){
	var prva = prompt(" Ime prvog lika ");
	var druga = prompt(" Ime drugog lika ");
	alert(prva + " i " + druga + " će " + Math.random()*100 + " % " + " biti u vezi " );
}

