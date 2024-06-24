import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CALENDLY_URL, stagging } from "../Components/utils";
import { useLocation } from "react-router-dom";
import Contactpopup from "../Components/Contactpopup";
import { Realstate } from "./Solutions/solutions";
import { Link } from "react-router-dom";

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

function SolutionsRealEstate() {
  const [calendlyopen, setcalendlyopen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const location = useLocation();
  const data = location.state ? location.state.data : null;

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
    <section className="overflow-x-hidden">
      <Contactpopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <section className="text-center min-h-screen flex flex-col items-center z-10 relative mb-20">
        <img
          src={`${stagging}/assets/landhov.png`}
          className="my-12 -z-10 absolute max-lg:-left-52 max-lg:bottom-[17rem] max-lg:rotate-6 max-lg:h-[25rem] max-lg:min-w-[25rem] left-0 w-[60vw] h-[40vw] max-xl:h-[45vw] 2xl:w-[65vw]"
          alt=""
        />
        <div className="pb-[25rem] max-xl:pb-44 max-lg:pb-32 relative px-4 max-w-[67.5rem] m-auto">
          <div>
            <p className="font-lustria text-[3rem] 2xl:text-[3.2rem] max-lg:text-[1.65rem]  max-xl:text-[2rem] pt-16 max-lg:pt-9">
              {Realstate?.topheading}
            </p>
            <p className="text-[1.5rem] text-[#3A3A3A] max-lg:text-sm mt-3">
              {Realstate?.description}
            </p>
          </div>
          <button
            onClick={() => setShowPopup(true)}
            className="text-white bg-black rounded-2xl px-10 py-3 mt-8 max-lg:text-xs"
          >
            Book a Demo
          </button>
          <img
            src={Realstate?.img}
            className="my-12 object-cover rounded-lg absolute -bottom-[10rem] max-lg:-bottom-[5.5rem] max-xl:-bottom-60 min-w-[65vw] h-[28rem] max-lg:h-[8rem] max-lg:px-5 max-lg:rounded-3xl max-xl:h-[20rem] 2xl:h-[30rem] left-1/2 -translate-x-1/2"
            alt=""
          />
        </div>
        <div
          style={{ backgroundColor: Realstate?.bgcol }}
          className="lg:rounded-tr-3xl w-full pb-20 pt-[10rem] max-lg:pt-10 max-xl:pt-[13rem] relative -z-10 text-white"
        >
          <div className="lg:flex items-center justify-between my-10 max-lg:my-7 max-w-[67.5rem] m-auto">
            <p className="mt-3 text-[3rem] max-lg:text-[1.4rem] max-lg:leading-8 max-xl:text-3xl max-lg:px-10 text-start max-lg:text-center">
              {Realstate?.underland}
            </p>
            <div className="flex justify-center space-x-4 max-lg:space-x-3 max-lg:px-4 max-lg:mt-5">
              <div className="bg-[#3A3A3A] max-lg:px-3 h-[21.8rem] max-lg:h-[11rem] w-[20.5rem] relative flex items-center flex-col justify-center rounded-2xl border-t-4 border-white">
                <p className="text-[5.5rem] max-lg:text-[2.7rem] font-bold mb-5 max-lg:mb-3">
                  {Realstate?.percent1}
                </p>
                <p className="text-[1.5rem] max-lg:text-xs max-lg:pb-2">
                  {Realstate?.percent1text}
                </p>
                <p className="bg-white text-black px-1 py-1 rounded-full text-[10px] max-lg:text-[5px] absolute bottom-2 right-3">
                  forbes.com
                </p>
              </div>
              <div className="bg-[#4831E9] max-lg:px-3 h-[21.8rem] w-[20.5rem] max-lg:h-[11rem] relative flex items-center flex-col justify-center rounded-2xl border-t-4 border-white">
                <p className="text-[5.5rem] font-bold mb-5 max-lg:mb-3 max-lg:text-[2.7rem]">
                  {Realstate?.percent2}
                </p>
                <p className="text-[1.5rem] max-lg:text-xs max-lg:pb-2 lg:px-2">
                  {Realstate?.percent2text}
                </p>
                <p className="bg-white text-black px-1 py-1 rounded-full text-[10px] max-lg:text-[5px] absolute bottom-2 right-3">
                  forbes.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={`${stagging}/assets/landhov2.png`}
          className="my-12 grayscale contrast-200 -z-20 absolute right-0 max-lg:-bottom-[55%] max-lg:left-60 max-lg:w-[70vw] -bottom-[25rem] w-[30vw] max-xl:h-[100vh] 2xl:h-[55vh]"
          alt=""
        />
      </section>

      <section className="max-lg:px-4 max-w-[67.5rem] m-auto">
        <div className="text-center lg:mx-[20%]">
          <p className="text-[3rem] max-lg:text-2xl">
            {Realstate?.section2heading}
          </p>
          <p className="text-[1.5rem] max-lg:text-sm max-lg:px-5 mt-3">
            {Realstate?.section2description}
          </p>
        </div>
        {Realstate?.sectiondata.map((n) => (
          <div
            className={`lg:flex items-center gap-[7.8rem] ${
              n.reverse && "flex-row-reverse"
            } mt-32 max-lg:mt-10`}
          >
            <div className="w-[48%] xl:w-[45%] max-lg:w-full">
              <img src={n.img} className="" alt="" />
            </div>
            <div className="xl:w-[50%] w-[43%] max-lg:mt-8 max-lg:w-full">
              <p className="xl:text-[3rem] w-[90%] text-[3rem] max-lg:text-2xl mb-5 max-lg:mb-3">
                {n.heading}
              </p>
              <p className=""> {n.text}</p>
              <button
                // onClick={() => setcalendlyopen(true)}
                onClick={() => setShowPopup(true)}
                className="text-white bg-black text-sm rounded-xl px-5 py-3 mt-8"
              >
                Book a Demo
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* <p className="pb-20"></p> */}
      <section className="max-lg:px-5 max-lg:flex flex-col bg-[#F1F1F1] mt-16 max-md:mt-6 justify-end relative overflow-hidden py-16 max-md:py-8 z-10 mb-6">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[7.8rem] max-md:gap-2 max-w-[67.5rem] m-auto">
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
    </section>
  );
}

export default SolutionsRealEstate;
