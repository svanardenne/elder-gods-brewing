import React, { Component } from 'react';
import "react-bootstrap/dist/react-bootstrap.min.js";
import MainNav from './Navbar';
import MainHeader from './MainHeader'
import Divider from './Divider';
import About from './About';
import Book from './Book'
import HopsImg from '../assets/img/hops-elevate.jpg'
import HopsImg2 from '../assets/img/hops-andre-klimke.jpg'
import Cheers from '../assets/img/cheers-elevate.jpg'

class App extends Component {
  
  state = {
    aboutInfo: [
      {
        title: `Only the freshest ingredients`,
        text: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.`,
        img: HopsImg,
        id: 1
      },
      {
        title: `Locally Sourced`,
        text: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.`,
        img: HopsImg2,
        id: 2
      },
      {
        title: `Generations' old recipies`,
        text: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.`,
        img: Cheers,
        id: 3
      }
    ]
    }



  render() {
    return (

      <React.Fragment>
        <header className="App-header">
          <MainNav />
          <MainHeader />
        </header>
        <main className="container-fluid px-0">
          <Divider />
          <section id="about" className="text-center text-white">
            <h2 className="my-5">Our Promise:</h2>
              {this.state.aboutInfo.map(planet => 
              <About
                aboutTitle={planet.title}
                aboutText={planet.text}
                aboutImg={planet.img}
                key={planet.id}
              />
              )}
          </section>
          <section id="book">
            <Book />
          </section>
        </main>
        <footer>

        </footer>
      </React.Fragment>

    );
  }
}

export default App;
