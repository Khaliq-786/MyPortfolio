import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          {/* Text */}
          <div>
            <h1>
              Khaliq <span>Hussain</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Competitve Coder",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Cybersecurity researcher",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus commodi illo nisi doloribus. Unde enim fugiat eaque
              neque quae tempore!
            </p>
            <button className="btn btn-lg">Contact me</button>
            <a href="/" className="text-gradient btn-link">
              My Portfolio
            </a>
          </div>
          {/* Socials */}
          <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
            <a href="/">
              <FaEnvelope />
            </a>
            <a href="/">
              <FaGithub />
            </a>
            <a href="/">
              <FaLinkedin />
            </a>
          </div>
          {/* Image */}
          <div>
            <img className="h-56 ml-10" src={Image} alt="My Pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
