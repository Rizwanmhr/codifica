import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { PopupWidget } from "react-calendly"; // its necessary
import { useEffect } from "react";
import { CALENDLY_URL, stagging } from "../Components/utils";
import { Link } from "react-router-dom";
import Contactpopup from "../Components/Contactpopup";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const table_data = [
  { id: 1, title: "Goal Based Conversations" },
  { id: 2, title: "90% Automation" },
  { id: 3, title: "Boost Agent Productivity" },
  { id: 4, title: "Zero Setup For Faster" },
  { id: 5, title: "Adaptable, Multi LLM AI" },
  { id: 6, title: "Trained Professionals" },
];

const Section = ({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  img,
  buttonlink,
  reverse,
  setcalendlyopen,
  setShowPopup,
}) => (
  <>
    {/* <section
      className={`max-xl:px-16 max-lg:px-4 max-lg:mb-10 lg:py-14 max-w-[67.5rem] m-auto lg:flex items-start justify-between ${
        reverse && "flex-row-reverse"
      }`}
    >
      <div className="lg:py-3 lg:w-[40%]">
        <p className="text-[1.7rem] max-xl:text-[1.5rem] font-bold text-[#3A3A3A] mb-3 max-lg:mb-6">
          {title}
        </p>
        <p className="mb-4 leading-6">{text1}</p>
        <ul className="list-disc text-lg max-xl:text-sm text-[#3A3A3A]">
          <li className=" mb-4 leading-6">{text2}</li>
          <li className=" mb-4 leading-6">{text3}</li>
          <li className=" mb-4 leading-6">{text4}</li>
          <li className=" mb-4 leading-6">{text5}</li>
          <li className=" mb-4 leading-6">{text6}</li>
        </ul>
        <p>{text7}</p>
        <div className="flex justify-start gap-2 max-lg:pb-12">
          <Link to={buttonlink}>
            <button className="text-black font-bold bg-[#EED55E] rounded-lg py-3 px-6 mt-8 max-xl:text-sm">
              Learn More
            </button>
          </Link>
          <button
            onClick={() => setShowPopup(true)}
            className="text-white font-bold bg-black rounded-lg py-3 px-6 mt-8 max-xl:text-sm"
          >
            Book a Demo
          </button>
        </div>
      </div>
      <div
        className={`${
          reverse ? "w-[60%] max-xl:w-[48%] max-lg:w-full" : "lg:w-[40%]"
        }`}
      >
        <img src={img} alt="" />
      </div>
    </section> */}
    <section className="max-w-[67.5rem] m-auto lg:py-14 max-md:mb-8">
      <div className="px-8 py-4 rounded-lg shadow-lg">
        <p className="text-[1.7rem] max-xl:text-[1.5rem] font-bold text-[#3A3A3A] mb-3 max-lg:mb-6">
          Codi Service Assistant
        </p>
        <p className=" mb-4 text-[1.18rem] max-xl:text-sm text-[#3A3A3A] leading-6">
          Our AI Codi Service Assistant will elevate your business operations
          through seamlessly performing the following tasks:
        </p>
        <ul className="list-disc text-[1.18rem] max-xl:text-sm text-[#3A3A3A] leading-6">
          <li className=" mb-4 leading-6">
            <strong>24/7 Customer Support:</strong> Codi answers anytime,
            anywhere.
          </li>
          <li className=" mb-4 leading-6">
            <strong>Accurate and Concise Information:</strong> Provides
            accurate, easy-to-understand info.
          </li>
          <li className=" mb-4 leading-6">
            <strong>Uninterrupted Availability:</strong> Available 24/7/365, no
            breaks needed.
          </li>
          <li className=" mb-4 leading-6">
            <strong>Professional and Emotionless Response:</strong> Delivers
            consistent, professional responses.
          </li>
          <li className=" mb-4 leading-6">
            <strong>Seamless Integration:</strong> Integrates with 6000+
            platforms for a smooth workflow.
          </li>
        </ul>
      </div>
    </section>
    <section className="max-w-[67.5rem] m-auto lg:py-14">
      <div className="px-8 py-4 rounded-lg shadow-lg">
        <p className="text-[1.7rem] max-xl:text-[1.5rem] font-bold text-[#3A3A3A] mb-3 max-lg:mb-6">
          Codi Training Assistant
        </p>
        <p className="mb-4 text-[1.18rem] max-xl:text-sm text-[#3A3A3A] leading-6">
          Revolutionize your training with the AI Codi Training Assistant.
          Discover how AI Codi Training Assistant features can efficiently
          improve your training outcome:
        </p>
        <ul className="list-disc text-[1.18rem] max-xl:text-sm text-[#3A3A3A] leading-6">
          <li className=" mb-4 leading-6">
            <strong>Tailored Training Experience:</strong> Tailor courses to
            individual needs.
          </li>
          <li className=" mb-4 leading-6">
            <strong>Instructor Dashboard:</strong> Monitor trainee progress with
            a comprehensive dashboard.
          </li>
          <li className=" mb-4 leading-6">
            <strong>Intuitive Learning:</strong> Codi clarifies complex concepts
            with focused slides.
          </li>
          <li className=" mb-4 leading-6">
            <strong>Interactive Audio Comprehension:</strong> Trainees choose
            their preferred language for narration (90+ options).
          </li>
          <li className=" mb-4 leading-6">
            <strong>Advanced Visual Learning:</strong> AI-generated videos
            enhance understanding and make learning fun.
          </li>
        </ul>
      </div>
    </section>
  </>
);

