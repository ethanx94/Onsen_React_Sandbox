import React from 'react';
import { Page } from 'react-onsenui';
import contextWrap from '../contextWrap';
import Header from '../components/Header';

class PageTwo extends React.Component {
  renderToolbar = () => <Header title={this.props.title} />;

  state = { currentDude: 0 };
  render() {
    const { currentDude } = this.state;
    const { notWednesdayDude, isWednesday, todaysDudes, isLoading } = this.props.context;
    console.log(this.props.context);

    return (
      <Page renderToolbar={this.renderToolbar}>
        <div style={{ padding: '0 10px' }}>
          <br />
            {!isLoading && <img src={todaysDudes[Object.keys(todaysDudes)[currentDude]].source} />}
          </div>
      </Page>
    );
  }
}

module.exports = contextWrap(PageTwo);
