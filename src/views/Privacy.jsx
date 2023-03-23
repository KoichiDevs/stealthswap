import React, { useState } from 'react'
import AnimateText from '../components/AnimateText'
import { motion } from 'framer-motion'
import AnimateImage from '../components/AnimateImage'

const Privacy = () => {

    return (
        <section className='w-full px-8 md:px-10 relative overflow-hidden' id="about">
            <div className="flex flex-col items-end justify-end font-[900] text-9xl absolute right-[-9rem] bottom-0">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 0.1, x: [200, 0] }} transition={{ duration: 0.8, delay: 0.1 }} className='text-center font-[900] text-[8rem] bg-gradient-to-b bg-clip-text from-wht/90 to-gry inline-block text-transparent opacity-10'>SECURITY</motion.p>
            </div>

            <div className="flex flex-col items-end justify-end font-[900] text-9xl absolute left-[-9rem] top-[12rem]">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 0.1, x: [-200, 0] }} transition={{ duration: 0.8, delay: 0.1 }} className='text-center font-[900] text-[8rem] bg-gradient-to-b bg-clip-text from-wht/90 to-gry inline-block text-transparent opacity-10'>PRIVACY</motion.p>
            </div>

            <div className='w-[20rem] h-[20rem] bg-wht/30 rounded-full blur-[150px] absolute left-0 top-0 bottom-0 my-auto opacity-80' />
            <div className='w-[20rem] h-[20rem] bg-wht/30 rounded-full blur-[150px] absolute right-0 top-0 bottom-0 my-auto opacity-80' />


            <div className='max-w-[1500px] mx-auto relative justify-end py-32'>
                <AnimateText>
                    <div className="text-center">
                        <h1 className='text-center md:text-6xl font-[900] text-4xl 2xl:text-7xl'>THE NARRATIVE</h1>
                        <p className='text-center font-[500] text-2xl bg-gradient-to-r bg-clip-text from-rd to-orng inline-block text-transparent'>Privacy is security</p>
                    </div>
                </AnimateText>


                <div className="w-fit flex items gap-x-14 2xl:gap-x-20  mt-10 mx-auto lg:flex-row flex-col items-center justify-center">

                    <AnimateImage src="laptop" className="w-[33rem]" />
                    <AnimateText>
                        <div className="max-w-[28rem] flex flex-col gap-y-6 font-[200]">
                            <p className="">In recent years currency mixers have become increasingly popular, allowing users to swap digital assets while remaining anonymous.</p>

                            <p className="">
                                This has enabled a certain level of privacy and anonymity but with technological advancements in crypto, the need has increased exponentially.
                            </p>

                            <p className="">
                                It is no longer a question, any person that knows the basics of ether-scan, can find all the information about your wallets &#40;tokens, exchanges, dollar amounts&#41; privacy has now become a necessity more than ever before. Crypto by nature is cryptic &#40;hidden&#41; your tokens your business.
                            </p>
                        </div>
                    </AnimateText>

                </div>

            </div>
        </section >
    )
}

export default Privacy