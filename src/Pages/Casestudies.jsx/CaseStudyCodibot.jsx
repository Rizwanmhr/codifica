import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { casestudy1, casestudy2, casestudy3 } from "./casestudies";
import { stagging } from "../../Components/utils";

const nextcasestudies = [
  {
    heading:
      "Codibot AI Chatbot for Mutual Fund Customers in a Commercial Bank",
    img: `${stagging}/assets/minicase1.png`,
    date: "Updated: March 18, 2024",
    link: "",
    nextcase: casestudy1,
  },
  {
    heading:
      "Enhancing Blended Learning for Students at Springfield High School",
    img: `${stagging}/assets/minicase2.png`,
    date: "Updated: March 18, 2024",
    link: "",
    nextcase: casestudy3,
  },
  {
    heading: "Codi Travel Assistant - Automating Airbnb Guest Interaction",
    img: `${stagging}/assets/minicase3.png`,
    date: "Updated: March 18, 2024",
    link: "",
    nextcase: casestudy2,
  },
];

function CaseStudyCodibot() {
  const location = useLocation();
  const data = location.state ? location.state.data : null;
  const navigate = useNavigate();
  return (
    <div>
      <section className="overflow-x-hidden text-lg max-xl:text-base max-w-[67.5rem] m-auto">
        <section id="overview" className="mt-20 max-lg:mt-16 pb-5">
          <div className="max-lg:px-4">
            <div className="lg:flex items-start gap-16 max-xl:gap-10">
              {/* <p className='xl:text-[2.6rem] max-xl:w-[270%] lg:text-[2rem] max-lg:w-full max-lg:mb-5 max-lg:text-[1.8rem] w-[90%] text-[2.2rem] xl:leading-[3.5rem] leading-[2.9rem] max-lg:leading-9'>Optimize Business Interactions with <span className='text-[#33B87C] font-bold'>Codifica</span></p> */}
              <p className="basis-[50%]"></p>
              <div>
                <p className="text-[2.5rem] text-[#3A3A3A]">Use Case — </p>
                <p className="text-[2.5rem] my-5 max-lg:text-2xl leading-[3.5rem]">
                  {casestudy1?.topheading}
                </p>
                <p className="text-xl text-[#3A3A3A]">
                  {" "}
                  <span className="font-bold">Background:</span>{" "}
                  {casestudy1?.background}
                </p>
              </div>
            </div>
            <div className="mt-14 flex justify-center items-center">
              <img src={casestudy1?.img} className="max-lg:h-[11rem]" alt="" />
            </div>
          </div>
        </section>

        <section className="max-lg:px-4 mt-12 lg:flex gap-[7.8rem]">
          <div>
            <div>
              {casestudy1?.role && (
                <p className="text-xl text-[#3A3A3A]">
                  {" "}
                  <span className="font-bold">Codibot's Role:</span>{" "}
                  {casestudy1?.role}
                </p>
              )}
            </div>
            <p className="font-bold text-xl mt-8">
              {casestudy1?.headingafterrole}
            </p>
            {casestudy1?.headingwithoutsub.map((n) => (
              <div className="mt-8 text-[#3A3A3A]">
                <p className="font-bold mb-4 text-xl">{n.heading}</p>
                {n.text1 && (
                  <div className="flex items-start gap-4 lg:ml-[7%] mb-3">
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="w-5 mt-1"
                      alt=""
                    />
                    <p>{n.text1}</p>
                  </div>
                )}
                {n.text2 && (
                  <div className="flex items-start gap-4 lg:ml-[7%] mb-3">
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="w-5 mt-1"
                      alt=""
                    />
                    <p>{n.text2}</p>
                  </div>
                )}
                {n.text3 && (
                  <div className="flex items-start gap-4 lg:ml-[7%] mb-3">
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="w-5 mt-1"
                      alt=""
                    />
                    <p>{n.text3}</p>
                  </div>
                )}
                {n.text4 && (
                  <div className="flex items-start gap-4 lg:ml-[7%] mb-3">
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="w-5 mt-1"
                      alt=""
                    />
                    <p>{n.text4}</p>
                  </div>
                )}
                {n.text5 && (
                  <div className="flex items-start gap-4 lg:ml-[7%] mb-3">
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="w-5 mt-1"
                      alt=""
                    />
                    <p>{n.text5}</p>
                  </div>
                )}
                {n.text6 && (
                  <div className="flex items-start gap-4 lg:ml-[7%] mb-3">
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="w-5 mt-1"
                      alt=""
                    />
                    <p>{n.text6}</p>
                  </div>
                )}
                {n.text7 && (
                  <div className="flex items-start gap-4 lg:ml-[7%] mb-3">
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="w-5 mt-1"
                      alt=""
                    />
                    <p>{n.text7}</p>
                  </div>
                )}
                {n.text8 && (
                  <div className="flex items-start gap-4 lg:ml-[7%] mb-3">
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="w-5 mt-1"
                      alt=""
                    />
                    <p>{n.text8}</p>
                  </div>
                )}
                {n.text9 && (
                  <div className="flex items-start gap-4 lg:ml-[7%] mb-3">
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="w-5 mt-1"
                      alt=""
                    />
                    <p>{n.text9}</p>
                  </div>
                )}
              </div>
            ))}

            {casestudy1?.datawithsubheading.map((n) => (
              <div className="mt-8 text-xl text-[#3A3A3A]">
                <p className="font-bold mb-4">{n.heading}</p>
                {n.subheadings.map((n) => (
                  <div className="flex items-start gap-4 lg:ml-[7%] mb-3">
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="w-5 mt-1"
                      alt=""
                    />
                    <p>
                      {" "}
                      <span className="font-bold">{n.subheading}</span> {n.text}
                    </p>
                  </div>
                ))}
              </div>
            ))}
            <p className="font-bold my-16">{data?.closingtext}</p>
          </div>

          <div className="text-[#3A3A3A]">
            <p className="mb-10 font-semibold text-xl">Use Case — </p>
            {nextcasestudies.map((n) => (
              <div
                onClick={() =>
                  navigate(`${stagging}/casestudy`, {
                    state: { data: n.nextcase },
                  })
                }
                className="space-y-4 mt-10 cursor-pointer"
              >
                <p className="h-12 xl:h-14 text-ellipsis text-[1.6rem]">
                  {n.heading}
                </p>
                <img
                  src={n.img}
                  className="max-xl:h-[10rem] h-[12rem] w-full rounded-2xl object-cover"
                  alt=""
                />
                <p className="text-xs pb-10">{n.date}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default CaseStudyCodibot;
