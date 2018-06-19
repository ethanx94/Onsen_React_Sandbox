import React from 'react';
import { Page, Button } from 'react-onsenui';

import PageFour from './PageFour';
import Header from '../components/Header';
import contextWrap from '../contextWrap';

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    let x = this.state.count;
    x++;
    this.setState({ count: x });
  }

  pushPage = () =>
    this.props.navigator.pushPage({
      component: PageFour,
      props: {
        key: 'PageFour',
        title: 'Page Four',
        back: true
      }
    });

  renderToolbar = () => <Header title={this.props.title} />;

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div style={{ padding: '0 10px' }}>
          <br />
          <p>
            Is today wednesday?: {String(this.props.context.isWednesday)}
          </p>
          <br />
          <Button onClick={this.increment}> Increment </Button> <br />
          <p>
            count {this.state.count}
          </p>
          <Button onClick={this.pushPage}> Next page </Button>
        </div>
      </Page>
    );
  }
}

module.exports = contextWrap(PageOne);
