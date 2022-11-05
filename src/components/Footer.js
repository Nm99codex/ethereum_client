import React from "react";
import { services, enterprise, Learn } from "../utils//footerdata";
import logo from "../Assets/ethereumlogo.png";

function Footer() {
  return (
    <>
      <div className="pt-[5.5625rem] pb-[4.9375rem] px-[5.3125rem] bg-[#141b2f] flex justify-between flex-wrap gap-x-[0.9375rem]">
        <div className=" flex flex-col justify-between">
          <img src={logo} alt="logo" className=" w-[9.375rem]" />
          <div>
            <div className="grid gap-y-[1.875rem] gap-x-[1.25rem] grid-cols-4 text-xl">
              <i class="fa-brands fa-behance text-[1.125rem] bg-[#a6d1ed] p-1 pt-[7px] pl-[6px] rounded-md text-black hover:text-white hover:bg-blue-600 transition-all duration-300"></i>
              <i class="fa-brands fa-twitter text-[1.125rem] bg-[#a6d1ed] p-1 pt-[7px] pl-[6px] rounded-md text-black hover:text-white hover:bg-blue-600 transition-all duration-300"></i>
              <i class="fa-brands fa-google-plus text-[1.125rem] bg-[#a6d1ed] p-1 pt-[7px] pl-[6px] rounded-md text-black hover:text-white hover:bg-red-600 transition-all duration-300"></i>
              <i class="fa-brands fa-dribbble text-[1.125rem] bg-[#a6d1ed] p-1 pt-[7px] pl-[6px] rounded-md text-black hover:text-white hover:bg-[#ea4c89] transition-all duration-300"></i>
              <i class="fa-brands fa-facebook text-[1.125rem] bg-[#a6d1ed] p-1 pt-[7px] pl-[6px] rounded-md text-black hover:text-white hover:bg-red-600 transition-all duration-300"></i>
            </div>
          </div>
        </div>

        <div className="">
          <div className="font-[400] mb-[1.3125rem] text-[white] text-[1.5em]">
            Use Ethereum
          </div>
          {services.map((elem, id) => (
            <>
              <div className="text-[1.125em] text-[#69798d] mb-[0.5rem] hover:text-[#ff7cb0]">
                {elem.text}
              </div>
            </>
          ))}
        </div>

        <div className="">
          <div className="font-[400] mb-[1.3125rem] text-[white] text-[1.5em]">
            Enterprise
          </div>
          {enterprise.map((elem, id) => (
            <>
              <div className="text-[1.125em] text-[#69798d] mb-[0.5rem] hover:text-[#ff7cb0]">
                  {elem.text}
              </div>
            </>
          ))}
        </div>

        <div className="">
          <div className="font-[400] mb-[1.3125rem] text-[white] text-[1.5em]">
            Learn
          </div>
          {Learn.map((elem, id) => (
            <>
              <div className="text-[1.125em] text-[#69798d] mb-[0.5rem] hover:text-[#ff7cb0]">
                  {elem.text}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;
