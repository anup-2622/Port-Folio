import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
export default function Sidebar() {
  return (
    <>
      <div className="side_icons z-10 py-4 fixed  hidden lg:block ">
        <div className="Linkdin  ">
        <div className="group relative">
            {/* <button> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="invert" width="40" height="40" viewBox="0 0 32 32">
<path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
</svg>
            {/* </button> */}
            <span
              className="absolute top-0 right-[-100%] -translate-x-[50%] 
                z-[-1] origin-left scale-0 px-3 rounded-lg border 
                border-gray-300  bg-transparent text-black py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100"
            >
              <span>Linkedin</span>
            </span>
          </div>
          {/* <FaFacebook className="social_icon" /> */}
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
          {/* <FaInstagram className="social_icon " />{" "} */}
          <div className="group relative">
            {/* <button> */}
            <svg
              className="w-8 invert hover:scale-125 duration-200  "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="instagram"><path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path><path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path><circle cx="12.3" cy="3.7" r=".533"></circle></svg>
            {/* </button> */}
            <span
              className="absolute top-0 right-[-100%] -translate-x-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white text-black py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100"
            >
              Insta<span></span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
