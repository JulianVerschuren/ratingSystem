//document.getElementById('s3').style.width = '50%';

function filledStar(specificStar, percent){ //functie die een specifiek ster opvult

	var name = 's' + specificStar; //variabele naam = ster plus de nummer van een van de sterren

    percent = Math.min(percent, 100); //dit zorgt ervoor dat als het percentage te hoog is dus bijvoorbeeld 140, er 100 vanaf word gehaald

	document.getElementById(name).style.width = percent+'%'; //stijlt de variable naam waar de ster in opgeslagen staat.


	
}
//filledStar(2,250); //vult de tweede ster bijvoorbeeld voor 50%


function fillingUpTheStars(rating){ //deze functie zorgt ervoor dat alle sterren worden gekleurd
for (var i=1; i<6; i++){ //een for loop die door alle sterren heen gat
filledStar(i, rating*100); //rating word hier keer 100 gedaan
rating --; //hier word er wat vanaf gehaald dus als er lager gestemt word gaat de rating gemiddeld omlaag


	}


}

fillingUpTheStars(0.3) //hier roep je de functie aan op alle sterren op te vullen met de waarde waarmee je ze op wilt vullen