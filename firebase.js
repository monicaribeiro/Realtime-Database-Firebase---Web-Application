(function() {
  const config = {
    //YOUR CONFIGS
  };

  firebase.initializeApp(config);
  const bigTextEvaluationStudents = document.getElementById('bigTextEvaluationStudents');
  const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('bigTextEvaluationStudents');
  dbBigTextEvaluationStudentsRef.on('value', snap => bigTextEvaluationStudents.innerText = snap.val());

  var table = document.querySelector('#table1 tbody');
  const dbEvaluationStudentsRef = firebase.database().ref().child('evaluationStudents');
  dbEvaluationStudentsRef.on('value', snap => {
    while(table.hasChildNodes()) {
		    table.removeChild(table.firstChild);
	  }

    var students = snap.val();
    for(var i in students) {
      var row = table.insertRow(-1);
      for(var j in students[i]) {
				cell = row.insertCell(-1);
				cell.innerHTML = students[i][j];
			}
		}
  });
}());
