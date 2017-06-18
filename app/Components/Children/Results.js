var React = require('react');

var Results = React.createClass({

  getInitialState: function() {
    return {title: "", date: "", url: "", results: []}
  },

  saveClicker: function(result) {

    this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);

  },

  componentWillReceiveProps: function(nextProps) {
    var self = this;
    var myResults = nextProps.results.map(function(search, i) {
      var saveArticle = self.saveClicker.bind(self, search);
      return <div className="list-group-item" key={i}>
        <a href={search.web_url} target="_blank">{search.headline.main}</a><br/>{search.pub_date}<br/>
        <button type="button" className="btn btn-success panel-inner-button" onClick={saveArticle}>Save</button>
      </div>
    });

    this.setState({results: myResults});
  },

  render: function() {
    return (

      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">
            <strong><i className="fa fa-file-text-o fa-padding-right"></i>Results</strong>
          </h3>
        </div>
        <div className="panel-body">
          {this.state.results}
        </div>
      </div>

    )
  }
});

module.exports = Results;