const csatexts = [
  "Our AI Codi Service Assistant will elevate your business operations through seamlessly performing the following tasks:",
  "24/7 Customer Support: The Codi Service Assistant provides around-the-clock information, ensuring your customers' inquiries are answered anytime, day or night.",
  "Accurate and Concise Information: Delivering precise and concise information, the Codi Service Assistant ensures your customers receive clear and helpful responses.",
  "Uninterrupted Availability: Never worry about holidays or sick days—Codi Service Assistant is always on, making your business available to customers 24/7, 365 days a year.",
  "Professional and Emotionless Response: With no emotions, the Codi Service Assistant interacts professionally with all types of customers, maintaining a consistent and courteous tone.",
  "Seamless Integration: Effortlessly integrate the Codi Service Assistant with over 6000+ platforms, including SAP, Zoho, and Shopify, to streamline your business processes.",
  "- Get it now, Capitalize - on the AI-Powered Codi Service Assistant",
];

// const ctatexts = [
//   "Revolutionize your training with the AI Codi Training Assistant. Discover how AI Codi Training Assistant features can efficiently improve your training outcome:",
//   "Tailored Training Experience: Instructors can fully customize training courses to meet the specific needs and job requirements of each trainee, ensuring a personalized learning journey.",
//   "Instructor Dashboard: Gain real-time insights into trainee progress with our extensive dashboard. Monitor chapter completion, assessment scores, and time spent on courses, all in one place.",
//   "Intuitive Learning: Codi Training Assistant enhances the learning experience by preparing slide presentations focused on assignments and learning objectives, making complex concepts easy to understand.",
//   "Interactive Audio Comprehension: Our assistant can narrate training material in over 90+ languages and accents, allowing trainees to choose their preferred language and accent for better comprehension.",
//   "Advanced Visual Learning: Boost your trainees' understanding with AI-generated creative videos that bring the subject matter to life, making learning more engaging and effective.",
// ];

