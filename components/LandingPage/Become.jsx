import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ContainerLayout from "../../layouts/ContainerLayout"
import Image from "next/image";
import happy from "../../assets/png/happy-girl.png"
import ReuseModal from "../../components/modals/ReuseModal"
import { Cancel } from "../../assets/svg";
import axios from "axios";

const initialValues = {
  name: "", 
  email: "", 
  gender: "male", 
  age: "", 
  phonenumber: "", 
  academicLevel: "",
  school: "",
  linkedIn: "",
  twitter: "",
  pastVolunteeredAt: "",
  agreeToTerms: false
};

const Become = () => {
  const [open, setOpen] = useState(false);
  return (
    <ContainerLayout>
      <div className="flex flex-col relative mt-[120px]  ">
        <div className="w-full bg-[#4747d626] min-h-[200px] h-full rounded-[30px] hidden lg:grid grid-cols-2 my-12 overflow-x-hidden  ">
          <div className="w-full lg:pl-12 xl:pl-[60px] flex flex-col pt-[10px] pb-5">
            <h1 className="max-w-[639px] text-[#333] font-bold text-[40px]">
              Become WeCollect campus ambasador
            </h1>
            <button
              className="bg-[#4747D6] text-white text-xl py-[10px] px-5 rounded-[30px] font-bold mt-8 w-fit"
              onClick={() => setOpen(!open)}
            >
              Apply now
            </button>
          </div>
          {/* second part */}
          <div className="w-full flex justify-end relative ">
            <div className="w-[555px]  h-full -mr-[100px] bg-[#333] rounded-[200px]"></div>
          </div>
          {/* end of second part */}
        </div>
        <div className="absolute  right-[70px] top-[-70px] hidden lg:flex">
          <Image src={happy} alt="happy" className="h-[349px]" />
        </div>
        {/* mobile session */}
        <div className="flex flex-col lg:hidden bg-[#4747d626] rounded-[30px] mt-[32px] mb-[74px]">
          <div className="absolute  right-0 left-0 top-[-110px] flex lg:hidden justify-center">
            <Image src={happy} alt="happy" className="h-[256px] w-auto" />
          </div>
          <div className="h-[160px] w-full overflow-y-hidden ">
            <div className="bg-[#333] w-full h-[180px] -mt-16 rounded-[200px]"></div>
          </div>
          <div className="flex flex-col pt-4 pb-11 px-4">
            <h1 className=" text-[#333] font-bold text-2xl">
              Become WeCollect campus ambasador
            </h1>
            <button
              className="bg-[#4747D6] text-white text-base py-[10px] px-5 rounded-[30px] font-bold mt-8 w-fit border-none outline-none"
              onClick={() => setOpen(!open)}
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
      <ReuseModal open={open} setOpen={setOpen}>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            gender: Yup.string().required("Gender is required"),
            age: Yup.number().required("Age is required").positive().integer(),
            phonenumber: Yup.string()
              .required("Phonenumber is required")
              .min(
                11,
                "Please ensure your phonenumber is eleven characters and starts with a zero"
              )
              .max(
                11,
                "Please ensure your phonenumber is eleven characters and starts with a zero"
              )
              // eslint-disable-next-line func-names
              .test("isValid", "Invalid phonenumber", function (value) {
                if (value === undefined) return false;
                return /(^0)(7|8|9){1}(0|1){1}[0-9]{8}/.test(
                  value.trim().replace(/\s/g, "")
                );
              }),
            academicLevel: Yup.string().required("Academic level is required"),
            school: Yup.string().required("Please input your institution"),
            linkedIn: Yup.string(),
            twitter: Yup.string(),
            pastVolunteeredAt: Yup.string(),
            agreeToTerms: Yup.boolean().required()
          })}  
          onSubmit={async (values) => {
            try {
              const response = await axios.post("http://localhost:5002/createAmbassador/", {
                name: values.name, 
                email: values.email, 
                gender: values.gender, 
                age: values.age, 
                phonenumber: values.phonenumber, 
                studentInfo: {
                  academicLevel: values.academicLevel,
                  school: values.school,
                  linkedIn: values.linkedIn,
                  twitter: values.twitter,
                  pastVolunteeredAt: values.pastVolunteeredAt,
                }
              });

              if(response.status === 200) {
                console.log(response.data);
              }
            } catch (e) {
              throw new Error(e);
            }
          }}
        >
          {
            ({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              touched,
              isValid
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="w-full bg-white max-h-[70vh] overflow-y-scroll pb-5">
                  <div className="flex justify-end pr-4 ">
                    <span className="cursor-pointer" onClick={() => setOpen(false)}>
                      <Cancel />
                    </span>
                  </div>
                  <div className="w-full flex flex-col xl:w-10/12 mx-auto text-[#333]">
                    <h1 className="lg:text-[36px] text-[#333] font-bold text-xl">
                      Campus ambassador registration
                    </h1>
                    {/* box session */}
                    <div className="w-full bg-[#EDEDFB] flex flex-col py-5 rounded-[10px] mt-4 px-8 lg:px-12">
                      <h1 className="text-sm lg:text-base text-[#333] font-semibold lg:-ml-4 mb-[14px]">
                        Before you continue, kindly make sure that you,
                      </h1>
                      <ul className="list-disc flex flex-col space-y-[10px] font-[500] ">
                        <li className="text-sm lg:text-base">
                          Lorem ipsum dolor sit amet consectetur. Magna porttitor diam.
                        </li>
                        <li className="text-sm lg:text-base">
                          Lorem ipsum dolor sit amet consectetur. Magna porttitor diam.
                        </li>
                        <li className="text-sm lg:text-base">
                          Lorem ipsum dolor sit amet consectetur. Magna porttitor diam.
                        </li>
                      </ul>
                    </div>
                    {/* end of box session */}
                    {/* form session */}
                    <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                      {/* single input */}
                      <div className="flex flex-col">
                        <label className="text-[#333] text-sm lg:text-base font-semibold">
                          Full name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                          placeholder="Enter full name"
                        />
                      </div>
                      {/* end of single input */}
                      {/* single input */}
                      <div className="flex flex-col">
                        <label className="text-[#333] text-sm lg:text-base font-semibold">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                          placeholder="enter email"
                        />
                      </div>
                      {/* end of single input */}
                      {/* single input */}
                      <div className="flex flex-col">
                        <label className="text-[#333] text-sm lg:text-base font-semibold">
                          Gender
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="mt-2 block w-full py-2 px-3 border h-[42px]  bg-white rounded-md shadow-sm focus:outline-none   focus:border-[#333] border-opacity-30 sm:text-sm "
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      {/* end of single input */}
                      {/* single input */}
                      <div className="flex flex-col">
                        <label className="text-[#333] text-sm lg:text-base font-semibold">
                          Age
                        </label>
                        <input
                          id="age"
                          name="age"
                          type="number"
                          value={values.age}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                          placeholder="Enter age"
                        />
                      </div>
                      {/* end of single input */}
                      {/* single input */}
                      <div className="flex flex-col">
                        <label className="text-[#333] text-sm lg:text-base font-semibold">
                          Phone number
                        </label>
                        <input
                          id="phonenumber"
                          name="phonenumber"
                          type="tel"
                          value={values.phonenumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                          placeholder="enter phone number"
                        />
                      </div>
                      {/* end of single input */}
                      {/* single input */}
                      <div className="flex flex-col">
                        <label className="text-[#333] text-sm lg:text-base font-semibold">
                          Cuurent Academic level
                        </label>
                        <input
                          id="academicLevel"
                          name="academicLevel"
                          type="text"
                          required
                          value={values.academicLevel}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                          placeholder="Academic level"
                        />
                      </div>
                      {/* end of single input */}
                      {/* single input */}
                      <div className="flex flex-col">
                        <label className="text-[#333] text-sm lg:text-base font-semibold">
                          Curent School of study
                        </label>
                        <input
                          id="school"
                          name="school"
                          type="text"
                          required
                          value={values.school}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                          placeholder="School of study"
                        />
                      </div>
                      {/* end of single input */}
                      {/* single input */}
                      <div className="flex flex-col">
                        <label className="text-[#333] text-sm lg:text-base font-semibold">
                          Where have you volunteered before?
                        </label>
                        <input
                          id="pastVolunteeredAt"
                          name="pastVolunteeredAt"
                          type="text"
                          value={values.pastVolunteeredAt}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                          placeholder="enter past volunteering details"
                        />
                      </div>
                      {/* end of single input */}
                      {/* single input */}
                      <div className="flex flex-col">
                        <label className="text-[#333] text-sm lg:text-base font-semibold">
                          LinkedIn profile link
                        </label>
                        <input
                          id="linkedIn"
                          name="linkedIn"
                          type="text"
                          value={values.linkedIn}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                          placeholder="Eg:linkedin.com"
                        />
                      </div>
                      {/* end of single input */}
                      {/* single input */}
                      <div className="flex flex-col">
                        <label className="text-[#333] text-sm lg:text-base font-semibold">
                          X profile link
                        </label>
                        <input
                          id="twitter"
                          name="twitter"
                          type="text"
                          value={values.twitter}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                          placeholder="Eg:twitter.com"
                        />
                      </div>
                      {/* end of single input */}
                    </div>
                    {/* end of form session */}
                    <div className="flex space-x-4 items-center mt-6">
                      <input 
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        className="w-6 h-6" 
                        value={values.agreeToTerms}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                      />
                      <p className="text-[#001A25]">I agree to terms and conditions</p>
                    </div>
                    <button
                      disabled={!isValid || isSubmitting}
                      type="submit"
                      className={`w-full ${isValid ? "bg-[#4747D6]": "bg-slate-500"} rounded-[30px] py-[10px] px-5 mt-10 flex items-center justify-center text-white font-semibold`}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )
          }
        </Formik>
      </ReuseModal>
    </ContainerLayout>
  );
}

export default Become
