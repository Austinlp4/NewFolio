import React, { Component } from 'react';
import './App.css';
import smoke from './video/smoke.mp4';
import ReactFullpage from '@fullpage/react-fullpage';

const pluginWrapper = () => {
  require('fullpage.js/vendors/scrolloverflow');
  require('./statics/fullpage.scrollHorizontally.min');
};


class App extends Component {
  state = {
    ended: false,
  }

  end = (id) => {
    setTimeout(() => {
      let smoke = document.getElementById('smoke');
      smoke.remove();
      this.setState({
        ended: !this.state.ended
      })
    }, 7000)
  }


  render() {
    return (
      <div className="App">
        <section>
          <video src={smoke} autoPlay muted width='90%' height='100%' onEnded={this.end(this.id)} id='smoke'></video>
          {this.state.ended 
            ? 
            <div className='grad-container1'>
              <div className='grad-bar1'></div> 
              <div className='grad-bar2'></div> 
              <div className='grad-bar3'></div> 
            </div>
            : 
            null}
          <h1>
            <span>A</span>
            <span>U</span>
            <span>S</span>
            <span>T</span>
            <span>I</span>
            <span>N</span>
            <span>&nbsp;</span>
            <span>P</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
            <span>E</span>
            <span>R</span>
            <span>G</span>
            <span>R</span>
            <span>A</span>
            <span>S</span>
            <span>T</span>
          </h1>
          {this.state.ended 
            ? 
            <div className='grad-container2'>
              <div className='grad-bar4'> About Me </div> 
              <div className='grad-bar5'> Projects </div> 
              <div className='grad-bar6'> Contact </div> 
            </div>
            : 
            null}
        </section>
      </div>
    );
  }
}

export default App;
