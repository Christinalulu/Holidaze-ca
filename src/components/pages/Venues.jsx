import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/modules/venueSlice";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Venues() {
	const dispatch = useDispatch();
	const { venues } = useSelector((state) => state.venueSlice);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
					<div className=' mb-4'>
						<h1 class='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
							<span class='text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400'>
								Venues to Explore
							</span>{" "}
						
						</h1>
						<p class='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
							What are you looking for? A place to stay find the best places from
							around the world.
						</p>
					</div>
					<div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
						{venues.map((venues) => (
							<div key={venues.id}>
								<div className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'>
									<Link to={`venue/${venues.id}`}>
										<div className='aspect-h-2 aspect-w-2 bg-gray-200 sm:aspect-none group-hover:opacity-75 lg:h-60'>
											<img
												src={venues.media[0]}
												alt='a place to stay'
												className='h-full w-full object-cover object-center sm:h-full sm:w-full'
											/>
										</div>
									</Link>
									<div className='flex flex-1 flex-col space-y-2 p-4'>
										<h3 className='text-sm font-medium text-gray-900'>{venues.name}</h3>
										<p className='text-sm text-gray-500'>{venues.location.city}</p>
										<p className='text-sm text-gray-500'>{venues.location.country}</p>
										<div className='flex flex-1 flex-col justify-end'>
											<p className='text-sm italic text-gray-500'>
												Guests {venues.maxGuests}
											</p>
											<p className='text-base font-medium text-gray-900'>
												{venues.price} NOK
											</p>
										</div>
										<Link
											to='/venue/id:'
											className='inline-flex items-center w-1/3 md:w-1/2  px-3 py-2 text-sm font-medium text-center text-white bg-purple-300 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none'>
											Read more
											<AiOutlineArrowRight className='w-4 h-4 ml-2 -mr-1 text-2xl' />
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Venues;
