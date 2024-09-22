import React from 'react'
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Sidebar from './Sidebar/Sidebar.js'
import './App.css'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
     <div className='container d-flex gap-3'>
        <Sidebar />
      <div className='d-flex flex-column max-w-100'>
        <Header />
        <Main/>
      </div>
    </div>
  );
}

export default App;
