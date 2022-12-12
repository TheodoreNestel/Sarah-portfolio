import React , {useCallback , useState} from "react"; 

import {useDropzone} from 'react-dropzone'

import axios from "axios"





function MyDropZone(){






    const [imgList , setImgList] = useState([])
    const [psw , setPsw] = useState()



    const  handleSubmit = async () => {
        
        const myForm = new FormData()



        imgList.forEach((imgObj , i)=>{
            myForm.append(`files[${i}]` , imgObj.file)
        })
        
       const imgMeta = imgList.map((imgObj , i)=>{
          return  {
                id : imgObj.id,
                type : imgObj.type
            }
        })

        myForm.append("meta", JSON.stringify(imgMeta)) 

        myForm.append("psw" , psw)

        //axios logic

       const res = await axios.post('/upload' , myForm , {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })

        console.log(res)

    }



    const onDrop = useCallback(acceptedFiles =>{
        //do something with files. In our case a post request to our backend after basic pswd and files validation

        setImgList([...imgList , ...acceptedFiles.map((file , i)=>{
            return {
                file,
                type : "both",
                id : Date.now() + i
            }
        })])

       
    }, [imgList]) //use callback lets use save a function definition between renders 



    const {getRootProps , getInputProps, isDragActive} = useDropzone({onDrop}) //destructuring functions inside react-dropzone

    //the actual react component now that we have the functions / callbacks to make our drop zone function 
    return (
        <div className="dropzone-parent-main">

            <div {...getRootProps()} className="dropzone-file-spot">
                <input {...getInputProps()} className="dropzone-file-explorer" />
                    {
                        isDragActive ? 
                        <p className="instructions">Drop Files here</p> : 

                        <p className="instructions">
                           
                       click here to open file explorer or drag items in the box
    
                        
                        </p>
                        


                    }

                
            </div>

            <div>


                    {
                          imgList.map((img , i)=>{

                            const handleChange = (e)=>{
                                if(e.target.checked){
    
                                    //imgList arr of objects 
                                    //img just an object 
                                    //need to update just the object and add it into array 


                                    //img.type = e.target.value
                                    
                                    let newArr = [...imgList]
                                    newArr[i].type = e.target.value

                                    setImgList(newArr)

                                    
                                    
                                }
                            }
    
                            return (
                               <div className="main-dropzone"key={img.id} >


                                    <img
                                    className="main-dropzone__img"
                                    src={URL.createObjectURL(img.file)}
                                    
                                    />


                                <div className="main-dropzone__radioButtons">
                                        <label className="main-dropzone__radio-label">
                                            <input 
                                                type="radio"
                                                name={`select-${img.id}`}
                                                value="hair"
                                                checked={img.type=="hair"}
                                                onChange={handleChange}
                                                className="main-dropzone__radio-input"
                                            />
                                            <p>Hair</p>
                                        </label>
        
                                        
                                        <label className="main-dropzone__radio-label">
                                            <input
                                                type="radio"
                                                name={`select-${img.id}`}
                                                value="makeup"
                                                checked={img.type=="makeup"}
                                                onChange={handleChange}
                                                className="main-dropzone__radio-input"
                                            />
                                            <p>Makeup</p>
                                        </label>
        
                                        
                                        <label className="main-dropzone__radio-label">
                                            <input
                                                type="radio"
                                                name={`select-${img.id}`}
                                                value="both"
                                                checked={img.type =="both"}
                                                onChange={handleChange}
                                                className="main-dropzone__radio-input"
                                            />
                                            <p>Both</p>
                                        </label>

                                    </div>
    
                               </div>
                            )
                        })
                    }

                    {
                        !!imgList.length && (
                            <div className="pseudo-psw-submit-section">
                                <input placeholder="Password" type="password" value={psw} onChange={(e)=> setPsw(e.target.value)}/>

                               {!!psw && <button onClick={handleSubmit}>Submit</button>} 
                            </div>
                        )
                    }

            </div>
                    
        </div>
    )
} //is dragactive checks if a file drag is in process and displays text differently based on that.

   
export default MyDropZone






