import React from "react";

import { Img, Text } from "components";

const Logo2Page = () => {
  return (
    <>
      <div className="bg-gray-300 font-inter h-[982px] mx-auto p-[99px] md:px-10 sm:px-5 relative w-full">
        <Img
          className="h-[784px] m-auto max-w-[958px] w-full"
          src="images/img_screen.svg"
          alt="screen"
        />
        <div className="absolute flex md:flex-col flex-row gap-[13px] h-max inset-[0] items-start justify-center m-auto w-[52%]">
          <Img
            className="h-[252px] w-[253px]"
            src="images/img_icon-Clogo.svg"
            alt="logo"
          />
          <Text
            className="md:mt-0 mt-[70px] md:text-5xl text-[100px] text-gray-800_01"
            size="txtInterBold100"
          >
            appuccino
          </Text>
        </div>
      </div>
    </>
  );
};

export default Logo2Page;
