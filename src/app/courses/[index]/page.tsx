"use client";
import { TabsDemo } from "@/components/Tab";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { coursesJson } from "@/lib/utils";
import Navbar from "@/components/Navbar";

function Courses() {
  const [courseData, setCourseData] = useState<any>([]);
  const params = useParams<{ index: string }>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const filterData: any = coursesJson.filter((item: any) => {
        return item.Хичээлийн_дугаар === params.index;
      });

      console.log("filterData", filterData);
      setCourseData(filterData);
      setLoading(false);
      try {
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.index]);

  if (loading) {
    return <section>loading ...</section>;
  }

  console.log("data: ", courseData[0].Зорилго);
  return (
    <section className="flex flex-col w-full ">
      <Navbar />
      <section className="w-full flex items-center justify-center gap-10 px-6 mt-10 h-max">
        <section className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
          <h2 className="font-bold text-3xl mb-4">
            {courseData[0].Монгол_нэр}
            <span className="text-gray-600 text-lg">
              ({courseData[0].Хичээлийн_индекс})
            </span>
          </h2>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Багц цаг: </span>{" "}
            {courseData[0].Багц_цаг} |{" "}
            <span className="font-semibold">Улирал: </span>{" "}
            {courseData[0].Орох_улирал}|{" "}
            <span className="font-semibold">Түвшин: </span>{" "}
            {courseData[0].Сургалтын_түвшин} |
          </div>
          <div className="mb-6 flex gap-2 mt-4">
            <p className="font-semibold">Зорилго:</p>
            <p className="text-gray-800">
              {courseData[0].Зорилго !== null
                ? courseData[0].Зорилго
                : "Мэдээлэл байхгүй"}
            </p>
          </div>
          <div className="mb-6">
            <p className="font-semibold">Агуулга:</p>
            <p className="text-gray-800">
              чиглүүлэгтэй сурах (үүсгүүр\дискриминатив сурах,
              параметрт\параметргүй сурах, мэдрэс сүлжээ, тулгуур вектор машин);
              чиглүүлэггүй сурах (аймаглах, хэмжээс бууруулах, кернелийн
              аргууд); сурах онол (bias/variance харьцаа, VC онол, их маржин);
              тулгах сургалт болон адаптив удирдлага гм. Мөн машин сургалтын
              орчин үеийн хэрэглээ болох робот удирдлага, өгөгдлийн уурхай,
              автомат чиглүүлэл, биоинформатик, яриа танилт, бичвэр болон вэб
              өгөгдөл боловсруулалт зэргийг үзнэ.
            </p>
          </div>
        </section>
        <section className="w-full lg:w-1/2 h-max">
          <TabsDemo />
        </section>
      </section>
    </section>
  );
}

export default Courses;
