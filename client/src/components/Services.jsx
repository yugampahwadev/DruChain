import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icons, subtitle }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shandow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icons}
    </div>
    <div className="ml-5 flex flex-1 flex-col">
      <h1 className="mt-2 text-white text-lg">{title}</h1>
      <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex w-full mf:flex-row flex-col justify-end items-center gradient-bg-services">
      <div className="flex-1 flex flex-col justify-center items-center mf:m-0 m-10">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl sm:text-5xl py-2">Services</h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icons={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain the privacy and quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best Exchange Rates"
          icons={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain the privacy and quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Transactions"
          icons={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain the privacy and quality of our products"
        />
      </div>
    </div>
  );
};

export default Services;
