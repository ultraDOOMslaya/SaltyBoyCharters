import { TopBar } from '@features/top-bar/top-bar';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Starter from './Starter'

function App(): React.ReactElement {

  return (
    <BrowserRouter>
      <TopBar />
      <Starter />
    </BrowserRouter>
    
  );
}

export default App;