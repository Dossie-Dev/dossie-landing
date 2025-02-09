import Image from "next/image";
import tempPic from "../../../assets/seccc.svg";
import Team from "../../../components/ui/Team"; // Ensure your image is in the public folder and adjust the path accordingly.
import ContactPage from "../contact/page";


export default function About() {
  return (
    <>
      <section id="about" className="px-16 py-8">
        <div className="lg:bg-gray-50 lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="mx-8 md:w-7/12 lg:w-1/2">
          
            <h2 className="text-3xl font-bold text-blue-500  md:text-4xl">
            Fast, Secure, and Easy Access            </h2>
            <p className="my-8 text-gray-600">
            At Dossie Scholar, we are transforming academic research accessibility. Our mission is to help students, researchers, and universities by digitizing academic research papers, making them more accessible, searchable, and shareable. By leveraging cutting-edge AI technologies, including Large Language Models (LLMs) and Agentic RAG, we ensure that valuable knowledge is easily accessible to all.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
          </div>
          <div className="md:w-4/12 lg:w-1/3">
            <Image src={tempPic} alt="Digital Record System" loading="lazy" />
          </div>
        </div>
      </section>

      <div className="px-16 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
       
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-500  sm:text-4xl md:mx-auto">
How to Use our Website        </h2>
        </div>
        <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <div className="p-8 duration-300 transform bg-white border-2 border-dashed rounded-[2rem] shadow-sm border-primary hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-blue-500 ">
                1
              </p>
              <p className="text-lg font-bold leading-5">Create an Account</p>
            </div>
            <p className="text-sm text-body-color">
              Sign up for a free account to access our vast repository of academic research papers, and discover new knowledge in your field of interest.
            </p>
          </div>
          <div className="p-8 duration-300 transform bg-white border-2 border-dashed rounded-[2rem] shadow-sm border-primary hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-blue-500 ">
                2
              </p>
              <p className="text-lg font-bold leading-5">
                Explore Our Collections
              </p>
            </div>
            <p className="text-sm text-body-color">
              Browse through our curated collections of research papers, and filter by topic, author, or institution to find the most relevant content for your needs.
            </p>
          </div>
          <div className="relative p-8 duration-300 transform bg-white border-2 rounded-[2rem] shadow-sm border-primary hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-blue-500 ">
                3
              </p>
              <p className="text-lg font-bold leading-5">
                Access Your Dashboard
              </p>
            </div>
            <p className="text-sm text-body-color">
              Navigate to your personalized dashboard to view and manage your saved papers, and receive recommendations for new content based on your interests.
            </p>
            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-blue-500 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
              <svg
                className="text-white w-7"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                ></polyline>
              </svg>
            </p>
          </div>
        </div>
      </div>


      <Team />
      <ContactPage />
    </>
  );
}
