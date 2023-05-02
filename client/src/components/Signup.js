import {useState} from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import axios from "axios";

function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().trim().max(15, "Must be 15 characters or less").required("Required"),
            lastName: Yup.string().trim().max(15, "Must be 15 characters or less").required("Required"),
            email: Yup.string().trim().email("Invalid email").required("Required"),
            password: Yup.string().trim().max(15, "Must be 15 characters or less").required("Required")
        }),
        onSubmit: values => {

            const user = {firstname: values.firstName, lastname: values.lastName, email: values.email, password: values.password}
            axios.post("http://localhost:1776/users/register", user)
            .then(res => {
        
            }).catch(err => console.log(err)) 
        }
    })
  return (
    <div className='signup'>
        <h2>Sign Up Form</h2>
    <form onSubmit={formik.handleSubmit}>



        
        <label htmlFor='firstName'>First Name</label>
        {formik.touched.firstName && formik.errors.firstName ? (
            <div className="errorMessage" >{formik.errors.firstName}</div>
        ): null
        }
        <input 
        type='text' 
        id='firstName' 
        name="firstName" 
        onChange={formik.handleChange} 
        value = {formik.values.firstName}
        onBlur={formik.handleBlur}/>
        

        <label htmlFor='lastName'>Last Name</label>
        {formik.touched.lastName && formik.errors.lastName ? (
            <div className="errorMessage">{formik.errors.lastName}</div>
        ): null
        }
        <input type='text' 
        id='lastName' 
        name="lastName" 
        onChange={formik.handleChange} 
        value = {formik.values.lastName}
        onBlur={formik.handleBlur}/>




        <label htmlFor='email'>Email</label>
        {formik.touched.email && formik.errors.email ? (
            <div className="errorMessage">{formik.errors.email}</div>
        ): null
        }
        <input type='email'
         id='email' 
         name="email" 
         onChange={formik.handleChange} 
         value = {formik.values.email}
         onBlur={formik.handleBlur}/>

         


        <label htmlFor='password'>Password</label>
        <div className='password-input-group'> 
            <input type= {showPassword? "text" : "password"} 
            id='password' 
            name="password" 
            onChange={formik.handleChange} 
            value = {formik.values.password}
            onBlur={formik.handleBlur}/>
            <button type='button' onClick = {() => setShowPassword(!showPassword)}>{showPassword? <FaEye/> : <FaEyeSlash/>}</button>
        </div>


        <button type="submit">Sign Up</button>
    </form>
    </div>
  )
}

export default Signup