const questions = [
  {
    img: `${stagging}/assets/howitworks.png`,
    question: "Easy Setup ",
    answer: "Get started quickly with simple 4 steps process.",
  },
  {
    img: `${stagging}/assets/howitworksnew (3).png`,
    question: "Custom Configuration",
    answer:
      "Codi AI Chatbots can be seamlessly configured with 100+ platforms as per customer requirements.",
  },
  {
    img: `${stagging}/assets/howitworksnew (2).png`,
    question: "Automate Business Processes",
    answer:
      "By using Codi AI Chatbots you can improve your business processes like customer services, employee communication, and HR trainings.",
  },
  {
    img: `${stagging}/assets/howitworksnew (1).png`,
    question: "Monitor and Optimize",
    answer:
      "Track real-time progress of various company processes on our intuitive dashboard, enhancing organizational productivity and decision-making.",
  },
];

const customerEngagement = [
  {
    img: `${stagging}/assets/revsecnew (3).png`,
    heading: "Smart AI",
    yellowtxt: "Conversations",
    hovtext1: "60%",
    hovtext2: "Increase in Traffic",
  },
  {
    img: `${stagging}/assets/revsecnew (2).png`,
    heading: "Integration with Over",
    yellowtxt: "6000+ Platforms",
    hovtext1: "6000+",
    hovtext2: "Platform Integrations",
  },
  {
    img: `${stagging}/assets/revsecnew (1).png`,
    heading: "Advanced TTS & ASR Model",
    yellowtxt: "",
    hovtext1: "30+",
    hovtext2: "Languages",
  },
];

const unlockpowerful = [
  "FAQ based conversations",
  "Lower automation rate",
  "Slower deflection rate improvements",
  "Longer bot deployment times",
  "Limited learning capabilities",
  "Offering basic assistance",
];

const unlockpowerful2 = [
  "Goal-based conversations for better outcomes",
  "90% automation in 30 days with generative AI",
  "Boost agent productivity by 50%",
  "Zero-setup for faster time-to-market",
  "Adaptable, multi-LLM AI for all industries",
  "Trained professionals enabling white glove service",
];

const stories = [
  {
    text: "We recently implemented an AI Service Assistant from Codifica to streamline our patient intake and support services. This innovative technology has transformed our operations by handling over half of the routine administrative tasks, such as appointment scheduling, preliminary symptom assessments, and follow-up reminders.The impact has been remarkable. Our healthcare staff can now focus on providing more personalized care and managing complex medical cases. Patient wait times have decreased, and satisfaction levels have improved due to the efficient and proactive support offered by the assistant. <br/><br/> This AI solution has significantly improved our operational efficiency and patient satisfaction. While our medical professionals' expertise remains vital, the technology is an invaluable asset for enhancing patient outcomes and optimizing resource allocation.",
    location: "Regional Healthcare Provider, Canada",
    person: "Chief Operating Officer",
    img: `${stagging}/assets/story (2).png`,
  },
  {
    text: "At our automotive component manufacturing plant, we recently integrated the AI Training Assistant from Codifica to overhaul our employee onboarding and training programs. This groundbreaking technology has fundamentally reshaped how we approach workforce development by delivering tailored learning experiences that address individual skill gaps. <br/><br/> The assistant engages employees through interactive training modules, quizzes, and personalized feedback, equipping both new hires and seasoned workers with the knowledge and confidence to excel in their roles. With onboarding times reduced by 40% and employees reporting a noticeable boost in productivity, our training team now focuses on creating advanced courses while the AI handles foundational learning. <br/><br/> The impact has been transformative. Our training programs are now more efficient and workforce productivity is at an all-time high. While human mentorship remains indispensable, the AI Training Assistant is an essential tool in delivering personalized, high-quality training and accelerating skill acquisition.",
    location: "Automotive Component Manufacturer, German",
    person: "Chief Operating Officer",
    img: `${stagging}/assets/story (1).png`,
  },
];

