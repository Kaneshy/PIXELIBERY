'use client'
import React from 'react'
import ProductsCart from './ProductsCart'
import { motion } from 'framer-motion'

const Cart = () => {
  return (
    <motion.aside 
    initial={{x:200}}
    animate={{x:0}}
    transition={{duration:0.5}}
    className='fixed mt-12 right-0 h-screen w-96 bg-white text-black'>
      <section className='relavite p-4 '>
        <nav className='flex p-4 gap-x-2  border-b'>
          <h1 className=' w-full text-center text-body-bold'>Resumen de tu Pedido</h1>
        </nav>
        <ProductsCart />
        <main className='absolute bottom-0 w-full right-0 p-6 mb-16 flex flex-col gap-y-2 text-base-semibold'>
          <section className='border-b-2 border-black flex flex-col gap-y-2'>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>$157.7</p>
            </div>
            <div className='flex justify-between'>
              <p>Impuestos</p>
              <p>$18.7</p>
            </div>

            <div className='flex justify-between'>
              <p>Envio</p>
              <p>$2.7</p>
            </div>
          </section>
          <section>
            <div className='flex justify-between'>
              <p>Total de la orden</p>
              <p>$175.92</p>
            </div>
          </section>
          <section>
            <div className='flex p-2 rounded-2xl bg-red-700 text-white justify-between'>
              <p>Total de la orden</p>
              <p>$175.92</p>
            </div>
          </section>
        </main>
      </section>

    </motion.aside>
  )
}

export default Cart