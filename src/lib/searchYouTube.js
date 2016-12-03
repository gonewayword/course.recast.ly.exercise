var searchYouTube = (options, callback) => {
  // TODO

  $.get('https://www.googleapis.com/youtube/v3/search', {
    q: options.query,
    maxResults: options.max,
    videoEmbeddable: 'true',
    type: 'video',
    part: 'snippet',
    key: options.key || window.YOUTUBE_API_KEY
  })
  .done(function(data) {
    console.log('successful AJAX call');
    if (callback) {
      callback(data.items);
    }
  })
  .fail(function(data) {
    console.error('chatterbox: Failed to send message');
  });
};

window.searchYouTube = searchYouTube;
