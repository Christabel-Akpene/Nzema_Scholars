import { Award, Compass, GraduationCap, Star } from "lucide-react";
import Image from "next/image";
export default async function LandingPage(){
    return (
      <div>
        {/* Landing Page */}
        <section
          className="bg-cover bg-center bg-no-repeat bg-linear-to-r from-accent to-green-600 min-h-screen flex flex-col relative px-4"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          <div className="absolute inset-0 bg-brand/80 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col justify-center items-center flex-1">
            <h1 className="text-center text-text-inverse text-2xl font-bold pb-4 md:text-4xl">
              Connecting Nzema Students to Global Opportunities
            </h1>
            <p className="text-center text-brand-light pb-4 font-lg ">
              We help Nzema students find the right universities, scholarships
              and career mentors to guide you through every step of the journey.
            </p>
            <div className="text-center flex-col space-y-4 sm:flex-row sm:space-x-4 pt-8">
              <button className="bg-accent hover:bg-accent-hover px-6 py-2 text-text-inverse rounded cursor-pointer transition-colors duration-200">
                Explore Opportunities
              </button>
              <button className="bg-transparent border-border border px-6 py-2 text-text-inverse rounded cursor-pointer hover:bg-brand-hover  transition-all duration-200">
                Get Career Guidance
              </button>
            </div>
          </div>
        </section>
        {/* Choose your Growth Path */}
        <section className="bg-section py-8 px-4 md:py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold py-4 text-brand md:text-3xl">
              Choose Your Growth Path
            </h2>
            <p className="mb-4 text-primary">
              Access educational pathways, funding opportunities and career
              mentorship all in one place
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center my-4 md:grid-cols-4 md:py-8 ">
            <div>
              <p className="text-brand font-bold text-2xl md:text-3xl">20+</p>
              <p className="text-text-muted">Scholarship Opportunities</p>
            </div>
            <div>
              <p className="text-accent font-bold text-2xl md:text-3xl">50+</p>
              <p className="text-text-muted">Universities & Colleges Listed</p>
            </div>
            <div>
              <p className="text-brand font-bold text-2xl md:text-3xl">60+</p>
              <p className="text-text-muted">
                Students Guided Through Applications
              </p>
            </div>
            <div>
              <p className="text-accent font-bold text-2xl md:text-3xl">20+</p>
              <p className="text-text-muted">Students Mentored</p>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-center items-center gap-4 md:grid-cols-3 md:mb-6 mb-3">
            <div className="w-[90%] shadow-md border-border-strong border-2 rounded-2xl flex flex-col space-y-4 bg-card mx-auto p-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-2 rounded-md bg-brand text-green-200 w-12">
                <GraduationCap className="mx-auto" />
              </div>
              <h3 className="text-brand text-lg font-semibold">Education</h3>
              <p className="text-text-secondary">
                Browse universities, nursing and teacher training colleges
                locally with guidance through the application process.
              </p>
              <p className="text-accent">Explore Institutions &gt;</p>
            </div>

            <div className="w-[90%] border-border rounded-2xl shadow-md flex flex-col space-y-4 bg-brand mx-auto p-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-2 rounded-md bg-accent text-yellow-700 w-12">
                <Award className="mx-auto" />
              </div>
              <h3 className="text-text-inverse text-lg font-semibold">
                Scholarships
              </h3>
              <p className="text-text-inverse">
                Access local and international scholarship opportunities with
                support to help improve your application process.{" "}
              </p>
              <p className="text-accent">Find Scholarships {"  "} &gt;</p>
            </div>

            <div className="w-[90%] border-border-strong border-2 rounded-2xl shadow-md flex flex-col space-y-4 bg-card mx-auto p-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-2 rounded-md bg-brand text-green-200 w-12">
                <Compass className="mx-auto" />
              </div>
              <h3 className="text-brand text-lg font-semibold">
                Career Guidance
              </h3>
              <p className="text-text-secondary">
                Receive career guidance and mentorship, CV support, interview
                preparations from experienced professionals.{" "}
              </p>
              <p className="text-accent">Get Mentorship {"  "} &gt;</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-brand-light py-8 px-4 md:py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold py-4 text-brand md:text-3xl">
              How It Works
            </h2>
            <p className="mb-4 text-text-muted">
              From discovery to success, we walk with you every step of the way.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-8 sm:pl-32 md:pr-12 md:pl-12 md:mt-6">
            <div className="flex items-center md:flex-col gap-4 text-left md:text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand text-text-inverse font-semibold">
                1
              </div>

              <div>
                <h4 className="text-brand font-semibold sm:text-lg md:text-xl">
                  Discover
                </h4>
                <p className="text-sm md:text-base">
                  Find opportunities matching your profile
                </p>
              </div>
            </div>

            <div className="flex items-center md:flex-col gap-4 text-left md:text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand text-text-inverse font-semibold">
                2
              </div>

              <div>
                <h4 className="text-brand font-semibold sm:text-lg md:text-xl">
                  Apply
                </h4>
                <p className="text-sm md:text-base">
                  Submit your application through the form
                </p>
              </div>
            </div>

            <div className="flex items-center md:flex-col gap-4 text-left md:text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand text-text-inverse font-semibold">
                3
              </div>

              <div>
                <h4 className="text-brand font-semibold sm:text-lg md:text-xl">
                  Track Progress
                </h4>
                <p className="text-sm md:text-base">
                  Monitor your status in real time
                </p>
              </div>
            </div>

            <div className="flex items-center md:flex-col gap-4 text-left md:text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand text-text-inverse font-semibold">
                4
              </div>

              <div>
                <h4 className="text-brand font-semibold sm:text-lg md:text-xl">
                  Succeed
                </h4>
                <p className="text-sm md:text-base">
                  Unlock your academic/job opportunities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="bg-page py-8 px-4 md:py-12">
          <div className="w-[90%] flex flex-col md:flex-row items-center mx-auto bg-linear-to-r from-green-800 to-green-600 p-8 gap-8 md:gap-16">
            <Image
              src="/customer_support.png"
              alt="customer support image"
              width={400}
              height={300}
            />
            <div className="flex flex-col gap-3 md:gap-16">
              <h3 className="font-bold text-lg sm:text-2xl md:text-4xl text-text-inverse">
                Have a question?
              </h3>
              <button className="rounded-xl font-semibold p-3 text-primary bg-white">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-accent-light/20 py-8 px-4 md:py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold py-4 text-brand md:text-3xl">
              Stories From Our Community
            </h2>
            <p className="mb-4 text-text-muted">
              Real impact, real success from Nzema Students
            </p>
          </div>

          <div className="grid grid-cols-1 justify-center items-center gap-4 md:grid-cols-3 md:mb-6 mb-3">
            <div className="w-[90%] shadow-md border-border border-2 rounded-2xl flex flex-col space-y-4 bg-card mx-auto p-4">
              <p className="flex gap-1">
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />
              </p>
              <p className="text-text-muted">
                &quot;As a fresh graduate, I had no idea which university or
                course was right for me. Nzema Scholars guided me through the
                entire decision and handled my application from start to finish.
                I received my admission letter and I couldn&apos;t be more
                grateful.&quot;{" "}
              </p>
              <p className="text-brand font-semibold md:text-lg">
                Mabel Mensah{" "}
              </p>
            </div>
            <div className="w-[90%] shadow-md border-border border-2 rounded-2xl flex flex-col space-y-4 bg-card mx-auto p-4">
              <p className="flex gap-1">
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />
              </p>
              <p className="text-text-muted">
                &quot;Navigating the GETFund scholarship application felt
                overwhelming until I found Nzema Scholars. I got guided through
                every requirement and every step of the process. I am now a
                proud GETFund scholar something I never thought was possible for
                me.&quot;
              </p>
              <p className="text-brand font-semibold md:text-lg">Kwame Blay </p>
            </div>
            <div className="w-[90%] shadow-md border-border border-2 rounded-2xl flex flex-col space-y-4 bg-card mx-auto p-4">
              <p className="flex gap-1">
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />{" "}
                <Star color="yellow" size={16} />
              </p>
              <p className="text-text-muted">
                &quot;The mentorship program completely changed my career
                trajectory. I got help preparing a strong CV and was guided
                through the job application process and interviews. I am now
                working at a reputable company in my chosen field.&quot;
              </p>
              <p className="text-brand font-semibold md:text-lg">
                Eunice Akosua{" "}
              </p>
            </div>
          </div>

          {/*<div className="grid grid-cols-1 justify-center items-center gap-4 md:grid-cols-3 md:mb-6 mb-3">
            <div className="w-[90%] shadow-md border-border-strong border-2 rounded-2xl flex flex-col space-y-4 bg-card mx-auto p-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-2 rounded-md bg-brand text-green-200 w-12">
                <GraduationCap className="mx-auto" />
              </div>
              <h3 className="text-brand text-lg font-semibold">Education</h3>
              <p className="text-text-secondary">
                Browse universities, nursing and teacher training colleges
                locally with guidance through the application process.
              </p>
              <p className="text-accent">Explore Institutions &gt;</p>
            </div> */}
        </section>
      </div>
    );
}