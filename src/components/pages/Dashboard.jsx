import { NavLink } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
	const itemsMenu = [
		{ name: "Home", href: "/" },
		{ name: "Venues", href: `/venues` },
		{ name: "About", href: "/product/id:" },
		{ name: "Dashboard", href: "/dashboard" },
	];
	const [open, setOpen] = useState();

	return (
		<>
			<header className='bg-gradient-to-r from-white via-purple-200 to-pink-200 shadow'>
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
					<div className='h-28 lg:h-38'></div>
					<div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
						<div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
							<div className='flex'>
								<img
									className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
									src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
									alt=''
								/>
							</div>
							<div className='mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
								<div className='mt-6 min-w-0 flex-1 sm:hidden md:block'>
									<h1 className='truncate text-2xl font-bold text-gray-900'>
										Ricardo Cooper
									</h1>
								</div>
								<div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0'>
									<button
									onClick={() => setOpen(!open)}
										type='button'
										className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
										<svg
											className='-ml-0.5 mr-1.5 h-5 w-5 text-gray-400'
											viewBox='0 0 20 20'
											fillRule='currentColor'
											aria-hidden='true'>
											<path d='M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z' />
											<path d='M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z' />
										</svg>
										<span>Post Venue</span>
									</button>

									<button
										type='button'
										className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
										<svg
											className='-ml-0.5 mr-1.5 h-5 w-5 text-gray-400'
											viewBox='0 0 20 20'
											fillRule='currentColor'
											aria-hidden='true'>
											<path
												fillRule-rule='evenodd'
												d='M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z'
												clipRule='evenodd'
											/>
										</svg>
										<span>Call</span>
									</button>
								</div>
							</div>
						</div>
						<div className='mt-6 hidden min-w-0 flex-1 sm:block md:hidden'>
							<h1 className='truncate text-2xl font-bold text-gray-900'>Ricardo Cooper</h1>
						</div>
					</div>
				</div>
			</header>
			<main>
			<div className={`${open ? "block" : "hidden"} m-auto mt-8 max-w-2xl shadow flex-col justify-center px-6 py-12 lg:px-8s`}>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Post your venue
					</h2>
				</div>
				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form  className='space-y-6'>
						<div>
							<label
								htmlFor='title'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Title
							</label>
							<div className='mt-2'>
								<input
									id='title'
									title='title'
									type='title'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							
							</div>
						</div>
						<div>
							<label
								htmlFor='Descrition'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Descrition
							</label>
							<div className='mt-2'>
								<textarea 
                     
									id='Descrition'
									title='Descrition'
									type='text'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								>
								</textarea>
							
							</div>
						</div>
						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
								Post
							</button>
						</div>
					</form>
					
				</div>
			</div>

			<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
    <div class="max-w-3xl">
      <h2 id="features-heading" class="font-medium text-gray-500">Focus</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple productivity</p>
      <p class="mt-4 text-gray-500">Focus allows you to plan 10 daily tasks, while also thinking ahead about what's next. Forget distracting digital apps and embrace these small, sturdy pieces of paper.</p>
    </div>

    <div class="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
      <div class="flex flex-col-reverse">
        <div class="mt-6">
          <h3 class="text-sm font-medium text-gray-900">Three card types</h3>
          <p class="mt-2 text-sm text-gray-500">Today, Next, and Someday cards allow you to defer your dreams into the future.</p>
        </div>
        <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
          <img src="https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-01.jpg" alt="Green cardstock box containing white, beige, and brown cards." class="object-cover object-center"/>
        </div>
      </div>
      <div class="flex flex-col-reverse">
        <div class="mt-6">
          <h3 class="text-sm font-medium text-gray-900">The perfect mix</h3>
          <p class="mt-2 text-sm text-gray-500">Each refill pack contains plenty of cards to last you a month of procrastination.</p>
        </div>
        <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
          <img src="https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-02.jpg" alt="Green cardstock box open with 50 cards inside." class="object-cover object-center"/>
        </div>
      </div>
      <div class="flex flex-col-reverse">
        <div class="mt-6">
          <h3 class="text-sm font-medium text-gray-900">Dot grid backs</h3>
          <p class="mt-2 text-sm text-gray-500">Flip a card over to doodle during meetings when you should be listening.</p>
        </div>
        <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
          <img src="https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-03.jpg" alt="Detail of white today card, beige next card, and brown someday card with dot grid." class="object-cover object-center"/>
        </div>
      </div>

      <div class="flex flex-col-reverse">
        <div class="mt-6">
          <h3 class="text-sm font-medium text-gray-900">Refill packs</h3>
          <p class="mt-2 text-sm text-gray-500">Subscribe and save on routine refill packs to keep you productive all year long.</p>
        </div>
        <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
          <img src="https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-04.jpg" alt="Stack of three green cardstock boxes with 3 hole cutouts showing cards inside." class="object-cover object-center"/>
        </div>
      </div>
      
     

    </div>
  </div>
</div>
			</main>
		</>
	);
};

export default Dashboard;
