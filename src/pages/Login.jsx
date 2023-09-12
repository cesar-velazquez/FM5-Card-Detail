import React from 'react'

const Login = () => {
    
    const DistanceTop = 1 * 250
    return (
        <main className=''>
            <section className=' relative bg-[url(/images/bg-main-mobile.png)] h-[25vh] bg-cover bg-no-repeat  '>
                <div className='flex justify-center mx-auto ' >
                <div className='flex justify-end absolute m-4 ' >
                <img className=' w-[75%] max-w-[300px]  ' src="/images/bg-card-back.png" alt="Card Back" />
                <p className='absolute text-red-600 top-[3.2rem] right-7 text-xs  '>000</p>
                </div>
                <div className='flex justify-start absolute pl-4 mt-[6rem]   ' >
                    <img className='w-[75%] max-w-[300px]   ' src="/images/bg-card-front.png" alt="Card Back" />
                </div>
                </div>
            </section>

            <section>

            </section>
        </main>
    )
}

export default Login