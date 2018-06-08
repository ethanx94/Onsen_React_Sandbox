import React from 'react';
import { Page } from 'react-onsenui';
import Header from '../components/Header';

class PageTwo extends React.Component {
  renderToolbar = () => <Header title={this.props.title} />;

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <p>
          Page 2
        </p>
      </Page>
    );
  }
}

module.exports = PageTwo;
