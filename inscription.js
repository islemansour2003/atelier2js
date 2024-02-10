 /* function validerdatebirth()
{ var date=document.getElementById("date").value;
var today=new Date();
console.log("ddd11");
if (date>=today)
alert("votre date ",date.textContent," est invalide");
console.log("ddd");
}*/


function validerDateOfBirth() {
    // Récupérer la valeur saisie dans le champ "Date de naissance"
    var dateOfBirthInput = document.getElementById('dateOfBirth').value;
    
    // Créer un objet Date pour la date de naissance saisie
    var dateOfBirth = new Date(dateOfBirthInput);
    
    // Créer un objet Date pour la date d'aujourd'hui
    var today = new Date();
    
    // Comparer les dates
    if (dateOfBirth >= today) {
        // Afficher un message d'erreur si la date de naissance est postérieure à la date d'aujourd'hui
        alert("La date de naissance doit être antérieure à la date d'aujourd'hui.");
    } else {
        // La date de naissance est valide
        alert("La date de naissance est valide !");
    }
}
