import React from 'react'
import { useState, useEffect } from "react";
import { CALENDLY_URL, stagging } from '../Components/utils';
import { FaAngleDown, FaAngleUp, FaRegCheckSquare } from 'react-icons/fa';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRef } from "react";
import { createChatbot, createinvoice, createsubscription, signup } from '../Components/Apis';
import toast, { Toaster } from 'react-hot-toast';
import "../style.css"
import { Link } from 'react-router-dom';

const allplans = [
  {
    planid: "1",
    bgColor: "#ECECEC",
    link: "https://app.codibot.ai/#pkg||$29.99||STARTER||1",
    planndame: "Starter Plan",
    price: "29.99",
    orignalprice: "$49.99/Month",
    text1: "7 Days FREE TRIAL",
    text2: " (60% OFF limited time discount)",
    data: [
      "Codi Web Assistant",
      "3000 Message Credits",
      "GPT 3.5 Turbo (LLM)",
      "Customer Support",
      "Dashboard Access",
      "Email Integration",
      "Free Data Training (Up to 1GB)",
      "Analytical Reports",
      "Data Encryption & Security",
      "Get 15% discount on the annual plan.",
    ],
  },
  {
    planid: "2",
    bgColor: "#F5F5F5",
    link: "https://app.codibot.ai/#pkg||$89.99||Business||3",
    planndame: "Business Plan",
    price: "89.99",
    orignalprice: "$179.99/Month",
    text1: "7 Days FREE TRIAL",
    text2: "(50% OFF limited time discount)",
    data: [
      "Codi Web Assistant",
      "10,000 Message Credits",
      "GPT3.5 Turbo / Llama3-70B (LLM)",
      "Dashboard Access",
      "Integration (Email, SMS)",
      "Free Data Training (Up to 5 GB)",
      "Analytical Reports",
      "ASR - Voice Recognition",
      "Data Encryption & Security",
      "Customer Support",
    ],
  },
  {
    painid: "3",
    bgColor: "#ECECEC",
    link: `https://codifica.ai/${stagging}/contact`,
    planndame: "Enterprise Plan",
    price: "",
    orignalprice: "Request A Demo",
    data: [
      "Codi Web Assistant",
      "Unlimited Message Credits (Selectable)",
      "GPT-4, GPT-3.5 turbo, Claude, Llama3-70B",
      "Customer Support",
      "Dashboard Access",
      "6000+ Integrations (Email, SMS, CRM, ERP, etc.)",
      "Unlimited Data Training (Selectable)",
      "Advanced Reporting",
      "Text to Speech (TTS)",
      "ASR - Voice Recognition",
      "Telephony (Inbound/Outbound)",
      "Data Security",
    ],
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

function PricingCSA() {
    const [calendlyopen, setcalendlyopen] = useState(false)
    const [yearlytoggle, setyearlytoggle] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [paypaltoggle, setpaypaltoggle] = useState(false);
    const [orderdata, setorderdata] = useState({price: "" , plan_id: null});
    const [email , setEmail] = useState("")
    const [check , setcheck] = useState(false)
    const [token , settoken] = useState(null)
    const [loader , setloader] = useState(false)
  
    // for calendlyopen
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
       
    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    }

    const create_chatbot = async ( invoice ) => {
        setloader(true);
        const token = sessionStorage.getItem('token')
        const res = await createsubscription(orderdata.plan_id , !yearlytoggle ? "monthly" : "yearly"  , getCurrentDate() , token);
        if(res.status === 201)
          {
            setTimeout(() => {
                toast.success(res.message)
                createChatbot(token).then(n => {setloader(false); toast.success(n.data.message); setShowPopup(false)})
                 createinvoice(orderdata.price , invoice , getCurrentDate() , token)
            }, 4000);
          }else{
            setTimeout(() => {
                toast.success(res.message)
                createChatbot(token).then(n => {setloader(false); toast.success(n.data.message); setShowPopup(false)})
                createinvoice(orderdata.price , invoice , getCurrentDate() , token)
            }, 4000);
          }
      }

    const signupuser = async () => {
        const data = {
            password: "Codibot@2024",
            firstName: "",
            lastName: "",
            dob: "1999-01-01",
            phone: "+1-212-406-0000",
            profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        const resp = await signup({...data , email : email , username: email})
        try {
          if(resp.data.data.access_token){
            sessionStorage.setItem('token', resp.data.data.access_token)
          }
          else{
             toast.error(resp.data.message)
            }
        } catch (error) { 
          console.log(error)
        }
     }

    // const createOrder = (data, actions) => {
    //     signupuser(email)
    //     if (check && email) {
    //       return actions.order
    //         .create({
    //           purchase_units: [
    //             {
    //               description: "Package",
    //               amount: {
    //                 currency_code: "USD",
    //                 value: String(orderdata.price),
    //               },
    //             },
    //           ],
    //         })
    //         .then((orderID) => {
    //           return orderID;
    //         })
    //         .catch((err) => {
    //         })
    //     } else {
    //         return null
    //     }
    //   };
    
    const onApprove = (data , actions) => {
        // const orderinvoice = {
        //   transaction_id: data.paymentID,
        //   plan_id : orderdata.plan_id, 
        //   sub_id : data.orderID
        // }
        create_chatbot(data)

        return actions.order.capture().then(function (details) {
          const { payer } = details;
        });
      };

    const SubscriptionButtonWrapper = () => {
        return (<PayPalButtons
        onApprove={onApprove}
            createSubscription={(data, actions) => {
                  signupuser(email);
                return actions.subscription
                    .create({
                        // plan_id: "P-3RX065706M3469222L5IFM4I" // sandbox
                        plan_id: orderdata.plan_id == '1' ? "P-7K245750E44918311MZG74MI" : "P-059663447R576924MMZG723I",
                    });
            }}
            style={{
                label: "subscribe",
            }}
        />);
    }

    const createOrder = (data, actions) => {
        signupuser(email)
        if (check && email) {
            return actions.subscription
            .create({
                plan_id: 'P-3RX065706M3469222L5IFM4I'
            })
        } else {
            return null
        }
      };
      

     
    

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
        // window.scroll({
        //     top: 0, 
        //     left: 0, 
        //     behavior: 'smooth' 
        //    })
    }, [])

    const scrollToBottom = () => {
        const popupContainer = document.getElementById('popupContainer');
        if (popupContainer) {
          popupContainer.scrollTo({
            top: popupContainer.scrollHeight,
            behavior: 'smooth'  // Smooth scrolling
          });
        }
      };

    return (
      <>
        {loader && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <span className="loader"></span>
          </div>
        )}
        <div>
          <Toaster />
        </div>

        {showPopup && (
          <div
            onClick={() => setShowPopup(false)}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40"
          >
            <div
              id="popupContainer"
              onClick={(e) => e.stopPropagation()}
              className={`transition-all xl:w-[40%] lg:w-[45%] max-lg:w-full max-md:mx-2 duration-300 bg-white p-6 rounded-lg h-[85%] overflow-auto`}
            >
              <p className="font-bold text-lg ml-4">
                Enter your email address:
              </p>
              <input
                required
                type="email"
                className="p-3 w-full border border-slate-500 rounded-md my-4"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex justify-center items-start gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 mt-[0.1em] cursor-pointer"
                  checked={check}
                  onChange={() => {
                    setcheck(!check);
                  }}
                />
                <p>
                  Codifica and it’s services may email me services, tips,
                  updates, and offers. I can unsubscribe anytime, and my
                  information will not otherwise be shared, as per the{" "}
                  <span className="underline">Privacy policy</span>
                </p>
              </div>
              <p className="font-bold mt-10 text-lg">
                Select your payment method:
              </p>
              <div className="flex items-start gap-4 mb-3 max-lg:mb-4 mt-4 bg-[#EEEDED] p-4 rounded-md">
                <img
                  src={`${stagging}/assets/greentick.png`}
                  className="w-5 mt-2"
                  alt=""
                />
                <div className="">
                  <p className="font-bold">Secure Checkout</p>
                  <p className="text-xs">Secure Checkout</p>
                </div>
              </div>
              <div className="bg-[#EED55E] rounded-lg text-center p-5 mb-5 flex justify-between items-center">
                <p className="">Free Trial Plan</p>
                <p className="font-bold text-[1.3rem]">
                  ${orderdata.price}/Month
                </p>
              </div>
              <div
                onClick={() => {
                  !check && toast.error("Kindly check the checkbox");
                  !email && toast.error("Kindly write email");
                  check && email && setpaypaltoggle(!paypaltoggle);
                  setTimeout(() => {
                    scrollToBottom();
                  }, 100);
                }}
                className="bg-white hover:bg-slate-100 cursor-pointer border border-slate-500 rounded-lg text-center p-4 mb-5 flex justify-between items-center"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      checked={paypaltoggle}
                      //   onChange={handleCheckboxChange}
                    />
                    <p className="font-bold text-lg">PayPal</p>
                    <img
                      src={`${stagging}/assets/paypalicon.png`}
                      className="h-10"
                      alt=""
                    />
                  </div>
                  {paypaltoggle ? <FaAngleDown /> : <FaAngleUp />}
                </div>
              </div>
              {paypaltoggle && (
                <div className={`transition-all duration-300 `}>
                  {check && email && (
                    //        <PayPalScriptProvider options={{ clientId: "test",
                    //        intent: "subscription",
                    //        vault: true
                    //         }}>
                    //     <PayPalButtons
                    //         createSubscription={createOrder}
                    //         onApprove={onApprove}
                    //     />
                    // </PayPalScriptProvider>
                    <PayPalScriptProvider
                      options={{
                        "client-id":
                          "Acr6rPrwdce_GJquJkSazIJKmT042lVvtccxA6rTDgGBuhpMpNvsD0qypCaihXP32-hRtkkwPo4jEuzL",
                        // "client-id": "test",
                        components: "buttons",
                        intent: "subscription",
                        vault: true,
                      }}
                    >
                      <SubscriptionButtonWrapper />
                    </PayPalScriptProvider>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        <section className="overflow-x-hidden">
          <section className="text-center min-h-screen flex flex-col items-center z-10 relative mb-5 max-w-[67.5rem] m-auto">
            <div className="relative pt-16 max-lg:pt-9">
              <p className="text-[1.5rem] font-lustria pb-5">
                Codi Service Assistant
              </p>
              <p className="font-lustria text-[3rem] 2xl:text-[3.2rem] max-lg:text-[1.65rem]  max-xl:text-[2rem]">
                Revolutionize Your Customer Service
              </p>
              <p className="text-[1.5rem] text-[#3A3A3A] max-lg:text-sm mt-3">
                Experience the synergy of advanced AI and human-centric support
                with our state-of-the-art <br className="max-lg:hidden" />
                virtual assistant platform, leveraging CODIFICA's conversational
                AI technology for unmatched <br className="max-lg:hidden" />{" "}
                service.
              </p>
              <div className="text-lg">
                <button
                  onClick={() => {
                    setyearlytoggle(false);
                  }}
                  className={`${
                    !yearlytoggle ? "bg-[#EED55E]" : "text-slate-400 bg-black"
                  }  font-bold text-black rounded-xl px-8 pr-12 py-3 mt-8`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => {
                    setyearlytoggle(true);
                  }}
                  className={`${
                    !yearlytoggle ? "text-slate-400 bg-black" : "bg-[#EED55E]"
                  } -translate-x-8  font-bold rounded-xl px-10 py-3 mt-8`}
                >
                  Yearly
                </button>
              </div>
              <div className="flex justify-center items-center w-full">
                <img
                  src={`${stagging}/assets/pricingland.png`}
                  className="my-12 object-cover rounded-lg min-w-[65vw] h-[28rem] max-lg:h-[8rem] max-lg:px-5 max-lg:rounded-3xl max-xl:h-[20rem] 2xl:h-[30rem]"
                  alt=""
                />
              </div>
            </div>
          </section>

          <section className="flex flex-col max-lg:px-4 lg:grid grid-cols-3 gap-8 max-xl:gap-5 max-w-[67.5rem] m-auto">
            {allplans.map((n, index) => (
              <div
                className="border border-slate-200 text-center rounded-md p-5 h-[69rem] max-xl:h-[70rem]"
                style={{ backgroundColor: n.bgColor }}
              >
                {index === 2 ? (
                  <div className="relative">
                    {/* <div className="text-white w-full absolute top-5 left-1/2 -translate-x-1/2">
                      <p className="text-sm">Enterprise Plan</p>
                      <p className="font-bold text-xl">Request A Demo</p>
                    </div>
                    <img
                      src={`${stagging}/assets/price3.png`}
                      className="h-[17rem] w-full object-cover rounded-md"
                      alt=""
                    /> */}
                    <div className="h-[19rem]">
                      <div className="bg-[#EED55E] rounded-lg text-center p-4 mb-5">
                        <p className="font-bold text-[28px] py-3">
                          {n.planndame}
                        </p>
                        <p className="font-bold text-xl">
                          {/* {yearlytoggle
                            ? `$${Math.floor(
                                Number(Number(n.price)) * 12
                              )}/Month`
                            : `$${n.price}/Month`} */}
                        </p>
                      </div>
                      <div className="">
                        <p className="text-xs">
                          Take your business to the next level with this
                          comprehensive plan. It includes everything you need to
                          grow, from increased limits and advanced features to
                          seamless integrations and expert support.
                        </p>
                        {/* <p className="font-bold text-[.9rem]">
                          {n.orignalprice}
                        </p> */}
                      </div>
                      <img
                        src={`${stagging}/assets/greentick.png`}
                        className="mx-auto w-8 my-8"
                        alt=""
                      />
                      {/* <div className="text-sm">
                        <p className="">{n.text1}...</p>
                        <p className="">{n.text2}</p>
                      </div> */}
                    </div>
                  </div>
                ) : (
                  <div className="h-[19rem]">
                    <div className="bg-[#EED55E] rounded-lg text-center p-4 mb-5">
                      <p className="text-lg">{n.planndame}</p>
                      <p className="font-bold text-[28px]">
                        {yearlytoggle
                          ? `$${Math.floor(Number(Number(n.price)) * 12)}/Year`
                          : `$${n.price}/Month`}
                      </p>
                    </div>
                    <div className="">
                      <p className="text-xs">Original Price</p>
                      <p className="font-bold text-[15px] text-[#000000]">
                        {n.orignalprice}
                      </p>
                    </div>
                    <img
                      src={`${stagging}/assets/greentick.png`}
                      className="mx-auto w-8 my-8"
                      alt=""
                    />
                    <div className="text-base">
                      <p className="">{n.text1}</p>
                      <p className="">{n.text2}</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => {
                    setorderdata({
                      plan_id: n.planid,
                      price: yearlytoggle
                        ? Math.floor(Number(n.price)) * 12
                        : n.price,
                    });

                    if (index < 2) {
                      setShowPopup(true);
                    } else {
                      setcalendlyopen(true);
                    }
                  }}
                  className="text-white font-bold bg-black rounded-lg w-full py-6 mt-8 text-2xl max-xl:text-lg"
                >
                  {index < 2 ? "Get CodiBot" : "Get Quote"}
                </button>

                <div className="flex justify-center flex-col items-center w-full mt-10 leading-8">
                  <div>
                    {n.data.map((n) => (
                      <div className="flex items-center gap-3 m-2 text-start">
                        <img
                          src={`${stagging}/assets/tickcon.png`}
                          className="w-5"
                          alt=""
                        />
                        <p>{n}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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

export default PricingCSA
