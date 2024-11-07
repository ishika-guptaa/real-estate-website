import React from "react";
import aboutImg from "../assets/about.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";

const About = () => {

    return (
        <section id="about" className="max-padd-container py-16 xl:py-28 ">
            {/* container */}
            <div className="flex flex-col xl:flex-row gap-10 ">
                {/* left side */}
                <div className="flex-1 relative">
                    <img
                        src={aboutImg}
                        alt=""
                        className="rounded-3xl rounded-tr-[155px] w-[488px]"
                    />
                    <div className="bg-white absolute bottom-16 left-16 max-w-xs p-4 rounded-lg flexCenter flex-col">
                        <span className="relative bottom-8 p-3 shadow-md bg-white h-12 w-12  flex items-center rounded-full">
                            <RiDoubleQuotesL className="text-2xl" />{" "}
                        </span>
                        <p className="text-center relative bottom-3">
                        Begin your journey to finding the perfect space with us.
                        </p>
                    </div>
                </div>
                {/* right side */}
                <div className="flex-1 flex justify-center flex-col
                ">
                    <span className="medium-18">Unveiling Our Journey</span>
                    <h2 className="h2">Our Commitment Crafting Extraordinary Real Estate Experiences</h2>
                    <p className="py-5">
                    We deliver seamless, personalized real estate services with expertise and integrity. Your goals are our priority as we guide you through every step of your journey. From tailored property recommendations to a transparent and efficient process, we strive to turn your real estate aspirations into reality.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
