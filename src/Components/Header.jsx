import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { CALENDLY_URL, stagging } from './utils';
import { useNavigate } from 'react-router-dom';
import { casestudy1, casestudy2, casestudy3 } from '../Pages/Casestudies.jsx/casestudies';
import { AccountingFinance, Education, HR, Healthcare, Realstate, Travel } from '../Pages/Solutions/solutions';
import Contactpopup from './Contactpopup';


const links = [
  { title: "Products", path: `${stagging}/csa` },
  { title: "Solutions", path: `${stagging}/education` },
  { title: "Pricing", path: `${stagging}/pricingcsa` },
  { title: "Resources", path: `${stagging}/resources` },
  { title: "About Us", path: `${stagging}/about` },
  { title: "Contact Us", path: `${stagging}/contact` },
];

const news = [
  {
    title: "OpenAI is taking on rivals with an AI-powered search engine",
    img: `${stagging}/assets/news1.jpg`,
    link: "https://www.superhuman.ai/p/openai-working-ai-search-engine"
  },
  {
    title: "Apple's AI plans start to take shape",
    img: `${stagging}/assets/news2.jpg`,
    link: "https://www.superhuman.ai/p/apples-ai-plans-start-take-shape"
  }, {
    title: "AI assistants are coming soon",
    img: `${stagging}/assets/news3.jpg`,
    link: "https://www.superhuman.ai/p/ai-assistants-coming-soon"
  }
]

// const csatexts = [
//   "24/7 Customer Support: The Codi Service Assistant provides around-the-clock information, ensuring your customers' inquiries are answered anytime, day or night.",
//   "Accurate and Concise Information: Delivering precise and concise information, the Codi Service Assistant ensures your customers receive clear and helpful responses.",
//   "Uninterrupted Availability: Never worry about holidays or sick days—Codi Service Assistant is always on, making your business available to customers 24/7, 365 days a year.",
//   "Professional and Emotionless Response: With no emotions, the Codi Service Assistant interacts professionally with all types of customers, maintaining a consistent and courteous tone.",
//   "Seamless Integration: Effortlessly integrate the Codi Service Assistant with over 6000+ platforms, including SAP, Zoho, and Shopify, to streamline your business processes.",
// ];
const csatexts = [
  "24/7 Customer Support",
  "Accurate and Concise Information",
  "Uninterrupted Availability",
  "Professional and Emotionless Response",
  "Seamless Integration",
];

// const ctatexts = [
//   "Tailored Training Experience: Instructors can fully customize training courses to meet the specific needs and job requirements of each trainee, ensuring a personalized learning journey.",
//   "Instructor Dashboard: Gain real-time insights into trainee progress with our extensive dashboard. Monitor chapter completion, assessment scores, and time spent on courses, all in one place.",
//   "Intuitive Learning: Codi Training Assistant enhances the learning experience by preparing slide presentations focused on assignments and learning objectives, making complex concepts easy to understand.",
//   "Interactive Audio Comprehension: Our assistant can narrate training material in over 90+ languages and accents, allowing trainees to choose their preferred language and accent for better comprehension.",
//   "Advanced Visual Learning: Boost your trainees' understanding with AI-generated creative videos that bring the subject matter to life, making learning more engaging and effective.",
// ];
const ctatexts = [
  "Tailored Training Experience",
  "Instructor Dashboard",
  "Intuitive Learning",
  "Interactive Audio Comprehension",
  "Advanced Visual Learning",
];

