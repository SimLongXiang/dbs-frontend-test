import React, { Component } from 'react'
import Header from './components/Header.js'
import Content from './components/Content.js'
import { data } from './assets/info'

export default class Main extends Component {

constructor() {
  super();
  this.state = {
    mobileView: window.innerWidth < 758,
    currentInfo: 0,
    showContent: true
  }
}

onclick(dir){
  this.setState(prev => {
     return {currentInfo: dir === 'right' ? prev.currentInfo + 1: prev.currentInfo - 1}
  });
}

toggleContentHandler = () => {
  this.setState(prev => {
    return {showContent: !prev.showContent}
  });
}

resizeMethod = () => {
  if(window.innerWidth > 758) {
    this.setState(state => ({mobileView: false}));
    } else this.setState(state => ({mobileView: true}));
}

shouldComponentUpdate(nextProps, nextState) {
  if (this.state.mobileView !== nextState.mobileView
    || this.state.currentInfo !== nextState.currentInfo
    || this.state.showContent !== nextState.showContent) {
    return true;
  } return false;
}

componentWillUnmount() {
  window.removeEventListener('resize', this.resizeMethod);
}

render() {
  window.addEventListener('resize', this.resizeMethod);

  return (
    <div className="main-container">
      <Header showContent={this.state.showContent} 
              mobileView={this.state.mobileView} 
              collapse={this.toggleContentHandler} />
        { !this.state.mobileView ?
          data.map(piece => { return <Content data-testid="desktop-content-cmp" piece={piece} key={piece.uuid} /> })
          : <div style={{position:"relative"}}>
              { !this.state.showContent ? null :
                <div>
                  <Content data-testid="mobile-content-cmp" piece={data[this.state.currentInfo]} key={data[this.state.currentInfo].uuid} />
                  <div className="arrow-container">
                    { this.state.currentInfo === 0 ? null :
                      <button onClick={this.onclick.bind(this, "left")}>&#129168;</button> }
                    { this.state.currentInfo === data.length - 1 ? null :
                      <button style={{float:"right"}} 
                      onClick={this.onclick.bind(this, "right")}>&#129170;</button> }
                  </div>
                </div>
              }
            </div>
        }
    </div>
  )
}
}
