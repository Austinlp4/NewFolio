import React, { Component } from 'react';
import './App.css';
import './About.css';
import smoke from './video/smoke.mp4';
import ReactFullpage from '@fullpage/react-fullpage';
import propic from './images/profile.png';
import js from './images/grad-js.png';
import react from './images/grad-react.png';
import redux from './images/grad-redux.png';
import node from './images/grad-node.png';
import git from './images/grad-git.png';
import c from './images/grad-c.png';
import jest from './images/grad-jest.png';
import python from './images/grad-python.png';
import photoshop from './images/grad-c.png';
import xd from './images/grad-jest.png';


class App extends Component {
  state = {
    ended: false,
    about: false
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
    if(destination.index === 1){
      this.setState({
        about: true
      })
    }
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
                    <a href="https://www.linkedin.com/in/austinlp/" target="_blank"><div className='linkedin'></div></a>
                    <a href="https://www.instagram.com/austin_pendergrast/" target="_blank"><div className='insta'></div></a>
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
                  <div className="barcont">
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                  </div>
                  {this.state.about ?
                  (
                    <div className="imgcont">
                      <img src={propic} alt="profile" />
                    </div>
                  )
                 : null
                }
                  
                  <div className="contentcont">
                    <h4 className='aboutheader'>About Me</h4>
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
                    <div>
                    <h4 className='location'>Location:</h4>
                    <h5 className='faytown'>Fayetteville, AR</h5>
                    </div>
                  </div>
                  {this.state.about ? (<div>
                      <div className="grad-container3">
                        <div className="grad-bar-a1">Contact</div>
                        <div className="grad-bar-a2">Skills</div>
                        <div className="grad-bar-a3">
                        {' '}
                        <a href="#About">About Me</a>
                      </div>
                      <div className="grad-bar-a4"> Projects </div>
                      <div className="grad-bar-a5"> Blog </div>
                      </div>
                      {/* <div>
                        <h5 className="scrolldown"> Scroll Down</h5>
                      </div> */}
                  </div>) : null}
                </div>
              </div>
              <div className="section">
                  <div className="skills">
                  <div className="img-cont">
                    <div className="img-div-1">
                      <img src={js} alt=""/>
                      <img src={react} alt=""/>
                      <img src={redux} alt=""/>
                      <img src={node} alt=""/>
                    </div>
                    <div className="img-div-2">
                      <img src={git} alt=""/>
                      <img src={c} alt=""/>
                      <img src={python} alt=""/>
                      <img src={jest} alt=""/>
                    </div>
                    <div className="img-div-3">
                      <img src={photoshop} alt=""/>
                      <img src={xd} alt=""/>
                    </div>
                    </div>
                  </div>
                </div>
              <div className="section">
                <div className="projects">
                    
                </div>
              </div>
              <div className="section">
                <div className="blog">
                    
                </div>
              </div>
              <div className="section">
                <div className="contact">
                    
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
