// import Image from "next/image";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <section className="main flex border border-blue-500 mt-8">
        <section className="left md:w-1/2">
          <h1 className="border border-purple-500 text-white h-72">Placeholder image here</h1>
        </section>
        <section className="right md:w-1/2">
          <div className="text text-white text-left">
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
