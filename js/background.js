(function(){
  var NhlReader = function(){
    var feedUrl = 'http://live.nhl.com/GameData/SeasonSchedule-20152016.json';
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
        perfomrAjaxSetup();
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
          dataType:'json',
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
        console.log(xml);
      }
    };
    return feed;
  };
  $(function(){
    var start = new NhlReader();
    start.init();
  });
})();
