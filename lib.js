

 function renderQnA(qna) {
  var template = document.getElementById('qaTemplate').innerHTML;
  for(let qa of qna){
  var rendered = Mustache.render(template, qa);
  console.log(qa,rendered);
  document.getElementById('qna').innerHTML += rendered;
  }

  
}


function renderTable(data){
     var template = document.getElementById('questionsTrTemplate').innerHTML;
        for(let row of data){
            var rendered = Mustache.render(template, row);
            console.log("details",row,rendered);
            document.getElementById('chaptersTable').innerHTML += rendered;
        }
}