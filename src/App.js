import  React from 'react';
import Header from './components/header.js';
import Footer from './components/Footer.js';
import Objectives  from './components/Objectives.js';
export default function App() {
  return (
    <div className='card'>
      <Header/>
      <Objectives/>
      <Footer/>
    </div>
  )
}
