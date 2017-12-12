import React, { Component } from "react";
import PropTypes from "prop-types";

class Content extends Component {
  constructor(props) {
    super(props);
  }
//Se evidencia modularidad en el código, no logré ver la app desplegada
  render() {
    var topGames = this.props.topGames;
    return (
      <div className="content">
        <div className="container">
          <header className="jumbotron my-4">
            <h1 className="display-3">Welcome to ShareThisGame!</h1>
            <p className="lead">
              ShareThisGame is a Website where you can arrange your game library and change games with other users.
            </p>
          </header>
          {topGames.length ?
            <div>
              <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={topGames[0].cover.url}
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">{topGames[0].name}</h4>
                    </div>
                  </div>
                </div>

              
              </div>
            </div>
            : "" }
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  topGames: PropTypes.arrayOf(Object).isRequired
};

export default Content;
