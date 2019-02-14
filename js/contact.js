var convertFormToObj = function (form) {
  var data = $(form).serializeArray();
  var result = {};
  for (var row of data) {
    result[row.name] = row.value;
  }
  return result;
};

var config = {
  apiKey: "AIzaSyBoHuGvLR0aGdRMTftQrN9K_jRkpashANU",
  authDomain: "nargiz-7d174.firebaseapp.com",
  databaseURL: "https://nargiz-7d174.firebaseio.com",
  projectId: "nargiz-7d174",
  storageBucket: "nargiz-7d174.appspot.com",
  messagingSenderId: "549920561823"
};
firebase.initializeApp(config);

$('#contact-form').on('submit', function(e) {
  e.preventDefault();
  var order = convertFormToObj(this);

  var rootRef = firebase.database().ref();
  var clientsRef = rootRef.child('clients');
  var newStoreRef = clientsRef.push();
  newStoreRef.set(order);
});