var fruits = [
    { nom: "Pomme", couleur: "Rouge" },
    { nom: "Banane", couleur: "Jaune" },
    { nom: "Orange", couleur: "Orange" }
    ];
   function showTable()
   {
   
    // Récupération de la table
    // Parcours du tableau de fruits
    /*
    for (var i = 0; i < fruits.length; i++) {
    // Création d'une nouvelle ligne dans la table
    addRow(fruits[i].nom,fruits[i].couleur)
    }
*/
fruits.forEach(fruit=>{
    addRow(fruit.nom,fruit.couleur);
})

   }
function addRow(c1,c2)
{
    var table = document.getElementById("fruitsTable");
    var row = table.insertRow();
    // <tr></tr>
    // Création de deux nouvelles cellules dans la ligne
    var cell1 = row.insertCell(); // tr => <td>
    var cell2 = row.insertCell();
    // Remplissage des cellules avec les données du fruit correspondant
cell1.innerHTML = c1; // td=fruits.nom
cell2.innerHTML = c2;
}
function addElement()
{
    let nom=document.getElementById("nom").value;
    let couleur=document.getElementById("couleur").value;
    let fruit ={ nom:nom,couleur:couleur}
    fruits.push(fruit);
addRow(nom,couleur);
document.getElementById("nom").value="";
document.getElementById("couleur").value="";
}
