const ScholarshipForm = ({ id }: { id: string }) => {
  return (
    <div className="max-w-2xl mx-auto py-4 md:py-8 bg-background">
      {/* Header */}
      <div className="mb-8">
        {/* <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-1">
          Scholarship Application
        </p> */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Your Details
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Fill this in once, we use it to help you track and access your
          scholarship application easily.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 sm:p-8">
        {/* SECTION 1: Personal Info */}
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Personal Information
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="flex flex-col space-y-1 sm:col-span-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="full_name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              placeholder="e.g. Kwame Asante"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col space-y-1">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number{" "}
              <span className="text-gray-400 font-normal">(WhatsApp)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+233 XX XXX XXXX"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Current Location */}
          <div className="flex flex-col space-y-1">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="current_location"
            >
              Current Location
            </label>
            <input
              type="text"
              id="current_location"
              name="current_location"
              placeholder="e.g. Kumasi, Ashanti"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Hometown */}
          <div className="flex flex-col space-y-1">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="hometown"
            >
              Hometown
            </label>
            <input
              type="text"
              id="hometown"
              name="hometown"
              placeholder="e.g. Sunyani, Brong-Ahafo"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-700" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col space-y-1">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              defaultValue=""
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* SECTION 2: Academic Info */}
        <div className="border-t border-gray-100 mt-8 pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Academic Information
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Current School */}
          <div className="flex flex-col space-y-1 sm:col-span-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="school"
            >
              Current School / Institution
            </label>
            <input
              type="text"
              id="school"
              name="school"
              placeholder="e.g. KNUST, University of Ghana"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Education Level */}
          <div className="flex flex-col space-y-2 sm:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Current Education Level
            </label>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="education_level"
                  value="undergraduate"
                  className="accent-blue-600 w-4 h-4"
                />
                <span className="text-sm text-gray-700">Undergraduate</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="education_level"
                  value="diploma"
                  className="accent-blue-600 w-4 h-4"
                />
                <span className="text-sm text-gray-700">Diploma</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="education_level"
                  value="shs"
                  className="accent-blue-600 w-4 h-4"
                />
                <span className="text-sm text-gray-700">SHS</span>
              </label>
            </div>
          </div>

          {/* Current Year */}
          <div className="flex flex-col space-y-2 sm:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Current Year / Level
            </label>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="current_year"
                  value="year_1"
                  className="accent-blue-600 w-4 h-4"
                />
                <span className="text-sm text-gray-700">First Year</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="current_year"
                  value="year_2"
                  className="accent-blue-600 w-4 h-4"
                />
                <span className="text-sm text-gray-700">Second Year</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="current_year"
                  value="year_3"
                  className="accent-blue-600 w-4 h-4"
                />
                <span className="text-sm text-gray-700">Third Year</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="current_year"
                  value="year_4"
                  className="accent-blue-600 w-4 h-4"
                />
                <span className="text-sm text-gray-700">Fourth Year</span>
              </label>
            </div>
          </div>

          {/* Programme of Study */}
          <div className="flex flex-col space-y-1 sm:col-span-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="programme"
            >
              Programme of Study
            </label>
            <input
              type="text"
              id="programme"
              name="programme"
              placeholder="e.g. BSc Computer Science"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* GPA / WASSCE */}
          <div className="flex flex-col space-y-1 sm:col-span-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="gpa">
              Current GPA / WASSCE Grade{" "}
              <span className="text-gray-400 font-normal">(if applicable)</span>
            </label>
            <input
              type="text"
              id="gpa"
              name="gpa"
              placeholder="e.g. 3.5 for GPA or 8 for WASSCE aggregate"
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* SECTION 3: Application Status */}
        <div className="border-t border-gray-100 mt-8 pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Application Status
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Have you already applied for this scholarship?
          </label>
          <div className="flex gap-6 mt-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="has_applied"
                value="yes"
                className="accent-blue-600 w-4 h-4"
              />
              <span className="text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="has_applied"
                value="no"
                className="accent-blue-600 w-4 h-4"
              />
              <span className="text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors duration-150 cursor-pointer"
          >
            Save Details
          </button>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">
        Your information is only used to help you access your scholarship.
      </p>
    </div>
  );
};

export default ScholarshipForm;
