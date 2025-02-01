import React from 'react'
import Button from '../../Components/Button/Button'
import AboutImage from "../../Images/about_image.jpeg"

{/* Who We Are Section */}
const About = () => {
  return (
     <section className="container mx-auto w-[100%] h-screen flex flex-col md:flex-row items-center">
     <div className="w-full md:w-1/2 p-6 flex flex-col gap-6">
       <h2 className="text-4xl font-bold text-gray-900">The Great Place Of Eyecare Hospital Center</h2>
       <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus rerum maxime unde quasi nobis animi sit optio! Possimus culpa ab odio omnis voluptatum fugiat in itaque similique alias at!</p>
       <div className="mt-6 space-y-4">
         <div className="flex items-center space-x-4">
           <img src="/icon1.png" alt="Vision" className="w-10 h-10" />
           <p className="text-lg font-semibold">Our Patients Vision</p>
         </div>
         <div className="flex items-center space-x-4">
           <img src="/icon2.png" alt="Doctor" className="w-10 h-10" />
           <p className="text-lg font-semibold">Trusted Eye Doctor</p>
         </div>
       </div>
       <Button title="Veiw All Team"/>
     </div>
     <div className="w-full md:w-1/2 p-6 flex justify-center">
       <img src={AboutImage} alt="Doctor" className="w-full max-w-md" />
     </div>
   </section>
  )
}

export default About
