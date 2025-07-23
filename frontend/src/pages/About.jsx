 import React from 'react';
import aboutImg from "../assets/About-blog.avif"

const About = () => {
  return (
    <div className=" min-h-screen pt-28 px-4 md:px-0 mb-7 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="md:text-5xl text-4xl font-extrabold  mb-4">
            About TechScribe
          </h1>
          <p className="text-lg ">
            A place to share thoughts, inspire minds, and grow through tech.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={aboutImg}
            alt="Blog Illustration"
            className="w-full h-72 object-cover rounded-2xl shadow-md"
          />
          <div>
            <p className=" text-lg mb-4">
              Welcome to TechScribe — your hub for insightful blogs, tutorials, and the latest in technology. 
              Whether you're a developer, designer, enthusiast, or curious learner, this platform is designed for you. 
              We built TechScribe to foster a space where readers and writers connect through knowledge. 
              From real-world coding tips to deep dives into emerging trends, TechScribe empowers individuals to 
              write freely, read deeply, and grow collectively.
            </p>
            <p className=" text-lg mb-4">
              Our mission is simple:
              To enable tech storytellers to share ideas, spark innovation, and build a thriving community.
              Thank you for being a part of TechScribe — where every line written can inspire the 
            </p>
            <p className=" text-lg">
              Thank you for being a part of TechScribe — where every line written can inspire the next breakthrough.
            </p>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl italic text-gray-500">
            "Words are powerful. Use them to inspire."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About; 