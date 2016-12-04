class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.onSearchClick(this.refs.inputs.value);
  }

  render () {
    return <div className="search-bar form-inline">
      <input className="form-control" refs='inputs' type="text"/>
      <button className="btn hidden-sm-down" onClick={this.handleClick.bind(this)}>
       <span className="glyphicon glyphicon-search"></span>
     </button>
    </div>;
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
