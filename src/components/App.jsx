class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videos: []
    };
  }
  onVideoListEntryClick(i) {
   this.setState({currentVideo: this.state.videoList[i]});
 }


 onVideoSearch(query){
   searchYouTube({
     query: query,
     max: 5
   }, (videos) =>
     this.setState({
       videoList: videos,
       currentVideo: videos[0]
     })
   )
 }

 componentDidMount() {
   var options = {
     query: 'puppies',
     max: 5
   }
   searchYouTube(options, (videos) =>
     this.setState({
       videoList: videos,
       currentVideo: videos[0]
     })
   )
 }

  render() {

    return <div>
        <Nav search={_.debounce((input) => this.onVideoSearch(input), 1000)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList
            whenClicked={this.onVideoListEntryClick.bind(this)}
            videoList={this.state.videoList}
          />
        </div>
      </div>
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
