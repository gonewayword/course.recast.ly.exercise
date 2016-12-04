class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <Search searchEvent={this.props.searchEvent}/>
        </div>
      </nav>
    ;
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
