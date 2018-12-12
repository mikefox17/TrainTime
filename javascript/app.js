//Init of my firebase
var config = {
  apiKey: "AIzaSyC4oEKW1no9wf4QYDJtJQuilh4NWSsmkbg",
  authDomain: "trainschedule-dedd7.firebaseapp.com",
  databaseURL: "https://trainschedule-dedd7.firebaseio.com",
  projectId: "trainschedule-dedd7",
  storageBucket: "trainschedule-dedd7.appspot.com",
  messagingSenderId: "360672648371"
};
firebase.initializeApp(config);

var database = firebase.database();
//consolelog to check if database is working
console.log(database + "working");

//REFERENCE OF HTML ID's to easily copy and paste
//"#add-train-btn"
//"#first-input"
// "#freq-input"
// "#destination-input"
// "#train-name-input"
// "#train-table"

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  //making variables to contain users inputs

  var trainName = $("#train-name-input")
    .val()
    .trim();
  var trainDestination = $("#destination-input")
    .val()
    .trim();
  var firstTrain = moment(
    $("#first-input")
      .val()
      .trim(),
    "HH:mm"
  )
    .subtract(10, "years")
    .format("X");
  var trainFrequency = $("#freq-input")
    .val()
    .trim();
  //creating a new var that now contains all of the inputs from the user, creates an object of inputs
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    TrainTime: firstTrain,
    frequency: trainFrequency
  };
  //pushes the inputed data to firebase
  database.ref().push(newTrain);
  //making sure things are working...AND THEY ARE!
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.TrainTime);
  console.log(newTrain.frequency);

  //REFERENCE OF HTML ID's....again, so I dont have to keep scrolling back up
  //"#add-train-btn"
  //"#first-input"
  // "#freq-input"
  // "#destination-input"
  // "#train-name-input"
  // "#train-table"

  //clears out the input fields once submit button is clicked
  $("#train-name-input").val("");
  $("#first-input").val("");
  $("#destination-input").val("");
  $("#freq-input").val("");
});

//refers to the FB database
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().TrainTime;
  var trainFrequency = childSnapshot.val().frequency;

  console.log(trainName);
  console.log(trainDestination);
  console.log(firstTrain);
  console.log(trainFrequency);

  //using moment to format the users input time into an easier way to read aka 06:00 as opposed to a long string of numbers that don't make sense

  var firstTrainTime = moment.unix(firstTrain).format("HH:mm");
  console.log(firstTrainTime);
});
