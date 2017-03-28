import React from "react";
import {Page, Tabbar, Tab} from 'react-onsenui';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

class Main extends React.Component {
    renderTabs() {
        const sections = [
            {
                content: <PageOne key='Page One' title='Page One' navigator={this.props.navigator} />,
                title: 'Page One'
            },
            {
                content: <PageTwo key='Page Two' title='Page Two' navigator={this.props.navigator} />,
                title: 'Page Two'
            },
            {
                content: <PageThree key='Page Three' title='Page Three' navigator={this.props.navigator} />,
                title: 'Page Three'
            }
        ];

        return sections.map((section) => {
            return {
                content: section.content,
                tab: <Tab key={section.title} label={section.title} />
            };
        });
    }

    render() {
        return (
            <Page>
                <Tabbar 
                    initialIndex={0}
                    renderTabs={this.renderTabs.bind(this)}
                />
            </Page>
        );
    }
};

module.exports = Main;