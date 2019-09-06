import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <div className="container">
          <div className="row ">
            <div className="col-lg-12 mt-4">

              <Route path="/" exact component={Home} />
              <Route path="/Favorites" component={Favorites} />

            </div>
          </div>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
