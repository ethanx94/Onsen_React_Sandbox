import React from 'react';
import { Page, List, ListItem, Switch } from 'react-onsenui';

import Header from '../components/Header';

class Settings extends React.Component {
  state = {
    listViewData: [
      {
        key: 'onAlwaysWed', displayItems: ['It\'s Always Wednesday in Philadelphia'], type: 'toggle', enabled: false
      },
      {
        key: 'onDudesClear', displayItems: ['Clear Dudes'], type: 'alert',
      },
    ],
  };

  renderToolbar = () => <Header title={this.props.title} />;

  onAlwaysWed = () => {
    // Keep our listView modular
    const onAlwaysWedIdx = this.state.listViewData.findIndex(d => d.key === 'onAlwaysWed');
    this.state.listViewData[onAlwaysWedIdx].enabled = !this.state.listViewData[onAlwaysWedIdx].enabled;
    localStorage.setItem('godmode', JSON.stringify({ value: this.state.listViewData[onAlwaysWedIdx].enabled }));
    this.setState(this.state);
  }

  onDudesClear = () => {
    // TODO: Call Alert Prompt
    localStorage.removeItem('dudesCollection');
    console.log('dudesClearPressed');
  }

  _renderRow = row =>
    <ListItem tappable onClick={this[row.key]}>
      <div className="center">
        {row.displayItems}
      </div>
      <div className="right">
        {row.type === 'toggle' && <Switch checked={row.enabled} />}
      </div>
    </ListItem>

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <List
          dataSource={this.state.listViewData}
          renderRow={this._renderRow}
        />
      </Page>
    );
  }
}

export default Settings;
