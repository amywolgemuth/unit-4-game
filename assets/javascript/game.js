function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var targetNumber = getRandomInt(19, 120);
console.log(targetNumber)

$("#number-to-guess").text(targetNumber);

var counter = 0;
var win = 0;
var loss = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [1, 2, 3, 4];
var imgs = ["http://www.spielen.de/blog/wp-content/uploads/2013/08/Candy-Crush-Saga-Tipps-Gestreifte-Bonbons.png", "https://ia-crystal-collector.herokuapp.com/assets/images/blue_gem.jpg", "https://ia-crystal-collector.herokuapp.com/assets/images/pink_gem.jpg", "https://ia-crystal-collector.herokuapp.com/assets/images/yellow_gem.jpg"]

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("col-md-3 img-responsive crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", imgs[i]);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
  console.log("crystal " + imageCrystal.attr)

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  $("#user-guess").text(counter);

  if (counter === targetNumber) {
    alert("You win!");
    win++;
    $("#wins").text(win);
    getRandomInt(19, 120);
  } else if (counter >= targetNumber) {
    alert("You lose!!");
    loss++;
    $("#losses").text(loss);
    getRandomInt(19, 120);
  }
});