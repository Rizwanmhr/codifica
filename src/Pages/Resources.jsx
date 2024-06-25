import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'

const news = [
  {
    title: "OpenAI is taking on rivals with an AI-powered search engine",
    img: "/assets/news1.jpg",
    link: "https://www.superhuman.ai/p/openai-working-ai-search-engine",
  },
  {
    title: "Apple's AI plans start to take shape",
    img: "/assets/news2.jpg",
    link: "https://www.superhuman.ai/p/apples-ai-plans-start-take-shape",
  },
  {
    title: "AI assistants are coming soon",
    img: "/assets/news3.jpg",
    link: "https://www.superhuman.ai/p/ai-assistants-coming-soon",
  },
  {
    title: "How AI is making online casinos safer than ever before",
    img: "/assets/news4.jpg",
    link: "https://www.artificialintelligence-news.com/2024/04/29/how-ai-making-online-casinos-safer-ever-before/",
  },
  {
    title: "Meta raises the bar with open source Llama 3 LLM",
    img: "/assets/news5.jpeg",
    link: "https://www.artificialintelligence-news.com/2024/04/19/meta-raises-bar-open-source-llama-3-llm/",
  },
  {
    title:
      "80% of AI decision makers are worried about data privacy and security",
    img: "/assets/news6.jpg",
    link: "https://www.artificialintelligence-news.com/2024/04/17/80-of-ai-decision-makers-are-worried-about-data-privacy-and-security/",
  },
  {
    title:
      "AI-controlled F-16 takes US Air Force leader for high-speed ride - as he backs tech to launch weapons",
    img: "/assets/news7.jpg",
    link: "https://news.sky.com/story/ai-controlled-f-16-takes-us-air-force-leader-for-high-speed-ride-as-he-backs-tech-to-launch-weapons-13128673",
  },
  ,
  {
    title: "AI could predict patients' future health conditions, study finds",
    img: "/assets/news8.jpg",
    link: "https://news.sky.com/story/ai-could-predict-patients-future-health-conditions-study-finds-13098978",
  },
  {
    title: "AI becomes latest frontier in China-US race for Africa",
    img: "/assets/news9.jpg",
    link: "https://www.voanews.com/a/ai-becomes-latest-frontier-in-china-us-race-for-africa/7605069.html",
  },
  {
    title: "It’s Time to Believe the AI Hype",
    img: "/assets/news10.jpg",
    link: "https://www.wired.com/story/its-time-to-believe-the-ai-hype/",
  },
  {
    title:
      "Connecticut Senate passes wide-ranging bill to regulate AI. But its fate remains uncertain",
    img: "/assets/news11.jpg",
    link: "https://apnews.com/article/artificial-intelligence-ai-connecticut-regulation-b004b4477ac20cc365317edff9f7351b?utm_campaign=Artificial%2BIntelligence%2BWeekly&utm_medium=web&utm_source=Artificial_Intelligence_Weekly_384",
  },
  {
    title:
      "President Sally Kornbluth and OpenAI CEO Sam Altman discuss the future of AI",
    img: "/assets/news12.jpg",
    link: "https://news.mit.edu/2024/president-sally-kornbluth-openai-ceo-sam-altman-discuss-future-ai-0506?utm_campaign=Artificial%2BIntelligence%2BWeekly&utm_medium=web&utm_source=Artificial_Intelligence_Weekly_384",
  },
  {
    title: "Will AI customer service kill the call centre?",
    img: "/assets/news13.jpg",
    link: "https://techmonitor.ai/technology/ai-and-automation/ai-customer-service-llm?utm_campaign=Artificial%2BIntelligence%2BWeekly&utm_medium=web&utm_source=Artificial_Intelligence_Weekly_383",
  },
  {
    title: "OpenAI Is Rebooting Its Robotics Team",
    img: "/assets/news14.avif",
    link: "https://www.forbes.com/sites/kenrickcai/2024/05/30/openai-robotics-team/?utm_source=aisecret.us&utm_medium=AIsecret.us&utm_campaign=Daily&sh=2333e9774f33",
  },
  {
    title: "AI for Customer Support Can Help Build Trust",
    img: "/assets/news15.jpg",
    link: "https://aibusiness.com/data-analytics/ai-for-customer-support-can-help-build-trust#close-modal",
  },
  {
    title:
      "How to Become an AI-Centric Business (and Why It's Crucial for Long-Term Success)",
    img: "/assets/news16.jpg",
    link: "https://www.entrepreneur.com/starting-a-business/how-to-become-an-ai-centric-organization/474295",
  },
  {
    title:
      "HOW AI CHATBOTS CAN HELP BUSINESSES REDUCE COSTS AND INCREASE EFFICIENCY",
    img: "/assets/news17.jpg",
    link: "https://www.bbntimes.com/technology/how-ai-chatbots-can-help-businesses-reduce-costs-and-increase-efficiency",
  },
  {
    title:
      "Unlocking the power of chatbots: Key benefits for businesses and customers",
    img: "/assets/news18.png",
    link: "https://www.ibm.com/blog/unlocking-the-power-of-chatbots-key-benefits-for-businesses-and-customers/",
  },
];

