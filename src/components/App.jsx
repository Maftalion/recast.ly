class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currVid: this.props.data[0],
      clickVLE: function(event) {
        console.log(event);
      }
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currVid} state={this.state} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.data} state={this.state} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App; //(window.exampleVideoData);
