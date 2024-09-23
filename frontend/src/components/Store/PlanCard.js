import React, { Fragment } from 'react'

function PlanCard(props) {
    return (
        <Fragment>
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={props.img} alt="/"></img>
            <h2 className='text-2xl font-bold text-center py-8'>{props.title}</h2>
            <p className='text-center text-4xl font-bold'>${props.price}</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>{props.description[0]}</p>
                <p className='py-2 border-b mx-8'>{props.description[1]}</p>
                <p className='py-2 border-b mx-8'>{props.description[2]}</p>
            </div>
            <button className=
                {props.highlighted ? 'text-mygreen bg-myblack w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6'
                    : 'text-myblack bg-mygreen w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6'}
            >Start Trial</button>
        </Fragment>
    )
}

export default PlanCard