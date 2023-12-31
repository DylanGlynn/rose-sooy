import './Rose+Sooy.css';
import { ApplicationViews } from './components/views/ApplicationViews';
import { Footer } from './components/nav/Footer';
import { NavBar } from './components/nav/NavBar';

function App() {
     return (
          /*     <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div> */
          <>
               <NavBar />
               <ApplicationViews />
               <div className='footer__spacer' />
               <Footer />
          </>
     );
}

export default App;
