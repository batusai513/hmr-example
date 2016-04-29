import React, {createClass, PropTypes} from 'react';
import {Link} from 'react-router';

const Layout = createClass({
  displayName: 'app-layout',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div className="layout-root">
        {this.props.children}
      </div>
    );
  }
});

export default Layout;
