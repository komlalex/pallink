import {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";

function CreatePost() {
    const formik = useFormik({
        initialValues: {
            postText: "",
            
        },
        validationSchema: Yup.object({
            postText: Yup.string().trim().max(150).required("Required")
        }),
        onSubmit: (values) => {
            console.log(values);
            const data = new FormData();
            data.append("text", values.postText);
            data.append("files", values.postImage);
            axios.post("posts/create/6450701b28b5bae2ad099a86",data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then ((res) => console.log(res.data))
            .catch(err => console.log(err.message));
        }
    })
  return (
    <div>
    <form onSubmit = {formik.handleSubmit} className='create-post' encType='multipart/form-data'>
        <label htmlFor='postText'>Post Text</label>
        {formik.errors.postText && formik.touched.postText ? <div>{formik.errors.postText}</div> : null}
        <input 
        type='text'
        name="postText"  
        id='postText' 
        onChange={formik.handleChange} 
        value = {formik.values.postText}
        onBlur = {formik.handleBlur}/>

        <label htmlFor='postImage'>Image</label>
        <input 
        type='file' 
        accept='image/*'
        id = 'postImage' 
        name ='postImage' 
        onChange = {(e) => formik.setFieldValue("postImage", e.currentTarget.files[0])} 
        onBlur = {formik.handleBlur}/>

        <button type = "submit">Post</button>
    </form>
    </div>

    
  )
}

export default CreatePost