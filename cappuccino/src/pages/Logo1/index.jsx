import React from "react";

import { Img } from "components";

const Logo1Page = () => {
  return (
    <>
      <div className="bg-gray-300 h-[982px] mx-auto p-[99px] md:px-10 sm:px-5 relative w-full">
        <Img
          className="h-[784px] m-auto max-w-[958px] w-full"
          src="images/img_screen.svg"
          alt="screen"
        />
        <Img
          className="absolute h-[175px] inset-[0] justify-center m-auto w-[175px]"
          src="images/img_icon-Clogo.svg"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Logo1Page;
