import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ourvaluesLine1 = [
  {
    icon: <BsShieldFillCheck fontSize={23} className="text-white" />,
    title: "Security gurantee",
    details: "Security is guranteed. We always maintain privacy and maintain the quality of our products",
  },
  {
    icon: <BiSearchAlt fontSize={23} className="text-white" />,
    title:"Best exchange rates",
    details: "Accepts deposits via credit/debit card, bank transfer, and e-wallet, with full support for PayPal too"
  },
  {
    icon: <RiHeart2Fill fontSize={23} className="text-white" />,
    title: "Fastest transactions",
    details: " While transactions per second has been the go-to parameter for many to determine speed, it is not the most reliable",
  },
];

function Services() {
  return (
    <>
      <div className="px-[3rem] pt-[8.4375rem] pb-[5rem] z-1 items-center justify-center bg-[#27272e]">
        <h1 className="text-3xl sm:text-5xl text-white py-1">
          Services that we continue to improve
          <br />
        </h1>
        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base  pb-16">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
        <div className=" flex justify-between gap-x-[1.875rem]">
          {ourvaluesLine1.map((prop) => (
            <>
              <div className="designstartingupmovement px-[1.25rem] pt-[3.75rem] pb-[1.875rem] rounded-[1.875rem] group mb-[3.75rem]">
                <button className=" text-center w-10 h-10 rounded-full border-2 border-[#27272e] flex justify-center items-center group-hover:bg-[#5956e9] group-hover:transition_all group-hover:duration-[0.3s]">
                  {prop.icon}
                </button>
                <div className=" text-white text-[1.5em] mb-[1.875rem] ">
                  {prop.title}
                </div>
                <div className=" opacity-50 text-[1em] text-[#99a1aa] group-hover:text-[white] group-hover:opacity-[100] group-hover:transition_all group-hover:duration-[0.3s]">
                  {prop.details}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;

// const Services = () => (
//   <div className="flex w-full justify-center items-center gradient-bg-services">
//     <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
//       <div className="flex-1 flex flex-col justify-start items-start">
//         <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
//           Services that we
//           <br />
//           continue to improve
//         </h1>
//         <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
//           The best choice for buying and selling your crypto assets, with the
//           various super friendly services we offer
//         </p>
//       </div>

//       <div className="flex-1 flex flex-col justify-start items-center">
//         <ServiceCard
//           color="bg-[#2952E3]"
//           title="Security gurantee"
//           icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
//           subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
//         />
//         <ServiceCard
//           color="bg-[#8945F8]"
//           title="Best exchange rates"
//           icon={<BiSearchAlt fontSize={21} className="text-white" />}
//           subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
//         />
//         <ServiceCard
//           color="bg-[#F84550]"
//           title="Fastest transactions"
//           icon={<RiHeart2Fill fontSize={21} className="text-white" />}
//           subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
//         />
//       </div>
//     </div>
//   </div>
// );

// export default Services;
