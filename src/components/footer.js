import { Footer as FlowbiteFooter } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export function CustomFooter() {
  return (
    <FlowbiteFooter container>
      <div className="h-60 w-full ">
        {" "}
        {/* Set the height here */}
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-4 ml-20 text-3xl">
            <Link
              to="/"
              className="flex items-center gap-1 text-gray-700 font-bold "
            >
              <PaperAirplaneIcon className="h-10 w-10 text-primary" />
              <span>E-Quran Online</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 px-14 sm:gap-0">
            <div>
              <FlowbiteFooter.Title title="About Us" className="font-bold" />
              <FlowbiteFooter.LinkGroup col>
                <Link
                  to="/"
                  className="text-gray-700 leading-loose font-semibold hover:font-bold"
                >
                  Home
                </Link>
                <Link
                  to="/Benefits"
                  className="text-gray-700 leading-loose font-semibold hover:font-bold"
                >
                  Benefits
                </Link>
                <Link
                  to="/Courses"
                  className="text-gray-700 leading-loose font-semibold hover:font-bold"
                >
                  Courses
                </Link>
                <Link
                  to="/Pricing"
                  className="text-gray-700 leading-loose font-semibold hover:font-bold"
                >
                  Pricing
                </Link>
                <Link
                  to="/ContactUs"
                  className="text-gray-700 leading-loose font-semibold hover:font-bold"
                >
                  Contact Us
                </Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Follow us" className="font-bold"/>
              <FlowbiteFooter.LinkGroup col>
              <Link to="/#"
                  className="text-gray-700 leading-loose font-semibold hover:font-bold"
                >
                  Github
                </Link>
                <Link  to="/#"
                  className="text-gray-700 leading-loose font-semibold hover:font-bold"
                >
                  Discord
                </Link>               
                <Link  to="/#"
                  className="text-gray-700 leading-loose font-semibold hover:font-bold"
                >
                  Linkdin
                </Link>               
                <Link  to="/#"
                  className="text-gray-700 leading-loose font-semibold hover:font-bold"
                >
                  Twitter
                </Link>               
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Legal" className="font-bold" />
              <FlowbiteFooter.LinkGroup col>
              <Link  to="/#"
                  className="text-gray-700 leading-loose font-semibold"
                >
                  Terms & Conditions  </Link> 
                  <Link  to="/#"
                  className="text-gray-700 leading-loose font-semibold "
                >
                  Privacy & policy </Link> 
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}

export default CustomFooter;
