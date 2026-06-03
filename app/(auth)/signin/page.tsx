import { FaGoogle } from "react-icons/fa"

export default function SignIn(){
    return (
      <div className="min-h-screen flex items-center justify-center bg-section">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg mx-4">
          <div className="text-center">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-brand mb-2">
              Welcome to Nzema Scholars
            </h2>
            <p className="text-text-muted">
                Your Career Journey Starts Now
            </p>
          </div>
          <div className="mt-8">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
              <FaGoogle />
              <span className="text-base font-medium">
                Continue with Google
              </span>
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    );
}