import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from './components/Landingpage';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Countdown from './components/Countdown';

import './App.css';

function App() {
  var data = {
    "tabs": [
      {
       "trending": [
        {
          "id": 1,
          "title": "1 Number of safety car"
        },
        {
          "id": 2,
          "title": "1 Winnder of Race"
        },
        {
          "id": 3,
          "title": "1 Last in Race"
        },
        {
          "id": 4,
          "title": "1 First in Qualifying"
        }
       ],
      "new": [
        {
          "id": 1,
          "title": "2 Number of safety car"
        },
        {
          "id": 2,
          "title": "2 Winnder of Race"
        },
        {
          "id": 3,
          "title": "2 Last in Race"
        },
        {
          "id": 4,
          "title": "2 First in Qualifying"
        }
      ],
      "popular": [
        {
          "id": 1,
          "title": "3 Number of safety car"
        },
        {
          "id": 2,
          "title": "3 Winnder of Race"
        },
        {
          "id": 3,
          "title": "3 Last in Race"
        },
        {
          "id": 4,
          "title": "3 First in Qualifying"
        }
      ]
      }
    ]
  }
  const [isShown, setIsShown] = useState('none')

  const test = () => {
    console.log(isShown)
    console.log(data.tabs[0].trending)
  }
  
  function detectClick(e) {
    console.log(e.target.className)
    if (e.target.className === 'gray-drop' || e.target.className === 'dropdown-item' || e.target.className === 'tab-head'){
      return
    } else {
      setIsShown('none');
    }
  }
  
  
  return (
    <BrowserRouter>

        <div className='main' onClick={(e) => detectClick(e)}>
          <Header />
          <Tabs data = { data } isShown = {isShown} setIsShown = {setIsShown}/>
          <Countdown/>
          <Landingpage/>
        </div>

    </BrowserRouter>
  );
}

export default App;
