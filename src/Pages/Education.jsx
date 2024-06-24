import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { CALENDLY_URL } from '../Components/utils';

const sectiondata = [
    {
        heading: "Simplify Learning In the Education Industry With Our Custom Chatbots",
        text: "Enhance student engagement, streamline administrative tasks, and provide round-the-clock support with Codifica's custom AI chatbots tailored to educational institutions' unique needs",
        img: "/assets/educationimg (1).png",
        reverse: false
    },
    {
        heading: "Streamline Financial Processes with Custom AI Chatbots",
        text: "Automate routine financial inquiries, improve client support, ensure compliance, and optimize workflows with Codifica's custom AI chatbots for the accounting and finance industry.",
        img: "/assets/educationimg (2).png",
        reverse: true
    },
    {
        heading: "Optimize HR Efficiency through AI-powered chatbots",
        text: "Reduce repetitive tasks, enhance employee training, and streamline onboarding with Codifica's intelligent chatbots managing FAQs, personalized HR assistance, and seamless administrative support.",
        img: "/assets/educationimg (3).png",
        reverse: false
    },
    {
        heading: "Improve Guest Experiences with Travel-Savvy Chatbots",
        text: "Deliver exceptional travel support with Codifica's AI chatbots, which manage bookings, itineraries, and customer service, providing customers with seamless and memorable travel experiences.",
        img: "/assets/educationimg (4).png",
        reverse: true
    }
    ,
    {
        heading: "Improve Patient Care in the Healthcare Industry",
        text: "Provide accurate, quick responses to patient inquiries, automate appointment scheduling, and streamline administrative workflows with Codifica's custom AI chatbots for healthcare.",
        img: "/assets/educationimg (1).png",
        reverse: false
    },
    {
        heading: "Boost Property Sales through Real Estate Chatbots",
        text: "Convert leads efficiently with Codifica's AI chatbots, answering property inquiries, scheduling viewings, and providing tailored market insights for real estate clients.",
        img: "/assets/educationimg (1).png",
        reverse: true
    }
    ,
    {
        heading: "Automate Production Support with Our Custom AI Chatbots",
        text: "Enhance productivity by automating inventory management, technical support, and internal communication with customized AI chatbots designed to optimize manufacturing efficiency.",
        img: "/assets/educationimg (1).png",
        reverse: false
    },
    {
        heading: "Smarter Chatbots for the Retail Industry",
        text: "Boost sales and customer satisfaction by providing personalized shopping assistance, addressing customer queries promptly, and efficiently managing product returns and exchanges.",
        img: "/assets/educationimg (1).png",
        reverse: true
    }
];

