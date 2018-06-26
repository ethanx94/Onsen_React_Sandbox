import React, { Component } from 'react';
import { GlobalContext } from './GlobalContext';
import { fetchJSON } from './util/fetchJSON';

export default class GlobalProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: `${APPID}|${APPSECRET}`,
      isWednesday: (new Date().getDay() === 3),
      godmode: false,
      isLoading: true,
      todaysDudes: [],
      collection: localStorage.getItem('collection'),
    };
  }

  fetchFroggos = async () => {
    let url = `https://graph.facebook.com/v3.0/202537220084441/photos?fields=images,id&limit=100&access_token=${this.state.token}`;
    const { todaysDudes } = this.state;
    try {
      let results = [];
      while (url) {
        const response = await fetchJSON(url);
        results = results.concat(response.data);
        url = response.paging.next;
      }
      for (let i = 0; i < 5; i++) {
        const randomIndex = (Math.random() * results.length | 0);
        // Implement categorization strats here
        const loopDude = results[randomIndex];
        const { id } = loopDude;
        const { source } = loopDude.images[0];
        const thumbnail = findThumbnailDude(loopDude.images);
        todaysDudes.push({
          id,
          source,
          thumbnail,
        });
      }
      const dudesCollection = JSON.parse(localStorage.getItem('dudesCollection')) || [];
      const newDudes = [];
      for (const dude of todaysDudes) {
        if (!dudesCollection.includes(dude)) {
          newDudes.push(dude);
        }
      }
      const finalResults = dudesCollection.concat(newDudes);
      localStorage.setItem('dudesCollection', JSON.stringify(finalResults));
      return this.setState({
        todaysDudes,
        isLoading: false,
      });
    } catch (err) {
      return console.log(err);
    }
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        ...this.state,
        fetchFroggos: this.fetchFroggos,
        toggleGodmode: async () => {
          const curGodmode = !this.state.godmode;
          this.setState({ isLoading: true, godmode: curGodmode });
          if (curGodmode) {
            await this.fetchFroggos();
          }
          this.setState({ isLoading: false, godmode: true, isWednesday: !this.state.isWednesday });
        },
      }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

const findThumbnailDude = (dudeArr) => {
  let minHeight = dudeArr[0].height;
  let sourceUrl = dudeArr[0].source;
  for (const { height, source } of dudeArr) {
    if (height < minHeight) { minHeight = height; sourceUrl = source; }
  }
  return sourceUrl;
};
