import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';


const news = [
    {
        title: "OpenAI is taking on rivals with an AI-powered search engine", 
        img: "/assets/news1.jpg", 
    },
    {
        title: "Apple's AI plans start to take shape", 
        img: "/assets/news2.jpg", 
    },{
        title: "AI assistants are coming soon", 
        img: "/assets/news3.jpg", 
    },{
        title: "How AI is making online casinos safer than ever before", 
        img: "/assets/news4.jpg", 
    },{
        title: "Meta raises the bar with open source Llama 3 LLM", 
        img: "/assets/news5.jpeg", 
    },{
        title: "80% of AI decision makers are worried about data privacy and security", 
        img: "/assets/news6.jpg", 
    },{
        title: "AI-controlled F-16 takes US Air Force leader for high-speed ride - as he backs tech to launch weapons", 
        img: "/assets/news7.jpg", 
    },
    ,{
        title: "AI could predict patients' future health conditions, study finds", 
        img: "/assets/news8.jpg", 
    },{
        title: "AI becomes latest frontier in China-US race for Africa", 
        img: "/assets/news9.jpg", 
    },
    
]

function Newsroom() {

    const [pagination , setpagination] = useState({start: 0 , end : 6 })
    const {start , end } = pagination;
    const [currentpage , setcurrentpage] = useState(1)

    const sliderRef = useRef(null);

    const CustomPrevArrow = () => (
        <div onClick={() => sliderRef.current.slickPrev()} className="cursor-pointer rounded-full border border-slate-200 p-2 hover:bg-slate-100 hover:bg-opacity-20">
            <FaAngleLeft />
        </div>
    );

    const CustomNextArrow = () => (
        <div onClick={() => sliderRef.current.slickNext()} className="cursor-pointer rounded-full border border-slate-200 p-2 hover:bg-slate-100 hover:bg-opacity-20">
            <FaAngleRight />
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

    function getRange(value) {
        const start = (value - 1) * 6;
        const end = start + 6;
        setpagination({ start: start , end : end})
        setTimeout(() => {
        scrollToSection('news');
        }, 100);
      }

      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
      <>
        <section className="overflow-x-hidden">
          <section className="bg-[#3A3A3A] text-white py-20 lg:flex justify-center items-center lg:space-x-16 max-lg:px-4">
            <img
              src="/assets/newroom.png"
              className="h-[17rem] max-xl:h-[16rem] max-lg:h-[15rem] max-lg:mx-auto"
              alt=""
            />
            <div className="basis-[45%] max-lg:mt-14 max-lg:px-4">
              <p className="text-sm mb-4">Featured News</p>
              <p className="text-3xl max-lg:text-2xl">
                <span className="font-bold">
                  Revolutionizing email support:
                </span>{" "}
                <br className="lg:hidden" /> <br /> Codifica.ai’s Generative AI-{" "}
                <br className="max-lg:hidden" /> powered email automation
              </p>
              <button className="bg-white mt-6 text-black rounded-full px-5 py-2 text-sm">
                Read More
              </button>
            </div>
          </section>

          <section className="lg:my-10 mt-16 px-32 max-xl:px-16 max-lg:px-4">
            <p className="text-3xl">The Latest News</p>
            <hr className="bg-slate-700 w-full h-[0.1em] mt-8" />
            <div className="text-lg max-xl:text-base lg:flex justify-between items-center mt-5 lg:px-4">
              <div className="gap-12 max-lg:gap-7 flex items-center w-full max-lg:px-3">
                <p className="font-bold">Filter</p>
                <p>All</p>
              </div>
              <hr className="bg-slate-700 w-full h-[0.1em] mt-5 lg:hidden mb-8" />
              <div className="flex gap-10 max-lg:gap-2 justify-end max-lg:justify-start w-full max-lg:text-sm text-base">
                <button className="bg-black text-white rounded-xl px-5 py-1 ">
                  Editor’s Pick
                </button>
                <button className="border border-slate-600 rounded-xl px-5 py-1 ">
                  Generative AI
                </button>
              </div>
              <div></div>
            </div>
            <hr className="bg-slate-700 w-full h-[0.1em] mt-5 max-lg:hidden" />
          </section>

          <section
            id="news"
            className="px-32 scroll-m-20 max-xl:px-16 pt-2 max-lg:px-4"
          >
            <div className="lg:grid grid-cols-3 gap-y-10 gap-x-20">
              {news.slice(start, end).map((n) => (
                <div className="space-y-4 text-lg mt-10">
                  <p className="h-14 text-ellipsis">{n.title}</p>
                  <img
                    src={n.img}
                    className="max-xl:h-[10rem] h-[14rem] w-full"
                    alt=""
                  />
                  <p className="text-xs">Updated: March 18, 2024</p>
                </div>
              ))}
            </div>

            <div className="text-lg flex justify-between items-center max-lg:flex-col-reverse mt-20 max-lg:mt-14 lg:px-4">
              <div className="flex gap-2 justify-start w-full">
                <button
                  disabled={start === 0 && true}
                  onClick={() => {
                    getRange(currentpage - 1);
                    setcurrentpage(currentpage - 1);
                  }}
                  className="bg-black text-white rounded-xl px-5 py-1 text-base"
                >
                  Previous
                </button>
                <button
                  disabled={news.length <= currentpage * 6 + 1 && true}
                  onClick={() => {
                    getRange(currentpage + 1);
                    setcurrentpage(currentpage + 1);
                  }}
                  className="border border-slate-600 rounded-xl px-5 py-1 text-base"
                >
                  Next
                </button>
              </div>
              <div className="flex justify-end items-center max-lg:justify-start max-lg:mb-10 w-full text-sm max-lg:px-1">
                {/* <p className=' mr-3 whitespace-pre-wrap'>1    2 </p> */}
                {[...new Array(Math.ceil(news?.length / 6))].map((n, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      getRange(index + 1);
                      setcurrentpage(index + 1);
                    }}
                    className={`${
                      currentpage === index + 1 ? "bg-black text-white" : ""
                    } cursor-pointer rounded-full w-9 h-7 flex justify-center items-center`}
                  >
                    <p>{index + 1}</p>
                  </div>
                ))}
                {/* <span className='w-2 h-2 bg-slate-300 rounded-full ml-2'></span>
                    <span className='w-2 h-2 bg-slate-300 rounded-full ml-2'></span>
                    <span className='w-2 h-2 bg-slate-300 rounded-full ml-2'></span>
                    <p className=' mr-3 whitespace-pre-wrap'>   41</p> */}
              </div>
              <div></div>
            </div>
          </section>

          <section className="my-20 px-32 max-xl:px-16 pb-40 max-lg:pb-32 max-lg:px-4">
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl">Top Trending Articles</p>
              <button className="text-black max-lg:hidden font-bold bg-[#EED55E] rounded-lg px-5 py-3 text-sm">
                Read More
              </button>
            </div>

            <div className="relative mt-20 max-lg:mt-10">
              <Slider ref={sliderRef} {...settings}>
                {[...new Array(3)].map((n) => (
                  <div className="space-y-4 text-lg">
                    <img
                      src="/assets/newr.png"
                      className="max-xl:h-[23rem] h-[28rem] w-full"
                      alt=""
                    />
                    <p className="text-xs">Updated: March 18, 2024</p>
                    <p>
                      Exploring the impact of ChatGPT and generative AI on
                      enterprises:
                    </p>
                  </div>
                ))}
              </Slider>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-24 space-x-2 flex items-center">
                <CustomPrevArrow />
                <CustomNextArrow />
              </div>
            </div>

            {/* <div className='grid grid-cols-3 gap-y-10 gap-x-14 max-xl:gap-x-8 mt-20'>
                {[...new Array(3)].map(n =>
                    <div className=' space-y-4 text-lg'>
                        <img src="/assets/newr.png" className='max-xl:h-[23rem] h-[28rem] w-full' alt="" />
                        <p className='text-xs'>Updated: March 18, 2024</p>
                        <p>Exploring the impact of ChatGPT and generative AI on enterprises:</p>
                    </div>
                )}
            </div> */}
          </section>
        </section>
      </>
    );
}

export default Newsroom
