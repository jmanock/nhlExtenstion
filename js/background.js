(function(){
  $.ajax({
    url:'http://sports.yahoo.com/nhl/scoreboard/'
  }).done(function(html){
    $(html).find('.game').each(function(i,e){
      var time = $(e).find('.time').text();
      var awayTeam = $(e).find('.away em').text();
      var homeTeam = $(e).find('.home em').text();
      console.log(time + ' '+awayTeam + ' at ' + homeTeam);
    });

  });
})();
