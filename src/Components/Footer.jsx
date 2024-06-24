import React from "react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CALENDLY_URL, stagging } from "./utils";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Contactpopup from "./Contactpopup";

const questions = [
  {
    question: "Company",
    answer:
      "<a href='' className='cursor-pointer'>About Us</a><a href='' className='cursor-pointer'>Career</a><a href='' className='cursor-pointer'>Newsroom</a>",
  },
  {
    question: "Products",
    answer:
      "<a href='' className='cursor-pointer'>CSA</a><a href='' className='cursor-pointer'>CTA</a>",
  },
  {
    question: "Solutions",
    answer:
      "<a href='' className='cursor-pointer'>By UseCase</a><a href='' className='cursor-pointer'>By Industry</a><a href='' className='cursor-pointer'>By Price</a>",
  },
  {
    question: "Resources",
    answer:
      "<a href='' className='cursor-pointer'>News Room</a><a href='' className='cursor-pointer'>Blog</a>.",
  },
  {
    question: "Contact Us",
  },
];

const codibotData = [
{
  id: 1,
  title: 'Codi Service Assistant',
},
{
  id: 2,
  title: 'Codi Corporate Training Assistant',
},
{
  id: 3,
  title: 'Codi Telephony Agent',
},
{
  id: 4,
  title: 'Codi Web Agent',
},
{
  id: 5,
  title: 'Codi Education Assistant',
},
{
  id: 6,
  title: 'Codi Travel Assistant',
},
]
function Footer() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [calendlyopen, setcalendlyopen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
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
    <footer className="mt-72 max-lg:mt-0 max-xl:mt-60 relative">
      <Contactpopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <div className="lg:flex bg-[#E6E6E6] p-10 py-3 max-lg:mb-10 max-lg:px-4 max-lg:pt-8 max-lg:mx-4 rounded-2xl items-center justify-between lg:absolute -top-[310px] left-1/2 lg:-translate-x-1/2 lg:translate-y-[20%] lg:w-[65vw]">
        <div>
          {/* <p className="text-[1.9rem] max-xl:text-[1.4rem] font-bold mb-4 leading-8">
            Our solutions are making waves <br className="max-lg:hidden" /> in
            the travel industry
          </p>
          <p className="max-xl:text-xs">
            The most reliable and acclaimed AI travel assistant available.
          </p> */}
          <div className="overflow-x-auto whitespace-nowrap">
            <table className="min-w-full bg-[#E6E6E6]">
              <thead>
                <tr>
                  <th className="w-1/2 px-4 py-2 text-left">Title</th>
                  {/* <th className="w-1/2 px-4 py-2 text-center"></th> */}
                </tr>
              </thead>
              <tbody>
                {codibotData.map((item, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2 max-md:text-sm">{item.title}</td>
                    <td className="px-4 py-2 text-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="custom-checkbox sr-only peer"
                        />
                        <div className="checkmark w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-yellow-400 transition duration-150 ease-in-out"></div>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={() => setShowPopup(true)}
            className="text-black font-bold bg-[#EED55E] rounded-lg px-6 py-3 mt-8 max-lg:mt-5 max-xl:text-sm"
          >
            Book a demo
          </button>
        </div>
        <img
          src={`${stagging}/assets/footerimg.png`}
          className="w-[18rem] ml-auto max-lg:w-[70%] max-xl:w-[14rem] lg:-translate-y-20 max-lg:translate-y-8"
          alt=""
        />
      </div>
      <div className="bg-[#EED55E]">
        <div className="max-md:px-4 py-20 max-lg:py-10 pt-44 max-lg:pt-10  max-w-[67.5rem] m-auto">
          <div className="max-lg:mb-4 mt-12">
            <p
              onClick={() =>
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              className="cursor-pointer"
            >
              <Link to={`${stagging}/`}>
                <img
                  src={`${stagging}/assets/footer_logo.png`}
                  className="h-[4.5rem] max-md:h-[3rem]  mt-[12]"
                  alt=""
                />
              </Link>
            </p>
          </div>

          <div className="lg:flex items-center justify-center gap-6">
            {questions.map((item, index) => (
              <div className="lg:pr-20 lg:hidden">
                <div
                  onClick={() => {
                    handleQuestionClick(index);
                    setSelectedImg(item.img);
                  }}
                  className="flex w-full items-center max-lg:items-start justify-between"
                >
                  <div className="w-[90%] max-xl:w-[85%] max-lg:w-full">
                    <p
                      className={`text-[1.3rem] max-xl:text-[1.15rem] max-lg:text-base ${
                        selectedQuestion === index
                          ? "translate-y-0 mt-5"
                          : "translate-y-5"
                      } cursor-pointer font-bold text-[#3A3A3A] mb-1`}
                    >
                      {item.question}
                    </p>
                    <p
                      className={`mb-4 max-xl:text-sm transition-height duration-300 ${
                        selectedQuestion === index
                          ? "max-h-screen mb-5"
                          : "max-h-0 translate-y-10 scale-0"
                      }`}
                    >
                      <div
                        className="flex flex-col gap-2 mt-3 font-semibold ml-2"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </p>
                  </div>
                  {selectedQuestion === index ? (
                    <FaAngleUp className="mt-6" />
                  ) : (
                    <FaAngleDown className="mt-6" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-start gap-20 max-xl:gap-8 max-xl:text-sm max-lg:hidden">
            <div className="space-y-5">
              <p className="font-bold pb-10 max-xl:pb-5"></p>
              <p className="font-bold pb-4">Company</p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/about`} className="">
                  About Us
                </Link>
              </p>
              {/* <p className='cursor-pointer'>Career</p> */}
              {/* <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/newsroom`} className="">
                  Newsroom
                </Link>
              </p> */}
              <p className="cursor-pointer">
                <Link className="">Career</Link>
              </p>
              <div className="space-y-5">
                <p className="cursor-pointer font-bold pb-4 max-xl:pb-5">
                  Products
                </p>
                <p
                  onClick={() =>
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                  className="cursor-pointer"
                >
                  <Link to={`${stagging}/csa`} className="">
                    Codi Service Assistant
                  </Link>
                </p>
                <p
                  onClick={() =>
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                  className="cursor-pointer"
                >
                  <Link to={`${stagging}/cta`} className="">
                    Codi Training Assistant
                  </Link>
                </p>
                {/* <p
                  onClick={() =>
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                  className="cursor-pointer"
                >
                  <Link to={`${stagging}/pricingcsa`} className="font-bold">
                    Pricing
                  </Link>
                </p> */}
              </div>
              {/* <div className="space-y-5">
                <p
                  onClick={() =>
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                  className="font-bold pb-10 max-xl:pb-5"
                >
                  {" "}
                  <Link to={`${stagging}/resources`} className="">
                    Resources
                  </Link>
                </p>
                <p
                  onClick={() =>
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                  className="cursor-pointer"
                >
                  <Link to={`${stagging}/newsroom`}>News Room</Link>
                </p>
                <p
                  onClick={() =>
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                  className="cursor-pointer"
                >
                  <Link>Blog</Link>
                </p>
              </div> */}
            </div>
            <div className="space-y-5">
              <p className="font-bold pb-10 max-xl:pb-5"></p>

              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/casestudy`} className="font-bold">
                  By UseCase
                </Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/codibot-ai`}>Commercial Bank</Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/students-learning`}>
                  Educational Institute
                </Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/travel-assistant`}>Travel Agency</Link>
              </p>
            </div>

            {/* <div className="space-y-5">
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/solutions`}>
                  <p className="font-bold pb-10 max-xl:pb-5">Solutions</p>
                </Link>
              </p>
            </div> */}
            <div className="space-y-5">
              <p className="font-bold pb-10 max-xl:pb-5"></p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link className="font-bold"></Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/solutions`} className="font-bold">
                  By Industry
                </Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/education`}>Education</Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/hr`}>HR</Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/finance`}>Accounting & Finance</Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/travel`}>Travel & Leisure</Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/health`}>Health Care</Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/realestate`}>Real Estate</Link>
              </p>
              {/* <p className='cursor-pointer'>By Price</p> */}
            </div>
            <div className="space-y-5">
              <p className="font-bold pb-10 max-xl:pb-5"></p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer font-bold pb-4 max-xl:pb-5"
              >
                {" "}
                <Link to={`${stagging}/resources`} className="">
                  Resources
                </Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/newsroom`}>News Room</Link>
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link>Blog</Link>
              </p>
            </div>
            <div className="space-y-5">
              <p className="font-bold pb-10 max-xl:pb-5"></p>
              <p className="cursor-pointer font-bold pb-4 max-xl:pb-5">
                Contact Us
              </p>
              <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/csa`} className="">
                  Talk To Codibot
                </Link>
              </p>
              {/* <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/cta`} className="">
                  Codi Training Assistant
                </Link>
              </p> */}
              {/* <p
                onClick={() =>
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <Link to={`${stagging}/pricingcsa`} className="font-bold">
                  Pricing
                </Link>
              </p> */}
            </div>
            {/* <div className="space-y-5">
            <p className="cursor-pointer font-bold pb-10 max-xl:pb-5">
              Contact US
            </p>
            <p
              onClick={() =>
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              className="cursor-pointer"
            >
              <Link>Talk To CodiBot</Link>
            </p>
            <p
              onClick={() =>
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              className="cursor-pointer"
            >
              <Link to={`${stagging}/cta`} className="">
                Codi Training Assistant
              </Link>
            </p>
          </div> */}
            {/* <div className="space-y-5">
            <p
              onClick={() =>
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              className="font-bold pb-10 max-xl:pb-5"
            >
              {" "}
              <Link className="">Contact Us</Link>
            </p>
            <p
              onClick={() =>
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              className="cursor-pointer"
            >
              <Link to={`${stagging}/newsroom`} className="">
                Talk to Codibot
              </Link>
            </p>
          </div> */}
            {/* <p className='cursor-pointer'>Blog</p> */}

            {/* <div className="space-y-5">
            <p className="cursor-pointer font-bold pb-10 max-xl:pb-5">
              Products
            </p>
            <p
              onClick={() =>
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              className="cursor-pointer"
            >
              <Link to={`${stagging}/csa`} className="">
                Codi Service Assistant
              </Link>
            </p>
            <p
              onClick={() =>
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              className="cursor-pointer"
            >
              <Link to={`${stagging}/cta`} className="">
                Codi Training Assistant
              </Link>
            </p>
          </div> */}

            {/* <div className="space-y-5">
            <p className="font-bold pb-10 max-xl:pb-5">Contact Us</p>
          </div> */}
          </div>
          <p className="cursor-pointer"></p>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-md:px-4 py-5 max-lg:pt-5 flex justify-between text-sm max-lg:text-[0.56rem] max-w-[67.5rem] m-auto">
          <p className="cursor-pointer">
            © 2024 Codifica. All rights reserved.
          </p>
          <div className="flex space-x-3 max-lg:space-x-1 font-bold text-xs">
            <a
              href="https://codibot.ai/pages/privacy_policy.pdf"
              target="_blank"
              className="hover:text-slate-600"
            >
              Privacy Policy
            </a>
            <a
              href="https://codibot.ai/pages/subscriber_contract.pdf"
              target="_blank"
              className="hover:text-slate-600"
            >
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
