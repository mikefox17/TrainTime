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
console.log(database + "working");
