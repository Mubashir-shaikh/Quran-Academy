import React from "react";
import { Link } from "react-router-dom";
import teacher from "../images/teacher.jpg";

function AllCourses() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h2 className="text-6xl font-semibold text-center mb-20">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="border-2 border-gray-400 bg-white rounded-lg overflow-hidden flex flex-col justify-between leading-normal">
          <Link to="/Courses">
            <img
              src={teacher}
              className=" w-500  w-full mb-3 p-0.5 rounded-lg "
              alt="Course 1"
            />
            <div className="p-2 pt-2 ">
              <div className="mb-8">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  Can coffee make you a better developer?
                </a>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="p-4 pb-2">
                <button className="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded">
                  Free Trial
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="border border-gray-400 bg-white rounded-lg overflow-hidden flex flex-col justify-between leading-normal">
          <Link to="/Courses">
            <img
              src={teacher}
              className=" w-500  w-full mb-3 p-0.5 rounded-lg "
              alt="Course 1"
            />
            <div className="p-4 pt-2">
              <div className="mb-8">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  Can coffee make you a better developer?
                </a>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="p-4 pb-2">
                <button className="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded">
                  Free Trial
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/*card 3*/}

        <div className="border border-gray-400 bg-white rounded-lg overflow-hidden flex flex-col justify-between leading-normal">
          <Link to="/Courses">
            <img
              src={teacher}
              className=" w-500  w-full mb-3 p-0.5 rounded-lg "
              alt="Course 1"
            />
            <div className="p-4 pt-2">
              <div className="mb-8">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  Can coffee make you a better developer?
                </a>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="p-4 pb-2">
                <button className="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded">
                  Free Trial
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/*card 4 */}

        <div className="border border-gray-400 bg-white rounded-lg overflow-hidden flex flex-col justify-between leading-normal">
          <Link to="/Courses">
            <img
              src={teacher}
              className=" w-500  w-full mb-3 p-0.5 rounded-lg "
              alt="Course 1"
            />
            <div className="p-4 pt-2">
              <div className="mb-8">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  Can coffee make you a better developer?
                </a>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="p-4 pb-2">
                <button className="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded">
                  Free Trial
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/*card5*/}

        <div className="border border-gray-400 bg-white rounded-lg overflow-hidden flex flex-col justify-between leading-normal">
          <Link to="/Courses">
            <img
              src={teacher}
              className=" w-500  w-full mb-3 p-0.5 rounded-lg "
              alt="Course 1"
            />
            <div className="p-4 pt-2">
              <div className="mb-8">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  Can coffee make you a better developer?
                </a>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="p-4 pb-2">
                <button className="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded">
                  Free Trial
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/*card6*/}

        <div className="border border-gray-400 bg-white rounded-lg overflow-hidden flex flex-col justify-between leading-normal">
          <Link to="/Courses">
            <img
              src={teacher}
              className=" w-500  w-full mb-3 p-0.5 rounded-lg "
              alt="Course 1"
            />
            <div className="p-4 pt-2">
              <div className="mb-8">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  Can coffee make you a better developer?
                </a>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="p-4 pb-2">
                <button className="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded">
                  Free Trial
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
