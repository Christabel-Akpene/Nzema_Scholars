export default async function LandingPage(){
    return (
      <div>
        <div
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
              <button className="bg-transparent border-border border px-6 py-2 text-text-inverse rounded cursor-pointer hover:bg-brand-hover transition-all duration-200">
                Get Career Guidance
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}