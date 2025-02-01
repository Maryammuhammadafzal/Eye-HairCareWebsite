import React from 'react'

const Our_Services = () => {
  return (
    <div>
       <section className="py-16 bg-gradient-to-br from-[#FBECE4] to-[#E3F2F1] text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold relative text-gray-300 uppercase">
          Our Services
        </h2>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">
          A Global Leader, Treatment of Eye Disease
        </h3>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-left">
            <img
              src="/surgical-procedure.jpg"
              alt="Surgical Procedures"
              className="w-full rounded-md"
            />
            <div className="relative mt-4">
              <div className="absolute -top-8 right-4 bg-orange-500 text-white p-2 rounded-full">
                ✨
              </div>
              <h4 className="text-xl font-bold">Surgical Procedures</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor amet consectetur tempor adicing elit sed do
                usmod tempor incididunt enim minim veniam.
              </p>
              <a href="#" className="text-blue-500 font-semibold mt-4 block">
                Read More
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-left">
            <img
              src="/paediatric-ophthalmology.jpg"
              alt="Paediatric Ophthalmology"
              className="w-full rounded-md"
            />
            <div className="relative mt-4">
              <div className="absolute -top-8 right-4 bg-black text-white p-2 rounded-full">
                ⚖
              </div>
              <h4 className="text-xl font-bold">Paediatric Ophthalmology</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor amet consectetur tempor adicing elit sed do
                usmod tempor incididunt enim minim veniam.
              </p>
              <a href="#" className="text-blue-500 font-semibold mt-4 block">
                Read More
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-left">
            <img
              src="/lenses-transitions.jpg"
              alt="Lenses Transitions"
              className="w-full rounded-md"
            />
            <div className="relative mt-4">
              <div className="absolute -top-8 right-4 bg-orange-500 text-white p-2 rounded-full">
                👀
              </div>
              <h4 className="text-xl font-bold">Lenses Transitions</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor amet consectetur tempor adicing elit sed do
                usmod tempor incididunt enim minim veniam.
              </p>
              <a href="#" className="text-blue-500 font-semibold mt-4 block">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Our_Services
