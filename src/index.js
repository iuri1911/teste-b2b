import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/main.sass'
import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typewriter', {
  strings: ['Grains.', 'Agricultural Inputs.', 'Animal Protein.', 'Energy and Mining.'],
  autoStart: true,
  loop: true
});