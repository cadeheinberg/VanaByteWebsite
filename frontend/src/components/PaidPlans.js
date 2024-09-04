import React from 'react'
import PlanCard from './PlanCard'
import singleImg from '../assets/iron.png'
import doubleImg from '../assets/emerald.png'
import tripleImg from '../assets/diamond.png'
// import storeImg from '../assets/Store.png'

class PlanDetails {
    constructor(img, title, price, description, highlighted) {
        this.img = img
        this.title = title;
        this.price = price;
        this.description = description;
        this.highlighted = highlighted;
    }
}

function PaidPlans() {

    let plans = []
    plans.push(new PlanDetails(singleImg, "VIP", 5.99, ["Billed Monthly", "500 Extra Emotes", "Priority 1 for Game Queues"], false))
    plans.push(new PlanDetails(doubleImg, "MVP", 9.99, ["Billed Monthly", "1000 Extra Emotes", "Priority 2 for Game Queues"], true))
    plans.push(new PlanDetails(tripleImg, "MVP+", 79.99, ["Lifetime", "2000 Extra Emotes", "Priority MAX for Game Queues"], false))

    return (
        <div className='w-full pt-[7rem] pb-[10rem] px-4 bg-mywhite'>
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='text-myblack text-6xl font-bold text-center mb-28 pb-2 pt-2 mx-10'>STORE</h1>
                {/* <img className='w-[400px] mx-auto mb-24 bg-transparent' src={storeImg} alt="/"></img> */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {plans.map((plan, planid) => (
                        <div
                            key={planid}
                            className={`w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 bg-white ${plan.highlighted ? 'md:my-0' : ''}`}
                        >
                            <PlanCard
                                img={plan.img}
                                title={plan.title}
                                price={plan.price}
                                description={plan.description}
                                highlighted={plan.highlighted}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default PaidPlans