import React from 'react';
import { Page, Button } from 'react-onsenui';

import Header from '../components/Header';

class PageFive extends React.Component {
  popPage = () => this.props.navigator.popPage();

  renderToolbar = () => <Header back={this.props.back} title={this.props.title} />;

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{ textAlign: 'center' }}>
          <Button onClick={this.popPage}>Pop page</Button>
        </p>
      </Page>
    );
  }
}

export default PageFive;
