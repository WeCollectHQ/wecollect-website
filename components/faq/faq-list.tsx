import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import { faqData } from '../../utils/faqdata';
import { SingleFaq } from '../LandingPage/Faq';
const FaqList = () => {
  return (
    <div className='mt-[68px]'>
      <ContainerLayout>
        <div className="w-full bg-[#F9F6FF] h-auto rounded-[30px] flex flex-col mt-[30px] md:mt-[50px] p-5  lg:p-[30px]">
          {faqData?.map((item: any, index: number) => {
            return <SingleFaq item={item} key={index} />;
          })}
        </div>
      </ContainerLayout>
    </div>
  );
}

export default FaqList
