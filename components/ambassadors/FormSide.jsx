
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import check from "../../assets/svg/check-icon.svg";
import { CompleteCheck } from "../../assets/svg";
import {useRouter} from "next/router"
import Image from "next/image";
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
  agreeToTerms: false,
};



const FormSide = () => {
    const [stage, setStage] = useState(1);
  const [success, setSuccess] = useState(false);
  const [isOneFilled, setIsOneFilled] = useState(false);
  const router = useRouter();



  return (
    <div className="w-full flex flex-col bg-white lg:bg-inherit my-[50px] lg:my-0">
      {!success && (
        <div className="w-full flex items-center justify-center mb-11">
          {stage === 2 ? (
            <span className="cursor-pointer" onClick={() => setStage(1)}>
              <CompleteCheck />
            </span>
          ) : (
            <span
              className="w-12 h-12 rounded-full  flex items-center justify-center cursor-pointer  border bg-white border-[#333] border-opacity-30 text-[#333] font-semibold "
              onClick={() => setStage(1)}
            >
              1
            </span>
          )}
          {/* start of line */}
          <div className="w-[100px] lg:w-[161px]  h-[1px] bg-[#999] bg-opacity-30"></div>

          {/* end of line */}
          <span className="w-12 h-12 flex items-center justify-center  rounded-full border bg-white border-[#333] border-opacity-30 text-[#333] font-semibold ">
            2
          </span>
        </div>
      )}

      {success ? (
        <div className="w-full bg-white rounded-[20px] max-w-[536px] py-12 lg:py-16    ">
          <div className="w-full max-w-[341px] flex flex-col mx-auto items-center">
            <span>
              <Image src={check} alt="checker" />
            </span>

            <p className="text-sm lg:text-base text-[#333] font-medium mt-4 text-center">
              Your request to become WeCollect ambassador is submitted
              successfully and being reviewed.
            </p>
            <p className="text-sm lg:text-base text-[#333] font-medium mt-4 text-center">
              We will get back to you if you meet our requirements.
            </p>
            <p className="text-sm lg:text-base text-[#333] font-medium mt-4 text-center">
              Thank you for showing interest.
            </p>
            <div className="w-full max-w-[287px] mx-auto mt-14 ">
              <button
                type="button"
                className={`w-full   bg-[#4747D6] rounded-[30px] py-[10px] px-5  flex items-center justify-center text-white font-semibold`}
                onClick={() => router.push("/")}
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      ) : (
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
            agreeToTerms: Yup.boolean().required(),
          })}
          onSubmit={async (values) => {
            try {
              const response = await axios.post(
                "https://api.wecollect.tech/createAmbassador/",
                {
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
                  },
                }
              );

              if (response.status === 200) {
                console.log(response.data);
                setSuccess(true);
              }
            } catch (e) {
              throw new Error(e);
            }
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            touched,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="w-full bg-white rounded-[20px]  pb-5">
                <div className="w-full flex flex-col xl:w-10/12 mx-auto text-[#333]">
                  {/* form session */}
                  <div className="mt-10 lg:mt-14 flex flex-col">
                    {stage === 1 && (
                      <div className="flex flex-col space-y-[30px]">
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
                            placeholder="johndoe@wecollect.tech"
                          />
                        </div>
                        {/* end of single input */}
                        {/* single input */}
                        <div className="flex flex-col">
                          <label className="text-[#333] text-sm lg:text-base font-semibold">
                            Gender
                          </label>
                          <div className="w-full border h-[42px] pr-4 flex items-center bg-white rounded-md shadow-sm focus:outline-none   focus:border-[#333] border-opacity-30">
                            <select
                              id="gender"
                              name="gender"
                              value={values.gender}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="mt-2 block w-full px-3 border h-[42px]  bg-transparent  focus:outline-none  border-none sm:text-sm   "
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
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
                            placeholder="0XXXXXXXXXXX"
                          />
                        </div>
                        {/* end of single input */}
                      </div>
                    )}
                    {stage === 2 && (
                      <div className="flex flex-col space-y-[30px]">
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
                          <p className="text-[#001A25]">
                            I agree to terms and conditions
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {stage === 1 && (
                    <button
                      type="button"
                      className={`w-full   bg-[#4747D6] rounded-[30px] py-[10px] px-5 mt-10 flex items-center justify-center text-white font-semibold`}
                      onClick={() => setStage(2)}
                    >
                      Next
                    </button>
                  )}
                  {stage === 2 && (
                    <button
                      disabled={!isValid || isSubmitting}
                      type="submit"
                      className={`w-full ${
                        isValid ? "bg-[#4747D6]" : "bg-slate-500"
                      } rounded-[30px] py-[10px] px-5 mt-10 flex items-center justify-center text-white font-semibold`}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default FormSide;
