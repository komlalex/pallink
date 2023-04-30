import {useState} from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import {FaEye, FaEyeSlash} from "react-icons/fa";

function Signup() {
    const [showPassword, setShowPassword] = useState(true);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string().trim().max(15, "Must be 15 characters or less").required("Required")
        }),
        onSubmit: values => {
            console.log(values)
        }
    })
  return (
    <div className='signin'>
        <h2>Sign In Form</h2>


    <form onSubmit={formik.handleSubmit}>
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
        {formik.touched.password && formik.errors.password ? (
            <div className="errorMessage">{formik.errors.password}</div>
        ): null
        }
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