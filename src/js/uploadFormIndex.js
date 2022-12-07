import * as ReactDOM from 'react-dom/client';
import MyDropZone from './MyDropZone';



window.addEventListener("load",()=>{


    //we anchor the react app to the container alocated for it in our html structure
   const root = ReactDOM.createRoot(document.querySelector("#uploadReactFormRoot"))

   //then we call render to load our PhotoLibrary app.
   root.render(<MyDropZone />) //we must call this as a component 




})