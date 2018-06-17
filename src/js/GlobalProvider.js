import React, { Component } from 'react';
import { GlobalContext } from './GlobalContext';

export default class GlobalProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isWednesday: (new Date().getDay() === 3),
      godmode: false,
    };
  }

  render() {
    const { isWednesday, godmode } = this.state;
    return (
      <GlobalContext.Provider value={{
        isWednesday,
        godmode,
      }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
