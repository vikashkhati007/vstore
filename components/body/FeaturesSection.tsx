import React from 'react'
import Image from 'next/image'

const FeaturesSection = () => {
  return (
    <section className="featurescotainer w-4/5 m-auto max-h-fit py-10 flex flex-col lg:flex-row gap-5 mb-20">
        <ul className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <li className='col-span-2 space-y-2'>
                <Image src="/Offers/shipping.svg" alt="free-shipping" width={50} height={50}/>
                <h1 className='font-bold text-xl'>Free Shipping</h1>
                <p>Free shipping for order above $150</p>
            </li>
            <li className='col-span-1 space-y-2'>
                <Image src="/Offers/dollar.svg" alt="free-shipping" width={50} height={50}/>
                <h1 className='font-bold text-xl'>Money Guarantee</h1>
                <p>Within 30 days for an exchange</p>
            </li>
            <li className='col-span-2 space-y-2'>
                <Image src="/Offers/support.svg" alt="free-shipping" width={50} height={50}/>
                <h1 className='font-bold text-xl'>Online Support</h1>
                <p>24 hours a day, 7 days a week</p>
            </li>
            <li className='col-span-1 space-y-2'>
                <Image src="/Offers/payment.svg" alt="free-shipping" width={50} height={50}/>
                <h1 className='font-bold text-xl'>Flexible Payment</h1>
                <p>Pay with multiple credit cards</p>
            </li>
        </ul>
      </section>
  )
}

export default FeaturesSection
