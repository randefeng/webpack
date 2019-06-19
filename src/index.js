 import { cube } from './math.js';
  if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
     }
    
    
  function component() {
   var element = document.createElement('pre');

   element.innerHTML = [
     'Hello webpack!',
     '5 2333cubed is equal to ' + cube(5)
   ].join('\n\n');
    return element;
  }
  function component11111111() {
    var element = document.createElement('pre');
 
    element.innerHTML = [
      'Hello webpack!',
      '5 dddddddddddddddddd is equal to ' + cube(5)
    ].join('\n\n');
     return element;
   }
  document.body.appendChild(component());
