$(document).ready(function() {

var questions = [
	{
		number:"1",
	 	question: "What is Albus Dumbledor's full name?",
	 	answers: ["&nbsp; Albus Percival Wulfric Brian Dumbledore", "&nbsp; Albus Percival Dumbledore", "&nbsp; Albus Sirius James Dumbledore", "&nbsp; Professor Dumbledore doesn't have a middle name"],
		answerKey: ["right", "wrong", "wrong", "wrong"],
	 	picture: "http://vignette3.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg/revision/latest/scale-to-width-down/250?cb=20150822232849"

	},

	
	{
		number:"2",
	 	question:"What is Dumbledore's phoenix's name?",
	 	answers: ["Fawkes", "Fire", "Phoenix", "Fox"],
	 	answerKey: ["right", "wrong", "wrong", "wrong"],
	 	picture: "https://images.pottermore.com/bxd3o8b291gf/1TRjbRjNru8ccsSqIGmcuY/3359df332c1eb6eb9edbeeafc9280643/Fawkes_WB_F2_FawkesMeetingHarryPotter_Still_100615_Land.jpg?w=500"


	},

	/*{
		number:"3",
	 	question:"What house did Professor Slughorn belong to when he was at Hogwarts?",
	 	answers: [
				"<img src='http://vignette1.wikia.nocookie.net/harrypotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest/scale-to-width-down/50?cb=20161124074004'>",
				"<img src='http://vignette4.wikia.nocookie.net/harrypotter/images/d/d3/0.61_Slytherin_Crest_Transparent.png/revision/latest/scale-to-width-down/50?cb=20161020182557'>", 
				"<img src='http://vignette2.wikia.nocookie.net/harrypotter/images/5/50/0.51_Hufflepuff_Crest_Transparent.png/revision/latest/scale-to-width-down/50?cb=20161020182518'>",
				"<img src='http://vignette2.wikia.nocookie.net/harrypotter/images/2/29/0.41_Ravenclaw_Crest_Transparent.png/revision/latest/scale-to-width-down/50?cb=20161020182442'>"],
		answerKey: ["wrong", "rignt", "wrong", "wrong"],
	 	picture: "http://vignette3.wikia.nocookie.net/harrypotter/images/e/e0/Horace_Slughorn.jpg/revision/latest/scale-to-width-down/250?cb=20121226172917"
	},*/
	{
		number:"3",
	 	question:"What house did Professor Slughorn belong to when he was at Hogwarts?",
	 	answers: ["<img src='http://vignette1.wikia.nocookie.net/harrypotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest/scale-to-width-down/50?cb=20161124074004'>",
				"<img src='http://vignette4.wikia.nocookie.net/harrypotter/images/d/d3/0.61_Slytherin_Crest_Transparent.png/revision/latest/scale-to-width-down/50?cb=20161020182557'>", 
				"<img src='http://vignette2.wikia.nocookie.net/harrypotter/images/5/50/0.51_Hufflepuff_Crest_Transparent.png/revision/latest/scale-to-width-down/50?cb=20161020182518'>",
				"<img src='http://vignette2.wikia.nocookie.net/harrypotter/images/2/29/0.41_Ravenclaw_Crest_Transparent.png/revision/latest/scale-to-width-down/50?cb=20161020182442'>"],
	 	answerKey: [ "wrong","right", "wrong", "wrong"],
	 	picture: "https://images.pottermore.com/bxd3o8b291gf/1TRjbRjNru8ccsSqIGmcuY/3359df332c1eb6eb9edbeeafc9280643/Fawkes_WB_F2_FawkesMeetingHarryPotter_Still_100615_Land.jpg?w=500"


	},

	{
		number:"4",
	 	question:"Who pulled the sword of Gryffindor from the sorting hat during the battle at Hogwarts?",
	 	answers: [
				"&nbsp; Mrs. Weasley",
				"&nbsp; Dean Thomas",
				"&nbsp; Neville Longbottom",
				"&nbsp; Seamus Finnigan"],
		answerKey: ["wrong", "wrong", "right", "wrong"],
	 	picture: "https://s-media-cache-ak0.pinimg.com/236x/13/df/a0/13dfa01e3d657b47ac2212c3ce3e58a1.jpg"

	},

	{
		number:"5",
	 	question:"Is Seamus Finnigan a mudblood or pure-blood?",
	 	answers: [
	 		"&nbsp; mudblood", 
			"&nbsp; pure-blood"], 
	 	answerKey: ["right", "wrong"],
	 	picture: "https://s-media-cache-ak0.pinimg.com/originals/3a/85/35/3a85355cba06cfd67debd7fde8adf42d.jpg"

	}
];
console.log(questions);
console.log(questions[0].answers);
console.log(questions[0].answerKey[0]);
console.log(questions[0].answers[0]);
var qNo = 1;
var qIndex = qNo-1;
var right = 0;
var wrong = 0;



//display first question and answer choices:
$(".start").on("click", loadQuestion);
$(".next").on("click", loadQuestion);
$("input").on("click", answerSelect);
$(".btn-success").on("click", answerSubmit);

	function loadQuestion() {
	$(".answerChoices").empty();
	console.log(qNo);
	console.log(qIndex);
	$(".questionText").html(questions[qIndex].question);
	
		for ( i = 0; i < questions[qIndex].answers.length; i++ ) {
		var choices = $(".answerChoices").append('<input type="radio" name="answerChoice" class="notSelected '+questions[qIndex].answerKey[i]+' '+qIndex+ '">' +questions[qIndex].answers[i]+ '<br>');
		console.log(choices);
		};
	};	


	function answerSelect() {
			//console.log(this);
			//$(this).addClass("selectedAnswer");
			//$(this).removeClass("notSelected");

		if ($(this).hasClass("right")) {
				questions[qNo].correct=true;
			}

			else {
				questions[qNo].correct=true;	
			}
		};	

			

	function answerSubmit (){
		qNo++; qIndex++;
		if (qNo > questions.length) {
			alert("Game over, you got the following: INSERT ALERT FOR RESULTS");

		}

			else{
			console.log("Question Number: "+qNo+" up next.");
			console.log("Index Number: "+qIndex);
			$(".btn-info").html("Next Question...").addClass("next").removeClass("start");}
	};

//keep & start counter
var number = 90; 
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);
    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      var minutes = Math.floor(number / 60);
	  var seconds = number - (minutes * 60);
	     if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
      //  Show the number in the #show-number tag.
      //***********$("#show-number").html("<h2>" + minutes + ":" + seconds + "</h2>");
      //console.log(minutes + ":" + seconds);
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
       //************* alert("Time Up!");
      }
    }
    //  The stop function
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    };
    //  Execute the run function.
    run();
});

	