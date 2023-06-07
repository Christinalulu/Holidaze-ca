import { IoBedOutline } from "react-icons/io5";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/signUpSchema";
import { NavLink, Link } from "react-router-dom";


const onSubmit = async (values) => {
	
	let response = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	let resulte = await response.json();
   return resulte;
};

const Signup = () => {
	const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			venueManager: false,
		},

		validationSchema: signUpSchema,
		onSubmit,
	});
	
	return (
		<div>
			<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<IoBedOutline className='mx-auto h-12 w-auto  text-purple-500' />
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Sign up to your account
					</h2>
				</div>
				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form
						onSubmit={handleSubmit}
						autoComplete='off'
						className='space-y-6'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Name
							</label>
							<div className='mt-2'>
								<input
									value={values.name}
									onChange={handleChange}
									onBlur={handleBlur}
									id='name'
									name='name'
									type='name'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
								{errors.name && (
									<p className='text-red-500 bottom-0'>{errors.name}</p>
								)}
							</div>
						</div>
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
									name='email'
									type='email'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
								{errors.email && (
									<p className='text-red-500 bottom-0'>{errors.email}</p>
								)}
							</div>
						</div>

						<div>
							<div className='flex items-center '>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Password
								</label>
							</div>
							<div className='mt-2'>
								<input 
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									autoComplete="on"
								
									id='password'
									name='password'
									type='password'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
								{errors.password && (
									<p className='text-red-500 bottom-0'>{errors.password}</p>
								)}
							</div>
						</div>
						<div>
							<div className='flex items-center '>
								<label
									htmlFor='confirmPassword'
									className='block text-sm font-medium leading-6 text-gray-900'>
									ConfirmPassword
								</label>
							</div>
							<div className='mt-2'>
								<input
									value={values.confirmPassword}
									onChange={handleChange}
									onBlur={handleBlur}
									autoComplete="on"
									id='confirmPassword'
									name='confirmPassword'
									type='password'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
								{errors.confirmPassword && (
									<p className='text-red-500 bottom-0'>{errors.confirmPassword}</p>
								)}
							</div>
						</div>

						<div className='flex items-center'>
							<input
								id='link-checkbox'
								type='checkbox'
								value={values.venueManager}
								className='w-4 h-4 mr-2 text-purple-600 bg-gray-100 border-gray-300 rounded focus:purple-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
							/>{" "}
							I want to host venues
							<label
								htmlFor='link-checkbox'
								className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'></label>
						</div>

						<div>
							<Link to='/login' type='submit' className='flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
								Sign in
							</Link>
						</div>
					</form>

					<p className='mt-10 text-center text-sm text-gray-500'>
						Have an account?
						<NavLink to="/login"
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
							Log in here
						</NavLink>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signup;