function Landing() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedImg, setSelectedImg] = useState(
    `${stagging}/assets/howitworks.png`
  );
  const [calendlyopen, setcalendlyopen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  // --------------------------------------
  const sliderRef = useRef(null);

  const CustomPrevArrow = () => (
    <div
      onClick={() => sliderRef.current.slickPrev()}
      className="cursor-pointer rounded-full border border-slate-200 p-2 hover:bg-slate-100 hover:bg-opacity-20"
    >
      <BsArrowLeft />
    </div>
  );

  const CustomNextArrow = () => (
    <div
      onClick={() => sliderRef.current.slickNext()}
      className="cursor-pointer rounded-full border border-slate-200 p-2 hover:bg-slate-100 hover:bg-opacity-20"
    >
      <BsArrowRight />
    </div>
  );

  const sliderRef2 = useRef(null);

  const CustomPrevArrow2 = () => (
    <div
      onClick={() => sliderRef2.current.slickPrev()}
      className="cursor-pointer rounded-full border border-slate-200 p-2 hover:bg-slate-100 hover:bg-opacity-20"
    >
      <BsArrowLeft />
    </div>
  );

  const CustomNextArrow2 = () => (
    <div
      onClick={() => sliderRef2.current.slickNext()}
      className="cursor-pointer rounded-full border border-slate-200 p-2 hover:bg-slate-100 hover:bg-opacity-20"
    >
      <BsArrowRight />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  useEffect(() => {
    if (calendlyopen) {
      setcalendlyopen(false);
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
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
    <div>
      <Contactpopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <section className="overflow-x-hidden">
        <section className="text-center min-h-screen flex flex-col items-center z-10 relative mb-20 max-lg:mb-8">
          <img
            src={`${stagging}/assets/landhov.png`}
            className="my-12 -z-10 absolute left-0 max-lg:-left-40 max-lg:bottom-[7rem] w-[60vw] max-lg:h-[25rem] max-lg:min-w-[30rem] h-[35vw] max-xl:h-[45vw] 2xl:w-[65vw]"
            alt=""
          />
          <div className="pb-[14.4rem] max-xl:pb-44 max-lg:pb-10 relative max-lg:px-4 max-w-[67.5rem] m-auto">
            <p className="font-lustria text-[2.4rem] 2xl:text-[2.4rem] max-xl:text-[2rem] max-lg:text-[1.65rem] pt-16 max-lg:pt-9">
              Boost Customer Retention and Skyrocket
              <br className="max-lg:hidden" /> Profits with Our Custom Codibots
            </p>
            <p className="text-xl max-lg:text-sm text-[#3A3A3A] mt-3">
              Boost profitability and enhance accuracy with{" "}
              <br className="max-lg:hidden" /> our advanced AI Codibots.
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="text-white bg-black rounded-2xl px-10 py-3 mt-8 max-lg:text-xs mb-[1rem] max-md:mb-[7rem] hover:bg-white hover:text-black hover:border hover:border-black  transition-all duration-300 transform"
            >
              Book a Demo
            </button>
            <img
              src={`${stagging}/assets/tovid1.png`}
              className="my-12 absolute -bottom-[55%] max-xl:-bottom-60 min-w-[65vw] h-[28rem] max-xl:h-[20rem] 2xl:h-[30rem] left-1/2 -translate-x-1/2"
              alt=""
            />
          </div>
          <div className="bg-[#EED55E] w-full pb-20 max-lg:pb-10 pt-[19rem] max-lg:pt-12 max-xl:pt-[13rem] relative lg:-z-10">
            <div className="relative z-10 max-lg:px-4">
              <div className="relative">
                <img
                  src={`${stagging}/assets/tovid.png`}
                  className="lg:hidden z-30"
                  alt=""
                />
                <img
                  src={`${stagging}/assets/landhov2.png`}
                  className="my-12 lg:hidden -z-10 absolute -top-5 right-[-6rem] w-[30vw] max-lg:w-[50vw] max-xl:h-[90vh] 2xl:h-[55vh]"
                  alt=""
                />
              </div>
              <p className="text-[1.28rem] max-xl:text-[1.5rem] max-lg:mt-5 max-lg:px-4 max-lg:text-base font-bold text-[#3A3A3A] mt-3">
                Revolutionize Customer Engagement{" "}
                <br className="max-lg:hidden" /> with AI-Powered Automation
              </p>
              <p className="text-[#3A3A3A] text-base mt-3 max-lg:text-sm max-lg:px-4">
                Choose the Right AI Driven Customer Services Assistant For You
              </p>
            </div>
          </div>
          <img
            src={`${stagging}/assets/landhov2.png`}
            className="my-12 max-lg:hidden lg:-z-10 absolute right-0 -bottom-52 xl:-bottom-36 w-[35vw] max-lg:w-[50vw] max-xl:h-[90vh] 2xl:h-[55vh]"
            alt=""
          />
        </section>

        <Section
          setcalendlyopen={setcalendlyopen}
          setShowPopup={setShowPopup}
          title="Codi Service Assistant"
          text1={csatexts[0]}
          text2={csatexts[1]}
          text3={csatexts[2]}
          text4={csatexts[3]}
          text5={csatexts[4]}
          text6={csatexts[5]}
          text7={csatexts[6]}
          buttonlink={`${stagging}/csa`}
          img={`${stagging}/assets/csachat.png`}
        />
        {/* <Section
          setcalendlyopen={setcalendlyopen}
          setShowPopup={setShowPopup}
          title="Codi Training Assistant"
          text1={ctatexts[0]}
          text2={ctatexts[1]}
          text3={ctatexts[2]}
          text4={ctatexts[3]}
          text5={ctatexts[4]}
          text6={ctatexts[5]}
          buttonlink={`${stagging}/cta`}
          img={`${stagging}/assets/ctaland (2).png`}
          reverse={true}
        /> */}

        <section className="bg-[#F1F1F1] py-14 pb-28 mt-10 rounded-tl-[3.5rem] max-lg:rounded-tl-3xl max-lg:px-4">
          <div className="max-w-[67.5rem] m-auto">
            <div className="text-center">
              <p className="text-[2.5rem] max-xl:text-[1.8rem] max-lg:text-2xl font-bold text-[#3A3A3A]">
                How It Works?
              </p>
              <p className=" text-[#3A3A3A] text-[1.5rem] max-xl:text-base mt-3 max-lg:mt-6">
                Codibot is an innovative AI Virtual Assistant technology
                platform designed to automate various maximize your aspects of
                business operations, thereby enhancing efficiency,
                profitability, <br className="max-lg:hidden" />
                customer satisfaction and decision-making processes.
              </p>
            </div>
            <div className="lg:flex justify-between gap-[7.8rem] items-center max-xl:px-20 max-lg:px-2 mt-14 max-lg:mt-7">
              <div>
                {questions.map((item, index) => (
                  <div>
                    <div
                      onClick={() => {
                        handleQuestionClick(index);
                        setSelectedImg(item.img);
                      }}
                      className="flex w-full items-center max-lg:items-start justify-between mb-4"
                    >
                      <div className="w-[90%] max-xl:w-[85%] max-lg:w-full">
                        <p
                          className={`text-[1.5rem] max-xl:text-[1.15rem] ${
                            selectedQuestion === index
                              ? "translate-y-0 mt-5"
                              : "translate-y-5"
                          } cursor-pointer font-bold text-[#3A3A3A] mb-3`}
                        >
                          {item.question}
                        </p>
                        <p
                          className={`text-[#333333] mb-4 max-xl:text-sm transition-height duration-300 ${
                            selectedQuestion === index
                              ? "max-h-screen mb-5"
                              : "max-h-0 translate-y-10 scale-0"
                          }`}
                        >
                          {item.answer}
                        </p>
                        <img
                          src={selectedImg}
                          className={`w-[50%] max-xl:w-[45%] ${
                            selectedQuestion !== index && "hidden"
                          } max-lg:w-full lg:hidden`}
                          alt=""
                        />
                      </div>
                      <div className="h-8 w-8 max-lg:w-9 translate-y-2 max-lg:translate-y-5 text-xl border border-black rounded-full flex items-center justify-center">
                        <p className="">
                          {selectedQuestion === index ? "-" : "+"}
                        </p>
                      </div>
                    </div>
                    <hr className="h-[0.1em] w-full bg-black" />
                  </div>
                ))}
              </div>
              <img
                src={selectedImg}
                className="w-[50%] max-xl:w-[45%] max-lg:hidden"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="bg-[#290EEA] pt-20 max-xl:pt-16 pb-28 -translate-y-10 max-lg:px-2 relative rounded-tl-[3.5rem] max-lg:rounded-tl-3xl text-white">
          <div className="max-w-[67.5rem] m-auto">
            <img
              src={`${stagging}/assets/customereng.png `}
              className="absolute max-lg:hidden top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 h-[93%]"
              alt=""
            />
            <div className="text-center z-50">
              <p className="text-[2.5rem] max-xl:text-[1.6rem] max-lg:text-[1.5rem] font-bold">
                Revolutionize Customer Engagement with{" "}
                <br className="max-lg:hidden" /> AI-Powered Automation
              </p>
              <p className="mt-3 text-[1.5rem] max-xl:text-base">
                Driving Business Success through AI Innovation
              </p>
            </div>
            <div className="relative mt-10 max-xl:mt-7 max-lg:px-3">
              <Slider ref={sliderRef} {...settings}>
                {customerEngagement.map((n, index) => (
                  <div key={index} className="">
                    <p className="mt-3 text-[1.37rem] max-xl:text-base font-bold mb-5 h-14 max-xl:h-10 ml-1">
                      {n.heading} <br className="max-lg:hidden" />{" "}
                      <span className="text-[#FFDB2F]">{n.yellowtxt}</span>
                    </p>
                    <img src={n.img} alt="" />
                    <div className="-translate-y-7 translate-x-3 w-[60%] max-xl:w-[70%]">
                      <div className="p-5 py-3 bg-white text-black rounded-lg relative">
                        <p className="font-bold text-[2.5rem] max-xl:text-3xl">
                          {n.hovtext1}
                        </p>
                        <p className="font-semibold max-xl:text-[0.81rem]">
                          {n.hovtext2}
                        </p>
                        <img
                          src={`${stagging}/assets/uparr.png`}
                          className="absolute -right-4 top-1/2 -translate-y-1/2 max-lg:invisible"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 max-lg:-bottom-16 space-x-2 flex items-center">
                <CustomPrevArrow />
                <CustomNextArrow />
              </div>
            </div>
            {/* <div className='grid grid-cols-3 gap-10 max-xl:gap-8 mt-10 max-xl:mt-7 px-32 max-xl:px-24'>
                {customerEngagement.map((n, index) => <div key={index} className='relative'>
                    <p className='mt-3 text-xl max-xl:text-base font-bold mb-5 h-14 max-xl:h-10 ml-1'>{n.heading} <br className='max-lg:hidden' /> <span className='text-[#FFDB2F]'>{n.yellowtxt}</span></p>
                    <img src={n.img} alt="" />
                    <div className='absolute -bottom-[4.3rem] max-xl:-bottom-[3.6rem] left-3 w-[60%] max-xl:w-[70%]'>
                        <div className='p-5 py-3 bg-white text-black rounded-lg relative'>
                            <p className='font-bold text-5xl max-xl:text-3xl'>{n.hovtext1}</p>
                            <p className='font-semibold max-xl:text-xs'>{n.hovtext2}</p>
                            <img src=${stagging}/assets/uparr.png className='absolute -right-4 top-1/2 -translate-y-1/2' alt="" />
                        </div>
                    </div>
                </div>)}
            </div> */}
          </div>
        </section>

        <section className={`py-14 max-lg:px-4 relative max-w-[1080px] m-auto`}>
          <p className="text-[2.5rem] max-xl:text-[1.6rem] max-lg:text-[1.5rem] font-bold text-center max-lg:px-3">
            Our customers’ success matters to us
          </p>
          <Slider ref={sliderRef2} {...settings2}>
            {stories.map((n) => (
              <div className="">
                <div
                  className={`lg:flex items-start gap-[7.8rem] mt-14 max-lg:mt-10`}
                >
                  <div className="w-[40%] max-xl:w-[52%] max-lg:w-full text-sm max-xl:text-xs text-[#3A3A3A]">
                    {/* <p className=' text-[#3A3A3A] mb-3'>Middle East</p> */}
                    <p
                      className="2 text-[0.87rem]"
                      dangerouslySetInnerHTML={{ __html: n.text }}
                    />
                    {/* <p>{n.text}</p> */}
                    <p className="text-lg max-xl:text-base font-bold mt-4">
                      {n.location}
                    </p>
                    <p className="text-[0.68rem] text-slate-500">{n.person}</p>
                    <button className="text-black font-bold bg-[#EED55E] rounded-lg px-6 py-3 mt-8">
                      Read the Story
                    </button>
                  </div>
                  <div className={`flex justify-end max-lg:mt-10`}>
                    <img src={n.img} className="w-full" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="absolute left-1/2 -translate-x-1/2 max-xl:bottom-[5%] max-lg:bottom-0 bottom-[0%] space-x-2 flex items-center">
            <CustomPrevArrow2 />
            <CustomNextArrow2 />
          </div>
        </section>

        <section className={`py-14 max-lg:px-4 max-w-[67.5rem] m-auto`}>
          <p className="text-[2.5rem] max-xl:text-[1.6rem] max-lg:text-[1.5rem] font-bold text-center">
            Unlock powerful growth for your business. Simple{" "}
            <br className="max-lg:hidden" /> solutions, immediate results.
          </p>
          <div className="overflow-x-auto whitespace-nowrap mt-7 min-w-[700px]">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full border-b border-gray-300">
                  <th className="w-[40%] py-6 text-left text-[#F2C146] font-bold text-[2rem]">
                    Features
                  </th>
                  <th className="w-[30%] py-6 text-center text-[#9F9F9F] text-[1.75rem] font-medium">
                    Without Codibot
                  </th>
                  <th className="w-[30%] py-6 text-end text-[1.75rem] font-semibold">
                    With Codibot
                  </th>
                </tr>
              </thead>
              <tbody>
                {table_data.map((item) => (
                  <tr key={item.id}>
                    <td className="pt-6 py-2 text-[1.25rem] font-medium">
                      {item.title}
                    </td>
                    <td className="pt-6 py-3 flex justify-center items-center">
                      <img
                        src="/public/assets/cancel.png"
                        alt="cancel"
                        className="w-[2rem]"
                      />
                    </td>
                    <td className="pt-6 py-2 items-center">
                      <div className="flex justify-end mr-5">
                        <img
                          src="/public/assets/tick.png"
                          alt="tick"
                          className="w-[2rem]"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <div className={`lg:grid grid-cols-2 gap-10 mt-14`}>
            <div className=" rounded-lg border border-slate-500 p-10 pb-16 text-center max-lg:px-4">
              <p className="text-3xl max-xl:text-2xl mb-4">
                With everybody else
              </p>
              <div className="space-y-1 text-lg max-xl:text-base">
                {unlockpowerful.map((n, index) => (
                  <p key={index} className="">
                    {n}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-[#EED55E] rounded-lg  border border-slate-500 pt-10 pb-16 text-center max-lg:mt-8 max-lg:px-4">
              <p className="text-3xl max-xl:text-2xl mb-4">With Codifica.ai</p>
              <div className="space-y-1 text-lg max-xl:text-base">
                {unlockpowerful2.map((n, index) => (
                  <p key={index} className="">
                    {n}
                  </p>
                ))}
              </div>
            </div>
          </div> */}
        </section>
      </section>
    </div>
  );
}

export default Landing;
