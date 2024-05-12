"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import ButtonDialog from "@/components/ButtonDialog";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import { useUser } from "@/context/testContext";

function Main() {
  const { user } = useUser();
  return (
    <div className="text-white flex mx-40 mt-5 justify-center items-start">
      <div className="flex md:flex-column md:justify-center lg:px-12 gap-3 md:mt-5 flex-col px-3 md:px-5 mt-8">
        <section className="md:w-[100%] flex flex-col w-[100%] justify-start px-3">
          <section className="flex flex-col gap-5">
            <h3 className="text-black font-bold lg:text-4xl md:text-3xl sm:text-xl text-5xl">
              Оюутны хичээлийн лекц болон хичээлдээ илүү бэлдэх quiz-ийг{" "}
              <span className="text-[#245BFF]">нэг дороос</span>
            </h3>
            <p className="lg:text-[1rem] text-[#34444B] text-base ">
              Оюутны хичээлийг илүү хялбар бэлдэх,
              <span className="font-bold pl-1">нэгдсэн байдлаар</span> харах,
              мөн өөрсдийн quiz болон лекцээ оруулж бусдад хуваалцах боломжтой.
            </p>
          </section>
        </section>
        <div className="flex flex-row">
          <div className="ms-12">
            <Image
              src="/image1.png"
              alt="Vercel Logo"
              width={225}
              height={150}
              priority
              className="w-600 h-600 pt-12"
            />
            <ButtonDialog />
          </div>
          <div className="ms-12">
            <Image
              src="/image2.png"
              alt="Vercel Logo"
              width={225}
              height={150}
              priority
              className="w-600 h-600 pt-12"
            />
            <Link href={user?.token ? "/myCourse" : "/login"}>
              <button className="border-2 border-white/20 text-white bg-[#3364C3] font-semibold text-sm w-fit  shadow-[0px_0px_24px_0px_#799BFF] flex flex-row items-center gap-2 cursor-pointer rounded-xl  md:py-[0.6rem] md:px-[1rem] md:text-[1.2rem] py-[0.5rem] px-[1.2rem] text-[1.2rem] hover:bg-opacity-90">
                <p className="text-white font-bold md:text-[1rem] text-[1rem]">
                  Миний хичээл
                </p>
                <AiOutlineStar />
                <div className="text-2xl"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ scale: [0, 1, 0.5, 1] }}
        transition={{ times: [0, 1.1, 2.9, 4] }}
        className="w-full pl-24"
      >
        <Image
          src="/person.png"
          alt="Vercel Logo"
          width={250} // Adjust width as needed
          height={500} // Adjust height as needed
        />
      </motion.div>
    </div>
  );
}

export default Main;
