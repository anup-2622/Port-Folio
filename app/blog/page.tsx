
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
export default function Blog() {
    const project = [
      {
        project_Img: "",
        project_Title: "Chat App",
        project_Descprition:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod laborum et dolor est, explicabo distinctio, sit fugit dolorum voluptas nulla vero minima ipsam harum earum aliquam asperiores architecto eveniet.",
        git_Link: "www.google.com",
      },
    ];
  
    return (
      <>
        <div className="proj">
          <Header />
          <div className="  flex flex-wrap items-center justify-around w-screen ">
            {project.map((item) => (
              <div className="card max-w-sm rounded overflow-hidden  m-4">
                {/* <Image
                  className="w-full"
                  src={anup}
                  alt="Sunset in the mountains"
                /> */}
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {item.project_Title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {item.project_Descprition}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {" "}
                    <a href={item.git_Link}>#github</a>
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #portfolio
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </>
    );
  }