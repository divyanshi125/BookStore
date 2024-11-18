import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/footer';


function App() {
  return (<>
    <div>
      <Navbar/>
    <Banner />
    <Freebook/>
    <Footer/></div>
    </>
  );
}

export default App;