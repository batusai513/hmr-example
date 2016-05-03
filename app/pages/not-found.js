import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="admin-layout">
        <header className="main-header">
          <div className="main-header__item">
            <h1 className="main-header__logo">
              No Encontrado asdasdasd
            </h1>
          </div>

        </header>

        <div className="app-container">
          <article className="text-center">
            <h1>Oops!, we could not find what you were looking for</h1>
          </article>
        </div>
      </div>
    );
  }
}

export default NotFound;
