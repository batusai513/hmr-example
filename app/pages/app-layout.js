import React, { Component, PropTypes } from 'react';

class Layout extends Component {
  render(){
    return(
      <div className="layout-root">
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
