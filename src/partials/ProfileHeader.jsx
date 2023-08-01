import React from "react";
import { Tooltip } from "@material-tailwind/react";

import ProfileUploadButton from "../partials/UploadButton";

const ProfileHeader = ({ fetchedUser, lookingAtOwnProfile }) => {
  return (
    <div className="mb-20 bg-gray-200">
      <div className="pt-32 pb-12 px-40 md:pt-30 flex items-center">
        {/*  Profile Pic */}
        <div className="px-24">
          <div className="rounded-full">
            {fetchedUser.avatarUrl && (
              <img
                className="rounded-full mb-8 p-1"
                src={fetchedUser.avatarUrl}
                alt="profile-image"
                height="200"
                width="200"
              />
            )}
          </div>

          {lookingAtOwnProfile && (
            <ProfileUploadButton fetchedUser={fetchedUser} />
          )}
        </div>

        {/*  User name, username + social media links. */}
        {/*  TODO: Move social media icons into a separate component and add IG & Twitter links to user's table. */}
        <div>
          <h1 className="text-4xl">
            {fetchedUser.firstName} {fetchedUser.lastName}
          </h1>

          <div className="flex  items-center">
            <h3 className="text-2xl mr-2">@{fetchedUser.username}</h3>

            <Tooltip content="Copy list link" placement="bottom">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://wishtree.io/users/${fetchedUser.username}`
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </button>
            </Tooltip>
          </div>
          {/* <div className="flex"> */}
          {/*   <svg */}
          {/*     xmlns="http://www.w3.org/2000/svg" */}
          {/*     viewBox="0 0 24 24" */}
          {/*     width="24px" */}
          {/*     height="24px" */}
          {/*   > */}
          {/*     {" "} */}
          {/*     <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" /> */}
          {/*   </svg> */}
          {/*   <svg */}
          {/*     xmlns="http://www.w3.org/2000/svg" */}
          {/*     viewBox="0 0 24 24" */}
          {/*     width="24px" */}
          {/*     height="24px" */}
          {/*   > */}
          {/*     {" "} */}
          {/*     <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" /> */}
          {/*   </svg> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
