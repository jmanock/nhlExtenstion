(function(){
  // var today = new Date();
  // var dd = today.getDate();
  // var mm = today.getMonth()+1;
  // var yyyy = today.getFullYear();
  // if(dd < 10){
  //   dd = '0'+dd;
  // }
  // if(mm < 10){
  //   mm = '0'+mm;
  // }
  // today = yyyy+ '-'+mm+'-'+dd;
  // var Url = 'http://sports.yahoo.com/nhl/scoreboard/?date='+today;
  var Reader = function(){
    var Url = 'http://sports.yahoo.com/nhl/scoreboard/?date=';
    var gamesHolder = $('.games');
    var beforeFeed = '<ul>';
    var afterFeed = '</ul>';
    var beforeFeedGame = '<li>';
    var afterFeedGame = '</li>';

    var feed = {
      xml:'',
      init:function(){
        this.bindUI();
        this.loadFeed();
      },
      bindUI:function(){
        $('#next').on('click', function(){
          feed.loadFeed();
        });
      },
      loadFeed:function(){
        this.fetchFeed();
      },
      fetchFeed:function(){
        gamesHolder.empty();
        $.ajax({
          url:Url,
          dataType:'xml',
          method:'post',
          beforeSend:function(){},
          success:function(xml){
            feed.populatExt(xml);
          },
          complete:function(){},
        });
      },
      populateExt:function(xml){
        var anchors = beforeFeed;
        $(xml).find('.game').each(function(i,e){
          var time = $(e).find('.time').text();
          var awayTeam = $(e).find('.away').text();
          var homeTeam = $(e).find('.home').text();
          var score = $(e).find('.score a').text();

          var anchor = beforFeedItem +time + awayTeam+homeTeam+score;
          anchors +=anchor;
        });
        anchors += afterFeed;
        gameHolder.append(anchors);
      }
    };
    return feed;
  };

  $(function(){
    var start = new Reader();
    start.init();
  });
})();
