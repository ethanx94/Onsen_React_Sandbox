import React from "react";
import {Page, Toolbar, BackButton, Button} from 'react-onsenui';

import PageFive from './PageFive';
import Header from '../components/Header';

class PageFour extends React.Component {

    pushPage() {
        this.props.navigator.pushPage({
            component: PageFive,
            props: {
                key: 'PageFive',
                title: 'Page Five Title',
                back: true
            }
        });
    }

    popPage() {
        this.props.navigator.popPage();
    }

    renderToolbar() {
        return (
            <Header back={this.props.back} title={this.props.title}/>
        );
    }

    render() {
        return (
        <Page renderToolbar={this.renderToolbar.bind(this)}>
            <p style={{textAlign: 'center'}}>
                <Button onClick={this.pushPage.bind(this)}>Push page</Button>
                <Button onClick={this.popPage.bind(this)}>Pop page</Button>
            </p>
        </Page>
        );
    }
};

module.exports = PageFour;