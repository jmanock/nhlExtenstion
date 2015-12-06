(function(){
  var url = 'http://sports.yahoo.com/nhl/scoreboard/?date=';

  function ajax(kewUrl,x){
    $.ajax({
      url:kewUrl
    }).done(function(html){
      var open = '<ul>';
      var close = '</ul>';
      var date =x;

      $(html).find('.game').each(function(i,e){
        var time = $(e).find('.time').text();

        var awayTeam = $(e).find('.away em').text();
        var homeTeam = $(e).find('.home em').text();
        var score = $(e).find('.score a').text();
        // if statment of 30 teams? for the pic?
        
        var together = '<li>'+time+' '+awayTeam+' '+score+' '+homeTeam+'</li>';
        open += together;
      });
      open += close;
      $('#games').append(date);
      $('#games').append(open);
    });
  }

      function date(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        var yesterday = dd -1;

        if(dd < 10){
          dd = '0'+dd;
        }
        if(mm < 10){
          mm = '0'+mm;
        }
        today = yyyy+'-'+mm+'-'+dd;
        change(yyyy, mm, yesterday);
        ajax(url+today,'Today');
      }
      date();

      function change(year, month, date){
        if(date === 0){
          month = month - 1;
          if(month === 2){
            date = 28;
          }
          if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
            date = 31;
          }else{
            date = 30;
          }
          if(month < 10){
            month = '0'+month;
          }
        }
        if(date < 10){
          date = '0'+date;
        }
        var yesterday = year+'-'+month+'-'+date;
        ajax(url+yesterday,'Yesterday');
      }
})();
