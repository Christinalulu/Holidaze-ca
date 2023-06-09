import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProductById } from "../../store/modules/theVenueSlice";
import { Link } from "react-router-dom";
import {addSingleProductToCheckout} from "../../store/modules/checkoutSlice"

const Details = () => {
	let { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSingleProductById(id.slice(1)));
	}, [dispatch, id]);

	const singleProduct = useSelector(
		(state) => state.theVenueSlice.singleProduct);
	
	return (
		<>
			{singleProduct && (
				<div>
					<div className='bg-white'>
						<div className='mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
							<div className='lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
								<div className='lg:col-span-4 lg:row-end-1'>
									<div className='aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100'>
										<img
											src={singleProduct.media[0]}
											alt='venues'
											className='object-cover object-center'
										/>
									</div>

									<div class='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
										<div
											class='grid grid-cols-4 gap-6'
											aria-orientation='horizontal'
											role='tablist'>
											<button
												id='tabs-1-tab-1'
												class='relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4'
												aria-controls='tabs-1-panel-1'
												role='tab'
												type='button'>
												<span class='sr-only'>Angled view</span>
												<span class='absolute inset-0 overflow-hidden rounded-md'>
													<img
														src='https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
														alt=''
														class='h-full w-full object-cover object-center'
													/>
												</span>
												{/* <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" --> */}
												<span
													class='ring-transparent pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
													aria-hidden='true'></span>
											</button>

											{/* <!-- More images... --> */}
										</div>
									</div>
								</div>
								<div className='mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none'>
									<div className='flex flex-col-reverse'>
										<div className='mt-4'>
											<h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
												{singleProduct.name}
											</h1>

											<p className='mt-2 text-sm text-gray-500'>
												Created: {singleProduct.created}
											</p>
										</div>
									</div>

									<p className='mt-6 text-gray-500'>{singleProduct.description}</p>
									<p className=' mt-4 text-red-600'> Price{singleProduct.price} NOK</p>

									<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2'>
										<button 
										onClick={() => dispatch(addSingleProductToCheckout(singleProduct))} 
										className='flex w-full items-center justify-center rounded-md border border-transparent bg-purple-500 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none'>
											<Link to='/checkout'>BUY</Link>
										</button>
									</div>

									<div className='mt-10 border-t border-gray-200 pt-10'>
										<h3 className='text-sm font-medium text-gray-900'>
											Location Details
										</h3>
										<div className='prose prose-sm mt-4 text-gray-500'>
											<ul role='list'>
												<li>{singleProduct.location.country} </li>
												<li>{singleProduct.location.city} </li>
												<li>{singleProduct.location.address} </li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Details;
