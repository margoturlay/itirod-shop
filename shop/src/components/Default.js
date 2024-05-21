import React, { Component } from 'react';

class Default extends Component {
  render() {
    const { location } = this.props;
    console.log(this.props);

    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h1 className="display-4">Error</h1>
            <h1 className="display-3">404</h1>
            <h2>Page Not Found</h2>
            <h3>
              The requested URL
              <span className="text-danger"> {location.pathname} </span>
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
