(function(){
  var url = 'http://sports.yahoo.com/nhl/scoreboard/?date=';
  var teams = [
    {src:'../images/ana.png', name:'Anaheim'},
    {src:'../images/bos.png', name:'Boston'},
    {src:'../images/buf.png', name:'Buffalo'},
    {src:'../images/car.png', name:'Carolina'},
    {src:'../images/cgy.png', name:'Calgary'},
    {src:'../images/chi.png', name:'Chicago'},
    {src:'../images/cob.png', name:'Columbus'},
    {src:'../images/col.png', name:'Colorado'},
    {src:'../images/dal.png', name:'Dallas'},
    {src:'../images/det.png', name:'Detroit'},
    {src:'../images/edm.png', name:'Edmonton'},
    {src:'../images/fla.png', name:'Florida'},
    {src:'../images/los.png', name:'Los Angeles'},
    {src:'../images/min.png', name:'Minnesota'},
    {src:'../images/mon.png', name:'Montreal'},
    {src:'../images/nas.png', name:'Nashville'},
    {src:'../images/njd.png', name:'New Jersey'},
    {src:'../images/nyi.png', name:'NY Islanders'},
    {src:'../images/nyr.png', name:'NY Rangers'},
    {src:'../images/ott.png', name:'Ottawa'},
    {src:'../images/phi.png', name:'Philadelphia'},
    {src:'../images/pho.png', name:'Arizona'},
    {src:'../images/pit.png', name:'Pittsburgh'},
    {src:'../images/san.png', name:'San Jose'},
    {src:'../images/stl.png', name:'St. Louis'},
    {src:'../images/tam.png', name:'Tampa Bay'},
    {src:'../images/tor.png', name:'Toronto'},
    {src:'../images/van.png', name:'Vancouver'},
    {src:'../images/was.png', name:'Washington'},
    {src:'../images/wpg.png', name:'Winnipeg'}
  ];

  function ajax(kewUrl,x){
    $.ajax({
      url:kewUrl
    }).done(function(html){
      var open = '<ul>';
      var close = '</ul>';
      var date =x;

      $(html).find('.game').each(function(i,e){
        var time = $(e).find('.time').text();
        var awayTeamImg, homeTeamImg;
        var awayTeam = $(e).find('.away em').text();
        var homeTeam = $(e).find('.home em').text();
        var score = $(e).find('.score a').text();
        $.each(teams, function(index, team){
          if(awayTeam === team.name){
            awayTeamImg = team.src;
          }
          if(homeTeam === team.name){
            homeTeamImg = team.src;
          }
        });

        var together = '<li>'+ '<img src='+awayTeamImg+'></img>'+
        score + '<img src='+homeTeamImg+'></img>'+ time + '</li>';

        open += together;
      });
      open += close;
      $('#games').append('<h3 class="date">' + date+'</h3>');
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
