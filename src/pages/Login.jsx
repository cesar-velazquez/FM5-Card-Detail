import React from 'react'

const Login = () => {
    return (
        <main className=' ' >
            <section className='grid gap-20 sm:gap-0 sm:max-w-[1000px]  '>
                <section className='relative bg-[url(/images/bg-main-mobile.png)] 
            h-[23vh] bg-cover bg-no-repeat 
            sm:bg-[url(/images/bg-main-desktop.png)] sm:w-[35%] sm:min-h-screen
            sm:rounded-l-2xl'>

                    <div className='flex justify-center 
                sm:flex-col-reverse  
                ' >
                        {/* sm:bottom-64 sm:absolute sm:translate-x-1/3 
                    md:translate-x-1/2                      */}
                        <div className='flex justify-end absolute m-4                    
                    sm:translate-x-[10px] sm:translate-y-[500px]
                    md:translate-x-[150px] md:translate-y-[500px] ' >
                            <img className=' w-[75%] max-w-[300px] sm:w-[250px] ' src="/images/bg-card-back.png" alt="Card Back" />
                            <p className='absolute text-red-600 top-[3.2rem] right-7 text-xs  
                        sm:top-[3.7rem]'>000</p>
                        </div>
                        {/*                     sm:top-48 sm:translate-x-1/5 
                    md:translate-x-1/4 */}
                        <div className=' flex justify-start absolute pl-4 mt-[6rem]                     
                    sm:translate-x-[-20px] sm:translate-y-[280px]
                    md:translate-x-[100px] md:translate-y-[280px]
                    ' >
                            <img className='w-[75%] max-w-[300px] sm:w-[250px]   ' src="/images/bg-card-front.png" alt="Card Back" />
                            <div className='bg-transparent border-2 absolute top-[1.4rem] left-16
                w-[20px] aspect-square rounded-full
                ' ></div>
                            <div className='bg-white absolute top-4 left-6
                w-[30px] aspect-square rounded-full
                '></div>
                        </div>
                    </div>
                </section>
                {/* SECCIÓN DEL FORMULARIO */}
                <section className=' font-Grotes             
            sm:translate-x-[300px] sm:h-[0px]
            sm:-translate-y-[600px] '>
                    {/* sm:absolute sm:flex sm:justify-center sm:top-0 sm:flex-col
                sm:left-[50%] sm:bottom-0 sm:w-[min(100%,_450px)] */}
                    <form className='grid gap-3 p-4 w-[min(100%,_350px)] 
                aspect-square m-auto 
                sm:border-2 sm:ml-[1%] sm:rounded-2xl               
                md:mr-[39%] md:m-auto' >
                        <label className='font-bold text-purple-800 ' >CARDHOLDER NAME</label>
                        <input
                            className='outline-none border-2 p-3 rounded-xl '
                            type="text"
                            placeholder='e.g. Jane Appleseed' />

                        <label className='font-bold text-purple-800 ' >CARD NUMBER</label>
                        <input
                            className='outline-none border-2 p-3 rounded-xl '
                            type="text"
                            placeholder='e.g. 1234 5678 9123 0000' />

                        <div className='flex gap-4 ' >
                            <div className='flex flex-col' >
                                <label className='font-bold text-purple-800 ' >EXP. DATE</label>
                                <input
                                    className='outline-none w-[70px] border-2 p-3 rounded-xl '
                                    type="text"
                                    placeholder='MM' />
                            </div>

                            <div className='flex flex-col' >
                                <label className='font-bold  text-purple-800 ' >(MM/YY)</label>
                                <input
                                    className='outline-none w-[70px] border-2 p-3 rounded-xl '
                                    type="number"
                                    placeholder='YY' />
                            </div>

                            <div className='flex flex-col' >
                                <label className='font-bold text-purple-800 ' >CVC</label>
                                <input
                                    className='outline-none w-[100px] border-2 p-3 rounded-xl '
                                    type="number"
                                    placeholder='e.g 123' />
                            </div>
                        </div>
                    </form>
                </section>
            </section>
        </main>
    )
}

export default Login