import { useState } from 'react'
import './App.css'
import Home from './assets/Pages/Home/Home'
import Navbar from './assets/Components/Navbar'

function App() {

  return (

 <div data-layer="Main" className="Main w-[100%] h-auto relative ">
 <Home />
</div> 

  //   <div data-layer="Landing page" className="LandingPage w-96 h-96 pb-1.5 bg-black flex-col justify-start items-start gap-px inline-flex">
  //     <div data-layer="Html → Body" className="HtmlBody grow shrink basis-0 bg-white flex-col justify-start items-center inline-flex">
  //       <div data-layer="Main" className="Main w-96 h-96 relative">
  //         <div data-layer="Container" className="Container w-96 h-96 left-0 top-[150px] absolute">
  //           <div data-layer="Section" className="Section h-96 left-0 top-0 absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                 <div data-layer="Section" className="Section self-stretch h-96 flex-col justify-start items-start flex">
  //                   <div data-layer="Container" className="Container self-stretch h-96 flex-col justify-start items-start flex overflow-hidden">
  //                     <div data-layer="Container" className="Container h-96 flex-col justify-start items-start flex">
  //                       <div data-layer="Container" className="Container self-stretch h-96 px-96 py-52 flex-col justify-start items-center flex">
  //                         <img data-layer="Image" className="Image w-96 h-96" src="https://via.placeholder.com/2232x1385" />
  //                         <div data-layer="Background" className="Background w-96 h-96 bg-color-cyan-38" />
  //                         <div data-layer="Background" className="Background w-96 h-96 opacity-60 bg-black" />
  //                         <img data-layer="Image" className="Image w-96 h-28" src="https://via.placeholder.com/423x113" />
  //                         <img data-layer="Image" className="Image w-56 h-56" src="https://via.placeholder.com/231x231" />
  //                         <div data-layer="Container" className="Container h-96 flex-col justify-start items-start gap-1.5 flex">
  //                           <div data-layer="Container" className="Container h-36 opacity-40 flex-col justify-start items-center flex">
  //                             <div data-layer="Optc" className="Optc text-center text-orange-400 text-9xl font-extrabold font-['Jost'] uppercase leading-10">Optc</div>
  //                           </div>
  //                           <div data-layer="Heading 3" className="Heading3 self-stretch h-16 px-36 flex-col justify-start items-center flex">
  //                             <div data-layer="Eye Care & Holistic Health Center" className="EyeCareHolisticHealthCenter self-stretch text-center text-color-cyan-38 text-2xl font-medium font-['Jost'] leading-loose">Eye Care & Holistic Health Center</div>
  //                           </div>
  //                           <div data-layer="Heading 2" className="Heading2 self-stretch h-60 px-2.5 flex-col justify-start items-center flex">
  //                             <div data-layer="Eye Care & Holistic Health Center" className="EyeCareHolisticHealthCenter self-stretch text-center text-white text-7xl font-bold font-['Jost'] leading-10">Eye Care & Holistic<br/>Health Center</div>
  //                           </div>
  //                           <div data-layer="Container" className="Container self-stretch h-24 px-2 pt-2.5 flex-col justify-start items-center flex">
  //                             <div data-layer="We solve all your eye care needs by providing personalized and holistic eye care for you and your family!" className="WeSolveAllYourEyeCareNeedsByProvidingPersonalizedAndHolisticEyeCareForYouAndYourFamily self-stretch text-center text-white text-lg font-normal font-['Roboto'] leading-7">We solve all your eye care needs by providing personalized and holistic eye care<br/>for you and your family!</div>
  //                           </div>
  //                           <div data-layer="Container" className="Container self-stretch h-28 px-56 pt-6 flex-col justify-center items-center flex">
  //                             <div data-layer="Link" className="Link self-stretch px-11 py-4 bg-color-cyan-38 rounded-3xl justify-center items-center inline-flex overflow-hidden">
  //                               <div data-layer="Contact Now" className="ContactNow grow shrink basis-0 text-center text-white text-lg font-medium font-['Jost'] capitalize leading-relaxed">Contact Now</div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                         <img data-layer="Image" className="Image w-80 h-80" src="https://via.placeholder.com/305x305" />
  //                         <img data-layer="Image" className="Image w-28 h-28" src="https://via.placeholder.com/120x120" />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div data-layer="Container" className="Container h-96 px-16 pb-80 justify-center items-start gap-96 inline-flex">
  //                     <div data-layer="Background" className="Background w-14 self-stretch px-6 pt-2.5 pb-2 bg-white rounded-3xl flex-col justify-start items-center inline-flex">
  //                       <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
  //                         <div data-layer="Component 3" className="Component3 w-3.5 h-10 px-0.5 py-2.5 flex-col justify-center items-center inline-flex" />
  //                       </div>
  //                     </div>
  //                     <div data-layer="Background" className="Background w-14 self-stretch px-6 pt-2.5 pb-2 bg-white rounded-3xl flex-col justify-start items-center inline-flex">
  //                       <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
  //                         <div data-layer="Component 3" className="Component3 w-3.5 h-10 px-0.5 py-2.5 flex-col justify-center items-center inline-flex" />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-96 px-80 py-24 left-0 top-[786px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-start items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pr-3.5 justify-center items-start flex">
  //                 <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                   <div data-layer="Background" className="Background self-stretch h-80 px-7 pt-10 pb-16 bg-white rounded-2xl flex-col justify-start items-start gap-4 flex overflow-hidden">
  //                     <div data-layer="Background" className="Background w-24 px-6 py-5 bg-color-grey-96 rounded-3xl justify-start items-start inline-flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 h-12 justify-start items-start flex">
  //                         <div data-layer="Component 3" className="Component3 w-10 h-12 px-px py-px flex-col justify-center items-center inline-flex" />
  //                       </div>
  //                     </div>
  //                     <div data-layer="Heading 3" className="Heading3 self-stretch h-7 flex-col justify-start items-start flex">
  //                       <div data-layer="Component 4" className="Component4 justify-start items-start inline-flex">
  //                         <div data-layer="Text" className="Text text-neutral-900 text-2xl font-semibold font-['Jost'] leading-loose">Qualified Doctors</div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Container" className="Container self-stretch h-20 pt-px flex-col justify-start items-start flex">
  //                       <div data-layer="Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua." className="LoremIpsumDolorSitElitConSecturSedEiusmodTemporLaboreAliqua self-stretch text-color-grey-43 text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor sit elit con<br/>sectur sed eiusmod tempor labore<br/>aliqua.</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pr-3.5 justify-center items-start flex">
  //                 <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                   <div data-layer="Background" className="Background self-stretch h-80 px-7 pt-10 pb-16 bg-white rounded-2xl flex-col justify-start items-start gap-4 flex overflow-hidden">
  //                     <div data-layer="Background" className="Background w-24 px-7 py-5 bg-color-grey-96 rounded-3xl justify-start items-start inline-flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 h-12 justify-start items-start flex">
  //                         <div data-layer="Component 3" className="Component3 w-9 h-12 pb-px flex-col justify-center items-center inline-flex" />
  //                       </div>
  //                     </div>
  //                     <div data-layer="Heading 3" className="Heading3 self-stretch h-7 flex-col justify-start items-start flex">
  //                       <div data-layer="Component 4" className="Component4 justify-start items-start inline-flex">
  //                         <div data-layer="Text" className="Text text-neutral-900 text-2xl font-semibold font-['Jost'] leading-loose">Modern Equipment</div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Container" className="Container self-stretch h-20 pt-px flex-col justify-start items-start flex">
  //                       <div data-layer="Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua." className="LoremIpsumDolorSitElitConSecturSedEiusmodTemporLaboreAliqua self-stretch text-color-grey-43 text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor sit elit con<br/>sectur sed eiusmod tempor labore<br/>aliqua.</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pr-3.5 justify-center items-start flex">
  //                 <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                   <div data-layer="Background" className="Background self-stretch h-80 px-7 pt-10 pb-16 bg-white rounded-2xl flex-col justify-start items-start gap-4 flex overflow-hidden">
  //                     <div data-layer="Background" className="Background w-24 px-5 py-5 bg-color-grey-96 rounded-3xl justify-start items-start inline-flex">
  //                       <div data-layer="Container" className="Container justify-start items-start flex">
  //                         <div data-layer="Component 3" className="Component3 w-14 h-12 justify-center items-center flex" />
  //                       </div>
  //                     </div>
  //                     <div data-layer="Heading 3" className="Heading3 self-stretch h-7 flex-col justify-start items-start flex">
  //                       <div data-layer="Component 4" className="Component4 justify-start items-start inline-flex">
  //                         <div data-layer="Text" className="Text text-neutral-900 text-2xl font-semibold font-['Jost'] leading-loose">Emergency Help</div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Container" className="Container self-stretch h-20 pt-px flex-col justify-start items-start flex">
  //                       <div data-layer="Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua." className="LoremIpsumDolorSitElitConSecturSedEiusmodTemporLaboreAliqua self-stretch text-color-grey-43 text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor sit elit con<br/>sectur sed eiusmod tempor labore<br/>aliqua.</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pr-3.5 justify-center items-start flex">
  //                 <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                   <div data-layer="Background" className="Background self-stretch h-80 px-7 pt-10 pb-16 bg-white rounded-2xl flex-col justify-start items-start gap-4 flex overflow-hidden">
  //                     <div data-layer="Background" className="Background w-24 p-5 bg-color-grey-96 rounded-3xl justify-start items-start inline-flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 h-12 justify-start items-start flex">
  //                         <div data-layer="Component 3" className="Component3 w-12 h-12 pb-px justify-center items-center flex" />
  //                       </div>
  //                     </div>
  //                     <div data-layer="Heading 3" className="Heading3 self-stretch h-7 flex-col justify-start items-start flex">
  //                       <div data-layer="Component 4" className="Component4 justify-start items-start inline-flex">
  //                         <div data-layer="Text" className="Text text-neutral-900 text-2xl font-semibold font-['Jost'] leading-loose">Individual Approach</div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Container" className="Container self-stretch h-20 pt-px flex-col justify-start items-start flex">
  //                       <div data-layer="Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua." className="LoremIpsumDolorSitElitConSecturSedEiusmodTemporLaboreAliqua self-stretch text-color-grey-43 text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor sit elit con<br/>sectur sed eiusmod tempor labore<br/>aliqua.</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-96 px-64 left-0 top-[1326px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-start items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch justify-center items-start flex">
  //                 <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pb-10 flex-col justify-center items-start inline-flex">
  //                   <div data-layer="Margin" className="Margin self-stretch h-96 flex-col justify-center items-start flex">
  //                     <div data-layer="Container" className="Container self-stretch h-96 pt-20 flex-col justify-start items-start flex">
  //                       <div data-layer="Section" className="Section self-stretch h-72 flex-col justify-start items-center flex">
  //                         <div data-layer="Container" className="Container h-72 px-3.5 flex-col justify-start items-start gap-6 flex">
  //                           <div data-layer="Container" className="Container self-stretch h-36 flex-col justify-start items-start flex">
  //                             <div data-layer="Who We Are?" className="WhoWeAre text-rose-100 text-8xl font-extrabold font-['Jost'] leading-10">Who We Are?</div>
  //                             <div data-layer="Heading 2" className="Heading2 self-stretch h-20 flex-col justify-start items-start flex">
  //                               <div data-layer="The Great Place Of Eyecare Hospital Center" className="TheGreatPlaceOfEyecareHospitalCenter self-stretch text-neutral-900 text-4xl font-bold font-['Jost'] leading-10">The Great Place Of Eyecare<br/>Hospital Center</div>
  //                             </div>
  //                           </div>
  //                           <div data-layer="Container" className="Container self-stretch h-28 flex-col justify-start items-start flex">
  //                             <div data-layer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat." className="LoremIpsumDolorSitAmetConsecteturAdipisicingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostRudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecat self-stretch text-color-grey-43 text-base font-normal font-['Roboto'] leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut<br/>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco<br/>laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in<br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div data-layer="Container" className="Container self-stretch h-96 flex-col justify-start items-start flex">
  //                     <div data-layer="Section" className="Section self-stretch h-96 pt-24 pb-28 flex-col justify-start items-center flex">
  //                       <div data-layer="Container" className="Container h-80 flex-col justify-start items-start flex">
  //                         <div data-layer="Container" className="Container self-stretch justify-center items-start inline-flex">
  //                           <div data-layer="Container" className="Container grow shrink basis-0 self-stretch px-3.5 pt-3.5 flex-col justify-start items-start inline-flex">
  //                             <div data-layer="Container" className="Container self-stretch h-72 flex-col justify-start items-start gap-10 flex">
  //                               <div data-layer="Container" className="Container self-stretch h-20 pl-24 pt-2 pb-2.5 flex-col justify-start items-start flex">
  //                                 <div data-layer="Background" className="Background w-20 h-20 px-3 py-4 bg-color-grey-96 rounded-3xl flex-col justify-start items-center flex">
  //                                   <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
  //                                     <div data-layer="Component 3" className="Component3 w-14 h-11 px-px py-px justify-center items-center flex" />
  //                                   </div>
  //                                 </div>
  //                                 <div data-layer="Heading 3" className="Heading3 self-stretch h-14 flex-col justify-start items-start flex">
  //                                   <div data-layer="Our Patients Vision" className="OurPatientsVision self-stretch text-neutral-900 text-2xl font-medium font-['Jost'] leading-loose">Our Patients<br/>Vision</div>
  //                                 </div>
  //                               </div>
  //                               <div data-layer="Container" className="Container self-stretch h-20 pl-24 pt-2 pb-2.5 flex-col justify-start items-start flex">
  //                                 <div data-layer="Background" className="Background w-20 h-20 px-4 py-4 bg-color-grey-96 rounded-3xl flex-col justify-start items-center flex">
  //                                   <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
  //                                     <div data-layer="Component 3" className="Component3 w-12 h-11 px-px py-px justify-center items-center flex" />
  //                                   </div>
  //                                 </div>
  //                                 <div data-layer="Heading 3" className="Heading3 self-stretch h-14 flex-col justify-start items-start flex">
  //                                   <div data-layer="Trusted Eye Doctor" className="TrustedEyeDoctor self-stretch text-neutral-900 text-2xl font-medium font-['Jost'] leading-loose">Trusted Eye<br/>Doctor</div>
  //                                 </div>
  //                               </div>
  //                               <div data-layer="Container" className="Container self-stretch h-14 flex-col justify-center items-start flex">
  //                                 <div data-layer="Link" className="Link px-11 py-4 bg-color-cyan-38 rounded-3xl justify-start items-center inline-flex overflow-hidden">
  //                                   <div data-layer="View All Team" className="ViewAllTeam text-center text-white text-lg font-medium font-['Jost'] capitalize leading-relaxed">View All Team</div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch justify-center items-start flex">
  //                 <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                   <div data-layer="Section" className="Section self-stretch h-96 pt-24 pb-28 flex-col justify-start items-center flex">
  //                     <div data-layer="Container" className="Container h-96 flex-col justify-start items-start flex">
  //                       <div data-layer="Container" className="Container self-stretch justify-center items-start inline-flex">
  //                         <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pl-7 pr-3.5 flex-col justify-start items-start inline-flex">
  //                           <div data-layer="Container" className="Container self-stretch h-96 pl-14 pr-5 flex-col justify-start items-start flex">
  //                             <div data-layer="Figure" className="Figure self-stretch h-96 flex-col justify-center items-start flex">
  //                               <img data-layer="about-1.png" className="About1Png h-96 relative" src="https://via.placeholder.com/577x679" />
  //                             </div>
  //                             <img data-layer="Image" className="Image w-60 h-60" src="https://via.placeholder.com/241x241" />
  //                             <div data-layer="Gradient" className="Gradient w-96 h-96 relative bg-gradient-to-r from-sky-100 to-red-100 rounded-tl-full rounded-tr-full rounded-bl-3xl rounded-br-3xl" />
  //                             <img data-layer="Image" className="Image w-60 h-60" src="https://via.placeholder.com/241x241" />
  //                             <div data-layer="Background+Shadow" className="BackgroundShadow h-32 pl-32 pr-7 pt-10 pb-9 bg-orange-500 rounded-tr-3xl rounded-bl-3xl shadow-[0px_10px_40px_0px_rgba(0,0,0,0.15)] flex-col justify-start items-start flex">
  //                               <div data-layer="Heading 2 → 30" className="Heading230 w-20 h-14 text-white text-6xl font-medium font-['Jost'] leading-10">30</div>
  //                               <div data-layer="Heading 4" className="Heading4 self-stretch h-14 flex-col justify-start items-start flex">
  //                                 <div data-layer="Years of Experience in This Field" className="YearsOfExperienceInThisField self-stretch text-white text-xl font-medium font-['Jost'] leading-7">Years of Experience<br/>in This Field</div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-96 left-0 top-[2225.06px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-center items-start inline-flex">
  //                 <div data-layer="Margin" className="Margin self-stretch h-72 pb-5 flex-col justify-center items-start flex">
  //                   <div data-layer="Container" className="Container self-stretch h-64 pt-28 pb-12 flex-col justify-start items-start flex">
  //                     <div data-layer="Section" className="Section self-stretch h-36 px-72 flex-col justify-start items-center flex">
  //                       <div data-layer="Container" className="Container h-36 px-3.5 flex-col justify-start items-start flex">
  //                         <div data-layer="Container" className="Container self-stretch h-36 flex-col justify-start items-center flex">
  //                           <div data-layer="Our Services" className="OurServices text-center text-rose-200 text-8xl font-extrabold font-['Jost'] leading-10">Our Services</div>
  //                           <div data-layer="Heading 2" className="Heading2 self-stretch h-20 px-60 flex-col justify-start items-center flex">
  //                             <div data-layer="A Global Leader, Treatment of eye Disease" className="AGlobalLeaderTreatmentOfEyeDisease self-stretch text-center text-neutral-900 text-4xl font-bold font-['Jost'] leading-10">A Global Leader, Treatment of eye Disease</div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div data-layer="Section:margin" className="SectionMargin self-stretch h-96 pb-24 flex-col justify-center items-start flex">
  //                   <div data-layer="Section" className="Section self-stretch h-96 px-96 flex-col justify-start items-center flex">
  //                     <div data-layer="Container" className="Container w-96 justify-start items-start inline-flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch px-3.5 justify-center items-start flex">
  //                         <div data-layer="Container" className="Container h-96 relative" />
  //                       </div>
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch px-3.5 justify-center items-start flex">
  //                         <div data-layer="Container" className="Container h-96 relative" />
  //                       </div>
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch px-3.5 justify-center items-start flex">
  //                         <div data-layer="Container" className="Container h-96 relative" />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-96 left-0 top-[3077.59px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                 <div data-layer="Section" className="Section self-stretch h-96 px-72 pt-28 pb-44 bg-color-azure-10 flex-col justify-start items-center flex">
  //                   <img data-layer="Image" className="Image w-72 h-96" src="https://via.placeholder.com/285x564" />
  //                   <div data-layer="Mask Group" className="MaskGroup w-96 h-96 relative">
  //                     <div data-layer="Component 5" className="Component5 w-96 h-96 left-0 top-0 absolute justify-center items-center inline-flex" />
  //                     <div data-layer="Background" className="Background w-96 h-96 py-96 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
  //                       <div data-layer="Background" className="Background w-96 h-96 opacity-30 bg-black" />
  //                       <div data-layer="Container" className="Container self-stretch h-24 px-96 flex-col justify-start items-center flex">
  //                         <div data-layer="Link" className="Link w-24 px-9 pt-9 pb-8 rounded-3xl border-4 border-white justify-center items-start inline-flex">
  //                           <div data-layer="Symbol" className="Symbol text-center text-white text-3xl font-black font-['Font Awesome 5 Free'] leading-loose"></div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div data-layer="Container" className="Container h-96 flex-col justify-start items-start flex">
  //                     <div data-layer="Container" className="Container self-stretch pl-96 justify-center items-start inline-flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pl-20 pr-3.5 flex-col justify-start items-start inline-flex">
  //                         <div data-layer="Container" className="Container self-stretch h-96 flex-col justify-start items-center gap-9 flex">
  //                           <div data-layer="Container" className="Container self-stretch h-56 flex-col justify-start items-start flex">
  //                             <div data-layer="Why Choose" className="WhyChoose text-stone-800 text-8xl font-extrabold font-['Jost'] leading-10">Why Choose</div>
  //                             <div data-layer="Heading 2" className="Heading2 self-stretch h-20 flex-col justify-start items-start flex">
  //                               <div data-layer="Great Reasons For People Choose Optcare" className="GreatReasonsForPeopleChooseOptcare self-stretch text-white text-4xl font-bold font-['Jost'] leading-10">Great Reasons For People<br/>Choose Optcare</div>
  //                             </div>
  //                             <div data-layer="Container" className="Container self-stretch h-28 pt-14 flex-col justify-start items-start flex">
  //                               <div data-layer="Lorem ipsum dolor sit amet consectur adipicing elit sed do esmod tempor incididunt labore aliqua." className="LoremIpsumDolorSitAmetConsecturAdipicingElitSedDoEsmodTemporIncididuntLaboreAliqua self-stretch text-color-grey-73 text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor sit amet consectur adipicing elit sed do esmod tempor<br/>incididunt labore aliqua.</div>
  //                             </div>
  //                           </div>
  //                           <div data-layer="Container" className="Container w-96 h-72 relative">
  //                             <div data-layer="Container" className="Container w-72 h-36 px-3.5 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
  //                               <div data-layer="Container" className="Container self-stretch h-24 pr-3.5 flex-col justify-start items-start gap-3.5 flex">
  //                                 <div data-layer="Heading 4" className="Heading4 self-stretch h-7 flex-col justify-start items-start flex">
  //                                   <div data-layer="Component 4" className="Component4 justify-start items-start inline-flex">
  //                                     <div data-layer="Text" className="Text text-white text-xl font-semibold font-['Jost'] leading-loose">Quality Staff</div>
  //                                   </div>
  //                                 </div>
  //                                 <div data-layer="Container" className="Container self-stretch h-12 flex-col justify-start items-start flex">
  //                                   <div data-layer="Lorem ipsum dolor amet conad sed do usmod tempor." className="LoremIpsumDolorAmetConadSedDoUsmodTempor self-stretch text-color-grey-73 text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor amet conad<br/>sed do usmod tempor.</div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                             <div data-layer="Container" className="Container w-72 h-36 px-3.5 left-[295px] top-0 absolute flex-col justify-start items-start inline-flex">
  //                               <div data-layer="Container" className="Container self-stretch h-24 pr-3.5 flex-col justify-start items-start gap-3.5 flex">
  //                                 <div data-layer="Heading 4" className="Heading4 self-stretch h-7 flex-col justify-start items-start flex">
  //                                   <div data-layer="Component 4" className="Component4 justify-start items-start inline-flex">
  //                                     <div data-layer="Text" className="Text text-white text-xl font-semibold font-['Jost'] leading-loose">Quality Staff</div>
  //                                   </div>
  //                                 </div>
  //                                 <div data-layer="Container" className="Container self-stretch h-12 flex-col justify-start items-start flex">
  //                                   <div data-layer="Lorem ipsum dolor amet conad sed do usmod tempor." className="LoremIpsumDolorAmetConadSedDoUsmodTempor self-stretch text-color-grey-73 text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor amet conad<br/>sed do usmod tempor.</div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                             <div data-layer="Container" className="Container w-72 h-36 px-3.5 left-0 top-[140px] absolute flex-col justify-start items-start inline-flex">
  //                               <div data-layer="Container" className="Container self-stretch h-24 pr-3.5 flex-col justify-start items-start gap-3.5 flex">
  //                                 <div data-layer="Heading 4" className="Heading4 self-stretch h-7 flex-col justify-start items-start flex">
  //                                   <div data-layer="Component 4" className="Component4 justify-start items-start inline-flex">
  //                                     <div data-layer="Text" className="Text text-white text-xl font-semibold font-['Jost'] leading-loose">Quality Staff</div>
  //                                   </div>
  //                                 </div>
  //                                 <div data-layer="Container" className="Container self-stretch h-12 flex-col justify-start items-start flex">
  //                                   <div data-layer="Lorem ipsum dolor amet conad sed do usmod tempor." className="LoremIpsumDolorAmetConadSedDoUsmodTempor self-stretch text-color-grey-73 text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor amet conad<br/>sed do usmod tempor.</div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                             <div data-layer="Container" className="Container w-72 h-36 px-3.5 left-[295px] top-[140px] absolute flex-col justify-start items-start inline-flex">
  //                               <div data-layer="Container" className="Container self-stretch h-24 pr-3.5 flex-col justify-start items-start gap-3.5 flex">
  //                                 <div data-layer="Heading 4" className="Heading4 self-stretch h-7 flex-col justify-start items-start flex">
  //                                   <div data-layer="Component 4" className="Component4 justify-start items-start inline-flex">
  //                                     <div data-layer="Text" className="Text text-white text-xl font-semibold font-['Jost'] leading-loose">Quality Staff</div>
  //                                   </div>
  //                                 </div>
  //                                 <div data-layer="Container" className="Container self-stretch h-12 flex-col justify-start items-start flex">
  //                                   <div data-layer="Lorem ipsum dolor amet conad sed do usmod tempor." className="LoremIpsumDolorAmetConadSedDoUsmodTempor self-stretch text-color-grey-73 text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor amet conad<br/>sed do usmod tempor.</div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <img data-layer="Image" className="Image w-64 h-64" src="https://via.placeholder.com/255x255" />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-48 px-96 left-0 top-[3894.59px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //               <div data-layer="Container" className="Container h-48 relative">
  //                 <div data-layer="Margin" className="Margin w-96 h-16 left-0 top-0 absolute" />
  //                 <div data-layer="Container" className="Container w-96 h-56 left-0 top-[-32px] absolute flex-col justify-start items-start inline-flex">
  //                   <div data-layer="Section" className="Section self-stretch h-56 flex-col justify-start items-center flex">
  //                     <div data-layer="Container" className="Container h-56 px-3.5 flex-col justify-start items-start flex">
  //                       <div data-layer="Background" className="Background h-56 relative bg-orange-500 rounded-tr-3xl rounded-bl-3xl" />
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-96 left-0 top-[4085.19px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                 <div data-layer="Section" className="Section self-stretch h-96 px-72 py-28 flex-col justify-start items-center flex">
  //                   <div data-layer="Container" className="Container h-96 flex-col justify-start items-center gap-14 flex">
  //                     <div data-layer="Container" className="Container self-stretch h-36 flex-col justify-start items-center flex">
  //                       <div data-layer="Ophthalmologist" className="Ophthalmologist text-center text-rose-100 text-8xl font-extrabold font-['Jost'] leading-10">Ophthalmologist</div>
  //                       <div data-layer="Heading 2" className="Heading2 self-stretch h-20 px-96 flex-col justify-start items-center flex">
  //                         <div data-layer="The Most Qualified Skillful & Professional staff" className="TheMostQualifiedSkillfulProfessionalStaff self-stretch text-center text-neutral-900 text-4xl font-bold font-['Jost'] leading-10">The Most Qualified Skillful &<br/>Professional staff</div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Container" className="Container self-stretch justify-center items-start inline-flex">
  //                       <div data-layer="Rectangle" className="Rectangle grow shrink basis-0 self-stretch" />
  //                       <div data-layer="Rectangle" className="Rectangle grow shrink basis-0 self-stretch" />
  //                       <div data-layer="Rectangle" className="Rectangle grow shrink basis-0 self-stretch" />
  //                       <div data-layer="Rectangle" className="Rectangle grow shrink basis-0 self-stretch" />
  //                     </div>
  //                     <div data-layer="Container" className="Container self-stretch h-14 px-96 flex-col justify-center items-center flex">
  //                       <div data-layer="Link" className="Link self-stretch px-11 py-4 bg-color-cyan-38 rounded-3xl justify-center items-center inline-flex overflow-hidden">
  //                         <div data-layer="View All Team" className="ViewAllTeam grow shrink basis-0 text-center text-white text-lg font-medium font-['Jost'] capitalize leading-relaxed">View All Team</div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-96 left-0 top-[5087.19px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                 <div data-layer="Section" className="Section self-stretch h-96 px-72 pt-24 flex-col justify-start items-center flex">
  //                   <div data-layer="Container" className="Container h-96 flex-col justify-start items-start flex">
  //                     <div data-layer="Container" className="Container self-stretch pr-96 justify-center items-start inline-flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch px-3.5 flex-col justify-start items-start inline-flex">
  //                         <div data-layer="Background+Shadow" className="BackgroundShadow self-stretch h-96 px-16 py-16 bg-white rounded-tr-3xl rounded-bl-3xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.10)] flex-col justify-start items-start gap-9 flex">
  //                           <div data-layer="Container" className="Container self-stretch h-36 flex-col justify-start items-start flex">
  //                             <div data-layer="Testimonial" className="Testimonial text-rose-100 text-7xl font-extrabold font-['Jost'] leading-10">Testimonial</div>
  //                             <div data-layer="Heading 2" className="Heading2 self-stretch h-20 flex-col justify-start items-start flex">
  //                               <div data-layer="What Our Client Say About Optcare" className="WhatOurClientSayAboutOptcare self-stretch text-neutral-900 text-4xl font-bold font-['Jost'] leading-10">What Our Client Say<br/>About Optcare</div>
  //                             </div>
  //                           </div>
  //                           <div data-layer="Container" className="Container self-stretch h-72 flex-col justify-start items-start flex">
  //                             <div data-layer="Container" className="Container self-stretch h-72 flex-col justify-start items-start flex overflow-hidden">
  //                               <div data-layer="Container" className="Container h-72 pb-14 flex-col justify-start items-start flex">
  //                                 <div data-layer="Container" className="Container self-stretch h-60 flex-col justify-start items-start gap-10 flex">
  //                                   <div data-layer="Container" className="Container self-stretch h-32 flex-col justify-start items-start flex">
  //                                     <div data-layer="“Adipisicing elit sed do eiusmodim tempor incid labore etax dolore magna aliqua enim minium quis veniam nostrud exer cition ulamco laboris nisar aliquip commodo consequat aute irure dolor in reprehenderit in voluptate”." className="AdipisicingElitSedDoEiusmodimTemporIncidLaboreEtaxDoloreMagnaAliquaEnimMiniumQuisVeniamNostrudExerCitionUlamcoLaborisNisarAliquipCommodoConsequatAuteIrureDolorInReprehenderitInVoluptate self-stretch text-color-grey-43 text-lg font-normal font-['Roboto'] leading-loose">“Adipisicing elit sed do eiusmodim tempor incid labore etax<br/>dolore magna aliqua enim minium quis veniam nostrud exer<br/>cition ulamco laboris nisar aliquip commodo consequat aute<br/>irure dolor in reprehenderit in voluptate”.</div>
  //                                   </div>
  //                                   <div data-layer="Background" className="Background self-stretch h-16 pl-24 pt-2 pb-1 bg-color-grey-95 rounded-2xl flex-col justify-start items-start gap-0.5 flex">
  //                                     <div data-layer="Figure" className="Figure w-16 h-16 rounded-3xl flex-col justify-start items-start flex">
  //                                       <img data-layer="testimonial-1.jpg" className="Testimonial1Jpg h-16 relative rounded-3xl" src="https://via.placeholder.com/70x70" />
  //                                     </div>
  //                                     <div data-layer="Heading 3" className="Heading3 self-stretch h-7 flex-col justify-start items-start flex">
  //                                       <div data-layer="Rachel McAdams" className="RachelMcadams self-stretch text-neutral-900 text-2xl font-semibold font-['Jost'] leading-loose">Rachel McAdams</div>
  //                                     </div>
  //                                     <div data-layer="Container" className="Container self-stretch h-6 flex-col justify-start items-start flex">
  //                                       <div data-layer="Electrician" className="Electrician self-stretch text-color-azure-15 text-base font-normal font-['Roboto'] leading-relaxed">Electrician</div>
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                             <div data-layer="Container" className="Container w-14 justify-start items-start inline-flex">
  //                               <div data-layer="Button" className="Button px-1.5 pt-2.5 pb-1.5 justify-start items-start flex">
  //                                 <div data-layer="Background" className="Background w-1.5 h-1.5 bg-color-cyan-38 rounded" />
  //                               </div>
  //                               <div data-layer="Button" className="Button px-1.5 pt-2.5 pb-1.5 justify-start items-start flex">
  //                                 <div data-layer="Background" className="Background w-1.5 h-1.5 bg-color-grey-84 rounded" />
  //                               </div>
  //                               <div data-layer="Button" className="Button px-1.5 pt-2.5 pb-1.5 justify-start items-start flex">
  //                                 <div data-layer="Background" className="Background w-1.5 h-1.5 bg-color-grey-84 rounded" />
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-96 left-0 top-[5794.19px] absolute flex-col justify-start items-center inline-flex">
  //             <img data-layer="Image" className="Image w-96 h-96" src="https://via.placeholder.com/1440x686" />
  //             <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-center items-start inline-flex">
  //                 <div data-layer="Margin" className="Margin self-stretch h-80 pb-5 flex-col justify-center items-start flex">
  //                   <div data-layer="Container" className="Container self-stretch h-80 pt-28 pb-12 flex-col justify-start items-start flex">
  //                     <div data-layer="Section" className="Section self-stretch h-48 px-72 flex-col justify-start items-center flex">
  //                       <div data-layer="Container" className="Container h-48 px-3.5 flex-col justify-start items-start flex">
  //                         <div data-layer="Container" className="Container self-stretch h-48 flex-col justify-start items-center flex">
  //                           <div data-layer="How It Works" className="HowItWorks text-center text-rose-100 text-8xl font-extrabold font-['Jost'] leading-10">How It Works</div>
  //                           <div data-layer="Heading 2" className="Heading2 self-stretch h-32 px-96 flex-col justify-start items-center flex">
  //                             <div data-layer="How it Helps You to Keep Healthy" className="HowItHelpsYouToKeepHealthy self-stretch text-center text-neutral-900 text-4xl font-bold font-['Jost'] leading-10">How it Helps You to<br/>Keep Healthy</div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div data-layer="Section" className="Section self-stretch h-96 px-80 flex-col justify-start items-center flex">
  //                   <div data-layer="Container" className="Container w-96 justify-start items-start inline-flex">
  //                     <div data-layer="Container" className="Container grow shrink basis-0 self-stretch justify-center items-start flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch px-3.5 flex-col justify-start items-start inline-flex">
  //                         <div data-layer="Section" className="Section self-stretch h-80 px-12 flex-col justify-start items-center flex">
  //                           <div data-layer="Container" className="Container w-80 h-80 relative">
  //                             <div data-layer="Background" className="Background w-48 px-2.5 pb-5 left-[59px] top-0 absolute bg-white justify-center items-start inline-flex">
  //                               <div data-layer="Background" className="Background w-14 h-14 px-4 bg-orange-500 rounded-3xl flex-col justify-start items-center inline-flex">
  //                                 <div data-layer="01" className="text-center text-white text-xl font-semibold font-['Roboto'] leading-10">01</div>
  //                               </div>
  //                               <div data-layer="Figure" className="Figure h-44 rounded-3xl justify-center items-center flex">
  //                                 <div data-layer="Border" className="Border w-48 h-48 rounded-full border-2 border-color-cyan-38" />
  //                                 <img data-layer="process-1.png" className="Process1Png h-44 relative rounded-3xl" src="https://via.placeholder.com/170x170" />
  //                               </div>
  //                             </div>
  //                             <div data-layer="Heading 3" className="Heading3 h-7 px-16 left-0 top-[229px] absolute flex-col justify-start items-center inline-flex">
  //                               <div data-layer="Get Appointment" className="GetAppointment text-center text-neutral-900 text-2xl font-semibold font-['Jost'] leading-loose">Get Appointment</div>
  //                             </div>
  //                             <div data-layer="Container" className="Container h-14 px-2 left-0 top-[274px] absolute flex-col justify-start items-center inline-flex">
  //                               <div data-layer="Book & pay online. We’ll match you with a trusted house cleaner" className="BookPayOnlineWeLlMatchYouWithATrustedHouseCleaner text-center text-color-grey-43 text-base font-normal font-['Roboto'] leading-loose">Book & pay online. We’ll match you with a<br/>trusted house cleaner</div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Container" className="Container grow shrink basis-0 self-stretch justify-center items-start flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch px-3.5 flex-col justify-start items-start inline-flex">
  //                         <div data-layer="Section" className="Section self-stretch h-80 px-12 flex-col justify-start items-center flex">
  //                           <div data-layer="Container" className="Container w-80 h-80 relative">
  //                             <div data-layer="Background" className="Background w-48 px-2.5 pb-5 left-[59px] top-0 absolute bg-white justify-center items-start inline-flex">
  //                               <div data-layer="Background" className="Background w-14 h-14 px-4 bg-orange-500 rounded-3xl flex-col justify-start items-center inline-flex">
  //                                 <div data-layer="01" className="text-center text-white text-xl font-semibold font-['Roboto'] leading-10">01</div>
  //                               </div>
  //                               <div data-layer="Figure" className="Figure h-44 rounded-3xl justify-center items-center flex">
  //                                 <div data-layer="Border" className="Border w-48 h-48 rounded-full border-2 border-color-cyan-38" />
  //                                 <img data-layer="process-1.png" className="Process1Png h-44 relative rounded-3xl" src="https://via.placeholder.com/170x170" />
  //                               </div>
  //                             </div>
  //                             <div data-layer="Heading 3" className="Heading3 h-7 px-16 left-0 top-[229px] absolute flex-col justify-start items-center inline-flex">
  //                               <div data-layer="Get Appointment" className="GetAppointment text-center text-neutral-900 text-2xl font-semibold font-['Jost'] leading-loose">Get Appointment</div>
  //                             </div>
  //                             <div data-layer="Container" className="Container h-14 px-2 left-0 top-[274px] absolute flex-col justify-start items-center inline-flex">
  //                               <div data-layer="Book & pay online. We’ll match you with a trusted house cleaner" className="BookPayOnlineWeLlMatchYouWithATrustedHouseCleaner text-center text-color-grey-43 text-base font-normal font-['Roboto'] leading-loose">Book & pay online. We’ll match you with a<br/>trusted house cleaner</div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Container" className="Container grow shrink basis-0 self-stretch justify-center items-start flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch px-3.5 flex-col justify-start items-start inline-flex">
  //                         <div data-layer="Section" className="Section self-stretch h-80 px-12 flex-col justify-start items-center flex">
  //                           <div data-layer="Container" className="Container w-80 h-80 relative">
  //                             <div data-layer="Background" className="Background w-48 px-2.5 pb-5 left-[59px] top-0 absolute bg-white justify-center items-start inline-flex">
  //                               <div data-layer="Background" className="Background w-14 h-14 px-4 bg-orange-500 rounded-3xl flex-col justify-start items-center inline-flex">
  //                                 <div data-layer="01" className="text-center text-white text-xl font-semibold font-['Roboto'] leading-10">01</div>
  //                               </div>
  //                               <div data-layer="Figure" className="Figure h-44 rounded-3xl justify-center items-center flex">
  //                                 <div data-layer="Border" className="Border w-48 h-48 rounded-full border-2 border-color-cyan-38" />
  //                                 <img data-layer="process-1.png" className="Process1Png h-44 relative rounded-3xl" src="https://via.placeholder.com/170x170" />
  //                               </div>
  //                             </div>
  //                             <div data-layer="Heading 3" className="Heading3 h-7 px-16 left-0 top-[229px] absolute flex-col justify-start items-center inline-flex">
  //                               <div data-layer="Get Appointment" className="GetAppointment text-center text-neutral-900 text-2xl font-semibold font-['Jost'] leading-loose">Get Appointment</div>
  //                             </div>
  //                             <div data-layer="Container" className="Container h-14 px-2 left-0 top-[274px] absolute flex-col justify-start items-center inline-flex">
  //                               <div data-layer="Book & pay online. We’ll match you with a trusted house cleaner" className="BookPayOnlineWeLlMatchYouWithATrustedHouseCleaner text-center text-color-grey-43 text-base font-normal font-['Roboto'] leading-loose">Book & pay online. We’ll match you with a<br/>trusted house cleaner</div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-96 px-64 py-28 left-0 top-[6590.19px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-start items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch justify-center items-start flex">
  //                 <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pl-3.5 pr-20 flex-col justify-start items-start inline-flex">
  //                   <div data-layer="Section" className="Section self-stretch h-96 pr-28 pb-24 flex-col justify-start items-start flex">
  //                     <div data-layer="Figure" className="Figure self-stretch h-96 rounded-tl-3xl rounded-br-3xl flex-col justify-center items-start flex overflow-hidden">
  //                       <img data-layer="about-2.jpg" className="About2Jpg h-96 relative rounded-tl-3xl rounded-br-3xl" src="https://via.placeholder.com/495x495" />
  //                     </div>
  //                     <div data-layer="Container" className="Container h-28 flex-col justify-center items-start flex">
  //                       <img data-layer="icon-1.png" className="Icon1Png h-28 relative" src="https://via.placeholder.com/120x120" />
  //                     </div>
  //                     <div data-layer="Figure" className="Figure h-80 p-2.5 bg-white/0 rounded-tr-3xl rounded-bl-3xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.10)] border-8 border-white flex-col justify-center items-start flex">
  //                       <img data-layer="about-3.jpg" className="About3Jpg h-80 relative rounded-tr-3xl rounded-bl-3xl" src="https://via.placeholder.com/270x320" />
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch justify-center items-start flex">
  //                 <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pb-32 flex-col justify-center items-start gap-px inline-flex">
  //                   <div data-layer="Margin" className="Margin self-stretch h-64 pb-5 flex-col justify-center items-start flex">
  //                     <div data-layer="Container" className="Container self-stretch h-60 flex-col justify-start items-start flex">
  //                       <div data-layer="Section" className="Section self-stretch h-56 flex-col justify-start items-center flex">
  //                         <div data-layer="Container" className="Container h-56 px-3.5 flex-col justify-start items-start gap-6 flex">
  //                           <div data-layer="Container" className="Container self-stretch h-36 flex-col justify-start items-start flex">
  //                             <div data-layer="Ophthmologist" className="Ophthmologist text-orange-100 text-8xl font-extrabold font-['Jost'] leading-10">Ophthmologist</div>
  //                             <div data-layer="Heading 2" className="Heading2 self-stretch h-20 flex-col justify-start items-start flex">
  //                               <div data-layer="Eye Care Service Skills For Child and Adults" className="EyeCareServiceSkillsForChildAndAdults self-stretch text-neutral-900 text-4xl font-bold font-['Jost'] leading-10">Eye Care Service Skills For Child<br/>and Adults</div>
  //                             </div>
  //                           </div>
  //                           <div data-layer="Container" className="Container self-stretch h-14 pb-px flex-col justify-start items-start flex">
  //                             <div data-layer="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt labore aliqua." className="LoremIpsumDolorSitAmetConsecteturAdipisicingElitSedDoEiusmodTemporIncididuntLaboreAliqua self-stretch text-color-grey-43 text-base font-normal font-['Roboto'] leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt<br/>labore aliqua.</div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div data-layer="Container" className="Container self-stretch h-48 pl-3.5 pr-6 flex-col justify-start items-start flex">
  //                     <div data-layer="Section" className="Section self-stretch h-44 flex-col justify-start items-start gap-6 flex">
  //                       <div data-layer="Container" className="Container self-stretch h-10 flex-col justify-start items-start gap-2 flex">
  //                         <div data-layer="Heading 5" className="Heading5 self-stretch h-6 flex-col justify-start items-start flex">
  //                           <div data-layer="Dedicated Team" className="DedicatedTeam self-stretch text-neutral-900 text-lg font-medium font-['Jost'] leading-normal">Dedicated Team</div>
  //                         </div>
  //                         <div data-layer="Background" className="Background pl-96 pb-4 bg-color-grey-95 rounded-lg justify-end items-center inline-flex">
  //                           <div data-layer="Container" className="Container w-8 self-stretch flex-col justify-start items-start inline-flex">
  //                             <div data-layer="85%" className="text-neutral-900 text-base font-medium font-['Jost'] leading-normal">85%</div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                       <div data-layer="Container" className="Container self-stretch h-10 flex-col justify-start items-start gap-2 flex">
  //                         <div data-layer="Heading 5" className="Heading5 self-stretch h-6 flex-col justify-start items-start flex">
  //                           <div data-layer="High Tech Equipments" className="HighTechEquipments self-stretch text-neutral-900 text-lg font-medium font-['Jost'] leading-normal">High Tech Equipments</div>
  //                         </div>
  //                         <div data-layer="Background" className="Background pl-96 pb-4 bg-color-grey-95 rounded-lg justify-end items-center inline-flex">
  //                           <div data-layer="Container" className="Container w-8 self-stretch flex-col justify-start items-start inline-flex">
  //                             <div data-layer="90%" className="text-neutral-900 text-base font-medium font-['Jost'] leading-normal">90%</div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                       <div data-layer="Container" className="Container self-stretch h-10 flex-col justify-start items-start gap-2 flex">
  //                         <div data-layer="Heading 5" className="Heading5 self-stretch h-6 flex-col justify-start items-start flex">
  //                           <div data-layer="Expert Doctor" className="ExpertDoctor self-stretch text-neutral-900 text-lg font-medium font-['Jost'] leading-normal">Expert Doctor</div>
  //                         </div>
  //                         <div data-layer="Background" className="Background pl-96 pb-4 bg-color-grey-95 rounded-lg justify-end items-center inline-flex">
  //                           <div data-layer="Container" className="Container w-8 self-stretch flex-col justify-start items-start inline-flex">
  //                             <div data-layer="75%" className="text-neutral-900 text-base font-medium font-['Jost'] leading-normal">75%</div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-8 left-0 top-[7425.19px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //               <div data-layer="Container" className="Container h-8 relative" />
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-96 left-0 top-[7456.19px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                 <div data-layer="Section" className="Section self-stretch h-96 px-72 py-28 flex-col justify-start items-center flex">
  //                   <div data-layer="Container" className="Container h-96 flex-col justify-start items-center gap-12 flex">
  //                     <div data-layer="Container" className="Container self-stretch h-36 flex-col justify-start items-center flex">
  //                       <div data-layer="Articles" className="Articles text-center text-rose-100 text-8xl font-extrabold font-['Jost'] leading-10">Articles</div>
  //                       <div data-layer="Heading 2" className="Heading2 self-stretch h-20 px-80 flex-col justify-start items-center flex">
  //                         <div data-layer="Resources to Keep You Informed with Our Blog" className="ResourcesToKeepYouInformedWithOurBlog self-stretch text-center text-neutral-900 text-4xl font-bold font-['Jost'] leading-10">Resources to Keep You Informed<br/>with Our Blog</div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Container" className="Container self-stretch justify-center items-start inline-flex">
  //                       <div data-layer="Rectangle" className="Rectangle grow shrink basis-0 self-stretch" />
  //                       <div data-layer="Rectangle" className="Rectangle grow shrink basis-0 self-stretch" />
  //                       <div data-layer="Rectangle" className="Rectangle grow shrink basis-0 self-stretch" />
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Section" className="Section h-96 left-0 top-[8632.19px] absolute flex-col justify-start items-center inline-flex">
  //             <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //               <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                 <div data-layer="Section" className="Section self-stretch h-96 px-72 py-28 bg-gradient-to-t from-teal-500 to-teal-700 flex-col justify-start items-center flex">
  //                   <img data-layer="Image" className="Image w-96 h-96" src="https://via.placeholder.com/415x365" />
  //                   <div data-layer="Container" className="Container h-96 flex-col justify-start items-start flex">
  //                     <div data-layer="Container" className="Container self-stretch justify-center items-start inline-flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch px-3.5 pt-14 flex-col justify-start items-start inline-flex">
  //                         <div data-layer="Container" className="Container self-stretch h-80 flex-col justify-start items-start flex">
  //                           <img data-layer="Image" className="Image w-72 h-72" src="https://via.placeholder.com/301x300" />
  //                           <div data-layer="Figure" className="Figure self-stretch h-80 flex-col justify-center items-start flex">
  //                             <img data-layer="car-1.png" className="Car1Png h-80 relative" src="https://via.placeholder.com/605x318" />
  //                           </div>
  //                         </div>
  //                       </div>
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pl-12 pr-3.5 flex-col justify-start items-start inline-flex">
  //                         <div data-layer="Container" className="Container self-stretch h-96 flex-col justify-start items-start gap-6 flex">
  //                           <div data-layer="Container" className="Container h-48 relative">
  //                             <div data-layer="Emergency Need" className="EmergencyNeed w-96 h-20 left-[-240px] top-0 absolute text-white/5 text-8xl font-extrabold font-['Jost'] leading-10">Emergency Need</div>
  //                             <div data-layer="Heading 2" className="Heading2 h-32 left-0 top-[54px] absolute flex-col justify-start items-start inline-flex">
  //                               <div data-layer="Need a Doctor for Check-up? Call for an" className="NeedADoctorForCheckUpCallForAn text-white text-4xl font-bold font-['Jost'] leading-10">Need a Doctor<br/>for Check-up? Call for an</div>
  //                               <div data-layer="Container" className="Container self-stretch h-11 flex-col justify-start items-start flex">
  //                                 <div data-layer="Emergency Service!" className="EmergencyService self-stretch text-orange-500 text-4xl font-bold font-['Jost'] leading-10">Emergency Service!</div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                           <div data-layer="Container" className="Container self-stretch h-12 flex-col justify-start items-start flex">
  //                             <div data-layer="All of our services are backed by our 100% satisfaction guarantee Our electricians can install anything." className="AllOfOurServicesAreBackedByOur100SatisfactionGuaranteeOurElectriciansCanInstallAnything self-stretch text-white text-base font-normal font-['Roboto'] leading-relaxed">All of our services are backed by our 100% satisfaction guarantee Our electricians<br/>can install anything.</div>
  //                           </div>
  //                           <div data-layer="Container" className="Container self-stretch h-20 pl-24 pt-2.5 pb-1.5 flex-col justify-start items-start gap-1 flex">
  //                             <div data-layer="Background" className="Background w-16 h-16 px-3 py-3.5 bg-orange-500 rounded-3xl flex-col justify-start items-center flex">
  //                               <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
  //                                 <div data-layer="Component 3" className="Component3 w-11 h-10 px-px py-px justify-center items-center flex" />
  //                               </div>
  //                             </div>
  //                             <div data-layer="Heading 4" className="Heading4 self-stretch h-6 flex-col justify-start items-start flex">
  //                               <div data-layer="For Emergency" className="ForEmergency self-stretch text-color-cyan-75 text-xl font-medium font-['Jost'] leading-relaxed">For Emergency</div>
  //                             </div>
  //                             <div data-layer="Heading 3" className="Heading3 self-stretch h-7 flex-col justify-start items-start flex">
  //                               <div data-layer="Component 4" className="Component4 justify-start items-start inline-flex">
  //                                 <div data-layer="Text" className="Text text-white text-2xl font-semibold font-['Jost'] leading-loose">+1 (230)-456-155-23</div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <img data-layer="Image" className="Image w-72 h-72" src="https://via.placeholder.com/301x300" />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div data-layer="Section" className="Section h-96 left-0 top-[9385.19px] absolute bg-color-azure-10 flex-col justify-start items-center inline-flex">
  //           <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //             <div data-layer="Container" className="Container h-96 relative">
  //               <div data-layer="Section" className="Section w-96 h-96 px-64 pt-14 pb-16 left-0 top-0 absolute flex-col justify-start items-center inline-flex">
  //                 <img data-layer="Image" className="Image w-96 h-96" src="https://via.placeholder.com/1920x401" />
  //                 <div data-layer="Container" className="Container w-96 justify-start items-start inline-flex">
  //                   <div data-layer="Container" className="Container w-96 self-stretch justify-center items-start flex">
  //                     <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                       <div data-layer="Footer" className="Footer self-stretch h-56 flex-col justify-start items-center flex">
  //                         <div data-layer="Container" className="Container h-56 flex-col justify-start items-start flex">
  //                           <div data-layer="Container" className="Container self-stretch justify-center items-start inline-flex">
  //                             <div data-layer="Container" className="Container grow shrink basis-0 self-stretch px-3.5 flex-col justify-start items-start inline-flex">
  //                               <div data-layer="Container" className="Container self-stretch h-56 flex-col justify-start items-start gap-7 flex">
  //                                 <div data-layer="Heading 3" className="Heading3 self-stretch h-14 pt-6 flex-col justify-start items-start flex">
  //                                   <div data-layer="About" className="About self-stretch text-white text-2xl font-semibold font-['Jost'] leading-loose">About</div>
  //                                 </div>
  //                                 <div data-layer="Container" className="Container self-stretch h-36 flex-col justify-start items-start gap-5 flex">
  //                                   <div data-layer="Container" className="Container self-stretch h-20 flex-col justify-start items-start flex">
  //                                     <div data-layer="Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim ad minim." className="LoremIpsumDolorAmetConsectoAdiPisicingElitSedEiusmTemporIncididuntLaboreDoloreMagnaAliquaEnimAdMinim self-stretch text-white text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor amet consecto adi pisicing elit<br/>sed eiusm tempor incididunt labore dolore magna<br/>aliqua enim ad minim.</div>
  //                                   </div>
  //                                   <div data-layer="List" className="List self-stretch pr-32 justify-center items-start gap-2.5 inline-flex">
  //                                     <div data-layer="Item" className="Item grow shrink basis-0 flex-col justify-start items-start inline-flex">
  //                                       <div data-layer="Link" className="Link w-12 px-5 py-4 rounded-3xl border border-white/20 justify-start items-start inline-flex">
  //                                         <div data-layer="Symbol" className="Symbol text-center text-white text-base font-normal font-['Font Awesome 5 Brands'] leading-none"></div>
  //                                       </div>
  //                                     </div>
  //                                     <div data-layer="Item" className="Item grow shrink basis-0 flex-col justify-start items-start inline-flex">
  //                                       <div data-layer="Link" className="Link w-12 p-4 rounded-3xl border border-white/20 justify-start items-start inline-flex">
  //                                         <div data-layer="Symbol" className="Symbol text-center text-white text-base font-normal font-['Font Awesome 5 Brands'] leading-none"></div>
  //                                       </div>
  //                                     </div>
  //                                     <div data-layer="Item" className="Item grow shrink basis-0 flex-col justify-start items-start inline-flex">
  //                                       <div data-layer="Link" className="Link w-12 px-4 py-4 rounded-3xl border border-white/20 justify-start items-start inline-flex">
  //                                         <div data-layer="Symbol" className="Symbol text-center text-white text-base font-normal font-['Font Awesome 5 Brands'] leading-none"></div>
  //                                       </div>
  //                                     </div>
  //                                     <div data-layer="Item" className="Item grow shrink basis-0 flex-col justify-start items-start inline-flex">
  //                                       <div data-layer="Link" className="Link w-12 px-5 py-4 rounded-3xl border border-white/20 justify-start items-start inline-flex">
  //                                         <div data-layer="Symbol" className="Symbol text-center text-white text-base font-normal font-['Font Awesome 5 Brands'] leading-none"></div>
  //                                       </div>
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div data-layer="Container" className="Container w-80 self-stretch justify-center items-start flex">
  //                     <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                       <div data-layer="Footer" className="Footer self-stretch h-64 flex-col justify-start items-center flex">
  //                         <div data-layer="Container" className="Container h-64 flex-col justify-start items-start flex">
  //                           <div data-layer="Container" className="Container self-stretch justify-center items-start inline-flex">
  //                             <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pl-16 pr-3.5 flex-col justify-start items-start inline-flex">
  //                               <div data-layer="Container" className="Container self-stretch h-64 flex-col justify-start items-start gap-7 flex">
  //                                 <div data-layer="Heading 3" className="Heading3 self-stretch h-14 pt-6 flex-col justify-start items-start flex">
  //                                   <div data-layer="Links" className="Links self-stretch text-white text-2xl font-semibold font-['Jost'] leading-loose">Links</div>
  //                                 </div>
  //                                 <div data-layer="List" className="List self-stretch h-44 flex-col justify-start items-start gap-2 flex">
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="About" className="About text-white text-base font-normal font-['Roboto'] leading-normal">About</div>
  //                                     </div>
  //                                   </div>
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Surgical" className="Surgical text-white text-base font-normal font-['Roboto'] leading-normal">Surgical</div>
  //                                     </div>
  //                                   </div>
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Ophthalmology" className="Ophthalmology text-white text-base font-normal font-['Roboto'] leading-normal">Ophthalmology</div>
  //                                     </div>
  //                                   </div>
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Lenses" className="Lenses text-white text-base font-normal font-['Roboto'] leading-normal">Lenses</div>
  //                                     </div>
  //                                   </div>
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Laser Eye" className="LaserEye text-white text-base font-normal font-['Roboto'] leading-normal">Laser Eye</div>
  //                                     </div>
  //                                   </div>
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Vision Correction" className="VisionCorrection text-white text-base font-normal font-['Roboto'] leading-normal">Vision Correction</div>
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div data-layer="Container" className="Container w-80 self-stretch justify-center items-start flex">
  //                     <div data-layer="Container" className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
  //                       <div data-layer="Footer" className="Footer self-stretch h-64 flex-col justify-start items-center flex">
  //                         <div data-layer="Container" className="Container h-64 flex-col justify-start items-start flex">
  //                           <div data-layer="Container" className="Container self-stretch justify-center items-start inline-flex">
  //                             <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pl-16 pr-3.5 flex-col justify-start items-start inline-flex">
  //                               <div data-layer="Container" className="Container self-stretch h-64 flex-col justify-start items-start gap-7 flex">
  //                                 <div data-layer="Heading 3" className="Heading3 self-stretch h-14 pt-6 flex-col justify-start items-start flex">
  //                                   <div data-layer="Services" className="Services self-stretch text-white text-2xl font-semibold font-['Jost'] leading-loose">Services</div>
  //                                 </div>
  //                                 <div data-layer="List" className="List self-stretch h-44 flex-col justify-start items-start gap-2 flex">
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Contact Lens" className="ContactLens text-white text-base font-normal font-['Roboto'] leading-normal">Contact Lens</div>
  //                                     </div>
  //                                   </div>
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Retinopathy" className="Retinopathy text-white text-base font-normal font-['Roboto'] leading-normal">Retinopathy</div>
  //                                     </div>
  //                                   </div>
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Qualified Doctors" className="QualifiedDoctors text-white text-base font-normal font-['Roboto'] leading-normal">Qualified Doctors</div>
  //                                     </div>
  //                                   </div>
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Modern Equipment" className="ModernEquipment text-white text-base font-normal font-['Roboto'] leading-normal">Modern Equipment</div>
  //                                     </div>
  //                                   </div>
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Emergency Help" className="EmergencyHelp text-white text-base font-normal font-['Roboto'] leading-normal">Emergency Help</div>
  //                                     </div>
  //                                   </div>
  //                                   <div data-layer="Item" className="Item self-stretch h-6 flex-col justify-start items-start flex">
  //                                     <div data-layer="Link" className="Link justify-start items-start inline-flex">
  //                                       <div data-layer="Individual Approach" className="IndividualApproach text-white text-base font-normal font-['Roboto'] leading-normal">Individual Approach</div>
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div data-layer="Container" className="Container w-72 self-stretch justify-center items-start flex">
  //                     <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pb-24 flex-col justify-center items-start inline-flex">
  //                       <div data-layer="Margin" className="Margin self-stretch h-16 pb-5 flex-col justify-center items-start flex">
  //                         <div data-layer="Container" className="Container self-stretch h-12 pt-7 flex-col justify-start items-start flex">
  //                           <div data-layer="Heading 2" className="Heading2 self-stretch h-6 flex-col justify-start items-start flex">
  //                             <div data-layer="Contacts" className="Contacts self-stretch text-white text-2xl font-semibold font-['Rubik'] leading-normal">Contacts</div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                       <div data-layer="Container" className="Container self-stretch h-28 flex-col justify-start items-start flex">
  //                         <div data-layer="List" className="List self-stretch h-28 flex-col justify-start items-start gap-1.5 flex">
  //                           <div data-layer="Item" className="Item self-stretch pb-1.5 justify-start items-center inline-flex">
  //                             <div data-layer="Container" className="Container pr-4 justify-start items-start flex">
  //                               <div data-layer="Container" className="Container w-5 self-stretch flex-col justify-start items-start inline-flex">
  //                                 <div data-layer="Container" className="Container justify-start items-start inline-flex">
  //                                   <div data-layer="Component 3" className="Component3 w-3 h-4 px-px py-px flex-col justify-center items-center inline-flex" />
  //                                 </div>
  //                               </div>
  //                             </div>
  //                             <div data-layer="Container" className="Container pl-1 pr-16 flex-col justify-start items-start inline-flex">
  //                               <div data-layer="Flat 20, Reynolds Neck, North Helenaville, FV77 8WS" className="Flat20ReynoldsNeckNorthHelenavilleFv778ws text-white text-base font-light font-['Rubik'] leading-snug">Flat 20, Reynolds Neck, North<br/>Helenaville, FV77 8WS</div>
  //                             </div>
  //                           </div>
  //                           <div data-layer="Item" className="Item self-stretch pb-1.5 justify-start items-center inline-flex">
  //                             <div data-layer="Container" className="Container pr-4 justify-start items-start flex">
  //                               <div data-layer="Container" className="Container w-5 self-stretch flex-col justify-start items-start inline-flex">
  //                                 <div data-layer="Container" className="Container justify-start items-start inline-flex">
  //                                   <div data-layer="Component 3" className="Component3 w-4 h-4 px-px py-px justify-center items-center flex" />
  //                                 </div>
  //                               </div>
  //                             </div>
  //                             <div data-layer="Container" className="Container pl-1 flex-col justify-start items-start inline-flex">
  //                               <div data-layer="+2(305) 587-3407" className="23055873407 text-white text-base font-light font-['Rubik'] leading-snug">+2(305) 587-3407</div>
  //                             </div>
  //                           </div>
  //                           <div data-layer="Item" className="Item self-stretch justify-start items-center inline-flex">
  //                             <div data-layer="Container" className="Container pr-4 justify-start items-start flex">
  //                               <div data-layer="Container" className="Container w-5 self-stretch flex-col justify-start items-start inline-flex">
  //                                 <div data-layer="Container" className="Container justify-start items-start inline-flex">
  //                                   <div data-layer="Component 3" className="Component3 w-5 h-4 justify-center items-center flex" />
  //                                 </div>
  //                               </div>
  //                             </div>
  //                             <div data-layer="Container" className="Container pl-1 flex-col justify-start items-start inline-flex">
  //                               <div data-layer="sample@example.com" className="SampleExampleCom text-white text-base font-light font-['Rubik'] leading-snug">sample@example.com</div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div data-layer="Section" className="Section w-96 h-36 py-9 left-0 top-[486.69px] absolute bg-color-azure-16 flex-col justify-start items-center inline-flex">
  //                 <div data-layer="Container" className="Container w-96 justify-center items-start inline-flex">
  //                   <div data-layer="Container" className="Container grow shrink basis-0 self-stretch pt-11 pb-3.5 flex-col justify-start items-start inline-flex">
  //                     <div data-layer="Heading 2" className="Heading2 self-stretch h-4 px-96 flex-col justify-start items-center flex">
  //                       <div data-layer="Optcare © 2025 All Right Reserved" className="Optcare2025AllRightReserved self-stretch text-center text-white text-base font-semibold font-['Rubik'] leading-none">Optcare © 2025 All Right Reserved</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div data-layer="Container" className="Container left-[793px] top-[270px] absolute flex-col justify-start items-start inline-flex">
  //                 <div data-layer="Container" className="Container self-stretch h-72 flex-col justify-center items-center flex">
  //                   <img data-layer="shape-111.png" className="Shape111Png w-72 h-72 relative" src="https://via.placeholder.com/300x300" />
  //                 </div>
  //               </div>
  //               <div data-layer="Section:margin" className="SectionMargin w-96 left-0 top-[401px] absolute justify-center items-center inline-flex">
  //                 <div data-layer="Section" className="Section grow shrink basis-0 self-stretch px-64 py-9 flex-col justify-start items-center inline-flex">
  //                   <div data-layer="Container" className="Container w-96 justify-start items-start inline-flex">
  //                     <div data-layer="Container" className="Container w-96 self-stretch justify-center items-start flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch py-px rounded-2xl justify-center items-center flex">
  //                         <div data-layer="Container" className="Container grow shrink basis-0 flex-col justify-start items-start inline-flex">
  //                           <div data-layer="Background" className="Background self-stretch h-24 px-48 py-9 bg-white rounded-tl-2xl rounded-bl-2xl flex-col justify-center items-center flex">
  //                             <img data-layer="logo.png" className="LogoPng w-44 h-5 relative" src="https://via.placeholder.com/180x21" />
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Container" className="Container w-96 self-stretch justify-center items-start flex">
  //                       <div data-layer="Container" className="Container grow shrink basis-0 self-stretch rounded-2xl justify-center items-center flex">
  //                         <div data-layer="Container" className="Container grow shrink basis-0 flex-col justify-start items-start inline-flex">
  //                           <div data-layer="Background" className="Background h-24 bg-white rounded-tr-2xl rounded-br-2xl justify-center items-center inline-flex overflow-hidden">
  //                             <div data-layer="List" className="List grow shrink basis-0 self-stretch justify-start items-start inline-flex">
  //                               <div data-layer="Item:margin" className="ItemMargin self-stretch px-6 flex-col justify-center items-start inline-flex">
  //                                 <div data-layer="Item" className="Item h-6 pb-px justify-center items-center inline-flex">
  //                                   <div data-layer="Component 6" className="Component6 justify-start items-center flex">
  //                                     <div data-layer="Container" className="Container flex-col justify-start items-start inline-flex">
  //                                       <div data-layer="Text" className="Text text-neutral-900 text-base font-normal font-['Rubik'] leading-relaxed">Contact Lens</div>
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                               <div data-layer="Item:margin" className="ItemMargin self-stretch px-6 flex-col justify-center items-start inline-flex">
  //                                 <div data-layer="Item" className="Item h-6 pb-px justify-center items-center inline-flex">
  //                                   <div data-layer="Component 6" className="Component6 justify-start items-center flex">
  //                                     <div data-layer="Container" className="Container flex-col justify-start items-start inline-flex">
  //                                       <div data-layer="Text" className="Text text-neutral-900 text-base font-normal font-['Rubik'] leading-relaxed">Portfolio</div>
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                               <div data-layer="Item:margin" className="ItemMargin self-stretch px-6 flex-col justify-center items-start inline-flex">
  //                                 <div data-layer="Item" className="Item h-6 pb-px justify-center items-center inline-flex">
  //                                   <div data-layer="Component 6" className="Component6 justify-start items-center flex">
  //                                     <div data-layer="Container" className="Container flex-col justify-start items-start inline-flex">
  //                                       <div data-layer="Text" className="Text text-neutral-900 text-base font-normal font-['Rubik'] leading-relaxed">Doctors</div>
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                               <div data-layer="Item:margin" className="ItemMargin self-stretch px-6 flex-col justify-center items-start inline-flex">
  //                                 <div data-layer="Item" className="Item h-6 pb-px justify-center items-center inline-flex">
  //                                   <div data-layer="Component 6" className="Component6 justify-start items-center flex">
  //                                     <div data-layer="Container" className="Container flex-col justify-start items-start inline-flex">
  //                                       <div data-layer="Text" className="Text text-neutral-900 text-base font-normal font-['Rubik'] leading-relaxed">Treatment</div>
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                               <div data-layer="Item:margin" className="ItemMargin self-stretch px-6 flex-col justify-center items-start inline-flex">
  //                                 <div data-layer="Item" className="Item h-6 pb-px justify-center items-center inline-flex">
  //                                   <div data-layer="Component 6" className="Component6 justify-start items-center flex">
  //                                     <div data-layer="Container" className="Container flex-col justify-start items-start inline-flex">
  //                                       <div data-layer="Text" className="Text text-neutral-900 text-base font-normal font-['Rubik'] leading-relaxed">Contact</div>
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div data-layer="Header" className="Header h-36 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
  //           <div data-layer="Background" className="Background self-stretch h-12 px-72 py-3 bg-color-azure-10 flex-col justify-start items-center flex">
  //             <div data-layer="Container" className="Container h-6 px-3.5 flex-col justify-start items-start flex">
  //               <div data-layer="Container" className="Container self-stretch justify-between items-center inline-flex">
  //                 <div data-layer="Container" className="Container flex-col justify-start items-start inline-flex">
  //                   <div data-layer="List" className="List self-stretch justify-start items-center inline-flex">
  //                     <div data-layer="Item:margin" className="ItemMargin pr-6 flex-col justify-start items-start inline-flex">
  //                       <div data-layer="Item" className="Item pl-7 justify-start items-start inline-flex">
  //                         <div data-layer="Container" className="Container w-6 flex-col justify-start items-start inline-flex">
  //                           <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
  //                             <div data-layer="Component 3" className="Component3 w-6 h-4 justify-center items-center flex" />
  //                           </div>
  //                         </div>
  //                         <div data-layer="Email: " className="Email text-white text-base font-normal font-['Roboto'] leading-relaxed">Email: </div>
  //                         <div data-layer="Link" className="Link justify-start items-start flex">
  //                           <div data-layer="sample@example.com" className="SampleExampleCom text-white text-base font-normal font-['Roboto'] leading-relaxed">sample@example.com</div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Item:margin" className="ItemMargin pr-6 flex-col justify-start items-start inline-flex">
  //                       <div data-layer="Item" className="Item pl-7 flex-col justify-start items-start flex">
  //                         <div data-layer="380 Albert St, Melborne" className="AlbertStMelborne text-white text-base font-normal font-['Roboto'] leading-relaxed">380 Albert St, Melborne</div>
  //                         <div data-layer="Container" className="Container h-4 flex-col justify-start items-start flex">
  //                           <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
  //                             <div data-layer="Component 3" className="Component3 w-3.5 h-4 px-px py-px flex-col justify-center items-center inline-flex" />
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div data-layer="Item" className="Item pl-7 justify-start items-start flex">
  //                       <div data-layer="Container" className="Container w-5 flex-col justify-start items-start inline-flex">
  //                         <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
  //                           <div data-layer="Component 3" className="Component3 w-4 h-4 px-px py-px justify-center items-center flex" />
  //                         </div>
  //                       </div>
  //                       <div data-layer="Call: " className="Call text-white text-base font-normal font-['Roboto'] leading-relaxed">Call: </div>
  //                       <div data-layer="Link" className="Link justify-start items-start flex">
  //                         <div data-layer="+1 (230)-456-155-23" className="123045615523 text-white text-base font-normal font-['Roboto'] leading-relaxed">+1 (230)-456-155-23</div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div data-layer="Container" className="Container pr-20 justify-start items-center flex">
  //                   <div data-layer="Margin" className="Margin pr-7 flex-col justify-start items-start inline-flex">
  //                     <div data-layer="Container" className="Container pl-7 flex-col justify-start items-start flex">
  //                       <div data-layer="Sun-Thu 08:00AM-05:00PM" className="SunThu0800am0500pm text-white text-base font-normal font-['Roboto'] leading-relaxed">Sun-Thu 08:00AM-05:00PM</div>
  //                       <div data-layer="Container" className="Container h-5 flex-col justify-start items-start flex">
  //                         <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
  //                           <div data-layer="Component 3" className="Component3 w-5 h-5 justify-center items-center flex" />
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-layer="Background+Shadow" className="BackgroundShadow self-stretch h-24 px-72 bg-white shadow-[0px_20px_30px_0px_rgba(0,0,0,0.05)] flex-col justify-start items-center flex">
  //             <div data-layer="Container" className="Container h-24 px-3.5 flex-col justify-start items-start flex">
  //               <div data-layer="Container" className="Container self-stretch pr-px justify-between items-center inline-flex">
  //                 <div data-layer="Container" className="Container flex-col justify-start items-start inline-flex">
  //                   <div data-layer="Figure" className="Figure self-stretch h-6 py-0.5 flex-col justify-start items-start flex">
  //                     <div data-layer="Link" className="Link pt-1 pb-px justify-start items-center inline-flex">
  //                       <img data-layer="logo.png" className="LogoPng w-32 h-3.5 relative" src="https://via.placeholder.com/130x15" />
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div data-layer="Container" className="Container flex-col justify-start items-start inline-flex">
  //                   <div data-layer="Nav → List" className="NavList self-stretch justify-center items-start gap-7 inline-flex">
  //                     <div data-layer="Item → Link" className="ItemLink w-16 pr-5 py-9 flex-col justify-start items-center inline-flex">
  //                       <div data-layer="Home" className="Home text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Home</div>
  //                     </div>
  //                     <div data-layer="Item → Link" className="ItemLink w-16 pr-5 py-9 flex-col justify-start items-center inline-flex">
  //                       <div data-layer="Pages" className="Pages text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Pages</div>
  //                     </div>
  //                     <div data-layer="Item → Link" className="ItemLink w-24 pr-5 py-9 flex-col justify-start items-center inline-flex">
  //                       <div data-layer="Treatment" className="Treatment text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Treatment</div>
  //                     </div>
  //                     <div data-layer="Item → Link" className="ItemLink w-32 pr-5 py-9 flex-col justify-start items-center inline-flex">
  //                       <div data-layer="Doctor Listing" className="DoctorListing text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Doctor Listing</div>
  //                     </div>
  //                     <div data-layer="Item → Link" className="ItemLink w-20 pr-5 py-9 flex-col justify-start items-center inline-flex">
  //                       <div data-layer="Elements" className="Elements text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Elements</div>
  //                     </div>
  //                     <div data-layer="Item → Link" className="ItemLink w-14 pr-5 py-9 flex-col justify-start items-center inline-flex">
  //                       <div data-layer="Shop" className="Shop text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Shop</div>
  //                     </div>
  //                     <div data-layer="Item → Link" className="ItemLink w-14 pr-5 py-9 flex-col justify-start items-center inline-flex">
  //                       <div data-layer="Blog" className="Blog text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Blog</div>
  //                     </div>
  //                     <div data-layer="Item → Link" className="ItemLink w-14 py-9 flex-col justify-start items-center inline-flex">
  //                       <div data-layer="Contact" className="Contact text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Contact</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div data-layer="Container" className="Container justify-start items-center flex">
  //                   <div data-layer="Margin" className="Margin pr-7 pt-0.5 pb-2 flex-col justify-start items-start inline-flex">
  //                     <div data-layer="Container" className="Container flex-col justify-start items-start flex">
  //                       <div data-layer="Component 3" className="Component3 w-6 h-6 px-px py-px flex-col justify-center items-center flex" />
  //                     </div>
  //                   </div>
  //                   <div data-layer="Link" className="Link px-11 py-4 bg-color-cyan-38 rounded-3xl justify-start items-center flex overflow-hidden">
  //                     <div data-layer="Contact Us" className="ContactUs text-center text-white text-lg font-medium font-['Jost'] capitalize leading-relaxed">Contact Us</div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
          
  //       </div>
  //     </div>
    
  // </div>

  )
}

export default App


{/* <div data-layer="Background" className="Background self-stretch h-14 pl-96 bg-color-grey-15 flex-col justify-start items-start flex">
<div data-layer="Container" className="Container self-stretch h-40 px-5 pt-2.5 pb-3 flex-col justify-start items-start flex">
  <div data-layer="Component 2" className="Component2 self-stretch px-5 py-1 bg-lime-500 rounded shadow-[0px_2px_0px_0px_rgba(111,154,55,1.00)] justify-start items-start inline-flex">
    <div data-layer="Text" className="Text grow shrink basis-0 text-center text-white text-sm font-normal font-['Arial'] leading-tight">Buy now</div>
  </div>
</div>
</div> */}

{/* <div data-layer="Iframe" className="Iframe self-stretch h-96 bg-white justify-center items-start inline-flex">
</div> */}

// Button Arrow
{/* <div data-layer="Button" className="Button w-12 h-12 px-5 pt-3 pb-3.5 left-[1820px] top-[9967.88px] absolute bg-orange-500 rounded-3xl flex-col justify-start items-center inline-flex">
            <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
              <div data-layer="Component 3" className="Component3 w-3 h-6 py-px flex-col justify-center items-center inline-flex" />
            </div>
          </div> */}

