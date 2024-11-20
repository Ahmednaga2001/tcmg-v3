
"use client";  
import React, { Suspense, useState, useEffect } from 'react';  
import { useSearchParams, useRouter } from 'next/navigation';  
import styles from "./page.module.css";  
import { Register } from '@/components/payment/register/Register';  
import { Category } from '@/components/payment/category/Category';  
import ChooseLawyer from '@/components/payment/chooseLawyer/ChooseLawyer';  
import AdditionalInfo from '@/components/payment/additionalInfo/AdditionalInfo';  
import FollowPayment from '@/components/payment/followPayment/FollowPayment';  

const heshamMahmod = {
    name: "هشام محمود",
    desc: "هشام محمود محامي جنايات متمرس ومرخص من وزارة العدل لديه خبرة في القانون الجنائي وقضايا الأموال العامة وقانون الأحوال الشخصية في مصر والترافع أمام المحاكم المصرية بخبرة تتجاوز ال ١٢ سنة، كما عُرف بكونه محامي جنائي محنك تمكن من حل العديد من القضايا المعقدة.",
    imgPath: "/assets/images/lawyers/المحامي هشام محمود محامي جنائي في المجموعة التجارية والبحرية للمحاماة_edited.webp",
};

const ahmedSaid = {
    name: "أحمد سعيد",
    desc: "محامٍ بارز في القانون التجاري يتمتع بـ 19 عامًا من الخبرة في قانون الشركات، والتحكيم التجاري الدولي، والرعاية الصحية، وقانون التكنولوجيا والاتصالات. يجيد صياغة العقود الدولية المعقدة والتفاوض على الصفقات الكبيرة. ويمتلك القدرة على التعامل مع العملاء من مختلف القطاعات، وحماية مصالحهم بكفاءة ومهنية عالية.",
    imgPath: "/assets/images/lawyers/احمد سعيد.jpeg",
};

function Page() {     
    const searchParams = useSearchParams();
    const fromBusinessPackage = searchParams.get('fromBusinessPackage') === 'true'; 
    const isOfficeConsultation = searchParams.get('isOfficeConsultation') === 'true';
  ;
    
    const [currentStep, setCurrentStep] = useState(1); 
    const router = useRouter();

    useEffect(() => {
        const step = parseInt(searchParams.get('step')) || 1; 
        setCurrentStep(step);
    }, [searchParams]);

    const handleNextStep = () => {         
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        router.push(`?step=${nextStep}&fromBusinessPackage=${fromBusinessPackage}&isOfficeConsultation=${isOfficeConsultation}`);

        // router.push(`?step=${nextStep}&fromBusinessPackage=${fromBusinessPackage}`);
    }; 

    const handleStepClick = (step) => {
        if (step < currentStep) {
            setCurrentStep(step);
            router.push(`?step=${step}&fromBusinessPackage=${fromBusinessPackage}`);
        }
    };

    const stepContent = (step) => {         
        if (step < currentStep) {             
            return <img src={`/assets/icons/payment/correct.svg`} alt={`Step ${step}`} />;         
        }         
        return step;     
    }; 

    return (         
        <div className={styles.paymentPage}>             
            <section>                 
                <h2>                     
                    {/* {currentStep === 1 && "تسجيل الدخول"}                     
                    {currentStep === 2 && !fromBusinessPackage && "إختيار التخصص"}                     
                    {currentStep === 2 && fromBusinessPackage && "إختيار المحامي"}                     
                    {currentStep === 3 && " المحامي المتاح للتخصص المطلوب "}                     
                    {currentStep === 4 && "معلومات إضافية"}                     
                    {currentStep === 5 && "متابعة الدفع"}              */}
                   {(() => {
        if (currentStep === 1) return "تسجيل الدخول";
        if (currentStep === 2 && !fromBusinessPackage) return "إختيار التخصص";

        if (currentStep === 2 && fromBusinessPackage) return "المحامي المتاح للتخصص المطلوب";

        if (currentStep === 3 && !fromBusinessPackage) return "المحامي المتاح للتخصص المطلوب";
        
        if (currentStep === 3 && fromBusinessPackage) return "معلومات إضافية";
        if (currentStep === 4 && !fromBusinessPackage) return "معلومات إضافية";

        if (currentStep === 5 && !fromBusinessPackage) return "متابعة الدفع";
        if (currentStep === 4 && fromBusinessPackage) return "متابعة الدفع";
        return null;
    })()}
                </h2>                 
                <ul className={styles.steps}>                     
                    {Array.from({ length: 5 }, (_, index) => index + 1).map((step) => { 
                        if (step === 2 && fromBusinessPackage) return null; 

                        const adjustedStep = (step > 2 && fromBusinessPackage) ? step - 1 : step; 

                        return (
                            <li                              
                                key={adjustedStep}                             
                                className={                                  
                                    adjustedStep < currentStep ? styles.completed :                                  
                                    adjustedStep === currentStep ? styles.active :                                  
                                    styles.inactive                             
                                } 
                                onClick={() => handleStepClick(adjustedStep)} 
                            >                             
                                {stepContent(adjustedStep)}                            
                            </li>                     
                        );
                    })}                  
                </ul>           
            </section>              

            {currentStep === 1 && <Register onNextStep={handleNextStep} />}
            {currentStep === 2 && !fromBusinessPackage && <Category onNextStep={handleNextStep} />}
            {currentStep === 2 && fromBusinessPackage && <ChooseLawyer info={ahmedSaid} onNextStep={handleNextStep} />}
            {currentStep === 3 && !fromBusinessPackage && <ChooseLawyer info={heshamMahmod} onNextStep={handleNextStep} />} 
            {currentStep === 3 && fromBusinessPackage && <AdditionalInfo onNextStep={handleNextStep} />}
            {currentStep === 4 && !fromBusinessPackage && <AdditionalInfo onNextStep={handleNextStep} />}
            {currentStep === 4 && fromBusinessPackage && <FollowPayment onNextStep={handleNextStep} />}
            {currentStep === 5 && !fromBusinessPackage && <FollowPayment onNextStep={handleNextStep} />}  
        </div>     
    ); 
}  

export default function Wrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Page />
        </Suspense>
    );
}

