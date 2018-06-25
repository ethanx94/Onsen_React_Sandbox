import React from 'react';
import { Page, Button } from 'react-onsenui';

import PageFour from './PageFour';
import Header from '../components/Header';
import contextWrap from '../contextWrap';
import { fetchJSON } from '../util/fetchJSON';

class Dude extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      count: 0,
      notWednesdayDude: {},
      todaysDudes: [],
      token: `${APPID}|${APPSECRET}`,
    };
  }

  async componentWillMount() {
    const notWedUrl = `https://graph.facebook.com/v3.0/1726444857365752/photos?fields=images&access_token=${this.state.token}`;
    const notWednesdayDude = (await fetchJSON(notWedUrl)).data[0].images[0];
    this.setState({
      notWednesdayDude,
      isLoading: false,
    });
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
    const { todaysDudes, notWednesdayDude, isLoading } = this.state;
    const { isWednesday } = this.props.context;
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div style={{ padding: '0 10px' }}>
          <br />
          <p>
            {!isLoading &&
              <img src={isWednesday ? todaysDudes[Object.keys(todaysDudes)[currentDude]].source : notWednesdayDude.source} />}
            {JSON.stringify(this.state)}
          </p>
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

export default contextWrap(Dude);
