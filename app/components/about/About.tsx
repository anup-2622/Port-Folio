import Image from "next/image";
import anup from "./../../../assets/anup.jpg";
export default function About() {
  return(
    <>
    <div className="text-center">
        <div className="head-title">
            <p className=" text-4xl font-bold text-white font-serif">ABOUT ME</p>
          </div>
    </div>
    <div className="flex items-center  justify-center">
    <div
      className=" flex flex-row gap-2 justify-around  items-center "
      style={{ width: "90%", height: "75vh" }}
    >
      <div className="  text-white ">
       {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic aut perspiciatis facere tenetur harum asperiores ipsa, earum voluptas debitis, autem dolorem repellendus, rem aliquid optio blanditiis alias sit quam.</p>   */}
       <div className="background   w-96 h-96">
                <Image
                  src={anup}
                  alt=""
                  style={{ width: "200px", height: "" }}
                />
              </div>
      </div>
      <div className="  text-white ">
        <div className="about-sec">
          <p> <span>Hello</span> <br /> I'm [Anup Kumar], a dedicated [Software Engineer] with a passion for solving complex problems and bringing innovative ideas to life. Here's a glimpse into my journey and what drives me in the world of engineering <br /> <span> Journey into Engineering</span> <br />
          My fascination with engineering began during my [B.tech Mid-sem when i get to know the about the internet and it's power it's feel like some magics are going on and i'm the magician ]. Since then, I've been on a relentless pursuit of knowledge and excellence in the field. The dynamic nature of engineering constantly challenges me, pushing me to evolve and adapt. <br /> <span>Professional Expertise
</span><br /> With a [Computer Science Engneering] in [Engineering is not only study of 45 subjects but it is moral studies of intellectual life] from [Punjab Technical University], I have a solid foundation in [Web Dev, Mobile Apps and networks  ]. My professional journey has taken me through [Sakksh ], where I've had the privilege of [SAAS base Projects ] which helps me to grow my skill more and more .

</p>
      </div>
        {/* <div className="about-sec">
          greating1
        </div>
        <div className="about-sec">
          greating1
        </div> */}
       {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta porro veritatis quo nulla minus iure voluptatibus reprehenderit aliquid, excepturi totam architecto facere in rem ab laboriosam dolore distinctio aliquam dolor.</p> */}
      </div>
    </div>
  
  </div>
  <div className="skills text-center">
  <div className="head-title">
            <p className=" text-4xl font-bold text-white font-serif">SKILLs & EXPERIENCE</p>
          </div>
  </div>
  <div className="flex items-center  justify-center">
    <div
      className=" flex flex-row gap-2 justify-around  items-center "
      style={{ width: "90%", height: "65vh" }}
    >
      <div className="experience-sec  flex flex-col justify-center items-center  w-1/2  h-4/5 text-white ">
    
      
       <div>
        <div className=""><p>TRAINING</p>
        <p># Schoofi Software Solutio
          </p></div>
       </div>
       <div>
        <div className=""><p>INTERSHIP</p>
        <p># Schoofi Software Solution
          </p></div>
       </div>
       <div>
        <div className=""><p>JOB</p>
        
        <p># Schoofi Software Solution</p></div>
       </div>
   
      </div>
      <div className=" skill-sec  w-1/2 h-4/5 text-white ">
        <div className="flex flex-wrap justify-between items-center">
          <div className="card"><button>html</button></div>
          <div className="card"><button>CSS</button></div>
          <div className="card"><button>Javascript</button></div>
          <div className="card"><button>PHP</button></div>
          <div className="card"><button>React</button></div>
          <div className="card"><button>Nodejs</button></div>
          <div className="card"><button>Mysql</button></div>
          <div className="card"><button>MongoDB</button></div>
          <div className="card"><button>CPP</button></div>
      </div>
         </div>
    </div>
  
  </div>
          </>
    )
}
