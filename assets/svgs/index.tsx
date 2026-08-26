interface ArrowUpRightIconProps {
  className?: string;
  size?: number;
}

export const ArrowUpRightIcon = ({
  className = "",
  size = 24,
}: ArrowUpRightIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.16593 5.10577H18.8939V17.8337M18.01 5.98965L5.10527 18.8943"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
};

export const OpenMenuIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="39" height="39" stroke="#B9B9CC" />
      <path
        d="M11 13H29V15H11V13ZM16 19H29V21H16V19ZM21 25H29V27H21V25Z"
        fill="#0D0D26"
      />
    </svg>
  );
};

export const CloseMenuIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="39" height="39" stroke="#B9B9CC" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.7091 13.71L26.2891 12.29L19.9991 18.59L13.709 12.29L12.2891 13.71L18.5891 20L12.2891 26.2901L13.709 27.71L19.9991 21.41L26.2891 27.71L27.7091 26.2901L21.4091 20L27.7091 13.71Z"
        fill="#0D0D26"
      />
    </svg>
  );
};

export const LinkedInIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M6.5 8.2H3.2V20h3.3V8.2ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM20.8 13.25c0-3.55-1.9-5.2-4.45-5.2-2.05 0-2.95 1.13-3.46 1.92V8.2H9.6V20h3.29v-5.84c0-1.54.29-3.03 2.2-3.03 1.88 0 1.9 1.76 1.9 3.13V20h3.3l.01-6.75Z" />
    </svg>
  );
};

export const TwitterIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M18.9 3H22l-6.77 7.74L23.2 21h-6.24l-4.89-6.39L6.48 21H3.36l7.24-8.28L3 3h6.4l4.42 5.84L18.9 3Zm-1.1 16h1.73L8.46 4.9H6.6L17.8 19Z" />
    </svg>
  );
};

export const InstagramIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
};

export const FacebookIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M14.5 8H17V4h-2.5C11.46 4 10 5.78 10 8.65V11H7v4h3v5h4v-5h3l.75-4H14v-2.1c0-1.1.27-1.9 1.5-1.9Z" />
    </svg>
  );
};

export const YouTubeIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M21.58 7.19a2.76 2.76 0 0 0-1.94-1.95C17.93 4.75 12 4.75 12 4.75s-5.93 0-7.64.49a2.76 2.76 0 0 0-1.94 1.95C1.93 8.9 1.93 12 1.93 12s0 3.1.49 4.81a2.76 2.76 0 0 0 1.94 1.95c1.71.49 7.64.49 7.64.49s5.93 0 7.64-.49a2.76 2.76 0 0 0 1.94-1.95c.49-1.71.49-4.81.49-4.81s0-3.1-.49-4.81ZM10 15.25v-6.5L15.5 12 10 15.25Z" />
    </svg>
  );
};

export const GooglePlayIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3.5 3.8v16.4L14.2 12 3.5 3.8Z" fill="currentColor" />
      <path
        d="m14.2 12 3.7-2.8-10.5-5.1L14.2 12Zm0 0-6.8 7.9 10.5-5.1-3.7-2.8Z"
        fill="currentColor"
        opacity=".75"
      />
    </svg>
  );
};

export const AppleStoreIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.1.8 1.21-.24 2.37-.93 3.66-.84 1.55.13 2.72.74 3.49 1.83-3.2 1.92-2.44 6.14.49 7.32-.59 1.55-1.35 3.07-2.74 4.24ZM12.05 7.25C11.9 4.95 13.76 3.05 15.9 2.9c.3 2.65-2.4 4.63-3.85 4.35Z" />
    </svg>
  );
};
