import React from "react";

const Services = () => {
  return (
    <div
      className="relative bg-center bg-cover"
      style={{ backgroundImage: "url('images/Book_1.webp')", paddingTop: "43%" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="text-white font-bold md:text-3xl lg:text-4xl text-center sm:hidden md:block">
          Our Services
        </div>
        <div className="text-white font-bold md:text-xl lg:text-xl text-center mt-8 sm:hidden md:block">
          The more that you read, the more things you will know. The more that
          you learn, the more places you'll go.
        </div>
      </div>
    </div>
  );
};

export default Services;
