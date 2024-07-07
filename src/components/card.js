import React from "react";
import benefits from "../images/benefits.png";
import Courses from "../images/Ccourses.png";
import fee from "../images/fee.png";
import trail from "../images/trail.png";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center mt-8">
      <div className="carousel max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card 1 */}
        <Link to="/Courses" className="card-link">
          <div className="card mb-8 sm:mb-0">
            <div className="flex justify-end px-4 pt-4">
              <span className="sr-only">Open dropdown</span>
            </div>
            <div className="flex flex-col items-center pb-6 sm:pb-10">
              <img
                src={benefits}
                alt="benefits"
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Benefits
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Avail this opportunity
              </span>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/courses" className="card-link">
          <div className="card mb-8 sm:mb-0">
            <div className="flex justify-end px-4 pt-4">
              <span className="sr-only">Open dropdown</span>
            </div>
            <div className="flex flex-col items-center pb-6 sm:pb-10">
              <img
                src={Courses}
                alt="courses"
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Courses
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                We Offer You 30+ Courses
              </span>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/pricing" className="card-link">
          <div className="card mb-8 sm:mb-0">
            <div className="flex justify-end px-4 pt-4">
              <span className="sr-only">Open dropdown</span>
            </div>
            <div className="flex flex-col items-center pb-6 sm:pb-10">
              <img
                src={fee}
                alt="fee"
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Fee Structure
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Low fee, high value
              </span>
            </div>
          </div>
        </Link>

        {/* Card 4 */}
        <Link to="/ContactUS" className="card-link">
          <div className="card">
            <div className="flex justify-end px-4 pt-4">
              <span className="sr-only">Open dropdown</span>
            </div>
            <div className="flex flex-col items-center pb-6 sm:pb-10">
              <img
                src={trail}
                alt="trail"
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Free Trail Classes
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Register for free now
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-10 px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto">
        <h3 className="text-xl sm:text-2xl lg:text-3xl leading-normal font-semibold text-center">
          17 years of experience and wide range of online Quran courses designed
          to establish a deep connection with the Quran under the supervision of
          experienced & qualified teachers.
        </h3>
      </div>
    </div>
  );
}

export default Card;
