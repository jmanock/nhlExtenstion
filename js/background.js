(function(){
  $.ajax({
    url:'http://sports.yahoo.com/nhl/scoreboard/'
  }).done(function(html){
    var something =$(html).find('.game').each(function(i,e){
        console.log(i,e);
    });

  });
})();
