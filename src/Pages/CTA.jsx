import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { CALENDLY_URL, stagging } from '../Components/utils';
import { Link } from 'react-router-dom';
import Contactpopup from '../Components/Contactpopup';

const sectiondata = [
  {
    heading: "Employee Retention Increased by 86%",
    text: "86% of employee stay longer in an organization if they have been provided with excellent training to advance their career. (Lormen, 09/01/21) The Magic of Codi Training Assistant personalizes learning for every employee, regardless of skill or experience. This AI-powered platform tailors content based on individual needs, keeping them engaged and future-proof. Boost employee satisfaction and retention with Codi - see the difference a great training program can make.",
    img: `${stagging}/assets/ctaimg (4).png`,
    reverse: false,
  },
  {
    heading: "Boost Performance: Invest in Employee Training",
    text: "Invest in first innovative AI Codi Training Assistant to unlock the potential of Training your employees by using AI platform because AI Codi Training Assistant can simplify complex topics and provide personalized learning journeys, Engage learners with interactive multimedia formats to enhance comprehension and retention of knowledge.",
    img: `${stagging}/assets/ctaimg (3).png`,
    reverse: true,
  },
  {
    heading: "Instructor Dashboard",
    text: "Codi Training Assistant streamlines training for instructors. An intuitive dashboard lets you personalize courses for individual needs, skill sets, and schedules. Monitor learner progress in real-time to identify areas requiring support. Seamless Q&A within the platform fosters collaboration and clarifies doubts. Finally, Codi generates progress reports, providing valuable insights for optimizing future training and boosting your workforce.",
    img: `${stagging}/assets/ctaimg (2).png`,
    reverse: false,
  },
  {
    heading: "Unleash HR Savings: Automate Training",
    text: "Codi Training Assistant transforms HR by automating routine training tasks. Free your HR team from scheduling, delivering, and tracking basic training. Codi personalizes learning paths, ensures consistent delivery, and provides real-time progress insights. This empowers HR to focus on strategic initiatives, talent development, and building a future-proof workforce.",
    img: `${stagging}/assets/ctaimg (1).png`,
    reverse: true,
  },
];
const productsData = [
{
id: 1,
title: 'Codi Service Assistant Lite',
desc: '24/7 AI Chat, 10k messages, GPT-3.5 based',
prodImg: `${stagging}/assets/prod1.jpg`,
link: '/csa'
},
{
id: 2,
desc:'Unlimited AI Chat, Advanced Features, GPT-4',
title: 'Codi Service Assistant Enterprise',
prodImg: `${stagging}/assets/prod2.jpg`,
link: '/csa'
},
{
id: 3,
desc:'Personalized AI trip planner & companion',
title: 'Codi Travel Assistant',
prodImg: `${stagging}/assets/prod3.jpg`,
link: '/cta'
},
]
const news = [
    {
        title: "Private Sector", 
        img: `${stagging}/assets/newscta (1).png`,
        text:"From tech startups to large corporations, all businesses need a skilled and adaptable workforce." 
    },
    {
        title: "Public Sector", 
        img: `${stagging}/assets/newscta (2).png`,
        text:"Government agencies can improve employee training efficiency and upskill their workforce for better service delivery." 
    },{
        title: "Educational Institutions", 
        img: `${stagging}/assets/newscta (3).png`,
        text:"Codi can supplement traditional learning methods or be used for ongoing professional development for educators." 
    }
]

const whycodibot = [
  {
    heading: "Customized Trainings",
    text: "Create custom modules for any training. Codi Training Assistant adaptive learning identifies gaps and adjusts content based on individual needs.",
  },
  {
    heading: "Engaging Training",
    text: "Codi Training Assistant utilizes captivating simulations and videos to keep learners actively engaged. Leverage the built-in Q&A bot for instant answers and note-taking capabilities.",
  },
  {
    heading: "Real-time Assessment Tracking",
    text: "Instructors can easily build and track assessments directly within the platform. Gain valuable data from trainee responses to identify areas for improvement and personalize learning journeys.",
  },
  {
    heading: "Cost-Effective Training",
    text: "Seamless integration makes setup easy. Low cost per user allows you to train large teams.",
  },
];

