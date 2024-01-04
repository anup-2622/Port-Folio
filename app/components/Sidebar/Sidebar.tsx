import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
export default function Sidebar() {
  return (
    <>
      <div className="side_icons z-10 py-4 fixed  hidden lg:block ">
        <div className="Linkdin  ">
          <FaFacebook className="social_icon" />
        </div>
        <div className="github py-4">
          <div className="group relative">
            {/* <button> */}
            <svg
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            {/* </button> */}
            <span
              className="absolute top-0 right-[-100%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white text-black py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
            >
              GitHub<span></span>
            </span>
          </div>
        </div>
        <div className="instagram ">
          <FaInstagram className="social_icon " />{" "}
        </div>
      </div>
    </>
  );
}
