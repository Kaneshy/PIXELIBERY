import React from 'react'
import { acompañantes } from '@/constants/acompañantes'

const page = () => {
    return (

        <main className='max-w-1 bg-white text-black select-none rounded-lg'>
            <h1 className='p-2 text-center text-heading1-bold'>MARTES LOCO</h1>
            <section className=' flex max-lg:flex-col  items-center justify-center '>
                <section className='flex w-full border p-4 items-center justify-center '>
                    <img src='https://res.cloudinary.com/dh01ngdjo/image/upload/v1704243246/RESTAURANTE/c52c9913643d725c_domicilio_54157_744x744_1699376130_mc97zn.webp' alt="" />
                </section>
                <section className=' gap-y-6 select-none text-black flex flex-col border w-full p-4'>
                    <div className='flex flex-col text-center border-b'>
                        <h1 className='text-heading1-bold'>$8.99</h1>
                        <p className=' text-body-bold'>DISPONIBILIDAD: EN STOCK</p>
                    </div>
                    <div className='border-b'>
                        <h1 className=' text-heading3-bold'>Description</h1>
                        <p className='text-neutral-400'>7 presas de pollo</p>
                    </div>
                    <div className='border-b'>
                        <h1 className=' text-heading3-bold'>¿ORIGINAL O CRISPY?</h1>
                        <p className='text-neutral-400'>Elija una opcion</p>
                        <div className="flex justify-center flex-col">
                            <div className=" p-2 flex gap-x-2">
                                <input type="radio" name='crispy-input' id='input1' />
                                <label htmlFor="input1">ORIGINAL</label>
                            </div>
                            <div className=" p-2 flex gap-x-2">
                                <input type="radio" name='crispy-input' id='input2' />
                                <label htmlFor="input2">CRISPY</label>
                            </div>
                            <div className=" p-2 flex gap-x-2">
                                <input type="radio" name='crispy-input' id='input3' />
                                <label htmlFor="input3">MITAD ORIG/CRISPY</label>
                            </div>
                        </div>
                    </div>
                    <div className='border-b flex flex-col gap-y-4'>
                        <h1 className=' text-heading3-bold'>ACOMPAÑA TU ORDEN CON (0/20)</h1>
                        <p className='text-neutral-400'>Puedes agregar un máximo de 20</p>
                        <section>
                            {acompañantes.map((x, index) => {
                                return (
                                    <div key={index} className='flex'>
                                        <div className='flex-1 flex'>
                                            <p>{x.title}</p>
                                            <p>({x.price})</p>
                                        </div>
                                        <div className='flex-1 gap-x-4 flex justify-center items-center'>
                                            <button >
                                                <p className='p-1 px-8 bg-slate-300'>-</p>
                                            </button>
                                            <p>0</p>
                                            <button >
                                                <p className='p-1 px-8 bg-slate-300'>+</p>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </section>
                    </div>
                    <div>
                        <h1 className=' text-body-bold'>AGREGA UNA NOTA: </h1>
                        <textarea placeholder=' Ej: Sin pepinillos' className='p-2 w-full rounded-xl bg-slate-300'></textarea>
                    </div>
                </section>
            </section>
        </main>

    )
}

export default page