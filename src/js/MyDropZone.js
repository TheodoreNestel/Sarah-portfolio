import React , {useCallback} from "react"; 

import {useDropzone} from 'react-dropzone'





function MyDropZone(){

    const onDrop = useCallback(acceptedFiles =>{
        //do something with files. In our case a post request to our backend after basic pswd and files validation

    }, []) //use callback lets use save a function definition between renders 

    const {getRootProps , getInputProps, isDragActive} = useDropzone({onDrop}) //destructuring functions inside react-dropzone

    //the actual react component now that we have the functions / callbacks to make our drop zone function 
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
                {
                    isDragActive ? 
                    <p>Drop Files here</p> :

                    <p>drag files here or click to open file explorer</p>
                }
           
        </div>
    )
} //is dragactive checks if a file drag is in process and displays text differently based on that.

   
export default MyDropZone