// Include React
var React = require('react');

var Search = React.createClass({

  getInitialState: function() {
    return {topic: "", startYear: "", endYear: ""}
  },

  handleChange: function(event) {

    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);

  },

  handleClick: function() {

    this.props.setTerm(this.state.topic, this.state.startYear, this.state.endYear);

  },

  render: function() {

    return (

      <div className="panel panel-primary">
        <div className="panel-heading panel-heading-custom">
          <h3 className="panel-title">
            <strong>
              <i className="fa  fa-search fa-padding-right"></i>
              Search Parameters</strong>
          </h3>
        </div>
        <div className="panel-body">

          <form>
            <div className="form-group">
              <h4 className="">
                <strong>Topic</strong>
              </h4>
              <input type="text" className="form-control" id="topic" onChange={this.handleChange} required/>
              <br/>

              <h4 className="">
                <strong>Start Year (Required)</strong>
              </h4>
              <input type="text" className="form-control" id="startYear" onChange={this.handleChange} required/>
              <br/>

              <h4 className="">
                <strong>End Year (Required)</strong>
              </h4>
              <input type="text" className="form-control" id="endYear" onChange={this.handleChange} required/>
              <br/>

              <button type="button" className="btn btn-lg btn-primary" onClick={this.handleClick}>
                <i className="fa fa-search"></i>&nbsp;Search</button>
            </div>

          </form>
        </div>
      </div>
    )
  }
});

module.exports = Search;