function Resources() {
    const [pagination , setpagination] = useState({start: 0 , end : 6 })
    const {start , end } = pagination;
    const [currentpage , setcurrentpage] = useState(1)
    const [search , setsearch] = useState({toggle: false , key : "" })

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
        <section className="overflow-x-hidden max-w-[67.5rem] m-auto">
          <div className="mt-24 flex justify-center items-center max-lg:px-5 max-lg:mt-12">
            <img src="/assets/resources.png" className="max-lg:h-32" alt="" />
          </div>

          <section className="lg:my-10 mt-16 max-lg:px-4">
            <p className="text-[2.5rem]  max-md:text-[1.5rem]">
              The Latest News
            </p>
            <hr className="bg-slate-700 w-full h-[0.1em] mt-8" />
            <div className="text-lg max-xl:text-base lg:flex justify-between items-center mt-5 lg:px-4">
              <div className="gap-12 max-lg:gap-7 flex items-center w-full max-lg:px-3">
                {/* <p className='font-bold'>Filter</p> */}
                <p className="font-bold text-[1.5rem] max-md:text-lg">All</p>
              </div>
              <hr className="bg-slate-700 w-full h-[0.1em] mt-5 lg:hidden mb-8" />
              <div className="flex gap-10 max-lg:gap-5 justify-end items-center w-full max-lg:text-sm">
                <p className="text-[1.5rem] max-md:text-lg max-md:pb-4">
                  Industry News
                </p>
                {/* <p>Blog</p>
                    <p>White Papers</p>
                    <p>Webinar</p> */}
                <div className="flex items-center justify-end gap-2">
                  <input
                    type="text"
                    onChange={(e) =>
                      setsearch({ ...search, key: e.target.value })
                    }
                    className={`${
                      search.toggle ? "w-full h-full" : "w-0 h-0 scale-0"
                    } p-1 transition-all duration-300 border border-slate-300 rounded-md`}
                  />
                  <FaSearch
                    onClick={() => setsearch({ ...search, toggle: true })}
                    className="text-slate-500 cursor-pointer"
                  />
                </div>
              </div>
              <div></div>
            </div>
            <hr className="bg-slate-700 w-full h-[0.1em] mt-5 max-lg:hidden" />
          </section>

          <section
            id="news"
            className="pb-16 scroll-m-20 max-xl:px-16 pt-2 max-lg:px-4"
          >
            <div className="lg:grid grid-cols-3 gap-y-10 gap-x-20">
              {news
                .slice(start, end)
                .filter(
                  (n) =>
                    search.key.trim() === "" ||
                    n.title.toLowerCase().includes(search.key.toLowerCase())
                )
                .map((n) => (
                  <a
                    href={n.link}
                    target="_blank"
                    className="space-y-6 text-lg mt-10 cursor-pointer"
                  >
                    <p className="h-14 text-ellipsis text-[1.6rem] max-md:text-xl">
                      {n.title}
                    </p>
                    <img
                      src={n.img}
                      className="max-xl:h-[10rem] h-[14rem] w-full"
                      alt=""
                    />
                    <p className="">Updated: March 18, 2024</p>
                  </a>
                ))}
            </div>

            <div className="text-lg flex justify-between items-center max-lg:flex-col-reverse mt-20 max-lg:mt-14">
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
        </section>
      </>
    );
}

export default Resources
