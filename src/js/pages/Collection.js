import React from 'react';
import { Page } from 'react-onsenui';
import Gallery from 'react-grid-gallery';

import contextWrap from '../contextWrap';
import Header from '../components/Header';

class PageTwo extends React.Component {
  renderToolbar = () => <Header title={`${this.props.title} (${this.state.myCollection.length})`} />;
  constructor(props) {
    super(props);
    const myCollection = JSON.parse(localStorage.getItem('dudesCollection')) || [];
    if (myCollection.length) {
      myCollection.map(d => Object.assign(d, { src: d.source }));
    }
    this.state = {
      myCollection,
    };
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div style={{ padding: '0 10px' }}>
          <br />
          {/* {JSON.stringify(this.state.myCollection)} */}
          <Gallery images={this.state.myCollection} />
        </div>
      </Page>
    );
  }
}

export default contextWrap(PageTwo);