const Section = ({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  img,
  bgImg,
  buttonlink,
  reverse,
}) => (
  <section
    className={`lg:flex items-start basis-[50%] gap-5 ${
      reverse && "flex-row-reverse"
    } lg:mx-5`}
  >
    <div className={`w-32 mb-5 lg:hidden`}>
      <img src={img} className="min-w-20" alt="" />
    </div>
    <div className="relative">
      <p className="list-disc text-sm font-bold text-[#3A3A3A] mb-3 max-lg:mb-6">
        {title}
      </p>
      <img src={bgImg} alt="1" className="absolute -z-50 top-[-22px]" />
      <div className="text-[0.8rem] text-[#3A3A3A]">
        <ul className="list-disc text-sm text-[#3A3A3A] mb-3 max-lg:mb-6">
          <li className="mb-4">{text1}</li>
          <li className="mb-4">{text2}</li>
          <li className="mb-4">{text3}</li>
          <li className="mb-4">{text4}</li>
          <li className="">{text5}</li>
        </ul>
      </div>
      <div className="flex justify-start items-center gap-2 max-lg:pb-12 text-[0.8rem]">
        <button className="text-black font-bold bg-[#EED55E] rounded-lg max-xl:py-1 py-2 px-3 mt-8 md:text-[0.68rem]">
          Learn More
        </button>
        <button
          onClick={() => setcalendlyopen(true)}
          className="text-white font-bold bg-black rounded-lg max-xl:py-1 py-2 px-3 mt-8 md:text-[0.68rem]  hover:bg-white hover:text-black hover:border hover:border-black  transition-all duration-300 transform"
        >
          Book a Demo
        </button>
      </div>
    </div>
    <div className={`w-32 max-lg:hidden`}>
      <img src={img} className="min-w-20" alt="" />
    </div>
  </section>
);
function Header() {
  const [isopen, setIsopen] = useState(false);
  const [productstoggle, setproductstoggle] = useState(false);
  const [resortoggle, setresortoggle] = useState(false);
  const [solution, setsolution] = useState(false);
  const { pathname } = useLocation()
  const [calendlyopen, setcalendlyopen] = useState(false)
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.addEventListener('click', e => { if (e.target.id != 'mob') { setIsopen(false); setproductstoggle(false); setresortoggle(false); setsolution(false) } })
  }, [])

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
    if (isopen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isopen]);

  return (
    <div className="max-w-[67.5rem] m-auto">
      <Contactpopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <header className="py-7 max-lg:px-4 flex items-center justify-between relative">
        <Link to={`${stagging}/`}>
          <div className="flex items-center space-x-1">
            <img
              src={`${stagging}/assets/codi-logo.png`}
              className="h-[3.5rem] max-md:h-[2.5rem]"
              alt=""
            />
            {/* <p className="font-baloo-tamma text-xl mt-1">Codifica</p> */}
          </div>
        </Link>

        <ul className="flex space-x-12 max-xl:space-x-6 max-xl:text-sm max-lg:hidden relative">
          {links.map((n) => (
            <li
              onMouseEnter={() => {
                if (n.title === "Products") {
                  setproductstoggle(true);
                  setresortoggle(false);
                  setsolution(false);
                }
                if (n.title === "Resources") {
                  setresortoggle(true);
                  setproductstoggle(false);
                  setsolution(false);
                }
                if (n.title === "Solutions") {
                  setsolution(true);
                  setresortoggle(false);
                  setproductstoggle(false);
                }
                if (
                  n.title !== "Solutions" &&
                  n.title !== "Resources" &&
                  n.title !== "Products"
                ) {
                  setsolution(false);
                  setresortoggle(false);
                  setproductstoggle(false);
                }
              }}
              onClick={() =>
                n.title === "Solutions" &&
                navigate(`${stagging}/solutions`, {
                  state: { data: Education },
                })
              }
              className={`${
                "/" + n.path === pathname && "underline underline-offset-4"
              } cursor-pointer`}
            >
              <Link to={n.path}>{n.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center max-lg:justify-between gap-3">
          {/* <div className="max-lg:w-full max-lg:flex justify-end max-lg:mr-4">
          <button
            onClick={() => setShowPopup(true)}
            className="text-white bg-black rounded-full px-6 py-3 max-md:px-4 max-md:py-2 text-sm max-lg:text-xs "
          >
            Book a Demo
          </button>
        </div> */}
          <div className="max-lg:w-full justify-end">
            <a href="https://app.codibot.ai/" target="_blank">
              <button className="w-[5.9rem] h-[3.18rem] max-md:h-[2.5rem] bg-white rounded-full px-5 py-2 text-sm max-lg:text-xs border-[1px] border-slate-200">
                Log In
              </button>
            </a>
          </div>
          <FaBars
            onClick={(e) => {
              e.stopPropagation();
              setIsopen(!isopen);
            }}
            className="cursor-pointer text-3xl lg:hidden"
          />
        </div>
        <ul
          id="mob"
          className={`${
            isopen ? "animate-slideInFromTop" : "animate-slideOutToTop"
          } top-0 left-0 w-full bg-white z-[99] flex flex-col absolute transition-all duration-300 font-semibold lg:hidden`}
        >
          <div className="py-7 flex items-center justify-between px-3 border-[#9F9F9F] border-b-2 pb-4">
            <div>
              <img
                src={`${stagging}/assets/codi-logo.png`}
                className="h-[3.5rem] max-md:h-[2.5rem]"
                alt=""
              />
              {/* <p className="font-baloo-tamma text-xl mt-1">Codifica</p> */}
            </div>
            <div className="flex items-center">
              <div className="max-lg:w-full max-lg:flex justify-end max-lg:mr-4">
                <a href="https://app.codibot.ai/" target="_blank">
                  <button className="w-[5.9rem] h-[3.18rem] max-md:h-[2.5rem] bg-white rounded-full px-5 py-2 text-sm max-lg:text-xs border-[1px] border-slate-200">
                    Log In
                  </button>
                </a>
              </div>
              <div className="self-end">
                <FaTimes
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsopen(false);
                  }}
                  className="cursor-pointer text-3xl"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#F0F0F0] px-5 space-y-4 py-8 rounded-b-2xl">
            {links.map((n) => (
              <li
                key={n.title}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsopen(false);
                  if (n.title === "Products") {
                    setproductstoggle(true);
                    setresortoggle(false);
                    setsolution(false);
                  }
                  if (n.title === "Resources") {
                    setresortoggle(true);
                    setproductstoggle(false);
                    setsolution(false);
                  }
                  if (n.title === "Solutions") {
                    setsolution(true);
                    setresortoggle(false);
                    setproductstoggle(false);
                  }
                }}
                className="border-[#9F9F9F] border-b-[1px] pb-4"
              >
                <Link to={n.path}>
                  <div className="flex justify-between items-center">
                    <p>{n.title}</p>
                    <FaAngleDown />
                  </div>
                </Link>
              </li>
            ))}
          </div>
        </ul>

        {/* ------------------------------------------------------------------------------------ */}
        {productstoggle && (
          <div
            onMouseEnter={() => setproductstoggle(true)}
            onMouseLeave={() => setproductstoggle(false)}
            className="absolute bg-[#F8F8F8] border border-slate-200 rounded-lg top-24 p-10 max-lg:p-5 left-1/2 -translate-x-1/2 z-50 max-lg:w-full min-w-[75vw] xl:min-w-[65vw]"
          >
            <p className="text-lg font-bold">Platform</p>
            <hr className="h-[0.1em] w-full bg-black mb-10 mt-5" />
            <div className="lg:flex items-start">
              <div className="w-[48%] max-md:w-full">
                <Link to={`${stagging}/csa`}>
                  <Section
                    title="Codi Service Assistant"
                    text1={csatexts[0]}
                    text2={csatexts[1]}
                    text3={csatexts[2]}
                    text4={csatexts[3]}
                    text5={csatexts[4]}
                    img={`${stagging}/assets/productshead.png`}
                    bgImg={`${stagging}/assets/1.png`}
                    reverse={true}
                  />
                </Link>
              </div>
              <div className="w-[48%] max-md:w-full">
                <Link to={`${stagging}/cta`}>
                  <Section
                    title="Codi Training Assistant"
                    text1={ctatexts[0]}
                    text2={ctatexts[1]}
                    text3={ctatexts[2]}
                    text4={ctatexts[3]}
                    text5={ctatexts[4]}
                    img={`${stagging}/assets/productshead2.png`}
                    bgImg={`${stagging}/assets/2.png`}
                    reverse={true}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}

        {solution && (
          <div
            onMouseEnter={() => setsolution(true)}
            onMouseLeave={() => setsolution(false)}
            className="absolute bg-[#F8F8F8] border border-slate-200 rounded-lg top-24 p-10 max-lg:p-5 left-1/2 -translate-x-1/2 z-50 max-lg:w-full min-w-[75vw] xl:min-w-[65vw]"
          >
            <div className="lg:flex justify-between items-start gap-7">
              <div className="basis-[35%] max-lg:mb-8">
                <p className="font-bold">By Use Cases</p>
                <Link to={`${stagging}/travel-assistant`}>
                  <div
                    // onClick={() =>
                    //   navigate(`${stagging}/casestudy`, {
                    //     state: { data: casestudy2 },
                    //   })
                    // }
                    className="mt-7 text-[0.8rem] flex items-start gap-3 cursor-pointer"
                  >
                    <img
                      src={`${stagging}/assets/casestudies (2).png`}
                      className="border-2 border-slate-200 object-cover mt-1 rounded-full w-14 h-14"
                      alt=""
                    />
                    <div className="mt-2">
                      <p>
                        Codi Travel Assistant - Automating Airbnb Guest
                        Interaction
                      </p>
                      <p className="text-xs font-bold mt-1">Learn More</p>
                    </div>
                  </div>
                </Link>
                <Link to={`${stagging}/codibot-ai`}>
                  <div
                    // onClick={() =>
                    //   navigate(`${stagging}/casestudy`, {
                    //     state: { data: casestudy1 },
                    //   })
                    // }
                    className="mt-7 text-[0.8rem] flex items-start gap-3 cursor-pointer"
                  >
                    <img
                      src={`${stagging}/assets/casestudies (1).png`}
                      className="border-2 border-slate-200 object-cover mt-1 rounded-full w-14 h-14"
                      alt=""
                    />
                    <div className="mt-2">
                      <p>
                        Codibot AI Chatbot for Mutual Fund Customers in a
                        Commercial Bank
                      </p>
                      <p className="text-xs font-bold mt-1">Learn More</p>
                    </div>
                  </div>
                </Link>
                <Link to={`${stagging}/students-learning`}>
                  <div
                    // onClick={() =>
                    //   navigate(`${stagging}/casestudy`, {
                    //     state: { data: casestudy3 },
                    //   })
                    // }
                    className="mt-7 text-[0.8rem] flex items-start gap-3 cursor-pointer"
                  >
                    <img
                      src={`${stagging}/assets/casestudies (3).png`}
                      className="border-2 border-slate-200 object-cover mt-1 rounded-full w-14 h-14"
                      alt=""
                    />
                    <div className="mt-2">
                      <p>
                        Enhancing Blended Learning for Students at Springfield
                        High School
                      </p>
                      <p className="text-xs font-bold mt-1">Learn More</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="max-lg:mb-8">
                <p className="font-bold">By Industry</p>
                <Link to={`${stagging}/education`}>
                  <div className="mt-7 text-[0.8rem] flex items-start gap-3 cursor-pointer">
                    <img
                      src={`${stagging}/assets/industryheader (4).png`}
                      className="w-4 h-4 object-cover mt-1"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-bold mb-1">Education</p>
                      <p>
                        Empower educators and students with Codi's AI-powered
                        platform
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to={`${stagging}/hr`}>
                  <div className="mt-7 text-[0.8rem] flex items-start gap-3 cursor-pointer">
                    <img
                      src={`${stagging}/assets/industryheader (3).png`}
                      className="w-4 h-4 object-cover mt-1"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-bold mb-1">HR</p>
                      <p>Transform HR Operations with AI-Driven Solutions</p>
                    </div>
                  </div>
                </Link>

                <Link to={`${stagging}/finance`}>
                  <div className="mt-7 text-[0.8rem] flex items-start gap-3 cursor-pointer">
                    <img
                      src={`${stagging}/assets/industryheader (2).png`}
                      className="w-4 h-4 object-cover mt-1"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-bold mb-1">
                        Accounting & Finance
                      </p>
                      <p>
                        Revolutionize Finance Management with Advanced AI
                        Chatbots
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to={`${stagging}/travel`}>
                  <div className="mt-7 text-[0.8rem] flex items-start gap-3 cursor-pointer">
                    <img
                      src={`${stagging}/assets/industryheader (1).png`}
                      className="w-4 h-4 object-cover mt-1"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-bold mb-1">Travel & Leisure</p>
                      <p>
                        Double Your Profits with Codifica's Custom AI Chatbots
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to={`${stagging}/health`}>
                  <div className="mt-7 text-[0.8rem] flex items-start gap-3 cursor-pointer">
                    <img
                      src={`${stagging}/assets/industryheader (5).png`}
                      className="w-4 h-4 object-cover mt-1"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-bold mb-1">HealthCare</p>
                      <p>
                        Enhance Workers' Productivity With Codifica's Custom AI
                        Chatbots
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to={`${stagging}/realestate`}>
                  <div className="mt-7 text-[0.8rem] flex items-start gap-3 cursor-pointer">
                    <img
                      src={`${stagging}/assets/industryheader (6).png`}
                      className="w-4 h-4 object-cover mt-1"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-bold mb-1">Real Estate</p>
                      <p>
                        Revolutionize Finance Management with Advanced AI
                        Chatbots
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <p className="font-bold">By Price</p>
                <div className="text-xs mt-3">
                  <div>
                    <p className="text-sm font-bold mb-3">Pricing</p>
                    <img
                      src={`${stagging}/assets/news3.jpg`}
                      className="w-28 rounded-xl"
                      alt=""
                    />
                    <p className="mt-3 text-[0.8rem]">
                      Pay as you go -{" "}
                      <Link to={`${stagging}/contact`}>
                        {" "}
                        <span className="font-bold text-blue-500">
                          Contact Us
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {resortoggle && (
          <div
            onMouseLeave={() => setresortoggle(false)}
            className="absolute bg-[#F8F8F8]  lg:flex  rounded-lg top-24 left-1/2 -translate-x-1/2 z-50 max-lg:w-full min-w-[75vw] xl:min-w-[65vw]"
          >
            <div className="bg-[#3A3A3A] basis-[50%] flex-grow">
              <p className="text-lg font-bold text-white px-10 pt-7">
                Our Resources
              </p>
              <hr className="h-[0.1em] w-full bg-black mt-5" />
              <div className="bg-3A] p-10 text-white flex justify-start items-center lg:space-x-5 max-lg:px-4">
                <img
                  src={`${stagging}/assets/newroom.png`}
                  className="h-32 max-lg:h-20"
                  alt=""
                />
                <div className="max-lg:px-4">
                  <p className="text-[0.68rem] mb-2">Featured News</p>
                  <p className="">
                    <span className="font-bold">
                      Revolutionizing email support:
                    </span>{" "}
                    Codifica.ai’s Generative AI-powered email automation
                  </p>
                  <Link to={`${stagging}/resources`}>
                    <button className="text-black font-bold bg-[#EED55E] rounded-lg max-xl:py-1 py-2 px-3 mt-5 text-base">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-10 max-lg:p-5 basis-[50%]">
              <p className="mb-7">Articles</p>
              {news.map((n) => (
                <Link target="_blank" to={n.link}>
                  <div className="text-sm mt-2 flex justify-start gap-5">
                    <img src={n.img} className="w-28 rounded-xl h-16" alt="" />
                    <div>
                      <p className="text-ellipsis">{n.title}</p>
                      <Link to={n.link}>
                        <p className="text-xs">Learn More</p>
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header
