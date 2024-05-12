"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar, FaRegStar } from "react-icons/fa";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import { myCourse } from "@/lib/utils";

export default function MyCourses() {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState<boolean>(true);

  return (
    <section className="w-full flex flex-col">
      <Navbar />
      <section className="w-full flex items-center justify-center px-8 mt-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myCourse.map((course: any) => (
            <li key={course.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    {course.courseName}
                  </h2>

                  <p className="text-sm text-gray-600 mb-2">2 лекц, 2 асуулт</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="flex items-center text-yellow-500"
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    {isSaved ? <FaStar /> : <FaRegStar />}
                  </button>
                  <div
                    onClick={() => router.push(`/courses/${course.courseId}`)}
                  >
                    <Button buttonName="Хичээл харах"></Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
