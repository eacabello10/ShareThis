import React, { Component } from "react";
import PropTypes from "prop-types";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var topGames = this.props.topGames;
    console.log(topGames[0].cover.url);
    return (
      <div className="content">
        <div className="container">
          <header className="jumbotron my-4">
            <h1 className="display-3">Welcome to ShareThisGame!</h1>
            <p className="lead">
              ShareThisGame is a Website where you can arrange your game library and change games with other users.
            </p>
          </header>

          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="http://placehold.it/500x325"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="http://placehold.it/500x325"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Explicabo magni sapiente, tempore debitis beatae culpa natus
                    architecto.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="http://placehold.it/500x325"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="http://placehold.it/500x325"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Explicabo magni sapiente, tempore debitis beatae culpa natus
                    architecto.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  
};

export default Content;
