// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return {term: ""};
  },

  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({term: event.target.value});

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({term: ""});
  },
  // Here we describe this component's render method
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

          <form role="form">

            <strong >Search Term:</strong>
            <input type="text" className="form-control" id="searchTerm"/>
            <br/>
            <strong>Start Year (Optional):</strong>
            <input type="text" className="form-control" id="startYear"/>
            <br/>
            <strong>End Year (Optional):</strong>
            <input type="text" className="form-control" id="endYear"/>
            <br/>
            <button type="submit" className="btn btn-default btn-margin-right" id="runSearch">
              <i className="fa fa-search"></i>
              Search</button>
            <button type="button" className="btn btn-default" id="clearAll">
              <i className="fa fa-trash"></i>
              Clear Results</button>

          </form>

        </div>
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Form;
