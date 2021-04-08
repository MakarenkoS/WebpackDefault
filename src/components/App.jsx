import '../styles/index.scss';
import React from 'react';
import Recipes from './Recipes';
import sword from '../images/sword.png';
import hive from '../images/hive.svg';

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi react!</h1>
        </section>
        <img src={sword} alt="sword" width="250" />
        <img src={hive} alt="hive" width="250" />
        <Recipes/>
      </main>
    </>
  )
}

export default App;