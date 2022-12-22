import React , {useCallback , useState} from "react"; 

import {useDropzone} from 'react-dropzone'

import axios from "axios"


//max size that our back lets us upload : 4194304 bytes// 4mb 


function MyDropZone(){


    //file error checking variables 
    const maxFileSize = 4194304;
    let problemFiles = 0;





    const [imgList , setImgList] = useState([])
    const [psw , setPsw] = useState()




    const  handleSubmit = async () => {


        //basic error checking if there are no files return our of the handlesubmit
        if(imgList.length <= 0){
            alert("Nothing to Upload. Please add files to be uploaded")
            return
        }
        
        const myForm = new FormData()

        //if the img is smaller than our maxFile size keep it in
        const sizeCheckedArr =imgList.filter((img)=> img.file.size < maxFileSize) 

        
        //using the sized checked arr instead of img list *****
        sizeCheckedArr.forEach((imgObj , i)=>{
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

        //axios logic **JUN more error handling needed here I think

        
       const res = await axios.post('/upload' , myForm , {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })

        console.log(res)


        alert("Files uploaded")
       
        setImgList([]) //this works but is a little jarring Xp 
        

    }



    const onDrop = useCallback(acceptedFiles =>{
        //do something with files. In our case a post request to our backend after basic pswd and files validation

        setImgList([...imgList , ...acceptedFiles.map((file , i)=>{

            
                return {
                    file,
                    type : "both",
                    id : Date.now() + i,
                    size : file.size
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
                               <div
                               className="main-dropzone"
                               key={img.id}>



                                    <img
                                    className={`main-dropzone__img ${img.size > maxFileSize ? "too-big" : ""}`}
                                    src={URL.createObjectURL(img.file)}
                                    
                                    />

                                    {(img.size > maxFileSize) && <h4 style={{color:'red'}}>File is too large and will not be uploaded.</h4>}

                                
                                <div
                                className={`main-dropzone__radioButtons ${(img.size > maxFileSize) && "too-big-radio"}`}
                                >
                                  
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
                        
                            <div className="pseudo-psw-submit-section">
                                <input placeholder="Password" type="password" value={psw} onChange={(e)=> setPsw(e.target.value)}/>

                               {!!psw && <button onClick={handleSubmit}>Submit</button>} 
                            </div>
                        
                    }

            </div>
                    
        </div>
    )
} //is dragactive checks if a file drag is in process and displays text differently based on that.

   
export default MyDropZone