function Education() {
    const [calendlyopen, setcalendlyopen] = useState(false)

    useEffect(() => {
        if (calendlyopen) {
          setcalendlyopen(false);
          const script = document.createElement('script');
          script.src = 'https://assets.calendly.com/assets/external/widget.js';
          script.async = true;
    
          script.onload = () => {
            if (window.Calendly) {
              window.Calendly.initPopupWidget({ url: CALENDLY_URL });
            }
          };
          document.body.appendChild(script);
          return () => {
            document.body.removeChild(script);
          };
        }
      }, [calendlyopen]);

    return (
        <>
    <section className='overflow-x-hidden'>
            <section className='text-center min-h-screen flex flex-col items-center z-10 relative mb-20'>
                <img src="/assets/landhov.png" className='my-12 -z-10 absolute max-lg:-left-52 max-lg:bottom-[17rem] max-lg:rotate-6 max-lg:h-[25rem] max-lg:min-w-[25rem] left-0 w-[60vw] h-[40vw] max-xl:h-[45vw] 2xl:w-[65vw]' alt="" />
                <div className='pb-[25rem] max-xl:pb-44 max-lg:pb-32 relative px-4'>
                    <p className='font-lustria text-[2.7rem] 2xl:text-[3.2rem] max-lg:text-[1.65rem]  max-xl:text-[2rem] pt-16 max-lg:pt-9'>
                        Custom AI Chatbots <br className='max-lg:hidden' /> Tailored for Every Industry's <br className='max-lg:hidden' /> Unique Needs
                    </p>
                    <p className='text-xl text-[#3A3A3A] max-lg:text-sm mt-3'>Empower your business with Codifica's custom AI chatbots, <br className='max-lg:hidden' /> delivering seamless customer support and employee training <br className='max-lg:hidden' /> across diverse sectors.</p>
                    <button onClick={() => setcalendlyopen(true)} className='text-white bg-black rounded-2xl px-10 py-3 mt-8 max-lg:text-xs'>
                        Book a Demo
                    </button>
                    <img src="/assets/educationpic.png" className='my-12 object-cover absolute -bottom-[10rem] max-lg:-bottom-[5.5rem] max-xl:-bottom-60 min-w-[65vw] h-[28rem] max-lg:h-[8rem] max-lg:px-5 max-lg:rounded-3xl max-xl:h-[20rem] 2xl:h-[30rem] left-1/2 -translate-x-1/2' alt="" />
                </div>
                <div className='bg-[#33B87C] lg:rounded-tr-3xl w-full pb-20 pt-[10rem] max-lg:pt-10 max-xl:pt-[13rem] relative -z-10 text-white'>
                    <div className='lg:flex items-center justify-between px-32 max-xl:px-16 max-lg:px-0 my-10 max-lg:my-7'>
                        <p className='mt-3 text-4xl max-lg:text-[1.4rem] max-lg:leading-8 max-xl:text-3xl max-lg:px-10 text-start max-lg:text-center'>Accelerate productivity <br className='max-lg:hidden' /> and streamline operations <br className='max-lg:hidden' /> with intuitive AI solutions.</p>
                        <div className='flex justify-center space-x-4 max-lg:space-x-3 max-lg:px-4 max-lg:mt-5'>
                            <div className='bg-[#3A3A3A] max-lg:px-3 h-[15rem] max-lg:h-[11rem] w-[15rem] relative flex items-center flex-col justify-center rounded-2xl border-t-4 border-white'>
                                <p className='text-6xl max-lg:text-[2.7rem] font-bold mb-5 max-lg:mb-3'>60%</p>
                                <p className='max-lg:text-xs max-lg:pb-2'>Educators Use AI in <br className='max-lg:hidden' /> Their Classrooms</p>
                                <p className='bg-white text-black px-1 py-1 rounded-full text-[10px] max-lg:text-[5px] absolute bottom-2 right-3'>forbes.com</p>
                            </div>
                            <div className='bg-[#4831E9] max-lg:px-3 h-[15rem] w-[15rem] max-lg:h-[11rem] relative flex items-center flex-col justify-center rounded-2xl border-t-4 border-white'>
                                <p className='text-6xl font-bold mb-5 max-lg:mb-3 max-lg:text-[2.7rem]'>55%</p>
                                <p className='max-lg:text-xs max-lg:pb-2'>people believe that AI <br className='max-lg:hidden' /> influenced Education</p>
                                <p className='bg-white text-black px-1 py-1 rounded-full text-[10px] max-lg:text-[5px] absolute bottom-2 right-3'>forbes.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/landhov2.png" className='my-12 grayscale contrast-200 -z-20 absolute right-0 max-lg:-bottom-[55%] max-lg:left-60 max-lg:w-[70vw] -bottom-[25rem] w-[30vw] max-xl:h-[100vh] 2xl:h-[55vh]' alt="" />
            </section>

            <section className='px-32 max-xl:px-16 max-lg:px-4'>
                <div className='text-center'>
                    <p className='text-3xl max-lg:text-2xl'>Optimize Your Industry with <br className='max-lg:hidden' /> Codifica's AI Chatbots</p>
                    <p className='text-lg max-lg:text-sm max-lg:px-5 mt-3'>Experience unparalleled efficiency and seamless interactions <br className='max-lg:hidden' /> with custom AI chatbots designed for your industry.</p>
                </div>
                {sectiondata.map(n =>
                    <div className={`lg:flex items-start justify-between ${n.reverse && "flex-row-reverse"} mt-32 max-lg:mt-10`}>
                        <div className='w-[48%] xl:w-[45%] max-lg:w-full'>
                            <img src={n.img} className='' alt="" />
                        </div>
                        <div className='xl:w-[50%] w-[43%] mt-16 max-lg:mt-8 max-lg:w-full pr-20 max-xl:pr-0 max-lg:pr-0'>
                            <p className="xl:text-[2.2rem] w-[90%] text-[1.8rem] max-lg:text-2xl mb-5 max-lg:mb-3">
                                {n.heading}
                            </p>
                            <p className=''> {n.text} </p>
                            <button onClick={() => setcalendlyopen(true)} className='text-white bg-black text-sm rounded-xl px-5 py-3 mt-8'>
                                Book a Demo
                            </button>
                        </div>
                    </div>
                )}
            </section>

            <section className="px-32 max-xl:px-16 max-lg:px-5 max-lg:h-[50rem] max-lg:flex flex-col justify-end relative overflow-hidden py-16 bg-black z-10 mt-20 max-lg:mt-16">
                <img src="/assets/edubgimg.jpg" className='opacity-60 absolute object-cover left-0 top-0 h-full w-full -z-10' alt="" />
                <div className='lg:flex items-center justify-center gap-24 z-10'>
                    <div className='text-white text-start max-lg:mb-10 max-xl:w-[35%] max-lg:w-full flex justify-end flex-col items-end'>
                        <div>
                            <p className='text-3xl '>Go live with your <br className='max-lg:hidden' /> Education AI bots</p>
                            <p className='text-5xl font-bold mt-2'>2X faster</p>
                        </div>
                    </div>
                    <img src="/assets/csachat.png" className='h-[25rem]' alt="" />
                </div>
            </section>
            <p className='pb-20'></p>
           </section>
        </>
    )
}

export default Education
