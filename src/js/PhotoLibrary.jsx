import React , {useState , useEffect} from "react"; 
import axios from   "axios";


//experimental photoswipe imports ***
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'





function PhotoLibrary(){


    //state that will store all our imgs 
    const [imgs , setImgs] = useState([])

    //state for keeping track of how to sort imgs 
    const [typeOfImg , setTypeOfImg] = useState('all'); //starts as both so all imgs are loaded / rendered initially

    const [loading , setLoading] = useState(true) // are we loading imgs 

     //axios logic

     //this function gets the imgs in our backend then formats them into a new object with the type of the img 
     //and the img itself 
     async function getImgs(){



        //get the imgs from the backend
        const res = await axios.get("/photos")




        //grab just the values from the array the backend returns
        const arrOfImgs = Object.values(res.data.data);
        const sortImgsWithSize = new Array(arrOfImgs.length)

        const cachedImgs = arrOfImgs.map((img , i)=> new Promise((resolve)=>{
            const tempImg = new Image()
            tempImg.onload = function(){
                sortImgsWithSize[i]= {
                    width : this.width,
                    height : this.height,
                    type : img.split("__")[0],
                    img  : `uploads/${img}`
                }

                
                resolve()
            }
            tempImg.src = `uploads/${img}`;
        }))


        await Promise.all(cachedImgs);
        console.log(sortImgsWithSize)
        setLoading(false);
        
        //then once our array of objects is ready we set it to state 
        setImgs(sortImgsWithSize);
     }

     //getImgs(); //this runs forever so we need to call it just once 

     //useEffect here with an empty dependency array because we want our get request to only run once 
     useEffect(()=>{
        getImgs() //makes a request to our back end api to grab all imgs stored on our backend 
     },[])

     //handle radio button state change for the sake of sorting 

     function handleChange(e){

        if(!e.target.checked){ //if its not checked dont run (for initial radio button state)
            return
        }
       let type = e.target.value
       //console.log(type)
       setTypeOfImg(type)
        
     }

     //console.log(typeOfImg)

    
     
     

     

    //Things to do. 
    //sorting between both  makeup and hair 
    return (
       <>
       { !loading ? 
       ( <div className="react-photo-library__photo-section">
       <Gallery>
        {
            
            imgs.map((img , i)=>{

                if(typeOfImg == img.type || typeOfImg === "all"){ //this will grab all the imgs that
                    return (
                        <Item
                        original={img.img}
                        thumbnail={img.img}
                        width={img.width}
                        height={img.height}
                        key={Date.now() +i}
                        >
                            {({ ref, open }) => (
                                 <img ref={ref} onClick={open} src={img.img} />
                            )}
                        </Item>
                    )
                }
                
            })
        }
       </Gallery>
       </div>) : <p>Loading</p>
       }

       <div className="react-photo-library__img-sorting-radio">

        <input
        className="img-sorting-radio__button"
        id="both"
        type="radio"
        name="imgType"
        value="both"
        onChange={handleChange}
        />
        <label className="img-sorting-radio__button-label" htmlFor="both">Both</label>

        <input
        className="img-sorting-radio__button"
        id="makeup"
        type="radio"
        name="imgType"
        value="makeup"
        onChange={handleChange}
        />
        <label className="img-sorting-radio__button-label" htmlFor="makeup">Makeup</label>

        <input
            className="img-sorting-radio__button"
            id="hair"
            type="radio"
            name="imgType"
            value="hair"
            onChange={handleChange}
            />
        <label className="img-sorting-radio__button-label" htmlFor="hair">Hairstyles</label>



        <input
            className="img-sorting-radio__button"
            id="all"
            type="radio"
            name="imgType"
            value="all"
            onChange={handleChange}
            />
        <label className="img-sorting-radio__button-label" htmlFor="all">All</label>

       </div>
       
       </>
    )

}


export default PhotoLibrary