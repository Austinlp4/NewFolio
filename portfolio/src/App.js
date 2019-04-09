import React, { Component } from 'react';
import './App.css';
import smoke from './video/smoke.mp4';
import ReactFullpage from '@fullpage/react-fullpage';


class App extends Component {
  state = {
    ended: false,
  }

  end = (id) => {
    setTimeout(() => {
      // let smoke = document.getElementById('smoke');
      // smoke.remove();
      this.setState({
        ended: true
      })
    }, 7000)
  }

  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }


  render() {
    return (
      <ReactFullpage
        anchors={['firstPage', 'secondPage', 'thirdPage']}
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div className="App">
            <div className='section section1'>
            <section>
              {!this.state.ended ?
              <video src={smoke} autoPlay muted width='90%' height='100%' onEnded={this.end(this.id)} id='smoke'></video>
              :
              null
              }
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
            <div className='section'>

            </div>
        </div>
          )
        }}
        />
    );
  }
}

export default App;
