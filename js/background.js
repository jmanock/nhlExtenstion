(function(){
  var urlPage = 'http://sports.yahoo.com/nhl/scoreboard/';
  $.ajax({
    url:urlPage
  }).done(function(html){
    var open = '<ul>';
    var close = '</ul>';
    $(html).find('.game').each(function(i,e){
      var time = $(e).find('.time').text();
      var awayTeam = $(e).find('.away em').text();
      var homeTeam = $(e).find('.home em').text();
      var score = $(e).find('.score a').text();

      var something = '<li>'+time+' '+awayTeam+' '+score+' '+homeTeam+'</li>';
      open +=something;
    });

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd < 10){
      dd = '0'+dd;
    }
    if(mm<10){
      mm='0'+mm;
    }
    today = yyyy+'-'+mm+'-'+dd;
    console.log(today);
    $('#next').on('click', function(){
      dd = dd +1;
      if(dd ===32){
        dd = 1;
        mm = mm+1;
      }
      if(dd < 10){
        dd = '0'+dd;
      }
      if(mm < 10){
        mm = '0'+mm;
      }
      today = yyyy+'-'+mm+'-'+dd;
      console.log(urlPage+'?date='+today);
    });

    $('#prev').on('click', function(){

    });
    open+=close;
    $('#games').append(open);
  });
})();
