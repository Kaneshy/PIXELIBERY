'use client'
import React from 'react'
import { menu } from '@/constants/menu.js'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Principal = () => {


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
        <main className='flex flex-col gap-y-20 mt-10'>
            <section className='flex justify-around  '>
                <motion.div 
                className='max-w-sm '
                whileInView={{
                    y: [15, -15, 15, -15, 15]
                }}
                transition={{ease: "linear", from: 90, duration: 4 , repeat: Infinity }}
                >
                    <img width={600} src="https://res.cloudinary.com/dh01ngdjo/image/upload/v1704243246/RESTAURANTE/c52c9913643d725c_domicilio_226_745x744_sw87wn.webp" alt="" />
                </motion.div>
                <div className='flex   flex-col p-6 items-center justify-center'>
                    <h1 className=' text-heading1-bold'>Best Seller</h1>
                    <p className=' text-base-regular max-w-lg text-neutral-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ab soluta, vitae illo sit placeat ipsum consectetur, quos ea quis et laboriosam aliquam pariatur possimus ratione praesentium exercitationem! Aliquam, natus.</p>
                </div>
            </section>
            <section >
                <h1 className='text-center text-heading1-semibold'>Menu</h1>
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
                                <Link href={'/categories'}  key={index} className=' gap-y-4 p-4 rounded-2xl gradient-slate flex flex-col items-center'>
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

export default Principal