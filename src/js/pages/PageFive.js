import React from "react";
import {Page, Toolbar, BackButton, Button} from 'react-onsenui';

import Header from '../components/Header';

class PageFive extends React.Component {
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
                <Button onClick={this.popPage.bind(this)}>Pop page</Button>
            </p>
        </Page>
        );
    }
};

module.exports = PageFive;