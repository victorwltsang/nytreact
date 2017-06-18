var React = require('react');

var Saved = React.createClass({

	getInitialState: function(){
		return {
			savedArticles: []
		}
	},

	deleteClicker: function(result){
		this.props.deleteArticle(result);

	},

	componentWillReceiveProps: function(nextProps){
		var self = this;
		var myResults = nextProps.savedArticles.map(function(search, i){
			var deleteArticle = self.deleteClicker.bind(self, search);
			return <div className="list-group-item" key={i}><a href={search.url} target="_blank">{search.title}</a><br />{search.date}<br /><button type="button" className="btn btn-danger panel-inner-button"  onClick={deleteArticle}>Delete</button></div>
		});

		this.setState({savedArticles: myResults});
	},

	render: function(){

		return(

			<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title"><strong><i className="fa fa-cloud-download fa-padding-right"></i>Saved Articles</strong></h3>
				</div>
				<div className="panel-body">

					{this.state.savedArticles}
				</div>
			</div>

		)
	}
});


module.exports = Saved;
