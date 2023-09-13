import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { GenerateMM, Generatecvc, Generatemmyy, handleChangeInput } from '../components/Validation/validations';

const Login = ({ setUserLogged, setNameInput, setCardNumber, cardNumber, nameInput }) => {
    
    const handleSub = (e) => {
        e.preventDefault()        
        const errorForm = document.getElementById('errorForm')
        const validationName = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{5,30}$');          
        const name = e.target.name.value;
        const cardNumber = e.target.cardNumber.value;               
        if (validationName.test(name) && cardNumber.length== 20 ) {
            setUserLogged(true)            
        } else {
            errorForm.textContent = "Fill in all the fields"            
        }
    }

    const GenerateSpace = (e) => {
        const inputElement = e.target
        const inputValue = e.target.value.replace(/\s/g, "");
        const errorMessage = document.getElementById("errors")

        setCardNumber(e.target.value)

        if (inputValue.trim() === '') {
            inputElement.style.borderColor = "#aaa6a6"
        } else if (/^[0-9\s]*$/.test(inputValue) && inputValue.length == 16) {
            inputElement.style.borderColor = "#3ded0b";
            errorMessage.textContent = ""
        } else {
            inputElement.style.borderColor = "#fa3600";
            errorMessage.textContent = "Wrong Format, numbers only"
        }

        const formattedValue = inputValue.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
        setCardNumber(formattedValue);
    }
    
    useEffect(() => {
        const input = document.getElementById('cardNumber')
        input.addEventListener("input", GenerateSpace)

        return () => {
            input.removeEventListener("input", GenerateSpace)
        }
    }, [])
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


                {/* SECCIÓN DEL FORMULARIO */}



                <section className=' font-Grotes             
            sm:translate-x-[300px] sm:h-[0px]
            sm:-translate-y-[600px] '>
                    {/* sm:absolute sm:flex sm:justify-center sm:top-0 sm:flex-col
                sm:left-[50%] sm:bottom-0 sm:w-[min(100%,_450px)] */}
                
                    <form
                        id='formCard'
                        onSubmit={handleSub}
                        className='grid gap-3 p-4 w-[min(100%,_350px)] 
                aspect-square m-auto 
                sm:border-2 sm:ml-[1%] sm:rounded-2xl               
                md:mr-[39%] md:m-auto' >
                        <label
                            htmlFor='name'
                            className=' font-bold text-purple-800 ' >CARDHOLDER NAME</label>
                        <input
                            required
                            name='name'
                            pattern='^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{5,30}$'
                            onChange={(e) => handleChangeInput(e, setNameInput)}
                            value={nameInput}
                            className='border-2 outline-none p-3 rounded-xl '
                            type="text"
                            placeholder='e.g. Jane Appleseed'
                            id='name'
                        />
                        <p id='errorName' className='text-red-600 mt-1 text-xs ' ></p>

                        <label className=' font-bold text-purple-800 ' >CARD NUMBER</label>
                        <input
                            onChange={GenerateSpace}
                            value={cardNumber}
                            id='cardNumber'
                            className='border-2 outline-none p-3 rounded-xl '
                            type="text"
                            placeholder='e.g. 1234 5678 9123 0000'
                        />
                        <p id='errors' className='text-red-600 mt-2 text-xs ' ></p>

                        <div className='flex gap-4 ' >
                            <div className='flex flex-col' >
                                <label className='font-bold text-center text-purple-800 
                                text-[14px]
                                ' >EXP. DATE</label>
                                <input
                                    className='text-center outline-none w-[70px] border-2 p-3 rounded-xl '
                                    onChange={GenerateMM}
                                    type="text"
                                    id='mm'
                                    placeholder='MM' />
                                <p id='errormm' className='text-red-600 mt-2 text-xs ' ></p>
                            </div>

                            <div className='flex flex-col' >
                                <label className='font-bold text-center 
                                text-[14px] text-purple-800 ' >(MM/YY)</label>
                                <input
                                    onChange={Generatemmyy}
                                    id='mmyy'
                                    className='text-center outline-none w-[70px] border-2 p-3 rounded-xl '
                                    type="text"
                                    placeholder='YY' />
                                <p id='erroryy' className='text-red-600 mt-2 text-xs ' ></p>
                            </div>

                            <div className='flex flex-col' >
                                <label className='text-[14px] font-bold 
                                text-center text-purple-800 ' >CVC</label>
                                <input
                                    onChange={Generatecvc}
                                    className='text-center outline-none w-[100px] border-2 p-3 rounded-xl '
                                    type="text"
                                    placeholder='e.g 123' />
                                <p id='errorcvc' className='text-red-600 mt-2 text-xs ' ></p>
                            </div>
                        </div>
                        <div>
                            <input
                                className='bg-verydarkviolet text-white 
                                flex justify-center w-[300px] p-2 rounded-md cursor-pointer'
                                type="submit"
                                name=""
                                id=""
                                value={"Confirm"} />
                                
                        </div>
                        <p id='errorForm' className='text-red-600 mt-1 text-center animate-pulse text-xl ' ></p>
                    </form>
                </section>
            </section>
        </main>
    )
}

export default Login