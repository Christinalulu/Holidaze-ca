import { useFormik } from "formik";
import { loginSchema } from "../../schemas/loginSchema";
import { IoBedOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";

import { saveToken, saveUser } from "../../store/storage";


const onSubmit = async(values) => {
   console.log({values});
   let respone = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/login",{
      method: "POST",
      headers:{
         "Content-Type": "application/json",

      },
      body: JSON.stringify(values),
   })
   console.log({respone});
   const data = await respone.json()
   console.log({data});
   console.log(data.accessToken)

saveToken(data.accessToken)
const userToSave = {
   name: data.name,
   email : data.email
}
saveUser(userToSave)
location.href = '/';

}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA4NSwibmFtZSI6ImRlbW8iLCJlbWFpbCI6ImRlbW9Ac3R1ZC5ub3JvZm


const Login = () => {

   const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
      validationSchema: loginSchema,
		onSubmit,
   });

	return (
		<>
			<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<IoBedOutline className='mx-auto h-12 w-auto  text-purple-500' />
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Hello! Log in
					</h2>
				</div>
				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Email
							</label>
							<div className='mt-2'>
								<input
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
									id='email'
									email='email'
									type='email'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
								{errors.email && (
									<p className='text-red-500 bottom-0'>{errors.email}</p>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6 text-gray-900'>
								password
							</label>
							<div className='mt-2'>
								<input
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
									id='password'
									email='password'
									type='password'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
								{errors.password && (
									<p className='text-red-500 bottom-0'>{errors.password}</p>
								)}
							</div>
						</div>
						<div>
							<Link to="/products" type='submit' className='flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
								Log in
							</Link>
						</div>
					</form>
					<p className='mt-10 text-center text-sm text-gray-500'>
						Do not have an account?
						<NavLink
							to='/signup'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
							Sign up here
						</NavLink>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
