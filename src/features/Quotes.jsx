/* eslint-disable react/prop-types */
import React from "react";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.randomizeQuote();
  }
  render() {
    return (
      <div className="bg-danger min-vh-100 d-flex align-items-center">
        <div className="container-fluid w-50" id="wrapper">
          <div className="d-flex flex-column align-items-center">
            <div className="card shadow-lg p-5 mb-3" id="quote-box">
              <div className="text-center mb-3">
                <h4 id="text">
                  {this.props.quote.quote};
                </h4>
              </div>
              <div className="text-end">
                <p id="author">{this.props.quote.author}</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <a
                    id="tweet-quote"
                    className="btn btn-danger"
                    target="_blank"
                    href={`http://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.props.quote.quote}"+${this.props.quote.author}`}
                    role="button"
                  >
                    Tweet
                  </a>
                </div>
                <div className="col-md-6 text-end">
                  <button className="btn btn-danger" onClick={this.handleClick} id="new-quote">
                    New quote
                  </button>
                </div>
              </div>
            </div>
            <div className="text-white">
              <p>
                by <strong>me</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quotes;
