import React, {createClass} from 'react';
const Component = createClass({
  render(){
    return (
      <div className="admin-layout">
        <header className="main-header">
          <div className="main-header__item">
            <h1 className="main-header__logo">
              No Encontrado
            </h1>
          </div>

        </header>

        <MainSidebar />

        <div className="app-container">
          <article className="text-center">
            <h1>Oops!, we could not find what you were looking for</h1>
          </article>
        </div>
      </div>
    );
  }
});

export default Component;
