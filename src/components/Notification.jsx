import React, { memo } from "react";

const Notification = ({ showNotification, type, title, text }) => {
  const labelColor = type === "success" ? "green-600" : "red-600";

  if (showNotification) {
    return (
      <div
        role="alert"
        className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl z-50 top-28 right-5 absolute"
      >
        <div className="flex items-start gap-4">
          <span className={`text-${labelColor}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          <div className="flex-1">
            <strong className="block font-medium text-gray-900">{title}</strong>

            <p className="mt-1 text-sm text-gray-700">{text}</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default memo(Notification);
