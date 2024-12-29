// import Image from "next/image";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <section className="main flex mt-18">
        <section className="left md:w-1/2 flex justify-center relative">
          <img 
          src="images/main_about_me.png" 
          alt="about_me_1" 
          className="w-[34rem] h-auto"
          />
        {/* will redo the image soon */}
        
          {/* outer circle shape  */}
          {/* <div className="relative w-[28rem] h-[28rem] overflow-hidden rounded-full bg-gray-700"> */}
            {/* image inside the shape */}
            {/* <div className="absolute w-[28rem] h-[28rem] flex items-center justify-center"> */}
              {/* <img  */}
                {/* // src="images/about_me_1.png"  */}
                {/* // alt="about_me_1"  */}
                {/* // className="w-[28rem] h-[28rem] object-cover" */}
              {/* // /> */}
            {/* </div> */}
          {/* </div> */}
        </section>
        <section className="right md:w-1/2 flex flex-col justify-center z-10">
          <div className="text text-white text-left md:w-4/5">
            <span className="text-7xl">Hello! I am</span> <br />
            <span className="text-9xl text-red-400">Keith.</span> <br />
            <span className="text-6xl">I am an Ai and Cybersecurity specialist</span>
            <br /> <br />
            <p className="text-md">
              Welcome to my portfolio! Here, I showcase a range of projects spanning 
              <span className="text-rose-400"> Kubernetes orchestration, frontend and backend development, software tools,</span> 
              and <span className="text-rose-400">CI/CD pipelines. </span> 
              While my expertise lies in 
              <span className="text-rose-400"> Artificial Intellegience</span> and 
              <span className="text-rose-400"> Cybersecurity</span>
              , I thrive on building scalable solutions that bridge these fields with modern software technologies.
            </p>
          </div>
        </section>
      </section>

    </main>
  );
}
