import { useId } from 'react';

interface MessengerIconProps {
  className?: string;
}

export function MessengerIcon({ className = 'w-5 h-5' }: MessengerIconProps) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A3BFF" />
          <stop offset="1" stopColor="#B563FF" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill={`url(#${gradientId})`} />
      <path
        d="M6.6 14.95L10.15 11.2C10.45 10.88 10.96 10.85 11.3 11.12L13.9 13.17C14.2 13.41 14.62 13.4 14.91 13.14L17.35 10.95C17.71 10.63 18.26 11.06 18.01 11.48L15.39 15.88C15.12 16.32 14.54 16.45 14.1 16.18L11.24 14.45C10.95 14.28 10.59 14.31 10.34 14.53L7.37 17.07C7.01 17.38 6.47 16.96 6.71 16.54L6.89 16.23C7.15 15.79 7.03 15.22 6.6 14.95Z"
        fill="white"
      />
    </svg>
  );
}