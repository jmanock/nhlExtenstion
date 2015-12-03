(function(){
  var url = 'http://sports.yahoo.com/nhl/scoreboard/';
  // UrlNEed to use = 'http://sports.yahoo.com/nhl/scoreboard/?date='
  // TODO
  // Want to add yesterdays games at the top
  // add onto the url
  // go threw the same function when done
  function something(x){
    console.log(url+'?date='+x);
  }
  //something(url+'dateChange');
  $.ajax({
    url:url
  }).done(function(html){
    var open = '<ul>';
    var close = '</ul>';
    $(html).find('.game').each(function(i,e){
      var time = $(e).find('.time').text();
      var awayTeam = $(e).find('.away em').text();
      var homeTeam = $(e).find('.home em').text();
      var score = $(e).find('.score a').text();
      var something = '<li>'+time+' '+awayTeam+' '+score+' '+homeTeam;
      open += something;
    });
    open += close;
    $('#games').append(open);
  });

    $('#next').on('click', function(){
      date();
    });

      function date(){
        // need to take away one from day and add one to day
        // for a better look at what happend and what is going to happen
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if(dd < 10){
          dd = '0'+dd;
        }
        if(mm < 10){
          mm = '0'+mm;
        }
        today = yyyy+'-'+mm+'-'+dd;
        something(today);
      }
      date();

})();
