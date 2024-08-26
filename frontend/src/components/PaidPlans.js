import React from 'react'
import PlanCard from './PlanCard'
import singleImg from '../assets/single.png'
import doubleImg from '../assets/double.png'
import tripleImg from '../assets/triple.png'

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
    plans.push(new PlanDetails(singleImg, "Single User", 5.99, ["500 Note Storage", "1 Granted User", "Publish up to 5 Notes"], false))
    plans.push(new PlanDetails(doubleImg, "Shared Account", 9.99, ["1250 Note Storage", "2 Granted Users", "Publish up to 20 Notes"], true))
    plans.push(new PlanDetails(tripleImg, "Goup Account", 14.99, ["2000 Note Storage", "5 Granted Users", "Share up to 100 Notes"], false))

    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                {plans.map((plan, planid) => (
                    <div className={`w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 ${plan.highlighted ? 'md:my-0 bg-slate-50' : ''}`}>
                        <PlanCard
                            key={planid}
                            img={plan.img}
                            title={plan.title}
                            price={plan.price}
                            description={plan.description}
                            highlighted={plan.highlighted}
                        />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default PaidPlans