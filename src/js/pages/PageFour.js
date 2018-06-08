import React from 'react';
import { Page, Button } from 'react-onsenui';

import PageFive from './PageFive';
import Header from '../components/Header';

class PageFour extends React.Component {
  pushPage = () =>
    this.props.navigator.pushPage({
      component: PageFive,
      props: {
        key: 'PageFive',
        title: 'Page Five Title',
        back: true
      }
    });

  popPage = () => this.props.navigator.popPage();

  renderToolbar = () => <Header back={this.props.back} title={this.props.title} />

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{ textAlign: 'center' }}>
          <Button onClick={this.pushPage}>Push page</Button>
          <Button onClick={this.popPage}>Pop page</Button>
        </p>
      </Page>
    );
  }
}

module.exports = PageFour;
