"use client";

import { createUserScholarship } from "@/lib/user-scholarship-actions";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

const ScholarshipForm = ({ id }: { id: string }) => {
  const [state, action, isPending] = useActionState(createUserScholarship, null);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (!state) return;

    if (state.success){
      toast.success(state.message);
      formRef.current?.reset();
    }
    else{
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="max-w-2xl mx-auto py-4 md:py-8 bg-background">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Your Details
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Fill this in once, we use it to help you track and access your
          scholarship application easily.
        </p>
      </div>

      {/* Form Card */}
      <form action={action}>
        <div className="bg-white rounded-2xl shadow-sm border p-6 sm:p-8">
          {/* SECTION 1: Personal Info */}
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Personal Information
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="hidden" name="scholarshipId" value={id} />
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
                name="fullname"
                placeholder="e.g. Kwame Asante"
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {state?.errors?.fieldErrors?.fullname && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.fullname}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-1">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="phone"
              >
                Phone Number
                <span className="text-gray-400 font-normal">(WhatsApp)</span>
              </label>
              <input
                type="tel"
                name="phonenumber"
                placeholder="+233 XX XXX XXXX"
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {state?.errors?.fieldErrors?.phonenumber && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.phonenumber}
                </p>
              )}
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
              {state?.errors?.fieldErrors?.email && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.email}
                </p>
              )}
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
                name="current_location"
                placeholder="e.g. Kumasi, Ashanti"
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {state?.errors?.fieldErrors?.current_location && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.current_location}
                </p>
              )}
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
                name="hometown"
                placeholder="e.g. Sunyani, Brong-Ahafo"
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {state?.errors?.fieldErrors?.hometown && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.hometown}
                </p>
              )}
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col space-y-1">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {state?.errors?.fieldErrors?.dob && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.dob}
                </p>
              )}
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
              {state?.errors?.fieldErrors?.gender && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.gender}
                </p>
              )}
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
              {state?.errors?.fieldErrors?.school && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.school}
                </p>
              )}
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
                    name="level"
                    value="undergraduate"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Undergraduate</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="level"
                    value="diploma"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Diploma</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="level"
                    value="shs"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">SHS</span>
                </label>
              </div>
              {state?.errors?.fieldErrors?.level && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.level}
                </p>
              )}
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
                    value="first"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">First Year</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="current_year"
                    value="second"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Second Year</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="current_year"
                    value="third"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Third Year</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="current_year"
                    value="fourth"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Fourth Year</span>
                </label>
              </div>
              {state?.errors?.fieldErrors?.current_year && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.current_year}
                </p>
              )}
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
              {state?.errors?.fieldErrors?.programme && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.programme}
                </p>
              )}
            </div>

            {/* GPA / WASSCE */}
            <div className="flex flex-col space-y-1 sm:col-span-2">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="gpa"
              >
                Current GPA / WASSCE Grade{" "}
                <span className="text-gray-400 font-normal">
                  (if applicable)
                </span>
              </label>
              <input
                type="text"
                id="gpa"
                name="gpa"
                placeholder="e.g. 3.5 for GPA or 8 for WASSCE aggregate"
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {state?.errors?.fieldErrors?.gpa && (
                <p className="text-sm text-red-500">
                  {state.errors.fieldErrors.gpa}
                </p>
              )}
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
            {state?.errors?.fieldErrors?.has_applied && (
              <p className="text-sm text-red-500">
                {state.errors.fieldErrors.has_applied}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors duration-150 cursor-pointer"
              disabled={isPending}
            >
              {isPending ? "Submitting" : "Save Details"}
            </button>
          </div>
        </div>
      </form>

      <p className="text-center text-xs text-gray-400 mt-6">
        Your information is only used to help you access your scholarship.
      </p>
    </div>
  );
};

export default ScholarshipForm;
