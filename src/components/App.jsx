class App extends React.Component {
  constructor(props) {
    super(props);
    this.grabYouTube = this.grabYouTube.bind(this);
    this.onVideoSearch = this.onVideoSearch.bind(this);
    this.onSearchClick = _.debounce(this.onSearchClick, 400);
    this.options = {
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      query: 'dogs',
      videoEmbeddable: true,
      type: 'video',
      part: 'snippet'
    };
    this.state = {
      currentVideo: null,
      videos: []
    };
  }

//humanityHasReachedSingularityWeAreBecomingOneWithTheMachines(earth).bind(universe)
  componentDidMount() {
    this.grabYouTube();
  }

  onVideoListEntryClick(i) {
    this.setState({currentVideo: this.state.videoList[i]});
  }

  grabYouTube (options) {
    // var options = this.options;
    this.props.searchYouTube(options, (videos) =>
     this.setState({
       videos: videos,
       currentVideo: videos[0]
     })
   );
  }



  onVideoSearch(query) {
    // console.log(videos);
    searchYouTube({
      query: query,
      max: 5
    }, (videos) =>
     this.setState({
       videoList: videos,
       currentVideo: videos[0]
     })
   );
  }

  onSearchClick(searchTerm) {
    this.options.query = searchTerm;
    this.grabYouTube(this.options);
  }

  render() {

    return <div>
        <Nav searchEvent={this.onSearchClick.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList
            whenClicked={this.onVideoListEntryClick.bind(this)}
            videos={this.state.videoList}
          />
        </div>
      </div>;
  }
}

// onVideoListEntryClick(i) {
//   this.setState({currentVideo: this.state.videoList[i]});
// }

// grabVideos(options) {
//   var {q: queryText} = options;
//   if (queryText !== '') {
//     window.searchYouTube(options, (queryResponse) => {
//       this.setState({
//         videoList: queryResponse.items,
//         nowPlaying: queryResponse.items[0]
//       });
//     });
//   }
//   else {
//     this.setState({
//       nowPlaying: null,
//       videoList: null
//     });
//   }
// }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
