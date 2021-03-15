import React, { Component } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { Router, Switch, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div class="flex py-8 mt-28 mx-auto bg-white space-y-2 sm:py-0 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img class="w-1/2" src={process.env.PUBLIC_URL + '/images/walkie-screen.jpg'} />
          < div class="w-1/2 text-left px-20">
            <h1 class="text-4xl py-5 font-extrabold tracking-wide leading-snug">Simple, real time voice chat for your remote team.</h1>
            <h3 class="text-xl">Walkie is a better way to communicate for distributed teams that don't want to spend all day in dry text channels.</h3>
            <form class="my-5">
              <input class="border border-r-0 rounded-l-lg py-3 border-gray-300" type="text" placeholder="   > work email"></input>
              <button class="border border-black bg-black text-white px-3 py-3 font-bold rounded-r-lg">Become Founding User</button>
            </form>
          </div>
        </div>
        <div class="bg-black flex text-white py-30">
          <div>
            <img src={process.env.PUBLIC_URL + '/images/voice-only.png'} />
            <h2 class="text-2xl">Voice Only</h2>
            <p>A voice only communication tool that enables teams to communicate with emotion and purpose.</p>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/distraction-free.png'} />
            <h2>Distraction Free</h2>
            <p>No more ⌘-tabbing. Spend less time in slack channels and more time on the work that actually matters.</p>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/closer-together.png'} />
            <h2>Closer Together</h2>
            <p>Subtle hints of presence so that even the most distributed teams feel connected across continents.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
