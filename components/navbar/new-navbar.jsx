import React, { useState,useEffect } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import logo from "../../assets/svg/latest-logo.svg";
import { useRouter } from "next/router";
import Image from "next/image";
import project from "../../assets/svg/project.svg";
import blog from "../../assets/png/blog-png.png";
import cases from "../../assets/svg/cases.svg";
import download from "../../assets/png/download-png.png";
import Link from "next/link";
import { ArrowDown, BackIcon, CancelIcon, SuccessIcon } from "../../assets/svg";
import emuration from "../../assets/svg/emuration.svg";
import reporting from "../../assets/svg/reporting.svg";
import learning from "../../assets/svg/wecollect-learning.svg";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import SearchSelect from "../selects/search-select";
const list = [
  { name: "Brand visibility", id: 0 },
  { name: "Supply chain monitoring & project management", id: 0 },
  { name: "Inventory management", id: 0 },
  { name: "On-shelf product monitoring", id: 0 },
  { name: "Outlet enumeration", id: 0 },
  { name: "Asset tracking & management", id: 0 },
  { name: "Financial inclusion", id: 0 },
  { name: "Product price monitoring project", id: 0 },
  { name: "Population Enumeration", id: 0 },
  { name: "Demography Analysis", id: 0 },
];
const NewNavbar = () => {
  const router = useRouter();
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [rotateAbout, setRotateAbout] = useState(false);
  const [rotateProduct, setRotateProduct] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [agentPresent, setAgentPresent] = useState(0);
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [records, setRecords] = useState();
  const [agents, setAgents] = useState();
  const [location, setLocation] = useState();
  const [phone, setPhone] = useState("");
  const [useCase, setUseCase] = useState({ name: "", id: 0 });
  const [date, setDate] = useState("");
 const validateEmail = (email) => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email regex
   return emailRegex.test(email);
 };

 // Handle email change
 const handleEmailChange = (e) => {
   const value = e.target.value;
   setEmail(value);

   // Validate the email and set error if invalid
   if (value && !validateEmail(value)) {
     setError("Please enter a valid email address");
   } else {
     setError("");
   }
 };
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      noOfRecords: records,
      noOfLocation: location,
      description: description,
      email: email,
      phone: phone, // Client's phone number
      useCase: useCase?.name, // Specific use case for the data
      personalAgent: agentPresent === 2 ? true : false,
      noOfAgents: agents,
      startDate: date,
    };
    try {
      const response = await axios.post(
        "https://api.wecollect.tech/quote",
        data
      );
        await axios.post("/api/get-quote-slack", {
          records: records ?? 0,
          email: email,
          phone: phone,
          location: location ?? 0,
          usecase: useCase?.name,
          agentPresent: agentPresent === 2 ? true : false,
          date: date,
          records: records ?? 0,
          description: description,
          agents:agents ?? 0
        });
        console.log("Notification sent to Slack!");

      if (response.status === 200) {
        setLoading(false);
        setRecords("");
        setLocation("");
        setDate("");
        setAgents("");
        setDescription("");
        setPhone("");
        setEmail("");
        setUseCase({name:"", id:0});
        setCurrent(2);
      }
    } catch (e) {
      throw new Error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open === false || current === 0) {
        setLoading(false);
        setRecords("");
        setLocation("");
        setDate("");
        setAgents("");
        setDescription("");
        setPhone("");
        setEmail("");
        setUseCase({ name: "", id: 0 });
        setCurrent(0);
   }
  }, [open,current])
  
  return (
    <>
      <div
        className={`bg-[#F5F4FB] fixed top-0 right-0 left-0 z-high w-full h-[68px] lg:flex items-center hidden rounded-b-[50px] font-sans `}
      >
        <ContainerLayout>
          <div className="w-full flex items-center justify-between relative  h-[68px]">
            <div>
              <span className="cursor-pointer" onClick={() => router.push("/")}>
                {" "}
                <Image src={logo} alt="logo" />{" "}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div
                onMouseEnter={() => {
                  setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
                  setIsProductDropdownOpen(false);
                  setRotateAbout(!rotateAbout);
                  setRotateProduct(false);
                }}
                className="flex items-center gap-2 cursor-pointer hover:bg-[#E3D5FF] px-4 h-[50px] rounded-[50px] text-ash hover:text-mainBlue text-[14px] 2xl:text-[16px]"
              >
                <p className=" text-[14px] 2xl:text-[16px] font-semibold ">
                  About Us
                </p>
                <span
                  className={
                    rotateAbout
                      ? "rotate-180 duration-500 ease-in-out"
                      : "rotate-0 duration-500 ease-in-out"
                  }
                >
                  <ArrowDown />
                </span>
              </div>
              <div
                onMouseEnter={() => {
                  setIsProductDropdownOpen(!isProductDropdownOpen);
                  setIsAboutUsDropdownOpen(false);
                  setRotateProduct(!rotateProduct);
                  setRotateAbout(false);
                }}
                className="flex items-center gap-2 cursor-pointer hover:bg-[#E3D5FF] px-4 h-[50px] rounded-[50px] hover:text-mainBlue text-ash"
              >
                <p className=" text-[14px] 2xl:text-[16px] font-semibold ">
                  Products
                </p>
                <span
                  className={
                    rotateProduct
                      ? "rotate-180 duration-500 ease-in-out"
                      : "rotate-0 duration-500 ease-in-out"
                  }
                >
                  <ArrowDown />
                </span>
              </div>
              <Link
                href="/contact-us"
                className="rounded-[50px] gap-2 h-[50px] hover:bg-[#E3D5FF] flex items-center px-4 text-ash hover:text-mainBlue"
              >
                <p className=" text-[14px] 2xl:text-[16px] font-semibold ">
                  Contact Us
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 ">
                <Link
                  href={"/coming-soon"}
                  className="text-mainBlue h-[50px] hover:bg-[#E3D5FF] flex items-center lg:text-[16px] font-semibold px-4 py-2 rounded-[50px] cursor-pointer "
                >
                  Sign in
                </Link>
              </div>
              <button
                className="bg-mainBlue hover:bg-[#E3D5FF] h-[50px] font-semibold flex items-center text-white hover:text-mainBlue rounded-[50px] px-5 cursor-pointer "
                onClick={() => setOpen(true)}
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* AboutUs DropDown */}
          {isAboutUsDropdownOpen && (
            <div
              className="w-[900px] flex flex-col left-0 2xl:left-0 mx-auto absolute right-0 nav-layer rounded-b-[30px] bg-[#F9F6FF] py-2 px-3 transition-all ease-in-out duration-1000 "
              onMouseLeave={() => {
                setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
                setIsProductDropdownOpen(false);
                setRotateAbout(!rotateAbout);
                setRotateProduct(false);
              }}
            >
              <div className="w-full     rounded-b-[30px]  grid grid-cols-2 gap-8">
                <div
                  onClick={() => router.push("/our-project")}
                  className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
                >
                  <Image
                    src={project}
                    alt="project"
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="ml-[21px]">
                    <p className="text-[#555555] text-[16px] font-semibold">
                      Projects
                    </p>
                    <p className="text-[#555555] text-[14px] font-medium">
                      Check out our projects
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => router.push("/applicable-cases")}
                  className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
                >
                  <Image
                    src={cases}
                    alt="cases"
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="ml-[21px]">
                    <p className="text-[#555555] text-[16px] font-semibold">
                      Cases
                    </p>
                    <p className="text-[#555555] text-[14px] font-medium">
                      Project examples
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => router.push("/blog")}
                  className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
                >
                  <Image
                    src={blog}
                    alt="blog"
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="ml-[21px]">
                    <p className="text-[#555555] text-[16px] font-semibold">
                      Blog
                    </p>
                    <p className="text-[#555555] text-[14px] font-medium">
                      Learn about our process
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => router.push("/download")}
                  className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
                >
                  <Image
                    src={download}
                    alt="download"
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="ml-[21px]">
                    <p className="text-[#555555] text-[16px] font-semibold">
                      Download app
                    </p>
                    <p className="text-[#555555] text-[14px] font-medium">
                      Start collecting data
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="w-full grid grid-cols-2">
              <div className="shadow-one w-full h-4 bg-transparent"></div>
              <div className="shadow-one w-full h-4 bg-transparent"></div>
              </div> */}
            </div>
          )}

          {isProductDropdownOpen && (
            <div
              className="w-[35rem] product-shadow  bg-[#F9F6FF] absolute right-0 left-0 mx-auto p-2 rounded-b-[30px]"
              onMouseLeave={() => {
                setIsProductDropdownOpen(!isProductDropdownOpen);
                setIsAboutUsDropdownOpen(false);
                setRotateProduct(!rotateProduct);
                setRotateAbout(false);
              }}
            >
              <div
                onClick={() => router.push("/smart-data-collection")}
                className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
              >
                <Image src={emuration} alt="emuration" />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Smart Data Collection App
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Collect data anywhere and anytime
                  </p>
                </div>
              </div>

              <div
                onClick={() => router.push("/project-management-dashboard")}
                className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
              >
                <Image src={reporting} alt="reporting" />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Project Management Tool
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Track and monitor your project
                  </p>
                </div>
              </div>
              <div
                onClick={() => router.push("/coming-soon")}
                className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
              >
                <Image src={learning} alt="reporting" />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    WeCollect Learning
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Get training on data and analytics
                  </p>
                </div>
              </div>
            </div>
          )}
        </ContainerLayout>
      </div>
      {open && (
        <div className="w-full fixed z-modal inset-0 overlay-shadow flex items-center justify-center bg-white h-screen px-2 ">
          {current === 0 && (
            <div className="w-full max-h-[500px] lg:max-h-[750px] flow-hide bg-white rounded-lg lg:rounded-[50px] lg:max-w-lg   py-8 flex flex-col relative ">
              <div className="quote-shadow absolute -top-[220px] left-0 z-0 "></div>
              {/* header session */}
              <div className="w-full flex items-center justify-center relative  px-4 z-10  ">
                <p></p>
                <h1 className="text-2xl lg:text-3xl text-customBlack font-bold text-center font-serif">
                  GET A QUOTE
                </h1>
                <span
                  className="cursor-pointer absolute right-6 top-0"
                  onClick={() => {
                    setOpen(false);
                    setCurrent(0);
                  }}
                >
                  <CancelIcon />
                </span>
              </div>

              {/* end of session */}
              <p className="text-center text-[#555] text-[18px]  h-[35px] px-2 py-1 mt-1 w-fit mx-auto  z-10 font-sans">
                Personalized quote for your project ✨
              </p>

              <div className="w-full border-t border-t-[#999999] border-opacity-10 mt-6">
                <div className="w-full lg:w-10/12 mx-auto flex flex-col pt-10 ">
                  <p className="font-sans text-customBlack font-medium text-[16px]">
                    Select one that applies to you:
                  </p>
                  <div
                    className={`flex justify-between items-center h-[50px] hover:bg-mainBlue hover:text-white cursor-pointer rounded-[8px] mt-5 px-3 lg:px-5  ${
                      agentPresent === 1
                        ? "bg-mainBlue text-white"
                        : "bg-mainBlue bg-opacity-5 text-customBlack"
                    } `}
                    onClick={() => {
                      setAgentPresent(1);
                      setCurrent(1);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={agentPresent === 1}
                        className="accent-white w-6 h-6"
                      />
                      <p className="text-[16px] font-medium font-sans">
                        I don’t have agents for this project
                      </p>
                    </div>
                    <span className="text-xl">
                      <IoIosArrowForward />
                    </span>
                  </div>
                  <div
                    className={`flex justify-between items-center hover:bg-mainBlue hover:text-white h-[50px] cursor-pointer rounded-[8px] mt-5 px-3 lg:px-5  ${
                      agentPresent === 2
                        ? "bg-mainBlue text-white"
                        : "bg-mainBlue bg-opacity-5 text-customBlack"
                    } `}
                    onClick={() => {
                      setAgentPresent(2);
                      setCurrent(1);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={agentPresent === 2}
                        className="accent-white w-6 h-6"
                      />
                      <p className="text-[16px] font-medium font-sans">
                        I have agents for this project
                      </p>
                    </div>
                    <span className="text-xl">
                      <IoIosArrowForward />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {current === 2 && (
            <div className="w-full   flow-hide bg-white rounded-lg lg:rounded-[50px] lg:max-w-[746px]   py-8 flex flex-col relative ">
              <div className="quote-shadow absolute -top-[220px] left-0 z-0 "></div>
              {/* header session */}
              <div className="w-full flex justify-end px-4 ">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    setAgentPresent(0);
                    setCurrent(0);
                  }}
                >
                  <CancelIcon />
                </span>
              </div>
              <div className="w-full flex-col items-center px-4 lg:px-8 lg:w-11/12 mx-auto xl:w-10/12  ">
                <span className="mx-auto flex justify-center">
                  <SuccessIcon />
                </span>
                <p className="text-center text-[32px] leading-[35px] text-customBlack mt-6 font-bold font-sans">
                  Requested !
                </p>
                <p className="text-center text-ash text-[14px] lg:text-[18px] leading-[35px] font-medium mt-4 font-sans">
                  You have successfully requested a quote for your project.
                </p>
                <p className="text-center text-ash text-[14px] lg:text-[18px] leading-[35px] font-medium font-sans">
                  We will respond via your submitted email soon. Thank you.
                </p>
                <button
                  className="mt-8 lg:mt-16 bg-mainBlue bg-opacity-10 h-[50px] rounded-[50px] w-full max-w-[427px] mx-auto flex items-center justify-center text-[16px] text-mainBlue font-semibold "
                  onClick={() => {
                    setOpen(false);
                    setAgentPresent(0);
                    setCurrent(0);
                  }}
                >
                  Okay
                </button>
              </div>

              {/* end of session */}
            </div>
          )}
          {current === 1 && (
            <div className="w-full max-h-[500px] lg:max-h-[750px] flow-hide bg-white rounded-lg lg:rounded-[50px] lg:max-w-[800px] xl:max-w-[900px] lg:p-12 xl:p-16 px-4 py-8 flex flex-col relative ">
              <div className="quote-shadow absolute -top-[220px] left-0 z-0 "></div>
              {/* header session */}
              <div className="w-full flex items-center justify-center z-10 relative">
                <h1 className="text-2xl lg:text-3xl text-customBlack font-bold font-serif">
                  GET A QUOTE
                </h1>
                <span
                  className="cursor-pointer absolute left-4 top-0"
                  onClick={() => {
                    setOpen(true);
                    setCurrent(0);
                    setAgentPresent(0);
                  }}
                >
                  <BackIcon />
                </span>
                <span
                  className="cursor-pointer absolute right-4 top-0"
                  onClick={() => {
                    setOpen(false);
                    setCurrent(0);
                    setAgentPresent(0);
                    setLoading(false);
                  }}
                >
                  <CancelIcon />
                </span>
              </div>

              {/* end of session */}
              <p className="text-center z-10 text-[#555] text-[18px]   px-2 py-1 mt-1 w-fit font-sans mx-auto rounded-[20px] ">
                Personalized quote for your project ✨
              </p>

              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-9 mt-11 z-10">
                {/* start */}
                {agentPresent === 1 && (
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className=" text-[#555] text-[14px]  font-sans  lg:text-[16px] mb-1"
                    >
                      Number of Records
                    </label>
                    <input
                      type="number"
                      className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 "
                      placeholder="e.g 10"
                      value={records}
                      onChange={(e) => setRecords(e.target.value)}
                    />
                  </div>
                )}
                {agentPresent === 2 && (
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className=" text-[#555] text-[14px]  font-sans  lg:text-[16px] mb-1"
                    >
                      Number of Agents
                    </label>
                    <input
                      type="number"
                      className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 "
                      placeholder="e.g 10"
                      value={agents}
                      onChange={(e) => setAgents(e.target.value)}
                    />
                  </div>
                )}
                {/* end */}
                {/* start */}
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className=" text-[#555] font-sans  text-[14px] lg:text-[16px] mb-1"
                  >
                    Number of Locations
                  </label>
                  <input
                    type="number"
                    className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 "
                    placeholder="e.g 10"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                {/* end */}

                {/* start */}
               
                
             
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className=" text-[#555] font-sans  text-[14px] lg:text-[16px] mb-1"
                    >
                      Project Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 font-sans "
                      placeholder="select date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
               

                {/* end */}
                {/* start */}
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className=" text-[#555] font-sans  text-[14px] lg:text-[16px] mb-1"
                  >
                    Use Cases
                  </label>
                  {/* <input
                    type="text"
                    className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 "
                    placeholder="Enter a use case"
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    /> */}
                  <SearchSelect
                    selected={useCase}
                    setSelected={setUseCase}
                    options={list}
                  />
                </div>
                {/* end */}
                {/* start */}
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className=" text-[#555]  font-sans text-[14px] lg:text-[16px] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full border-[2px] font-sans outline-none h-[50px] rounded-[50px] px-4 
                      ${
            error
              ? "border-red-500 bg-red-100"
              : "border-white bg-mainBlue bg-opacity-5"
          }
          `}
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {error && (
                    <span className="text-red-500 text-[12px] mt-1 font-sans">
                      {error}
                    </span>
                  )}
                </div>
                {/* end */}
                {/* start */}
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className=" text-[#555]  font-sans text-[14px] lg:text-[16px] mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 font-sans  outline-none h-[50px] rounded-[50px] px-4 "
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {/* end */}
          <div className="flex flex-col">
            <label
              htmlFor=""
              className=" text-[#555] font-sans  text-[14px] lg:text-[16px] mb-1"
            >
              Project Description
            </label>
            <textarea
              type="text"
              className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 font-sans  outline-none  rounded-md px-4 pt-3 min-h-[100px] "
              placeholder="type description ... "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
                <div>

                </div>
                {/* start */}
                <div className="flex flex-col">
                  <button
                    className="w-full font-semibold text-[14px] lg:text-[16px] flex bg-mainBlue text-white h-[50px] items-center justify-center font-sans  rounded-[50px] cursor-pointer"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Request Quote"}
                  </button>
                  <p className="text-left  font-sans  text-[#9999FF] mt-3 font-medium text-xs">
                    By requesting a quote you are agreeing to our terms and
                    conditions
                  </p>
                </div>
                {/* end */}
                {/* start */}
                <div className="flex flex-col">
                  <div className=" text-customBlack  font-sans  mt-3 font-medium text-[14px] ">
                    Don’t have account with us yet?
                    <Link
                      href={"/home"}
                      className="text-mainBlue font-sans  font-semibold cursor-pointer ml-1"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
                {/* end */}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NewNavbar;
