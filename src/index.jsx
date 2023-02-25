import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {palettes} from './palettes.js';
import SchemeColor from './components/SchemeColor/SchemeColor';
import Palette from './components/Palette/Palette';

// Reseni bodu f.
//const paletteOneColors = palettes[0].colors.map((color) => <div className="scheme-color" key={color} style={{ backgroundColor: color }} >{ color }</div>)

// Reseni bodu h.
const paletteOneColors = palettes[0].colors.map((color) => <SchemeColor key={color} color={color}/>)

console.log(paletteOneColors);

// Reseni bodu g.
//const paletteTwoColors = palettes[1].colors.map((color) => <div className="scheme-color" key={color} style={{ backgroundColor: color }} >{ color }</div>)

// Reseni bodu h.
const paletteTwoColors = palettes[1].colors.map((color) => <SchemeColor key={color} color={color}/>)

const App = () => {
  return (
    <>
      <div className="container">
        <header>
          <h1>Barevné palety</h1>
        </header>
        <main>
          {palettes.map((palette) => (
            <Palette 
              paletteData={palette}
              key={palette.name}
            />
          ))}
        </main>
        <footer>
          <p>Czechitas, Digitální akademie: Web</p>
        </footer>
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
