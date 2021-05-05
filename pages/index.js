import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'



export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">

      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-300 sm:text-5xl md:text-6xl">
            <span className="block justify-center xl:inline">All of your favorite</span>{' '}
            <span className="block text-red-300 xl:inline">Space X information.</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Latest satellite launch information from Starlink.
              </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <a
                href="/launches"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#003D7A] hover:bg-red-400 md:py-4 md:text-lg md:px-10"
              >
                FindSpaceX
                  </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="https://iss-sim.spacex.com/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-400 bg-indigo-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
              >
                Docking Simulation
                  </a>
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-center ">
        <Image src="/satellite-vid.gif" width={1600}
          height={500} style={{ height: '600px' }} />

      </div>
    </div>

  )
}






{/* <div className="relative bg-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">

                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >

                </Transition>
              </>
            )}
          </Popover> */}


{/* </div>
      </div>
      
    </div> */}