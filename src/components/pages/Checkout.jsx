// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

const Checkout = () => {
   return (
      <>
      <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
         <h1 className="sr-only">Checkout</h1>

  

  <section aria-labelledby="order-heading" className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden">
    <div className="mx-auto max-w-lg">
      <div className="flex items-center justify-between">
        <h2 id="order-heading" className="text-lg font-medium text-gray-900">Your Order</h2>
        
      </div>

      <div id="disclosure-1">
        <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
          <li className="flex space-x-6 py-6">
            <img src="https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg" alt="Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade." className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"/>
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-1 text-sm font-medium">
                <h3 className="text-gray-900">Mountain Mist Artwork Tee</h3>
                <p className="text-gray-900">$36.00</p>
                <p className="text-gray-500">Birch</p>
                <p className="text-gray-500">L</p>
              </div>
              <div className="flex space-x-4">
                <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Edit</button>
                <div className="flex border-l border-gray-300 pl-4">
                  <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                </div>
              </div>
            </div>
          </li>

       

        </ul>

        <form className="mt-10">
          <label htmlFor="discount-code-mobile" className="block text-sm font-medium text-gray-700">Discount code</label>
          <div className="mt-1 flex space-x-4">
            <input type="text" id="discount-code-mobile" name="discount-code-mobile" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            <button type="submit" className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Apply</button>
          </div>
        </form>

        <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd className="text-gray-900">$108.00</dd>
          </div>
          <div className="flex justify-between">
            <dt className="flex">
              Discount
              <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">CHEAPSKATE</span>
            </dt>
            <dd className="text-gray-900">-$16.00</dd>
          </div>
          <div className="flex justify-between">
            <dt>Taxes</dt>
            <dd className="text-gray-900">$9.92</dd>
          </div>
          <div className="flex justify-between">
            <dt>Shipping</dt>
            <dd className="text-gray-900">$8.00</dd>
          </div>
        </dl>
      </div>

      <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
        <span className="text-base">Total</span>
        <span className="text-base">$141.92</span>
      </p>
    </div>
  </section>



  <section aria-labelledby="summary-heading" className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex">
    <h2 id="summary-heading" className="sr-only">Order summary</h2>

    <ul role="list" className="flex-auto divide-y divide-gray-200 overflow-y-auto px-6">
      <li className="flex space-x-6 py-6">
        <img src="https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg" alt="Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade." className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"/>
        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-1 text-sm font-medium">
            <h3 className="text-gray-900">Mountain Mist Artwork Tee</h3>
            <p className="text-gray-900">$36.00</p>
            <p className="text-gray-500">Birch</p>
            <p className="text-gray-500">L</p>
          </div>
          <div className="flex space-x-4">
            <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Edit</button>
            <div className="flex border-l border-gray-300 pl-4">
              <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            </div>
          </div>
        </div>
      </li>

  

    </ul>

    <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
      <form>
        <label htmlFor="discount-code" className="block text-sm font-medium text-gray-700">Discount code</label>
        <div className="mt-1 flex space-x-4">
          <input type="text" id="discount-code" name="discount-code" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
          <button type="submit" className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Apply</button>
        </div>
      </form>

      <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd className="text-gray-900">$108.00</dd>
        </div>
        <div className="flex justify-between">
          <dt className="flex">
            Discount
            <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">CHEAPSKATE</span>
          </dt>
          <dd className="text-gray-900">-$16.00</dd>
        </div>
        <div className="flex justify-between">
          <dt>Taxes</dt>
          <dd className="text-gray-900">$9.92</dd>
        </div>
        <div className="flex justify-between">
          <dt>Shipping</dt>
          <dd className="text-gray-900">$8.00</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
          <dt>Total</dt>
          <dd className="text-base">$141.92</dd>
        </div>
      </dl>
    </div>
  </section>



  <section aria-labelledby="payment-heading" className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0">
    <h2 id="payment-heading" className="sr-only">Payment and shipping details</h2>

    <div className="mx-auto max-w-lg lg:pt-16">
     <h3 className="flex w-full items-center justify-center  text-purple-300 text-3xl ">Checkout</h3>

      <div className="relative mt-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm font-medium text-gray-500">Your summary</span>
        </div>
      </div>

      <form className="mt-6">
        <div className="grid grid-cols-12 gap-x-4 gap-y-6">
          <div className="col-span-full">
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
            <div className="mt-1">
              <input type="email" id="email-address" name="email-address" autoComplete="email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">Name on card</label>
            <div className="mt-1">
              <input type="text" id="name-on-card" name="name-on-card" autoComplete="cc-name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card number</label>
            <div className="mt-1">
              <input type="text" id="card-number" name="card-number" autoComplete="cc-number" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="col-span-8 sm:col-span-9">
            <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
            <div className="mt-1">
              <input type="text" name="expiration-date" id="expiration-date" autoComplete="cc-exp" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-3">
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
            <div className="mt-1">
              <input type="text" name="cvc" id="cvc" autoComplete="csc" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <div className="mt-1">
              <input type="text" id="address" name="address" autoComplete="street-address" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="col-span-full sm:col-span-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <div className="mt-1">
              <input type="text" id="city" name="city" autoComplete="address-level2" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="col-span-full sm:col-span-4">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">State / Province</label>
            <div className="mt-1">
              <input type="text" id="region" name="region" autoComplete="address-level1" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="col-span-full sm:col-span-4">
            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Postal code</label>
            <div className="mt-1">
              <input type="text" id="postal-code" name="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-2">
          <div className="flex h-5 items-center">
            <input id="same-as-shipping" name="same-as-shipping" type="checkbox"className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          </div>
          <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">Billing address is the same as shipping address</label>
        </div>

        <button type="submit" className="mt-6 w-full rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none ">Pay $141.92</button>

        <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
          <svg className="mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
          </svg>
          Payment details stored in plain text
        </p>
      </form>
    </div>
  </section>
</main>
         
      </>
   )
}

export default Checkout;