function CTA() {
    const [calendlyopen, setcalendlyopen] = useState(false)
    const [showPopup, setShowPopup] = useState(false);

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

    useEffect(() => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           })
    } , [])
    return (
      <>
        <Contactpopup showPopup={showPopup} setShowPopup={setShowPopup} />
        <section className="overflow-x-hidden">
          <section className="text-center min-h-screen flex flex-col items-center z-10 relative mb-20">
            <img
              src={`${stagging}/assets/landhov.png`}
              className="my-12 -z-10 absolute max-lg:-left-52 max-lg:bottom-[17rem] max-lg:rotate-6 max-lg:h-[25rem] max-lg:min-w-[25rem] left-0 w-[60vw] h-[40vw] max-xl:h-[45vw] 2xl:w-[65vw]"
              alt=""
            />
            <div className="pb-[25rem] max-xl:pb-44 max-lg:pb-32 relative px-4 pt-16 max-lg:pt-9 max-w-[67.5rem] m-auto">
              <p className="max-md:text-xl text-[1.5rem] font-lustria pb-5">
                Codi Training Assistant
              </p>
              <p className="font-lustria text-[3rem] 2xl:text-[3.2rem] max-lg:text-[1.65rem]  max-xl:text-[2rem]">
                Codi Training Assistant Magic
              </p>
              <p className="text-[1.5rem] text-[#3A3A3A] max-lg:text-sm mt-3">
                42% of HR are embracing AI training! Be an early adopter.
                <br className="max-lg:hidden" />
                Start your journey with the first innovative AI training{" "}
                <br className="max-lg:hidden" /> assistant.
              </p>
              <button
                onClick={() => setShowPopup(true)}
                className="text-white bg-black rounded-2xl px-10 py-3 mt-8 max-lg:text-xs  hover:bg-white hover:text-black hover:border hover:border-black  transition-all duration-300 transform"
              >
                Book a Demo
              </button>
              <img
                src={`${stagging}/assets/ctaland.png`}
                className="my-12 object-cover rounded-lg absolute -bottom-[10rem] max-lg:-bottom-[5.5rem] max-xl:-bottom-60 min-w-[65vw] h-[28rem] max-lg:h-[8rem] max-lg:px-5 max-lg:rounded-3xl max-xl:h-[20rem] 2xl:h-[30rem] left-1/2 -translate-x-1/2"
                alt=""
              />
            </div>
            <div className="bg-[#33B87C] lg:rounded-tr-3xl w-full pb-20 pt-[10rem] max-lg:pt-10 max-xl:pt-[13rem] relative -z-10 text-white">
              <div className="px-32 max-xl:px-16 max-lg:px-0 my-10 max-lg:my-7 max-w-[67.5rem] m-auto">
                <p className="mt-3 text-center text-[3rem] max-lg:text-[1.4rem] max-lg:leading-8 max-xl:text-3xl max-lg:px-10 max-lg:text-center">
                  Train Anyone, Anywhere: Codi's Flexible Training Assistant.
                </p>
                <p className="text-md:text-lg text-[1.5rem] pt-4">
                  Codi Training Assistant personalizes learning for any team,
                  regardless of size, industry, or skill level. This AI-powered
                  platform tailors content and
                  <br className="max-lg:hidden" /> keeps learners engaged with
                  interactive formats making complex topics concise and easy to
                  understand. See the magic for yourself - get a free
                  <br className="max-lg:hidden" /> demo and unlock the potential
                  of your workforce.
                </p>
              </div>
            </div>
            <img
              src={`${stagging}/assets/landhov2.png`}
              className="my-12 grayscale contrast-200 -z-20 absolute right-0 max-lg:-bottom-[55%] max-lg:left-60 max-lg:w-[70vw] -bottom-[25rem] w-[30vw] max-xl:h-[100vh] 2xl:h-[55vh]"
              alt=""
            />
          </section>

          <section className="max-lg:px-4 max-w-[67.5rem] m-auto">
            <div className="text-center">
              <p className="text-3xl max-lg:text-2xl">
                Capitalize on unmatched Features of{" "}
                <br className="max-lg:hidden" /> Codi Training Assistant
              </p>
            </div>
            {sectiondata.map((n) => (
              <div
                className={`lg:flex items-start justify-between ${
                  n.reverse && "flex-row-reverse"
                } mt-32 max-lg:mt-10`}
              >
                <div className="w-[48%] xl:w-[45%] max-lg:w-full">
                  <img src={n.img} className="" alt="" />
                </div>
                <div className="xl:w-[50%] w-[43%] mt-16 max-lg:mt-8 max-lg:w-full">
                  <p className="xl:text-[3.5rem] w-[90%] text-[3rem] max-lg:text-2xl mb-5 max-lg:mb-3">
                    {n.heading}
                  </p>
                  <p className=""> {n.text} </p>
                  <button
                    onClick={() => setShowPopup(true)}
                    className="text-white bg-black text-sm rounded-xl px-5 py-3 mt-8  hover:bg-white hover:text-black hover:border hover:border-black  transition-all duration-300 transform"
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
            ))}
          </section>
          <div className="max-lg:px-4 max-w-[67.5rem] m-auto">
            <hr className="h-[0.1em] w-full bg-black mt-16" />
          </div>
          <section className="pb-20 max-lg:px-4 max-w-[67.5rem] m-auto">
            <div className="space-y-5 mt-16 w-full">
              <div className="text-[1.87rem] font-bold">Features</div>
              <div className="lg:flex items-center justify-between gap-20 pt-6">
                <img
                  src={`${stagging}/assets/ctaimg.png`}
                  className="xl:w-[33rem] object-cover w-[34rem] xl:h-[35rem] h-[45rem] max-lg:h-[30rem]"
                  alt=""
                />
                <div className="xl:w-[50%] w-[43%] max-lg:w-full max-lg:mt-10">
                  {whycodibot.map((n) => (
                    <div className="flex items-start gap-4 mb-3 max-lg:mb-4">
                      <img
                        src={`${stagging}/assets/greentick.png`}
                        className="w-5 mt-1"
                        alt=""
                      />
                      <div>
                        <p className="font-bold text-xl pb-2 max-lg:text-base">
                          {n.heading}
                        </p>
                        <p>{n.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="pb-28 px-32 max-xl:px-16 py-10 max-lg:px-4 bg-[#F1F1F1] rounded-tl-3xl">
            <div className="space-y-5 w-full max-w-[67.5rem] m-auto">
              <div className="text-[1.87rem] max-md:text-xl font-bold pt-5">
                Potential Market
              </div>
              <div className="lg:grid grid-cols-3 gap-y-10 gap-x-20">
                {news.map((n) => (
                  <div className="space-y-4 max-md:text-lg text-[1.5rem] mt-10">
                    <p className="h-10 font-bold">{n.title}</p>
                    <img
                      src={n.img}
                      className="max-xl:h-[10rem] h-[14rem] w-full"
                      alt=""
                    />
                    <p className="text-base text-[#3A3A3A] pt-3">{n.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-lg:px-5 max-lg:flex flex-col bg-[#F1F1F1] mt-16 max-md:mt-6 justify-end relative overflow-hidden py-16 max-md:py-8 z-10 mb-6">
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 max-md:gap-2 max-w-[67.5rem] m-auto">
              {productsData.map((item, i) => {
                return (
                  <div key={i} className="w-full max-md:px-3 py-12">
                    <p className="h-16 font-bold text-xl pb-2 text-center">
                      {item.title}
                    </p>
                    <p className="text-center">{item.desc}</p>
                    <div className="mt-10">
                      <img
                        src={item.prodImg}
                        alt="prod"
                        className="max-xl:h-[10rem] h-[14rem] w-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Link to={item.link}>
                        <button className="text-white font-bold bg-black rounded-lg max-xl:py-1 py-3 px-6 mt-8">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <img
              src={`${stagging}/assets/edubgimg.jpg`}
              className="opacity-60 absolute object-cover left-0 top-0 h-full w-full -z-10"
              alt=""
            />
            <div className="lg:flex items-center justify-center gap-24 z-10">
              <div className="text-white text-start max-lg:mb-10 max-xl:w-[35%] max-lg:w-full flex justify-end flex-col items-end">
                <div>
                  <p className="text-3xl ">
                    Go live with your <br className="max-lg:hidden" /> Education
                    AI bots
                  </p>
                  <p className="text-5xl font-bold mt-2">2X faster</p>
                </div>
              </div>
              <img
                src={`${stagging}/assets/csachat.png`}
                className="h-[25rem]"
                alt=""
              />
            </div> */}
          </section>
          {/* <p className="pb-20"></p> */}
        </section>
      </>
    );
}

export default CTA
