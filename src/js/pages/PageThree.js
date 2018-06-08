import React from 'react';
import { Page } from 'react-onsenui';

import Header from '../components/Header';

class PageThree extends React.Component {
  renderToolbar = () => <Header title={this.props.title} />;

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p>
          Page 3
        </p>
      </Page>
    );
  }
}

module.exports = PageThree;
