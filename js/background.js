(function(){
  var FeedReader = function(){
    var feedUrl = 'https://www.sports.yahoo.com/nhl/scorboard';
    var newsHolder = $('.news-feed');
    var beforeFeed = '<ul>';
    var afterFeed = '</ul>';
    var beforeFeedItem = '<li>';
    var afterFeedItem = '</li>';

    function performAjaxSetup(){
      $(document).ajaxStart(function(){
        $('#reload').html('Loading.. Please Wait');
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
          dataType:'html',
          method:'post',
          beforeSend:function(){},
          success:function(xml){

            feed.populateExt(xml);
          },
          complete:function(){},
        });
      },
      populateExt:function(xml){
        var anchors = beforeFeed;
        
      }
    };
    return feed;
  };
  $(function(){
    var Feed = new FeedReader();
    Feed.init();
  });
})();
