

 function renderQnA(qna) {
  var template = document.getElementById('qaTemplate').innerHTML;
  let counter = 0;
  for(let qa of qna){
    counter++;
    qa.counter=counter;
    var rendered = Mustache.render(template, qa);
    document.getElementById('qna').innerHTML += rendered;
  }

  
}


function renderTable(data){
     var template = document.getElementById('questionsTrTemplate').innerHTML;
        for(let row of data){
            var rendered = Mustache.render(template, row);
            document.getElementById('chaptersTable').innerHTML += rendered;
        }
}