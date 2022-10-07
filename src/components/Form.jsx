import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [goal, setGoal] = useState('')
    const [message, setMessage] = useState(false)
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await fetch('https://gymholics-landing-default-rtdb.firebaseio.com/gymholicsleads.json', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                mobile,
                goal
            })
        }
        )
        setLoading(false)
        setMessage(true)
    }

    return (
        <div className="p-2 my-5 heading">
            <p className='text-center my-4 font-semibold text-xl'>Join us today</p>
            <p className="my-2 text-xs">(you'll receive calls or message from us, shortly after submitting the form)</p>
           {message === true ? (
            <div className="h-[230px] border p-3 rounded-md text-cyan-500">
                <p>You've successfully submitted the form, we will contact you ASAP!</p>
            </div>
           ) : 
             loading === true ? (
                <div>
                    <p className="text-xl text-cyan-500 text-center">Please wait......</p>
                </div>
             ) : (
                <form className='border p-3 rounded-md'>
             <div>
                 <label htmlFor="name">Full Name</label><br />
                 <input value={name} onChange={e => setName(e.target.value)} className="border rounded-sm my-1 p-2 w-full" />
             </div>
             <div>
                 <label htmlFor="email">Email</label><br />
                 <input value={email} onChange={e => setEmail(e.target.value)} className="border rounded-sm my-1 p-2 w-full" />
             </div>
             <div>
                 <label htmlFor="mobile">Mobile</label> <br/>
                 <input value={mobile} onChange={e => setMobile(e.target.value)} type="number" className="border rounded-sm my-1 p-2 w-full" />
             </div>
             <div>
                 <label htmlFor="goal">Fitness Goal</label> <br/>
                 <select value={goal} onChange={e => setGoal(e.target.value)} className="border rounded-sm my-1 p-2 w-full">
                     <option value="select">Select</option>
                     <option value="Weight loss">Weight Loss</option>
                     <option value="Muscle Gain">Muscle Gain</option>
                     <option value="Others">Others</option>
                 </select>
             </div>
             <button onClick={submitHandler} className="w-full p-2 text-white bg-cyan-500 rounded-sm my-2">Submit and Get Offers</button>
         </form>
             )
           }
        </div>
    )
}

export default Form