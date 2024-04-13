import React from "react";

import TestimonialImage from "../images/sole.jpg";

function Testimonials() {
  return (
    <section id="testimonials" className="md:h-screen bg-gray-100">
      <div className="px-6 pb-32 pt-36 h-full mx-auto sm:px-6 md:max-w-7xl md:pt-0">
        <div className="flex flex-col h-full items-center max-auto lg:flex-row md:pt-40">
          <div className="w-full">
            {/* Section header */}
            <div className="mx-auto text-center pb-12 md:pb-16">
              <h2 className="h1 mb-4 text-dark-purple">
                Trusted by content creators all over the world
              </h2>
              <p className="text-xl text-gray-600">
                Some of the platforms our partners use:
              </p>
            </div>

            {/* Items */}
            <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <svg
                  className="max-w-full fill-current text-gray-400"
                  width="124"
                  height="24"
                  viewBox="0 0 124 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.734 11.56c-1.022 0-1.76.325-2.506.657v7.506c.715.066 1.125.066 1.804.066 2.454 0 2.79-1.091 2.79-2.615v-3.585c0-1.125-.384-2.03-2.088-2.03zm-16.295-.41c-1.702 0-2.09.908-2.09 2.032v.632h4.179v-.632c0-1.124-.389-2.032-2.089-2.032zm-31.566 7.813c0 .89.432 1.351 1.386 1.351 1.023 0 1.628-.324 2.375-.656v-1.781h-2.236c-1.06 0-1.525.191-1.525 1.086zm63.711-7.403c-1.705 0-2.296.904-2.296 2.03v4.106c0 1.128.591 2.035 2.296 2.035 1.7 0 2.296-.907 2.296-2.035V13.59c0-1.125-.596-2.03-2.296-2.03zM7.517 23.568H2.505V11.783H0v-4.06h2.505v-2.44C2.505 1.97 3.92 0 7.936 0h3.346v4.062H9.19c-1.565 0-1.668.568-1.668 1.627l-.006 2.033h3.787l-.442 4.06H7.517v11.786zm17.13.03H20.47l-.18-1.026a9.802 9.802 0 01-4.733 1.193c-3.064 0-4.695-1.988-4.695-4.738 0-3.243 1.903-4.401 5.307-4.401h3.465v-.701c0-1.656-.195-2.142-2.817-2.142h-4.286l.419-4.06h4.685c5.751 0 7.013 1.764 7.013 6.235v9.64zm14.207-11.517c-2.6-.433-3.347-.528-4.597-.528-2.247 0-2.926.481-2.926 2.334v3.506c0 1.854.679 2.337 2.926 2.337 1.25 0 1.997-.096 4.597-.531v3.961c-2.277.496-3.76.626-5.015.626-5.381 0-7.52-2.749-7.52-6.72v-2.845c0-3.974 2.139-6.728 7.52-6.728 1.254 0 2.738.13 5.015.629v3.959zm15.686 4.985h-9.192v.327c0 1.854.68 2.337 2.925 2.337 2.02 0 3.252-.096 5.847-.531v3.961c-2.503.496-3.807.626-6.262.626-5.382 0-7.522-2.749-7.522-6.72v-3.253c0-3.474 1.588-6.32 7.103-6.32s7.1 2.813 7.1 6.32v3.253zm16.294.075c0 3.838-1.13 6.638-7.971 6.638-2.47 0-3.92-.21-6.647-.618V1.22l5.01-.812v7.675c1.084-.391 2.485-.59 3.76-.59 5.012 0 5.847 2.183 5.847 5.69v3.958zm16.062.084c0 3.31-1.407 6.522-7.295 6.522-5.891 0-7.325-3.211-7.325-6.522v-3.197c0-3.313 1.434-6.525 7.325-6.525 5.888 0 7.295 3.212 7.295 6.525v3.197zm16.052 0c0 3.31-1.41 6.522-7.296 6.522-5.89 0-7.325-3.211-7.325-6.522v-3.197c0-3.313 1.434-6.525 7.325-6.525 5.887 0 7.296 3.212 7.296 6.525v3.197zm16.473 6.343h-5.432l-4.593-7.449v7.45h-5.013V1.218l5.013-.812v14.388l4.593-7.073h5.432l-5.015 7.718 5.015 8.128zM95.635 11.56c-1.703 0-2.293.904-2.293 2.03v4.106c0 1.128.59 2.035 2.293 2.035 1.7 0 2.301-.907 2.301-2.035V13.59c0-1.125-.601-2.03-2.301-2.03zm26.646 9.228c.844 0 1.517.669 1.517 1.504 0 .848-.673 1.509-1.523 1.509a1.511 1.511 0 01-1.531-1.51c0-.834.685-1.503 1.531-1.503h.006zm-.006.234c-.68 0-1.236.569-1.236 1.27 0 .714.557 1.275 1.242 1.275.687.007 1.235-.561 1.235-1.268 0-.708-.548-1.277-1.235-1.277h-.006zm-.288 2.145h-.275v-1.678c.144-.02.282-.039.488-.039.261 0 .432.054.537.127.101.074.156.187.156.346 0 .222-.15.355-.335.409v.013c.15.027.253.16.288.406.04.261.082.36.109.415h-.289c-.04-.054-.082-.207-.116-.428-.04-.214-.152-.294-.372-.294h-.19v.723h-.001zm0-.929h.2c.225 0 .417-.08.417-.288 0-.147-.109-.293-.418-.293-.09 0-.152.006-.2.013v.568z" />
                </svg>
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full fill-current text-gray-400"
                  version="1.1"
                  viewBox="0 0 512 128"
                >
                  <path
                    fillRule="evenodd"
                    d="M46.32 28a46.2 46.2 0 1 0 46.32 46.17A46.26 46.26 0 0 0 46.32 28zm0 87.57a41.38 41.38 0 1 1 41.48-41.4 41.44 41.44 0 0 1-41.48 41.38z"
                  />
                  <path d="M103.84 108.3h5.91V72.66c0-12.8 9.3-22 21.38-22 12.44 0 19.57 8.33 19.57 21v36.6h5.92V70.61c0-14.74-9.06-25.37-24.64-25.37-11.23 0-18.12 5.68-22.23 12.93V46.69h-5.91zm74.88-88.19h5.92v88.19h-5.92zM215.44 128c8.82 0 15.1-4.6 20.53-17.52l26.7-63.79h-6.53l-22.22 55.09-25.61-55.09h-6.88L231 107.94c-4.59 10.75-8.82 14.5-15.22 14.5a21.43 21.43 0 0 1-10.5-2.3l-2.06 5.2a27.76 27.76 0 0 0 12.22 2.66z" />
                  <path d="M327.73 42.75q2.59-3.95 5.24-8.25c1.77-2.87 3.37-5.62 4.83-8.25s2.64-5 3.57-7.1a13.26 13.26 0 0 0 1.4-4.93 10.06 10.06 0 0 0-2.23-6.64 16.59 16.59 0 0 0-5.86-4.41 30.52 30.52 0 0 0-8.29-2.44 63.33 63.33 0 0 0-9.65-.73 141.77 141.77 0 0 0-32.31 3.47 148.64 148.64 0 0 0-27 8.92 126.3 126.3 0 0 0-21.41 12 134.24 134.24 0 0 0-15.61 12.71 67 67 0 0 0-9.54 11q-3.22 4.94-3.22 7.11a7.63 7.63 0 0 0 1.56 4.82 11.09 11.09 0 0 0 3.42 3.06 5.85 5.85 0 0 0 3.42.89c1-.11 1.56-.64 1.56-1.61 0-1.87 1.17-4.58 3.52-8.15a73.59 73.59 0 0 1 10-11.67 136.24 136.24 0 0 1 15.66-12.91 136.18 136.18 0 0 1 44.76-20.8 106.81 106.81 0 0 1 27.26-3.34 19.91 19.91 0 0 1 6.85.94 8.75 8.75 0 0 1 3.68 2.33 6.11 6.11 0 0 1 1.45 3.06 19.46 19.46 0 0 1 .26 3.11 14.64 14.64 0 0 1-1.45 5.45 70.32 70.32 0 0 1-3.78 7.37q-2.34 4-5.19 8.24T315 44a161.29 161.29 0 0 0-22 4.2 87.7 87.7 0 0 0-16.44 6.07 35.86 35.86 0 0 0-10.32 7.32q-3.58 3.89-3.58 7.93a8.88 8.88 0 0 0 1 4.31 7.42 7.42 0 0 0 2.17 2.64 2.85 2.85 0 0 0 2.18.63q1-.21 1-1.77c0-1 .88-2.5 2.64-4.41a43.89 43.89 0 0 1 7.68-6.22 86 86 0 0 1 12.41-6.7 106.11 106.11 0 0 1 17.12-5.87q-6.23 8.1-12.5 15.93t-11.31 15.2a100.58 100.58 0 0 0-8.14 14.05 29.71 29.71 0 0 0-3.11 12.4 17.14 17.14 0 0 0 .73 5.08 15 15 0 0 0 1.92 4.15 9.93 9.93 0 0 0 2.75 2.8 5.62 5.62 0 0 0 3.21 1 2.27 2.27 0 0 0 1.66-.62 3.15 3.15 0 0 0 .83-1.56 12.43 12.43 0 0 0 .26-2.07v-2.18q0-5.6 3.58-13.28a154.49 154.49 0 0 1 9.13-16.55q5.54-8.86 12.29-18.41t13.17-18.88a142.27 142.27 0 0 1 21.78-1.56 15.24 15.24 0 0 1 4.51.57 27.84 27.84 0 0 1 3 1.09 9.79 9.79 0 0 0 1.6.63c.32.06.47-.21.47-.83a6.83 6.83 0 0 0-2.07-4.78q-2.08-2.17-6.33-2.18-9.85 0-18.57.63z" />
                  <path d="M399.14 64.07q-2.75 3.68-6.17 8.14t-7.26 9.08q-3.84 4.62-7.41 8.4a73 73 0 0 1-6.54 6.22q-3 2.45-4.72 2.44c-1.59 0-2.31-.76-2.18-2.28a16 16 0 0 1 2-5.65Q368.6 87 371.24 83c1.77-2.7 3.49-5.2 5.19-7.52s3.14-4.29 4.35-5.92a13 13 0 0 0 1.82-2.75c0-.27-.21-.57-.62-.88a10.7 10.7 0 0 0-1.56-.93c-.62-.31-1.28-.6-2-.88a11.65 11.65 0 0 0-2-.62 16.76 16.76 0 0 0 1.14-5.71 20.51 20.51 0 0 0-.57-5 10.82 10.82 0 0 0-1.81-3.94 8.45 8.45 0 0 0-3.27-2.6 12 12 0 0 0-5-.93 28.79 28.79 0 0 0-11.31 2.28 43 43 0 0 0-10.11 6.07 55.54 55.54 0 0 0-8.61 8.66 70.56 70.56 0 0 0-6.64 9.91 54 54 0 0 0-4.24 9.93 30 30 0 0 0-1.5 8.71 19.28 19.28 0 0 0 1.35 7.68 14.21 14.21 0 0 0 3.47 5 13 13 0 0 0 4.62 2.75 14.58 14.58 0 0 0 4.66.83 11.15 11.15 0 0 0 5.76-1.61 25.69 25.69 0 0 0 4.84-3.53 29.77 29.77 0 0 0 4.36-5.29 14.52 14.52 0 0 0 .31 5.29 7.8 7.8 0 0 0 2.13 3.58c1.07 1.08 2.78 1.61 5.13 1.61q2.7 0 6.53-2.8a67.86 67.86 0 0 0 8.15-7.16q4.31-4.35 8.86-9.8t8.61-10.69q4.05-5.23 7.37-9.8t5.18-7.16a1.58 1.58 0 0 0 .31-1.19 1 1 0 0 0-.57-.78 2 2 0 0 0-1.14-.1 1.79 1.79 0 0 0-1.19.83q-1.35 1.84-4.1 5.53zM335.31 98.3a21.12 21.12 0 0 1 .41-9.18 61.29 61.29 0 0 1 4.2-11.93A66.19 66.19 0 0 1 347 65.26a43.71 43.71 0 0 1 9.08-9.18 16.91 16.91 0 0 1 10.16-3.69 3.53 3.53 0 0 1 3.17 1.51 7 7 0 0 1 1 3.89 14.9 14.9 0 0 1-1.45 6.48 35.51 35.51 0 0 1-3.16 5.45 38.63 38.63 0 0 1-3.12 3.89 7.67 7.67 0 0 0-1.4 1.71 3.66 3.66 0 0 0 .68 1.14 22.74 22.74 0 0 0 1.5 1.87q-2.79 4-5.86 8.25a89.42 89.42 0 0 1-6.17 7.62 40.2 40.2 0 0 1-6.12 5.61 9.85 9.85 0 0 1-5.7 2.17c-2.33.02-3.75-1.22-4.3-3.68z" />
                  <path d="M428.44 104.37a63.22 63.22 0 0 0 8.25-7.16q4.31-4.35 8.76-9.8t8.4-10.69q3.94-5.23 7.16-9.8t5.08-7.16a1.58 1.58 0 0 0 .31-1.19 1 1 0 0 0-.57-.78 2 2 0 0 0-1.14-.1 1.79 1.79 0 0 0-1.19.83q-1.35 1.86-4.1 5.55t-6.17 8.14q-3.42 4.46-7.26 9.08t-7.42 8.4a71.72 71.72 0 0 1-6.55 6.22q-3 2.45-4.72 2.44-2.07 0-2.28-1.35a7 7 0 0 1 .88-3.68 38.2 38.2 0 0 1 3.27-5.45q2.18-3.11 4.72-6.63c1.69-2.36 3.42-4.79 5.18-7.32s3.37-5 4.83-7.42a54.81 54.81 0 0 0 3.57-7 15.34 15.34 0 0 0 1.4-5.91 10.37 10.37 0 0 0-1.55-6.12q-1.56-2.18-5.08-2.18a15.16 15.16 0 0 0-7.11 2 44.71 44.71 0 0 0-7.52 5.14 91.24 91.24 0 0 0-7.15 6.64q-3.43 3.53-6.12 6.64t-4.41 5.13a10.4 10.4 0 0 1-1.92 2c-.21 0 .09-.76.88-2.29s1.73-3.33 2.8-5.44 2.06-4.32 3-6.64a17 17 0 0 0 1.35-6 5.66 5.66 0 0 0-1.46-4 9.91 9.91 0 0 0-3.16-2.34 8.46 8.46 0 0 0-3.11-.83c-.93 0-1.4.09-1.4.37a25.81 25.81 0 0 1-2.13 8.87 127.75 127.75 0 0 1-5.34 11.72q-3.21 6.27-6.95 12.71t-6.97 11.76q-3.21 5.24-5.34 8.61A24 24 0 0 0 378 103a2.12 2.12 0 0 0 .46 1 6.82 6.82 0 0 0 1.4 1.4 9.54 9.54 0 0 0 2.18 1.24 6.88 6.88 0 0 0 2.7.52c.55 0 1.54-.78 3-2.33s3.15-3.62 5.19-6.18 4.32-5.48 6.84-8.76 5.12-6.64 7.78-10.07 5.36-6.77 8.09-10.06 5.35-6.2 7.83-8.76a60.35 60.35 0 0 1 6.85-6.18q3.1-2.32 5.19-2.33c1.72 0 2.36.71 1.91 2.13a22.25 22.25 0 0 1-3.16 5.6q-2.49 3.48-6.12 8.09t-6.95 9.54a78.94 78.94 0 0 0-5.7 9.91 21.72 21.72 0 0 0-2.39 9.34 11.76 11.76 0 0 0 .83 5.08 8.79 8.79 0 0 0 2.49 3.42 7.44 7.44 0 0 0 5.08 1.56c2 .01 4.31-.92 6.94-2.79z" />
                  <path d="M504.31 62.46q-1.81 2.49-4.15 5.65t-5 6.69q-2.7 3.54-5.5 6.85c-1.86 2.21-3.68 4.29-5.44 6.22a48.93 48.93 0 0 1-5 4.88 23 23 0 0 0 .78-3.58 27.93 27.93 0 0 0 .26-3.68 48.17 48.17 0 0 0-.83-8.87c-.56-2.94-1.16-5.91-1.82-8.92s-1.26-6-1.81-9.08a50.86 50.86 0 0 1-.83-9.23 11.7 11.7 0 0 1 1.24-5.5 28.27 28.27 0 0 1 2.7-4.26c1-1.24 1.86-2.36 2.69-3.37a4.5 4.5 0 0 0 1.25-2.75 1.88 1.88 0 0 0-.93-1.5 4 4 0 0 0-2.39-.67 16.35 16.35 0 0 0-6.12 1.24 19 19 0 0 0-9.7 8.71 13.48 13.48 0 0 0-1.6 6.44 50.63 50.63 0 0 0 .88 8.14c.58 3.42 1.21 7.12 1.86 11.1s1.18 8 1.56 12a55.5 55.5 0 0 1 0 11 17.72 17.72 0 0 1-2.59 8c-1.39 2.08-3.56 3.11-6.54 3.11s-5-.77-6.17-2.33a8.19 8.19 0 0 1-1.81-5.14 3.54 3.54 0 0 0-.62-2.23 1.6 1.6 0 0 0-1.35-.72 1.84 1.84 0 0 0-1.35 1 5.31 5.31 0 0 0-.62 2.91 14 14 0 0 0 .77 4.46 11.39 11.39 0 0 0 2.39 4 12.43 12.43 0 0 0 4.1 2.91 14.1 14.1 0 0 0 5.91 1.14h1.55a20.53 20.53 0 0 0 10-2.8 54.28 54.28 0 0 0 10-7.16 95 95 0 0 0 9.44-9.8q4.48-5.32 8.36-10.6t6.95-9.8q3.06-4.56 4.93-7.16a1.41 1.41 0 0 0 .25-1.19 1.11 1.11 0 0 0-.62-.78 1.86 1.86 0 0 0-1.09-.1 1.82 1.82 0 0 0-1.14.83q-1.03 1.48-2.85 3.94z" />
                  <path d="M65.53 71.19v-3.77a16.75 16.75 0 0 0-5.08-12 17.31 17.31 0 0 0-12.19-5h-3.1a17.31 17.31 0 0 0-12.18 5 16.7 16.7 0 0 0-5.07 12v3.77l-2.14 3.86v5.56a18.64 18.64 0 0 0 5.64 13.33A19.37 19.37 0 0 0 45 99.48h3.45A19.33 19.33 0 0 0 62 93.94a18.61 18.61 0 0 0 5.65-13.33v-5.56zm-16.8 17.06v4.45a1.93 1.93 0 0 1-.89 1.64H47a1 1 0 0 1-.3 0h-.2a1.18 1.18 0 0 1-.25 0h-.38a2 2 0 0 1-.92-1.67v-4.42a5.3 5.3 0 0 1 2-10.24h.11a5.3 5.3 0 0 1 2 10.24zm9.09-16.94H35.61v-3.89a9.27 9.27 0 0 1 2.81-6.63A9.62 9.62 0 0 1 45.16 58h3.1A9.61 9.61 0 0 1 55 60.79a9.31 9.31 0 0 1 2.81 6.63z" />
                </svg>
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full fill-current text-gray-400"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.24759 4.07011C8.42981 2.66637 10.1045 2 12 2C13.9392 2 15.604 2.78414 16.7639 4.21322C17.7942 5.48259 18.3772 7.1971 18.4826 9.1902C18.5118 9.19446 18.5425 9.19891 18.5749 9.20362L18.5955 9.20661C18.7648 9.23117 18.9679 9.26103 19.179 9.3019C19.9604 9.45323 21.2931 9.83505 21.7522 11.2659C21.9827 11.9846 21.8669 12.6509 21.4644 13.1786C21.1168 13.6343 20.6205 13.897 20.2664 14.0565C20.0896 14.1362 19.9144 14.2043 19.7668 14.2605C20.1122 15.1966 20.7141 16.1598 21.3801 17.0322C22.0073 17.8538 21.8414 18.8955 21.5172 19.574C21.1925 20.2537 20.4899 21.031 19.4684 21.0753C18.8903 21.1004 18.2833 21.1596 17.6791 21.2695C17.4062 21.3192 17.0841 21.4286 16.6839 21.5939C16.4453 21.6925 16.2264 21.79 15.9902 21.8953C15.8025 21.9789 15.6038 22.0674 15.3754 22.1653C14.4345 22.5685 13.2798 23 12 23C10.7201 23 9.56542 22.5685 8.62452 22.1653C8.39619 22.0674 8.19749 21.9789 8.00977 21.8953C7.7735 21.79 7.55463 21.6925 7.31601 21.5939C6.91585 21.4286 6.5938 21.3192 6.32087 21.2695C5.71667 21.1596 5.10964 21.1004 4.53154 21.0753C3.51004 21.031 2.8074 20.2537 2.48273 19.574C2.15858 18.8955 1.99263 17.8538 2.61986 17.0322C3.29007 16.1543 3.89533 15.1844 4.23963 14.2428C4.10623 14.1891 3.94976 14.1248 3.79112 14.0506C3.4447 13.8885 2.97483 13.6299 2.62849 13.1959C2.24058 12.7098 2.07004 12.083 2.22151 11.365C2.54568 9.82833 3.99142 9.44433 4.75598 9.30082C4.97305 9.26008 5.18352 9.23035 5.36087 9.20574C5.37272 9.2041 5.38436 9.20248 5.39582 9.2009C5.43821 9.19502 5.47796 9.18951 5.51542 9.18424C5.61483 7.05895 6.19378 5.32139 7.24759 4.07011ZM8.77735 5.35846C8.01533 6.26327 7.49997 7.71867 7.49997 9.85714V9.96228L7.4781 10.0651C7.36668 10.5892 6.96437 10.8336 6.76444 10.9277C6.55376 11.0269 6.32735 11.0761 6.16722 11.1058C6.01123 11.1348 5.83742 11.1589 5.68179 11.1804C5.66625 11.1825 5.65088 11.1847 5.63573 11.1868C5.45838 11.2114 5.29025 11.2355 5.12494 11.2665C4.35999 11.4101 4.2159 11.6002 4.17844 11.7778C4.15178 11.9042 4.1748 11.9296 4.18806 11.9442C4.1894 11.9457 4.19065 11.947 4.19173 11.9484C4.24504 12.0152 4.37304 12.1147 4.63867 12.239C4.76311 12.2972 4.89394 12.3505 5.03949 12.4087C5.05104 12.4134 5.06285 12.4181 5.07488 12.4229C5.2016 12.4736 5.35282 12.534 5.48646 12.5966C5.6173 12.6579 5.83672 12.7677 6.02161 12.9451C6.23755 13.1522 6.49946 13.5565 6.3728 14.0887C6.00824 15.6205 5.08855 17.0942 4.21053 18.2445C4.20735 18.2504 4.19426 18.2799 4.19451 18.3496C4.19485 18.445 4.222 18.5751 4.28737 18.7119C4.35267 18.8486 4.43795 18.954 4.51509 19.0173C4.57857 19.0694 4.61441 19.0766 4.61911 19.0773C5.27019 19.1055 5.96946 19.1727 6.67907 19.3019C7.16246 19.3899 7.6398 19.5637 8.07989 19.7456C8.32241 19.8458 8.60112 19.9695 8.87176 20.0896C9.06094 20.1735 9.24618 20.2558 9.41237 20.327C10.3108 20.712 11.1498 21 12 21C12.8502 21 13.6891 20.712 14.5876 20.327C14.7538 20.2558 14.939 20.1735 15.1282 20.0896C15.3988 19.9695 15.6775 19.8458 15.9201 19.7456C16.3601 19.5637 16.8375 19.3899 17.3209 19.3019C18.0305 19.1727 18.7298 19.1055 19.3808 19.0773C19.3856 19.0765 19.4214 19.0694 19.4849 19.0173C19.562 18.954 19.6473 18.8486 19.7126 18.7119C19.7779 18.5751 19.8051 18.445 19.8054 18.3496C19.8058 18.2566 19.7823 18.2353 19.7904 18.2458C18.9121 17.0954 17.9918 15.6211 17.6271 14.0887C17.4917 13.5198 17.8013 13.1083 18.0141 12.9192C18.2033 12.751 18.4261 12.6464 18.5614 12.5869C18.6956 12.5278 18.8479 12.4701 18.9782 12.4207C18.9947 12.4144 19.0108 12.4083 19.0265 12.4024C19.1787 12.3445 19.316 12.2911 19.4449 12.233C19.7142 12.1117 19.8296 12.0191 19.8693 11.9718C19.8679 11.9554 19.8631 11.9248 19.8478 11.8769C19.7569 11.5935 19.4997 11.4012 18.7987 11.2654C18.6392 11.2345 18.4784 11.2106 18.3084 11.1859C18.2957 11.184 18.2828 11.1822 18.2697 11.1803C18.1195 11.1586 17.9495 11.134 17.7967 11.104C17.6419 11.0737 17.418 11.0226 17.2083 10.9183C16.9978 10.8136 16.628 10.5646 16.5218 10.0651L16.5 9.96228V9.85714C16.5 7.90789 15.9926 6.43652 15.211 5.47359C14.4459 4.53088 13.3608 4 12 4C10.5955 4 9.52013 4.47649 8.77735 5.35846Z"
                    ></path>{" "}
                  </g>
                </svg>
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <svg
                  width="64px"
                  height="64px"
                  viewBox="62.370000000000005 70.49 675.3000000000001 675.3000000000001"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="max-w-full fill-current text-gray-400"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M597.23 203.42v64.11s-29.11-1.19-50.67-6.91c-30.09-8-49.44-20.27-49.44-20.27s-13.35-8.75-14.43-9.37V400c0 9.41-2.47 32.92-10 52.51-9.83 25.65-25 42.48-27.79 45.92 0 0-18.46 22.75-51 38.07-29.33 13.82-55.09 13.47-62.8 13.82 0 0-44.52 1.84-84.6-25.33l-.2-.15a157.5 157.5 0 0 1-11.93-13.52c-12.79-16.27-20.63-35.51-22.6-41a.24.24 0 0 1 0-.07c-3.17-9.54-9.83-32.45-8.92-54.64 1.61-39.15 14.81-63.18 18.3-69.2A162.84 162.84 0 0 1 256.68 303a148.37 148.37 0 0 1 42.22-25 141.61 141.61 0 0 1 52.4-11v64.9s-32.94-10.9-59.3 8.4c-18.43 14.28-28.21 28.21-31.09 53.09-.12 18.31 4.37 44.22 29 61.5q4.31 2.85 8.46 5.06a65.85 65.85 0 0 0 15.5 15.05c24.06 15.89 44.22 17 70 6.68C401.06 474.78 414 459.23 420 442c3.77-10.76 3.72-21.59 3.72-32.79V90.61h60c2.48 14.71 9.34 35.65 27.48 56.39a132.76 132.76 0 0 0 24.41 20.62c2.64 2.85 16.14 16.94 33.47 25.59a130.62 130.62 0 0 0 28.15 10.21z"></path>{" "}
                    <path d="M187.89 450.39v.05l1.48 4.21c-.17-.49-.72-1.98-1.48-4.26z"></path>{" "}
                    <path d="M298.9 278a148.37 148.37 0 0 0-42.22 25 162.84 162.84 0 0 0-35.52 43.5c-3.49 6-16.69 30.05-18.3 69.2-.91 22.19 5.75 45.1 8.92 54.64a.24.24 0 0 0 0 .07c2 5.44 9.81 24.68 22.6 41a157.5 157.5 0 0 0 11.93 13.52 166.64 166.64 0 0 1-35.88-33.64c-12.68-16.13-20.5-35.17-22.54-40.79a1 1 0 0 1 0-.12v-.07c-3.18-9.53-9.86-32.45-8.93-54.67 1.61-39.15 14.81-63.18 18.3-69.2a162.68 162.68 0 0 1 35.52-43.5 148.13 148.13 0 0 1 42.22-25 144.63 144.63 0 0 1 29.78-8.75 148 148 0 0 1 46.57-.69V267a141.61 141.61 0 0 0-52.45 11z"></path>{" "}
                    <path d="M483.77 90.61h-60v318.61c0 11.2 0 22-3.72 32.79-6.06 17.22-18.95 32.77-36.13 39.67-25.79 10.36-45.95 9.21-70-6.68a65.85 65.85 0 0 1-15.54-15c20.49 10.93 38.83 10.74 61.55 1.62 17.17-6.9 30.08-22.45 36.12-39.68 3.78-10.76 3.73-21.59 3.73-32.78V70.49h82.85s-.93 7.92 1.14 20.12zM597.23 185.69v17.73a130.62 130.62 0 0 1-28.1-10.21c-17.33-8.65-30.83-22.74-33.47-25.59a93.69 93.69 0 0 0 9.52 5.48c21.07 10.52 41.82 13.66 52.05 12.59z"></path>{" "}
                    <path d="M485.84 694.78a22.75 22.75 0 0 0 1 6.73 2.59 2.59 0 0 0 .14.45 25.28 25.28 0 0 0 24.16 17.8v25.59c-12.46 0-21.38.44-35-7.59-15.44-9.16-24.14-25.91-24.14-43.3 0-17.94 9.74-35.91 26.25-44.57 12-6.28 21.09-6.32 32.92-6.32v25.58a25.31 25.31 0 0 0-25.31 25.31z"></path>{" "}
                    <path d="M536.64 694.78a23.07 23.07 0 0 1-1 6.73c0 .15-.09.3-.14.45a25.3 25.3 0 0 1-24.16 17.8v25.59c12.45 0 21.38.44 34.95-7.59 15.49-9.16 24.21-25.91 24.21-43.3 0-17.94-9.74-35.91-26.25-44.57-12-6.28-21.09-6.32-32.91-6.32v25.58a25.31 25.31 0 0 1 25.3 25.31z"></path>{" "}
                    <path d="M119.51 620.36h93.71l-8.66 25.78H180v98.67h-30.13v-98.67h-30.36zm248.35 0v25.78h30.36v98.67h30.17v-98.67h24.52l8.66-25.78zm-134.25 29.38A14.6 14.6 0 1 0 219 635.15a14.59 14.59 0 0 0 14.61 14.59zM219 744.81h29.58v-84.75H219zM355 649h-34.6l-29.82 29.82v-58.36h-29.39l-.09 124.35h29.67v-32.4L300 704l28.8 40.77h31.72l-41.72-59.62zm283.77 36.17L674.94 649h-34.59l-29.83 29.82v-58.36h-29.38L581 744.81h29.68v-32.4L620 704l28.8 40.77h31.73zm-76.06 9.27c0 28.1-23.09 50.89-51.57 50.89s-51.57-22.79-51.57-50.89 23.09-50.89 51.57-50.89 51.57 22.8 51.57 50.91zm-26.27 0a25.3 25.3 0 1 0-25.3 25.3 25.3 25.3 0 0 0 25.3-25.28z"></path>{" "}
                  </g>
                </svg>
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
                <svg
                  className="max-w-full fill-current text-gray-400"
                  width="109px"
                  height="109px"
                  viewBox="0 -212.78 594.094 594.094"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M30.577.586C18.417 5.68 5.049 20.053.827 38.108c-5.347 22.869 16.904 32.54 18.729 29.374 2.148-3.727-3.987-4.987-5.25-16.853-1.632-15.326 5.493-32.451 14.461-39.965 1.667-1.396 1.587.547 1.587 4.141 0 6.428-.355 64.122-.355 76.164 0 16.293-.673 21.438-1.882 26.521-1.225 5.152-3.193 8.633-1.702 9.975 1.667 1.5 8.783-2.068 12.903-7.818 4.94-6.896 6.669-15.178 6.98-24.172.375-10.842.359-28.046.375-37.859.015-9 .151-35.354-.158-51.197C46.44 2.533 35.663-1.544 30.577.586zM591.424 86.18c-1.764 0-2.568 1.818-3.234 4.879-2.311 10.643-4.738 13.045-7.869 13.045-3.498 0-6.642-5.27-7.449-15.818-.635-8.294-.533-23.565.279-38.754.166-3.121-.695-6.209-9.066-9.25-3.602-1.309-8.838-3.234-11.445 3.059-7.365 17.779-10.248 31.895-10.926 37.627-.035.297-.398.357-.463-.336-.432-4.592-1.398-12.938-1.518-30.471-.023-3.421-.748-6.333-4.524-8.717-2.45-1.548-9.89-4.283-12.569-1.028-2.32 2.662-5.009 9.826-7.802 18.318-2.27 6.901-3.851 11.57-3.851 11.57s.029-18.623.057-25.687c.012-2.665-1.816-3.554-2.367-3.714-2.48-.72-7.369-1.923-9.443-1.923-2.561 0-3.188 1.431-3.188 3.516 0 .273-.404 24.519-.404 41.473 0 .736.001 1.54.004 2.394-1.416 7.792-6.008 18.37-11.002 18.37-5 0-7.358-4.422-7.358-24.634 0-11.79.354-16.918.527-25.445.102-4.912.297-8.685.285-9.54-.037-2.625-4.576-3.948-6.688-4.438-2.122-.492-3.966-.684-5.406-.602-2.038.115-3.479 1.452-3.479 3.291 0 .986.011 2.86.011 2.86-2.625-4.125-6.848-6.996-9.656-7.828-7.566-2.246-15.461-.255-21.416 8.077-4.733 6.621-7.586 14.121-8.709 24.895-.821 7.876-.553 15.864.906 22.619-1.763 7.622-5.036 10.745-8.62 10.745-5.203 0-8.975-8.492-8.537-23.18.289-9.661 2.222-16.44 4.335-26.248.901-4.182.169-6.37-1.667-8.468-1.684-1.925-5.271-2.907-10.43-1.698-3.674.861-8.928 1.789-13.733 2.501 0 0 .29-1.157.528-3.197 1.25-10.698-10.375-9.83-14.084-6.413-2.214 2.04-3.721 4.446-4.293 8.772-.907 6.864 4.691 10.103 4.691 10.103-1.837 8.41-6.34 19.394-10.988 27.336-2.49 4.255-4.396 7.408-6.854 10.76a937.569 937.569 0 0 1-.02-3.738c-.057-17.679.179-31.593.282-36.608.102-4.912.299-8.584.287-9.439-.027-1.92-1.148-2.646-3.48-3.563-2.062-.812-4.5-1.374-7.029-1.57-3.191-.248-5.115 1.444-5.064 3.446.01.378.01 2.699.01 2.699-2.625-4.125-6.848-6.996-9.656-7.828-7.566-2.246-15.461-.255-21.416 8.077-4.732 6.621-7.831 15.912-8.709 24.812-.818 8.295-.667 15.344.448 21.282-1.203 5.946-4.662 12.164-8.573 12.164-5 0-7.845-4.422-7.845-24.634 0-11.79.354-16.917.527-25.445.102-4.912.297-8.685.285-9.54-.037-2.625-4.576-3.948-6.688-4.438-2.21-.512-4.118-.699-5.583-.591-1.934.144-3.292 1.874-3.292 3.165v2.976c-2.625-4.125-6.848-6.996-9.656-7.828-7.566-2.246-15.417-.223-21.416 8.077-3.912 5.412-7.079 11.412-8.709 24.694-.471 3.838-.679 7.433-.652 10.792-1.56 9.54-8.449 20.535-14.086 20.535-3.298 0-6.439-6.396-6.439-20.029 0-18.16 1.125-44.015 1.314-46.507 0 0 7.121-.121 8.5-.137 3.553-.039 6.77.045 11.5-.197 2.373-.121 4.659-8.637 2.21-9.691-1.109-.477-8.955-.895-12.064-.961-2.615-.059-9.896-.598-9.896-.598s.653-17.162.806-18.975c.129-1.512-1.826-2.289-2.947-2.762-2.727-1.152-5.165-1.705-8.056-2.301-3.994-.824-5.807-.018-6.16 3.354-.533 5.115-.809 20.101-.809 20.101-2.932 0-12.943-.573-15.875-.573-2.725 0-5.664 11.715-1.898 11.859 4.333.168 11.884.313 16.89.464 0 0-.223 26.282-.223 34.396 0 .863.003 1.694.009 2.501-2.755 14.36-12.46 22.117-12.46 22.117 2.084-9.5-2.173-16.634-9.84-22.673-2.826-2.226-8.402-6.438-14.642-11.055 0 0 3.614-3.562 6.819-10.729 2.271-5.076 2.369-10.885-3.206-12.166-9.209-2.117-16.804 4.646-19.069 11.867-1.755 5.595-.819 9.745 2.619 14.058.251.315.523.636.804.96-2.079 4.007-4.935 9.402-7.354 13.586-6.715 11.616-11.786 20.804-15.62 20.804-3.064 0-3.022-9.328-3.022-18.062 0-7.529.556-18.849 1-30.569.147-3.876-1.792-6.084-5.041-8.084-1.974-1.215-6.187-3.604-8.626-3.604-3.652 0-14.189.497-24.145 29.296-1.255 3.63-3.72 10.244-3.72 10.244l.212-34.632c0-.812-.433-1.598-1.423-2.135-1.678-.91-6.159-2.773-10.143-2.773-1.898 0-2.846.883-2.846 2.643l-.348 54.183c0 4.117.107 8.92.515 11.02.405 2.104 1.062 3.814 1.876 4.832.812 1.016 1.752 1.791 3.302 2.111 1.442.297 9.339 1.311 9.75-1.707.492-3.617.51-7.529 4.657-22.119 6.456-22.715 14.873-33.798 18.831-37.734.691-.688 1.481-.729 1.443.397-.168 4.979-.762 17.424-1.163 27.996-1.072 28.292 4.075 33.536 11.43 33.536 5.627 0 13.559-5.592 22.062-19.744 5.3-8.82 10.447-17.468 14.146-23.701 2.577 2.386 5.468 4.953 8.359 7.696 6.716 6.374 8.921 12.431 7.458 18.177-1.119 4.393-5.333 8.92-12.833 4.52-2.186-1.283-3.12-2.275-5.317-3.723-1.181-.777-2.983-1.01-4.064-.195-2.809 2.117-4.415 4.811-5.332 8.145-.892 3.244 2.357 4.959 5.725 6.459 2.9 1.291 9.133 2.461 13.108 2.594 15.487.518 27.895-7.478 36.531-28.104 1.547 17.813 8.126 27.893 19.559 27.893 7.643 0 15.306-9.879 18.657-19.598.962 3.962 2.386 7.406 4.225 10.32 8.809 13.957 25.898 10.953 34.482-.898 2.653-3.662 3.058-4.979 3.058-4.979 1.252 11.191 10.264 15.102 15.424 15.102 5.779 0 11.746-2.732 15.928-12.147a28.761 28.761 0 0 0 1.609 2.923c8.809 13.957 25.898 10.953 34.482-.898.404-.557.756-1.061 1.062-1.514l.252 7.352-7.902 7.248c-13.247 12.141-23.311 21.35-24.051 32.074-.941 13.674 10.142 18.756 18.539 19.422 8.902.707 16.539-4.215 21.227-11.104 4.125-6.062 6.824-19.111 6.627-32-.079-5.161-.209-11.723-.312-18.757 4.65-5.4 9.89-12.226 14.713-20.214 5.258-8.707 10.892-20.398 13.776-29.497 0 0 4.895.042 10.119-.3 1.671-.109 2.15.231 1.842 1.457-.373 1.479-6.6 25.498-.917 41.498 3.89 10.953 12.659 14.477 17.858 14.477 6.086 0 11.907-4.596 15.027-11.421.376.761.77 1.497 1.198 2.177 8.809 13.957 25.838 10.936 34.482-.898 1.95-2.67 3.058-4.979 3.058-4.979 1.855 11.582 10.862 15.16 16.021 15.16 5.374 0 10.474-2.203 14.611-11.994.173 4.312.445 7.836.875 8.947.262.68 1.789 1.533 2.9 1.945 4.916 1.822 9.93.961 11.785.586 1.285-.26 2.287-1.291 2.424-3.953.359-6.99.139-18.734 2.258-27.463 3.557-14.648 6.875-20.331 8.449-23.143.881-1.576 1.875-1.836 1.911-.168.073 3.375.241 13.286 1.62 26.602 1.012 9.793 2.363 15.582 3.402 17.414 2.965 5.238 6.627 5.486 9.609 5.486 1.896 0 5.864-.523 5.509-3.857-.173-1.625.13-11.668 3.637-26.099 2.29-9.424 6.108-17.938 7.485-21.052.508-1.148.744-.243.736-.067-.29 6.49-.941 27.718 1.703 39.328 3.584 15.729 13.951 17.488 17.564 17.488 7.713 0 14.021-5.867 16.146-21.305.517-3.719-.241-6.588-2.512-6.588zm-323.089-9.544c-.442 8.17-2.036 15-4.594 19.961-4.628 8.979-13.785 11.826-17.822-1.148-2.911-9.355-1.92-22.112-.709-29.002 1.797-10.227 6.297-17.477 13.322-16.79 7.216.706 10.724 9.979 9.803 26.979zm70.501.118c-.412 7.715-2.412 15.465-4.594 19.844-4.504 9.041-13.92 11.867-17.822-1.148-2.668-8.893-2.029-20.402-.709-27.653 1.713-9.41 5.865-18.139 13.322-18.139 7.25-.001 10.825 7.953 9.803 27.096zm1.84 52.635c-.098 14.074-2.312 26.414-7.062 29.998-6.737 5.082-15.792 1.27-13.917-9 1.659-9.088 9.505-18.369 20.999-29.709-.001 0 .023 2.586-.02 8.711zm121.702-52.553c-.392 8.47-2.267 15.091-4.594 19.761-4.505 9.041-13.854 11.848-17.822-1.148-2.163-7.084-2.264-18.916-.709-28.802 1.583-10.07 6.003-17.677 13.322-16.99 7.219.677 10.598 9.979 9.803 27.179z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-3xl mx-auto mt-20">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                {/* Testimonial */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <img
                      className="relative rounded-full"
                      src={TestimonialImage}
                      width="90"
                      height="90"
                      alt="Testimonial 01"
                    />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    “ I love this product and would recommend it to anyone.
                    Could be not easier to use and has helped me monetize my
                    audience in a fun and secure way.“
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">
                    <a
                      href="https://www.instagram.com/solesanchezcajiao/?hl=en"
                      className="hover:text-bright-purple"
                    >
                      @solesanchezcajiao
                    </a>
                  </cite>
                  <div className="text-gray-600">
                    <span>Content Creator</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;