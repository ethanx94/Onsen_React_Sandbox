import React from 'react';
import { Toolbar, BackButton } from 'react-onsenui';

class Header extends React.Component {
  render() {
    console.log(this.props.back);
    return (
      <Toolbar>
        <div className={`left ${this.props.back ? '' : 'hidden'}`}><BackButton>Back</BackButton></div>
        <div className="center">{this.props.title}</div>
      </Toolbar>
    );
  }
}

module.exports = Header;
