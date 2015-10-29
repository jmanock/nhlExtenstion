(function(){
  $.ajax({
    url:'http://sports.yahoo.com/nhl/scoreboard/'
  }).done(function(html){
    $(html).find('.game').each(function(i,e){
      console.log(e);
      var awayTeam = $(e).find('.away em').text();
      var homeTeam = $(e).find('.home em').text();
      console.log(awayTeam + ' at ' + homeTeam);
    });

  });
})();
