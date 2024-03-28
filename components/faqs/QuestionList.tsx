"use client";
import { useState } from "react";
import Question from "@/components/faqs/Question";
import ConditionList from "@/components/faqs/ConditionList";

export default function QuestionList() {
  const openState: [string, Function] = useState("");

  return (
    <>
      <Question
        question={"If I don’t qualify, do I still have to pay the QMP?"}
        openState={openState}
      >
        <p className={"m-0"}>placeholder</p>
      </Question>
      <Question
        question={"What are Utah’s qualifying medical conditions?"}
        openState={openState}
      >
        <p className={"m-0"}>
          Over 80% of medical cards in Utah are issued based on pain. However,
          other qualifying conditions include:
        </p>
        <ConditionList>
          <li>HIV or acquired immune deficiency syndrome (AIDS)</li>
          <li>Alzheimer’s disease</li>
          <li>Amyotrophic lateral sclerosis (ALS)</li>
          <li>Cancer</li>
          <li>Crohn’s disease</li>
          <li>Epilepsy or debilitating seizures</li>
          <li>Multiple sclerosis (MS)</li>
          <li>Persistent nausea not responsive to traditional treatment</li>
          <li>Post-traumatic stress disorder (PTSD)</li>
          <li>Autism spectrum disorder (ASD)</li>
          <li>
            A terminal illness with a life expectancy of less than six months
          </li>
        </ConditionList>
        <p className={"m-0"}>
          Be sure to check the Utah Department of Health for the most current
          list of qualifying conditions.
        </p>
      </Question>
      <Question
        question={
          "Is documentation required to prove you have a medical condition?"
        }
        openState={openState}
      >
        <p className={"m-0"}>
          A medical cannabis card, also known as a medical marijuana card, is a
          state-issued identification card that allows qualified patients to
          legally purchase and use medical cannabis for specific medical
          conditions. In Utah, this card is necessary to access medical cannabis
          products from state-licensed dispensaries.
        </p>
        <p className={"m-0 font-['Proxima_Nova_Bold']"}>
          **Important Note:** Smoking medical cannabis is illegal in Utah, but
          alternative consumption methods like vaporizers, vapes/pods, edibles,
          tablets, and sublingual sprays are available.
        </p>
      </Question>
      <Question
        question={"If I have a medical cannabis card, can I consume in public?"}
        openState={openState}
      >
        <p className={"m-0"}>placeholder</p>
      </Question>
      <Question
        question={
          "What are the eligibility requirements for a Utah medical cannabis card?"
        }
        openState={openState}
      >
        <p className={"m-0"}>
          To be eligible for a medical cannabis card in Utah, you must:
        </p>
        <ConditionList>
          <li>Be a Utah resident.</li>
          <li>
            Have a qualifying medical condition specified by the Utah Medical
            Cannabis Act.
          </li>
          <li>
            Receive a recommendation from a qualified healthcare provider
            registered with the Utah Department of Health (UDOH). Qualified
            providers may be found{" "}
            <a
              className={"text-greenone"}
              href={
                "https://medicalcannabis.utah.gov/patients/locate-a-provider/"
              }
              target={"_blank"}
              onClick={(event) => event.stopPropagation()}
            >
              here
            </a>
            .
          </li>
        </ConditionList>
      </Question>
      <Question
        question={"What is the complete cost to get a medical cannabis card?"}
        openState={openState}
      >
        <p className={"m-0"}>
          Medical consultations can cost $200 or more in Utah. However at Utah
          Grown events the price is $70 + $15 fee paid to the state.
        </p>
      </Question>
      <Question
        question={"How long does it take to receive your card?"}
        openState={openState}
      >
        <p className={"m-0"}>
          You can obtain your medical card the same day. Renewals will appear
          the day after your expiration date.
        </p>
      </Question>
      <Question
        question={"Where can I purchase medical cannabis in Utah?"}
        openState={openState}
      >
        <p className={"m-0"}>
          You can purchase medical cannabis from state-licensed dispensaries in
          Utah.
        </p>
      </Question>
      <Question
        question={
          "Can I grow my own cannabis plants with a medical cannabis card?"
        }
        openState={openState}
      >
        <p className={"m-0"}>
          No, Utah’s medical cannabis program does not permit patients to
          cultivate their own cannabis plants. All medical cannabis must be
          purchased from state-licensed dispensaries.
        </p>
      </Question>
      <Question
        question={"How long is a medical cannabis card valid?"}
        openState={openState}
      >
        <p className={"m-0"}>
          Typically, medical cannabis cards in Utah are valid for one year.
          Initial lengths may vary, so be sure to check with your provider.
        </p>
      </Question>
      <Question
        question={
          "Is my personal information confidential when applying for a medical cannabis card?"
        }
        openState={openState}
      >
        <p className={"m-0"}>placeholder</p>
      </Question>
    </>
  );
}
