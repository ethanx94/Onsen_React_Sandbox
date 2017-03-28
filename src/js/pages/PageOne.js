import React from "react";
import {Page, Button, Input} from 'react-onsenui';

import PageFour from './PageFour';
import Header from '../components/Header';

class PageOne extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	increment(event) {
		let x = this.state.count;
		x++;
		this.setState({count: x});
	}

	pushPage() {
		this.props.navigator.pushPage({
			component: PageFour,
			props: {
                key: 'PageFour',
                title: 'Page Four',
                back: true
            }
		});
	}
	renderToolbar() {
		return (
			<Header title={this.props.title}/>
		);
	}
	render() {
		return (
		  <Page renderToolbar={this.renderToolbar.bind(this)}>
			<div style={{padding: '0 10px'}}>
				<br />
				<Button onClick={this.increment.bind(this)}> Increment </Button> <br />
				<p>
					count {this.state.count}
				</p>
				<Button onClick={this.pushPage.bind(this)}> Next page </Button>
			</div>
		</Page>
		);
	}
};

module.exports = PageOne;