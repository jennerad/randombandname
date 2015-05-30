$(document).ready(function() {

  var randomBandName, randomArray1, randomArray2, randomArray3;
//create 3 arrays
    var array1 = ['episodic', 'hairy', 'angelic', 'earnest', 'lying', 'funky', 'bloated', 'rockstar', 'super sonic', 'deadly', 'amplified', 'cartoon', 'overflowing', 'caffeinated'];
    var array2 = ['elephant', 'elevator', 'brain', 'haircut', 'corner store', 'surfer', 'skater', 'infinity', 'battleground', 'data', 'alphabet', 'elbow', 'karate'];
    var array3 = ['poodles', 'spider monkeys', 'anteaters', 'truths', 'haters', 'splitters', 'jokers', 'trombones', 'rainbows', 'poppers', 'buttercups'];

// grab one from each, randomly, and put them together

  function randomBandNameGenerator() {
    var randomArray1 = Math.floor(Math.random() * array1.length);
    var randomArray2 = Math.floor(Math.random() * array2.length);
    var randomArray3 = Math.floor(Math.random() * array3.length);
    randomBandName = (array1[randomArray1] + " " + array2[randomArray2] + " " + array3[randomArray3]);
    console.log(randomBandName);
    return randomBandName;
  }

  $("#bandName").on("click", function(){
    console.log('clicked');
    randomBandNameGenerator();
    $("#bandString").html("<p>" + randomBandName + "</p>");
    changeBgColor();
  });


});

function changeBgColor() {
    var hue = 'rgba(' + (Math.floor(Math.random() * 128)) + ',' + (Math.floor(Math.random() * 128)) + ',' + (Math.floor(Math.random() * 128)) + ', 0.5)';
    // console.log(hue);
    document.body.style.background = hue;
};
