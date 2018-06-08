import React from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

class Main extends React.Component {
  renderTabs = () => {
    const sections = [
      {
        content: <PageOne key="Page One" title="Page One" navigator={this.props.navigator} />,
        title: 'Dude',
        icon: 'md-info'
      },
      {
        content: <PageTwo key="Page Two" title="Page Two" navigator={this.props.navigator} />,
        title: 'Collection',
        icon: 'md-link'
      },
      {
        content: <PageThree key="Page Three" title="Page Three" navigator={this.props.navigator} />,
        title: 'Egg',
        icon: 'md-info'
      },
      {
        content: <PageThree key="Page Three" title="Page Three" navigator={this.props.navigator} />,
        title: 'Settings',
        icon: 'md-settings'
      }
    ];

    return sections.map((section) => ({
      content: section.content,
      tab: <Tab key={section.title} label={section.title} icon={section.icon} />
    }));
  }

  render() {
    return (
      <Page>
        <Tabbar
          initialIndex={0}
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}

module.exports = Main;
