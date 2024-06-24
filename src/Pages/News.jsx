import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';

function News() {

    return (
        <section id='overview' className='mt-20 max-lg:mt-16 pb-5'>

            <div className='xl:px-32 px-20 max-lg:px-4'>
                <div className='lg:flex items-start gap-16 max-xl:gap-10'>
                    <p className='xl:text-[2.6rem] max-xl:w-[270%] lg:text-[2rem] max-lg:w-full max-lg:mb-5 max-lg:text-[1.8rem] w-[90%] text-[2.2rem] xl:leading-[3.5rem] leading-[2.9rem] max-lg:leading-9'>AI becomes latest frontier in China-US race for <span className='text-[#33B87C] font-bold'>Africa</span></p>
                    <p className='xl:w-[200%]'>OpenAI just registered a new web address with the word “search” in it — a not-so-subtle hint that it’s getting ready to release its own search engine. And researchers are using AI to help decode whale languages.</p>
                </div>
                <div className='mt-24 max-lg:mt-14 flex justify-center items-center'>
                    <img src="/assets/aboutimg.png" className='max-lg:h-[11rem]' alt="" />
                </div>
            </div>
            <div className='xl:px-32 px-20 max-lg:px-4 my-10'>
                <p>Right now, most of us use AI to get information or ideas. If we’re planning a trip and want to know where to go, AI is good at giving us plenty of options. But at the end of the day, we’re the ones who take the final step: Picking the destination, then booking the flight, hotel, and car.

But what if AI could do all of that for you? Would you trust it to make those decisions on your behalf? That’s the dilemma researchers at DeepMind contemplated last week in a 200-page report about how advanced AI assistants could one day reshape the world.

They didn’t mince words: If AI agents become a reality, they could touch every aspect of our lives — from the ways we work to how we communicate with each other — “ultimately influencing who we want to be and become.”

We’re already headed in that direction: Microsoft’s Copilot can work through complicated coding challenges. It will be able to send and track client invoices and automatically rewrite code for apps as soon as next month. Alphabet is working on AI agents that could navigate the internet. New models like Devin, meanwhile, claim to perform even more complicated tasks, like building custom websites from scratch.

Here’s where we get into tricky ethical territory: If models start to act for us, we’ll have to figure out who’s responsible when they make a mistake or break a societal norm. An AI might make a decision to help itself, even if it hurts everyone else. It could clash — or team up with — other models it finds out in the world. And it would inevitably learn a lot about you, raising privacy concerns.</p>
            </div>
        </section>
    )
}

export default News
