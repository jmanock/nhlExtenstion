(function(){
  var NhlReader = function(){
      // Season Schedule
    //var feedUrl = 'http://live.nhl.com/GameData/SeasonSchedule-20152016.json';
      // Game info based on game id
    //var feedUrl = 'http://live.nhl.com/GameData/20152016/2015020135/PlayByPlay.json';
      // Might be the leaderboard
    var feedUrl = 'http://live.nhle.com/GameData/RegularSeasonScoreboardv3.jsonp';
    var newsHolder = $('.news-feed');
    var beforeFeed = '<ul>';
    var afterFeed = '</ul>';
    var beforFeedItem = '<li>';
    var afterFeedItem = '</li>';

    function performAjaxSetup(){
      $(document).ajaxStart(function(){
        $('#reload').html('Loading.. Please wait');
        $('#reload').off();
      });

      $(document).ajaxComplete(function(event, xhr, settings){
        $('#reload').html('Reload');
        feed.bindUI();
      });
    }

    var feed ={
      xml:'',
      init:function(){
        this.bindUI();
        performAjaxSetup();
        this.loadFeed();
      },
      bindUI:function(){
        $('#reload').on('click', function(){
          feed.loadFeed();
        });
      },
      loadFeed:function(){
        this.fetchFeed();
      },
      fetchFeed:function(){
        newsHolder.empty();
        $.ajax({
          url:feedUrl,
          dataType:'jsonp',
          method:'post',
          beforeSend:function(){},
          success:function(xml){
            feed.populateExt(xml);
          },
          complete:function(){}
        });
      },
      populateExt:function(xml){
        var anchors = beforeFeed;
        /* TODO
          ~ Need Todays date
          ~ The Ids of Todays games
          ~ Maybe the teams
        */
        var today = new Date();
        var dd = today.getDate()-1;
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if(dd < 10){
          dd = '0'+dd;
        }

        if(mm < 10){
          mm = '0'+mm;
        }
        today = yyyy+mm+dd+' '+'20:00:00';
        var This = yyyy+''+''+mm+''+dd+' '+'20:00:00';
        console.log(xml);
        $(xml).each(function(i,e){
          var gameTime = e.est;
          var homeTeam = e.h;
          var awayTeam = e.a;
          var gameID = e.id;

          if(This === gameTime){
            console.log(homeTeam + ' vs '+awayTeam +' '+gameID);
          }

        });
      }
    };
    return feed;
  };
  $(function(){
    var start = new NhlReader();
    start.init();
  });
})();
