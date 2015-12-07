(function(){
  var url = 'http://sports.yahoo.com/nhl/scoreboard/?date=';
  var teams = [
    {link:'../images/ana.png', name:'Anaheim'},
    {link:'../images/bos.png', name:'Boston'},
    {link:'../images/buf.png', name:'Buffalo'},
    {link:'../images/car.png', name:'Carolina'},
    {link:'../images/cgy.png', name:'Calgary'},
    {link:'../images/chi.png', name:'Chicago'},
    {link:'../images/cob.png', name:'Columbus'},
    {link:'../images/col.png', name:'Colorado'},
    {link:'../images/dal.png', name:'Dallas'},
    {link:'../images/det.png', name:'Detroit'},
    {link:'../images/edm.png', name:'Edmonton'},
    {link:'../images/fla.png', name:'Florida'},
    {link:'../images/los.png', name:'Los Angeles'},
    {link:'../images/min.png', name:'Minnesota'},
    {link:'../images/mon.png', name:'Montreal'},
    {link:'../images/nas.png', name:'Nashville'},
    {link:'../images/njd.png', name:'New Jersey'},
    {link:'../images/nyi.png', name:'NY Islanders'},
    {link:'../images/nyr.png', name:'NY Rangers'},
    {link:'../images/ott.png', name:'Ottawa'},
    {link:'../images/phi.png', name:'Philadelphia'},
    {link:'../images/pho.png', name:'Arizona'},
    {link:'../images/pit.png', name:'Pittsburgh'},
    {link:'../images/san.png', name:'San Jose'},
    {link:'../images/stl.png', name:'St. Louis'},
    {link:'../images/tam.png', name:'Tampa Bay'},
    {link:'../images/tor.png', name:'Toronto'},
    {link:'../images/van.png', name:'Vancouver'},
    {link:'../images/was.png', name:'Washington'},
    {link:'../images/wpg.png', name:'Winnipeg'}
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

        for(var h = 0; h<teams.length; h++){
          if(teams[h].name === awayTeam){
            awayTeamImg = teams[h].link;
          }
          if(teams[h].name === homeTeam){
            homeTeamImg = teams[h].link;
          }
        }
        console.log(awayTeamImg);
        var together = '<li>'+time+' '+
        awayTeam+' '+score+' '+homeTeam+'</li>';

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
