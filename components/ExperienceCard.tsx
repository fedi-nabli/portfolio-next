import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col snap-center rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-ellipsis'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        className='w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
        src='https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
        <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
          />
          <img
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
          />
          <img
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work... - Ended ...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard