function getFormvalue() {
    //Write your code here
	let form= document.getElementById("form1");
	
	let Fname= form.elements["fname"].value;
	let Lname= form.elements["lname"].value;
	alert(Fname+ " "+Lname);

}
