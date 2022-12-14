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


     //axios logic

     //this function gets the imgs in our backend then formats them into a new object with the type of the img 
     //and the img itself 
     async function getImgs(){

        //get the imgs from the backend
        const res = await axios.get("/photos")


        //grab just the values from the array the backend returns
        const arrOfImgs = Object.values(res.data.data);
        

        //formats the entries into new objects containing a file path and the type of img in two separate keys
        const sortedArrOfImgs = arrOfImgs.map((img)=>{
            const imgType = img.substring(0, img.indexOf('__'));
                return {
                    type : imgType ,
                    img  : `uploads/${img}`
                }
        })

        //then once our array of objects is ready we set it to state 
        setImgs(sortedArrOfImgs);
     }

     //getImgs(); //this runs forever so we need to call it just once 

     //useEffect here with an empty dependency array because we want our get request to only run once 
     useEffect(()=>{
        getImgs() //makes a request to our back end api to grab all imgs stored on our backend 
     },[])

     //handle radio button state change for the sake of sorting 

     function handleChange(e){
       let type = e.target.value
       //console.log(type)
       setTypeOfImg(type)
        
     }

     //console.log(typeOfImg)

    

     

     

    //Things to do. 
    //sorting between both  makeup and hair 
    return (
       <>
       {
       <Gallery classname="wowow">
        {
            
            imgs.map((img)=>{

                if(typeOfImg == img.type || typeOfImg === "all"){ //this will grab all the imgs that
                    return (
                        <Item
                        original={img.img}
                        thumbnail={img.img}
                        width="1024"
                        height="768"
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
       }

       <div className="img-sorting-radio">

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