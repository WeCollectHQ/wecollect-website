import React from "react";

function Loading({ width = "90", height = "90", isFullScreen = true }) {
  return (
    <div className={`flex justify-center items-center ${isFullScreen ? "h-screen" : ""}`}>
      <div className="motion-safe:animate-spin">
        <svg
          width={width}
          height={height}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse id="eclipseX" cx="14.8295" cy="3.40909" rx="3.57954" ry="3.40909" fill="#0E0E0E" />
          <circle id="circleY" cx="3.57954" cy="14.4881" r="3.57954" fill="#0E0E0E" />
          <circle id="circleX" cx="26.4204" cy="14.4881" r="3.57954" fill="#481ACA" />
          <ellipse id="eclipseY" cx="14.8295" cy="25.9091" rx="3.57954" ry="3.40909" fill="#56509B" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 13.1887C16.0151 13.1887 16.8381 12.3844 16.8381 11.3924C16.8381 11.392 16.8381 11.3917 16.8381 11.3914H18.3441V17.9273H11.6562V11.3914H13.1619C13.1619 11.3917 13.1619 11.392 13.1619 11.3924C13.1619 12.3844 13.9849 13.1887 15 13.1887Z"
            fill="#C02727"
          />
        </svg>
      </div>
    </div>
  );
}

export default Loading;
