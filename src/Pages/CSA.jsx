import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { CALENDLY_URL, stagging } from '../Components/utils';
import Contactpopup from '../Components/Contactpopup';
import { Link } from 'react-router-dom';

const sectiondata = [
  {
    heading: "Improve Customer Satisfaction, Productivity, & Profitability.",
    text: "Boost profitability by using Codi Service Assistant which is built on bleeding AI Codibot platform. This new technology will help your businesses’ seamlessly in automation and simplifying complex tasks, remain open 24/7, 365 days, and lowering operational cost which in turn increase profitability of organization.",
    img: `${stagging}/assets/cta (1).png`,
    reverse: false,
  },
  {
    heading: "Improve Customer Retention",
    text: "Online businesses can't always have someone answering questions at night or on weekends. Codi Service Assistant acts like an extra employee who never sleeps! It can answer customer questions quickly and accurately any time of day, even when you're closed. This means happy customers who get the help they need right away, making them less likely to go to a competitor who can answer their questions. Codi Service Assistant is basically a tireless assistant for your online business, keeping customers satisfied around the clock.",
    img: `${stagging}/assets/cta (3).png`,
    reverse: true,
  },
  {
    heading: "Grow Your Business with AI",
    text: "Codi Service Assistant is an AI chatbot platform that helps businesses grow by automating customer interactions. It acts as a 24/7 assistant, answering queries, providing product recommendations, and handling common issues, which boosts customer satisfaction and loyalty. By managing routine tasks, Codi Service Assistant frees up your time, allowing you to focus on innovation and strategy, ultimately helping your business grow more efficiently.",
    img: `${stagging}/assets/csanew.png`,
    reverse: false,
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
    title: "E-commerce",
    img: `${stagging}/assets/industry (5).png`,
    text: "Revolutionize the online shopping experience with AI that understands and assists with order processing and customer inquiries in real-time",
  },
  {
    title: "Healthcare",
    img: `${stagging}/assets/industry (4).png`,
    text: "Automate scheduling and patient queries, giving healthcare providers more time to focus on patient care.",
  },
  {
    title: "Banking & Insurance",
    img: `${stagging}/assets/industry (3).png`,
    text: "Provide accurate, AI-enabled support for financial product queries and transaction processing.",
  },
  {
    title: "Education",
    img: `${stagging}/assets/industry (2).png`,
    text: "Support students and educators with automated responses to academic queries and administrative processes.",
  },
  {
    title: "Law & Justice",
    img: `${stagging}/assets/industry (1).png`,
    text: "Streamline case management with an AI assistant that can navigate legal queries and public information.",
  },
  {
    title: "Travel",
    img: `${stagging}/assets/travelAi.jpg`,
    text: "AI is revolutionizing travel by personalizing customer experiences through tailored recommendations and itineraries.",
  },
];

const whycodibot = [
  {
    heading: "Multi-platform Integration",
    text: "Codi Service Assistant is an AI chatbot platform that helps businesses grow by automating customer interactions and integrating with 6000+ tools like CRM, ERP, and WhatsApp.",
  },
  {
    heading: "Information Accuracy",
    text: "Codi Service Assistant stays accurate by learning from the data uploaded. The Codi Service Assistant dissect, understand and evaluate the uploaded data by using smarts (AI) to find the best answers.",
  },
  {
    heading: "Multi Lingual Voice-Enabled Interaction",
    text: "Customers can speak with Codi Service Assistant directly and get quick answers to their questions. It's like having a helpful concierge on your website, ready to assist multi lingual customers anytime.",
  },
   {
    heading: "Instant help!",
    text: "Codi Service Assistant is available 24/7, 365 days a year. That means customers can get quick and professional answers to their questions any time, day or night. Unlike humans, Codi doesn't get tired or sick, so customers will always get guaranteed a helpful and reliable experience.",
  },
  {
    heading: "Serve More, Sell More",
    text: "With Codi, a million customers can get help at once, no sweat. That means happy customers who get answers fast, leading to more sales for you, boo-yah! (58 words)",
  },
];

function CSA() {
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
                Codi Service Assistant
              </p>
              <p className="font-lustria text-[3rem] 2xl:text-[3.2rem] max-lg:text-[1.65rem]  max-xl:text-[2rem]">
                Increase your customer satisfaction rate by 20%
              </p>
              <p className="text-[1.5rem] text-[#3A3A3A] max-lg:text-sm mt-3">
                Discover our incredible Codi Service Assistant, a blend of
                cutting-edge AI technology and human support.
                <br className="max-lg:hidden" />
                Powered by CODIBOT's smart platform, it features conversational
                AI to swiftly address
                <br className="max-lg:hidden" /> customer inquiries.
              </p>
              <button
                onClick={() => setShowPopup(true)}
                className="text-white bg-black rounded-2xl px-10 py-3 mt-8 max-lg:text-xs  hover:bg-white hover:text-black hover:border hover:border-black  transition-all duration-300 transform"
              >
                Book a Demo
              </button>
              <img
                src={`${stagging}/assets/csaland.png`}
                className="my-12 object-cover rounded-lg absolute -bottom-[10rem] max-lg:-bottom-[5.5rem] max-xl:-bottom-60 min-w-[65vw] h-[28rem] max-lg:h-[8rem] max-lg:px-5 max-lg:rounded-3xl max-xl:h-[20rem] 2xl:h-[30rem] left-1/2 -translate-x-1/2"
                alt=""
              />
            </div>
            <div className="bg-[#4831E9] lg:rounded-tr-3xl w-full pb-20 pt-[10rem] max-lg:pt-10 max-xl:pt-[13rem] relative -z-10 text-white">
              <div className="max-xl:px-16 max-lg:px-0 my-10 max-lg:my-7 max-w-[67.5rem] m-auto">
                <p className="mt-3 text-center text-[3rem] max-lg:text-[1.4rem] max-lg:leading-8 max-xl:text-3xl max-lg:px-10 max-lg:text-center">
                  Meet Codi Service Assistant, a virtual assistant{" "}
                  <br className="max-lg:hidden" /> platform powered by AI and
                  built on Codibot’s
                  <br className="max-lg:hidden" /> advanced AI technology.
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
              <p className="text-[3rem] max-lg:text-2xl">
                Capitalize on unmatched Features of{" "}
                <br className="max-lg:hidden" /> Codi Service Assistant
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
                <div className="xl:w-[50%] w-[43%] max-lg:mt-8 max-lg:w-full">
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
              <p className="text-[1.87rem] max-lg:text-base font-bold">
                Here's what Codi Service Assistant can do for you
              </p>
              <div className="lg:flex items-center justify-between pt-6 gap-20">
                <img
                  src={`${stagging}/assets/csasecnew.png`}
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
                        <p className="font-bold text-[1.87rem] pb-2 max-lg:text-base">
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

          <section className="pb-28 py-10 max-lg:px-4 bg-[#F1F1F1] rounded-tl-3xl">
            <div className="space-y-5 w-full max-w-[67.5rem] m-auto">
              <div className="text-[1.87rem] max-md:text-xl font-bold pt-5">
                Industries Transformed by AI
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
                    <p className="text-sm text-[#3A3A3A] pt-3">{n.text}</p>
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

export default CSA
