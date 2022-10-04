import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
      className='h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 md:top-20 2xl:top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects?.map((project, i) => (
          <Link href={project.linkToBuild}>
            <div key={project?._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <motion.img
                initial={{
                  y: -300,
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
                className='md:max-h-72'
                src={urlFor(project?.image).url()}
              />
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects?.length}:</span> {project.title}
                </h4>

                <div className='flex items-center space-x-2 justify-center'>
                  {project?.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      className='h-16 w-16'
                      src={urlFor(technology.image).url()}
                    />
                  ))}
                </div>

                <p className='text-lg text-center md:text-left'>
                  {project?.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[390px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects