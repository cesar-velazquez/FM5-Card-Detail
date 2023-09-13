import React from 'react'
import { CircleIcons } from '../components/Icons/Icons'

const Welcome = ({ cardNumber, nameInput, setUserLogged }) => {
    const logOut = () => {
        setUserLogged(false);
    }
    return (
        <section className='grid gap-20 sm:gap-0 sm:max-w-[1000px] font-Grotes '>
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
                        <p className='absolute text-white top-[3.2rem] right-7 text-xs  
                sm:top-[3.7rem]'>000</p>
                    </div>
                    {/*                     sm:top-48 sm:translate-x-1/5 
            md:translate-x-1/4 */}
                    <div className=' flex justify-start absolute pl-4 mt-[6rem]                     
            sm:translate-x-[-20px] sm:translate-y-[280px]
            md:translate-x-[100px] md:translate-y-[280px]
            ' >
                        <img className='w-[75%] max-w-[300px] sm:w-[250px]   ' src="/images/bg-card-front.png" alt="Card Back" />
                        <p className='text-white absolute bottom-8 left-6 font-Grotes text-[14px]  ' >{cardNumber}</p>
                        <p className='text-white absolute bottom-2 left-6 font-Grotes text-[11px]  ' >{nameInput}</p>
                        <p className='text-white absolute bottom-2 right-[85px] font-Grotes text-[10px] sm:right-4  ' >00/00</p>
                        <div className='bg-transparent border-2 absolute top-[1.4rem] left-16
        w-[20px] aspect-square rounded-full
        ' >
                        </div>

                        <div className='bg-white absolute top-4 left-6
        w-[30px] aspect-square rounded-full
        '></div>
                    </div>
                </div>
            </section>
            <section className='sm:absolute sm:top-0 sm:translate-x-[300px] sm:translate-y-[300px]
            md:translate-x-[430px] lg:translate-x-[500px] '>
                <div className='w-[100px] aspect-square rounded-full
            mx-auto mt-[30px]' ><CircleIcons /></div>
                <h1 className='text-center uppercase text-2xl' >thank you!</h1>
                <p className='text-center text-gray-400 '>We've added your card details</p>

                <div className='
        '>
                    <input
                        onClick={logOut}
                        className='bg-verydarkviolet text-white flex 
                        justify-center w-[300px] p-2 rounded-md m-auto mt-8  cursor-pointer '
                        type="submit"
                        name=""
                        id=""
                        value={"Confirm"} />
                </div>
            </section>
        </section>
    )
}

export default Welcome