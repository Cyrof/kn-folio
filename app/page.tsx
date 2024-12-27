// import Image from "next/image";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <section className="main flex mt-20">
        <section className="left md:w-1/2 flex items-center justify-center relative">
        {/* will redo the image soon */}
        
          {/* outer circle shape  */}
          <div className="relative w-[28rem] h-[28rem] overflow-hidden rounded-full bg-gray-700">
            {/* image inside the shape */}
            <div className="absolute w-[28rem] h-[28rem] flex items-center justify-center">
              <img 
                src="images/about_me_1.png" 
                alt="about_me_1" 
                className="w-[28rem] h-[28rem] object-cover"
              />
            </div>
          </div>
        </section>
        <section className="right md:w-1/2">
          <div className="text text-white text-left m-auto">
            <span>Hello! I am</span> <br />
            <span>Keith.</span> <br />
            <span>I am an Ai and Cybersecurity specialist</span>
            <br /> <br />
            <p>
              Welcome to my portfolio! Here, I showcase a range of projects spanning 
              <span>Kubernetes orchestration, frontend and backend development, software tools,</span> 
              and <span>CI/CD pipelines.</span> 
              While my expertise lies in <span>
              Artificial Intellegience
              </span> and 
              <span>Cybersecurity</span>
              , I thrive on building scalable solutions that bridge these fields with modern software technologies.
            </p>
          </div>
        </section>
      </section>

    </main>
  );
}
