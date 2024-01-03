'use client'
import React from 'react'
import { menu } from '@/constants/menu.js'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Categories = () => {


    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => {
            return {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.05 * index
                }
            }
        }
    }

    return (
        <main className='flex flex-col max-w-1'>
            <section >
                <h1 className='text-center text-heading1-semibold'>Menu</h1>
                <p className='py-4 px-8 t text-body-bold'>festines</p>
                <div className='movie-sv-a'>
                    {menu.map((x, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial='initial'
                                variants={fadeInAnimationVariants}
                                whileInView='animate'
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                custom={index}
                            >
                                <Link href={'/product'} key={index} className=' gap-y-4 p-4 rounded-2xl gradient-slate flex flex-col items-center'>
                                    <img width={200} src={x.image} alt="" />
                                    <h1 className=' text-heading4-medium'>{x.title}</h1>
                                    <p className='max-h-14 overflow-hidden text-body-normal text-neutral-400'>{x.desc} </p>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </main>

    )
}

export default Categories