class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currVid: window.exampleVideoData[0],
      allVids: window.exampleVideoData
    };
    this.clickVLE = this.clickVLE.bind(this);
  }

  clickVLE(event) {
    this.setState({currVid: event});
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currVid} state={this.state} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.allVids} state={this.state} click={this.clickVLE.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
