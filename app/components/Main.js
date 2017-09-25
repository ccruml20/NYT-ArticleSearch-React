import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      results: ""
    };
    this.setTerm = this.setTerm.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">NYT Article Search!</h2>
            <p className="text-center">
              <em>Search the New York Times (ex: "Pop Culture").</em>
            </p>
          </div>
          <div className="col-md-6">
            <Form setTerm={this.setTerm} />
          </div>
          <div className="col-md-6">
            <Results address={this.state.results} />
          </div>
        </div>
      </div>
    );
  }
}
// Export the componen back for use in other files
export default Main;
