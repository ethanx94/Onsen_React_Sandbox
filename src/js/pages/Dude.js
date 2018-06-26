import React from 'react';
import { Page, Button } from 'react-onsenui';

import PageFour from './PageFour';
import Header from '../components/Header';
import contextWrap from '../contextWrap';
import { fetchJSON } from '../util/fetchJSON';

class Dude extends React.Component {
  state = {
    isLoading: true,
    currentDude: 0,
    notWednesdayDude: {},
    token: `${APPID}|${APPSECRET}`,
  };

  async componentWillMount() {
    const notWedUrl = `https://graph.facebook.com/v3.0/1726444857365752/photos?fields=images&access_token=${this.state.token}`;
    const notWednesdayDude = (await fetchJSON(notWedUrl)).data[0].images[0];
    this.setState({
      notWednesdayDude,
      isLoading: false,
    });
  }

  getNextDude = () =>
    this.state.currentDude < 4
      ? this.setState({ currentDude: this.state.currentDude + 1 })
      : this.setState({ currentDude: 0 });

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
    const { notWednesdayDude, isLoading, currentDude } = this.state;
    const { isWednesday, todaysDudes } = this.props.context;
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div style={{ padding: '0 10px' }}>
          <br />
          <p>
            {!isLoading &&
              <img
                style={{ width: '100%' }}
                onClick={this.getNextDude}
                alt="todaysDudes"
                src={isWednesday
                ? todaysDudes[Object.keys(todaysDudes)[currentDude]].source
                : notWednesdayDude.source}
              />}
          </p>
          <p>
            Is today wednesday?: {String(this.props.context.isWednesday)}
          </p>
          <Button onClick={this.pushPage}> Next page </Button>
        </div>
      </Page>
    );
  }
}

export default contextWrap(Dude);
