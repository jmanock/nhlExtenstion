(function(){
  $.ajax({
    url:'http://sports.yahoo.com/nhl/scoreboard/'
  }).done(function(html){
    var open = '<ul>';
    var close = '</ul>';
    $(html).find('.game').each(function(i,e){
      var time = $(e).find('.time').text();
      var awayTeam = $(e).find('.away em').text();
      var homeTeam = $(e).find('.home em').text();
      var something = '<li>'+time+' '+awayTeam+' at '+homeTeam+'</li>';
      open +=something;
    });
    open+=close;
    $('#games').append(open);
  });
})();
