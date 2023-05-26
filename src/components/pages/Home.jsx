import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/modules/venueSlice";



function HomePage() {
   const dispatch = useDispatch();
   const { products } = useSelector((state) => state.venueSlice);
 
   useEffect(() => {
     dispatch(fetchProducts());
   }, [dispatch]);
 
   console.log(products);
 
   return (
     <>
       <div className="bg-white">
         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
           <h2 className="sr-only">Products</h2>
           <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
             {products.map((product) => (
               <div key={product.id}>
                 <div className="group relative flex flex-col overflow-hidden rounded-sm border border-gray-200 bg-white">
                   <div className="aspect-h-2 aspect-w-2 bg-gray-200 sm:aspect-none group-hover:opacity-75 lg:h-60">
                     <img
                       src={product.media[0]}
                       alt="a place to stay"
                       className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                     />
                   </div>
                   <div className="flex flex-1 flex-col space-y-2 p-4">
                     <h3 className="text-sm font-medium text-gray-900">
                       {product.name}
                     </h3>
                     <p className="text-sm text-gray-500">
                       {product.location[1]}
                     </p>
                     <div className="flex flex-1 flex-col justify-end">
                       <p className="text-sm italic text-gray-500">
                         Guests {product.maxGuests}
                       </p>
                       <p className="text-base font-medium text-gray-900">
                         {product.price} NOK
                       </p>
                     </div>
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
 
 export default HomePage;