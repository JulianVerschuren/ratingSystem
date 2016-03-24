//document.getElementById('s3').style.width = '50%';

var timesClicked = Math.ceil(9*Math.random()); //genereerd een random waarde van hoeveel keer geklikt op het moment dat de pagina laadt
var clickedTotal = timesClicked*Math.random()*5;

var executeAmount = document.getElementById('amount'); //waarde van executeamount word uit de html gehaald en in de variabele gestopt.

var executeRating = document.getElementById('rating');//waarde van executerating word uit de html gehaald en in de variabele gestopt.
var theStarz = document.querySelectorAll('.stars');

function filledStar(specificStar, percent){ //functie die een specifiek ster opvult

	var name = 's' + specificStar; //variabele naam = ster plus de nummer van een van de sterren

    percent = Math.min(percent, 100); //dit zorgt ervoor dat als het percentage te hoog is dus bijvoorbeeld 140, er 100 vanaf word gehaald

	document.getElementById(name).style.width = percent+'%'; //stijlt de variable naam waar de ster in opgeslagen staat.


	
}
//filledStar(2,250); //vult de tweede ster bijvoorbeeld voor 50%


function fillingUpTheStars(rating){ //deze functie zorgt ervoor dat alle sterren worden gekleurd
for (var i=1; i<6; i++){ 

//een for loop die door alle sterren heen gat
filledStar(i, rating*100); //rating word hier keer 100 gedaan
rating --; //hier word er wat vanaf gehaald dus als er lager gestemt word gaat de rating gemiddeld omlaag


	}


}

fillingUpTheStars(0.3) //hier roep je de functie aan op alle sterren op te vullen met de waarde waarmee je ze op wilt vullen


// random genereren en uitvoeren in dom:
function execute(){ //functie om het uit te voeren voor elke ster in plaat svan 1
	executeAmount.innerHTML = timesClicked; //voert daadwerkelijk de aantalkeren geklikt uit
	executeRating.innerHTML = Math.ceil(10*clickedTotal/timesClicked)/10; //voert daadwerkelijk de hele 		waardering uit, rondt af, en deelt door 10.
	fillingUpTheStars(Math.ceil(10*clickedTotal/timesClicked)/10);

}
execute();

	function processClick(){

			timesClicked ++; //voegt een aantal keer geklikt toe
			var numbber = this.getAttribute('data-role'); //pakt het atrribuut data-role uit de html en stopt het in de variabele numbber
			clickedTotal += parseInt(numbber); //inhoud omgezet naar een heel getal doormiddel van parseInt
			execute(); //roept de execute functie aan


}

for(var i=0; i<theStarz.length; i++){ //deze forloop zorgt ervoor dat elke keer als je op een ster klikt functie van processclick door gaat tot de sterren hun lengte bereikt is

theStarz[i].addEventListener('click', processClick); //een onclick eventlistener voor de sterren.

}
