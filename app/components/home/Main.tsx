import Image from "next/image";
import anup from "../../../assets/anup.jpg";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import About from "../about/About";
import Sidebar from "../Sidebar/Sidebar";

export default function Main() {
  return (
    <>
      <div
        className="main scroll-smooth "
        style={{ height: "100vh", width: "100vw" }}
      >
        <Header />
        <div className=" w-screen flex items-center justify-center">
          <div
            className="home  flex flex-wrap justify-around items-center "
            style={{ width: "90%", height: "95vh" }}
          >
            <div className="left_home  text-white ">
              <p>Welcome to my digital space! I'm</p>
              <h4 className=" text-4xl font-serif">
                {" "}
                An<span className="text-red-700">up Ku</span>mar{" "}
              </h4>
              <p>
                A passionate{" "}
                <span className="text-red-700 font-bold">
                  Software Engineer
                </span>{" "}
                with a love for{" "}
                <span className="text-red-700 font-bold">JavaScript</span>
              </p>
              <br />
              <div>
                <p>Ready to collaborate or explore my work? Let's connect!</p>
                <button className="">Hire Me</button>
              </div>
            </div>
            <div className="right_home  text-white ">
              <div className="background  border w-96 h-96">
                {/* <Image
                  src={anup}
                  alt=""
                  style={{ width: "200px", height: "" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <About />
        <Footer />
        <Sidebar />
      </div>
    </>
  );
}
