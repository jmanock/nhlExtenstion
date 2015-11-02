(function(){
  var url = 'http://sports.yahoo.com/nhl/scoreboard/';
  // UrlNEed to use = 'http://sports.yahoo.com/nhl/scoreboard/?date='
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
})();
