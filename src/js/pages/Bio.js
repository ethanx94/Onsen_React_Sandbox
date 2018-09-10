import React, { Component } from 'react';
import { Page, Card, List, ListHeader, ListItem, Button } from 'react-onsenui';

import Header from '../components/Header';

class Bio extends Component {
  renderToolbar = () => <Header title="Ethan Richardson" />;

  goToResume = () => {
    window.open('https://docs.google.com/document/d/1-c4_aCAzGKqhpSocfLbg9kdgNXOvj0SX03eli3ndMco/edit?usp=sharing', '_blank');
  };

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Card style={{ textAlign: 'center' }}>
          <img src="assets/personal.png" alt="Ethan Richardson" />
          <List>
            <ListHeader>SOFTWARE ENGINEER</ListHeader>
            <ListItem>My name is Ethan Richardson. I am an alumni of Southern Illinois University Carbondale where I majored in Computer Science with minors in Business Administration and Mathematics. While attending SIU, I was an active member of ACM@SIUC where I held a leadership position for two years. While there I attended and coordinated transportation for several hackathons such as HackSI, HackIllinois, GlobalHack, and RedBirdHacks. I have a passion for technology and programming, and it has always been my goal to share that passion with others. I am currently employed at CDM Smith in Carbondale where I do Fullstack Node, Angular, and React development with a specialization in Geospatial technologies.</ListItem>
          </List>
          <Button modifier="large--cta" onClick={this.goToResume}>
            View Resume
          </Button>
        </Card>
      </Page>
    );
  }
}

export default Bio;
