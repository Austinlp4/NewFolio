import React, { Component } from 'react';
import './App.css';
import './About.css';
import smoke from './video/smoke.mp4';
import ReactFullpage from '@fullpage/react-fullpage';
import wall from './images/smkwall.png';
import styled from 'styled-components';
import propic from './images/profile.png';
import insta from './images/instagram.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';

class App extends Component {
  state = {
    ended: false,
  };

  end = id => {
    setTimeout(() => {
      // let smoke = document.getElementById('smoke');
      // smoke.remove();
      this.setState({
        ended: true,
      });
    }, 7000);
  };

  onLeave(origin, destination, direction) {
    console.log('Leaving section ' + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log('After load: ' + destination.index);
  }

  render() {
    return (
      <ReactFullpage
        anchors={['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact']}
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div className="App">
              <div className="section section1">
                <section>
                  {!this.state.ended ? (
                    <video
                      src={smoke}
                      autoPlay
                      muted
                      width="90%"
                      height="100%"
                      onEnded={this.end(this.id)}
                      id="smoke"
                    />
                  ) : null}
                  {this.state.ended ? (
                    <div>
                      <div className="grad-container1">
                        <div className="grad-bar2">Contact</div>
                        <div className="grad-bar3">Skills</div>
                        <div className="grad-bar4">
                        {' '}
                        <a href="#About">About Me</a>
                      </div>
                      <div className="grad-bar5"> Projects </div>
                      <div className="grad-bar6"> Blog </div>
                      </div>
                      {/* <div>
                        <h5 className="scrolldown"> Scroll Down</h5>
                      </div> */}
                    </div>
                  ) : null}
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
                  {this.state.ended ? 
                  (<h2>Full Stack Web Developer</h2>
                    )  : null
                }
                {this.state.ended ? 
                (
                  <div className="social">
                    <a href="https://github.com/Austinlp4" target="_blank"><div className='github'></div></a>
                    <div className='linkedin'></div>
                    <div className='insta'></div>
                  </div>
                ): null  
              }
                {this.state.ended ? 
                (
                  <h5 className="scrolldown"> Scroll Down</h5>
                ): null  
              }
                  {/* {this.state.ended ? (
                    <div className="grad-container2">
                      <div className="grad-bar4">
                        {' '}
                        <a href="#About">About Me</a>
                      </div>
                      <div className="grad-bar5"> Projects </div>
                      <div className="grad-bar6"> Blog </div>
                    </div>
                  ) : null} */}
                </section>
              </div>
              <div className="section">
                <div className="about">
                  <div className="imgcont">
                    <img src={propic} alt="profile" />
                  </div>
                  <div className="contentcont">
                    <h2 className='aboutheader'>About Me</h2>
                    <p className='aboutcont'>
                      I'm currently located in Fayetteville,AR. I have a lovely
                      wife, Sydney, and a beatiful daughter, Cyan (2yrs old). I
                      am an art enthusiast and practice frequently. I think that
                      my eye for detail has made me a better developer, and
                      developing has helped me find an entirely new medium. I
                      constantly try to learn new languages and frameworks, as
                      well as try out new stacks. There most certainly is just
                      not enough time in a day. Currently pursuing knowledge
                      related to UI/UX design, Vue.js, and MongoDB.
                    </p>
                    <h4 className='location'>Location:</h4>
                    <h5 className='faytown'>Fayetteville, AR</h5>
                  </div>
                </div>
                <div className="section">
                  <div>
                    <h2>Skills</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
