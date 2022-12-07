import * as ReactDOM from 'react-dom/client';
import PhotoLibrary from './PhotoLibrary';
import MyDropZone from './MyDropZone';




//this mounts our react app to our index.html 
window.addEventListener("load",()=>{


    //we anchor the react app to the container alocated for it in our html structure
   const root = ReactDOM.createRoot(document.querySelector("#react-root"))

   //then we call render to load our PhotoLibrary app.
   root.render(<PhotoLibrary />) //we must call this as a component 


   

   

   ///Other scripts go down here///


})




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////