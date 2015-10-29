(function(){
  $.ajax({
    url:'http://sports.yahoo.com/nhl/scoreboard/'
  }).done(function(html){
    $(html).find('.game').each(function(i,e){
        $(e).find('.away, .home').each(function(ind,elem){
          $(elem).find('em').each(function(index,element){
            var something = $(element).text();
            console.log(something);
          });
        });
    });

  });
})();
