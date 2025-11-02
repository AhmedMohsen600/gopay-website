export function DottedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none top-[-303px] flex justify-center">
      <svg
        width="724"
        height="724"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80   "
      >
        {/* 4 concentric circles - centered, large enough to overflow */}
        <circle
          cx="362"
          cy="362"
          r="362"
          fill="none"
          stroke="#F5F5F5"
          strokeWidth="1"
          strokeDasharray="2 2"
          strokeOpacity="0.1"
        />
        <circle
          cx="362"
          cy="362"
          r="300"
          fill="none"
          stroke="#F5F5F5"
          strokeWidth="1"
          strokeDasharray="2 2"
          strokeOpacity="0.1"
        />
        <circle
          cx="362"
          cy="362"
          r="242.5"
          fill="none"
          stroke="#F5F5F5"
          strokeWidth="1"
          strokeDasharray="2 2"
          strokeOpacity="0.1"
        />
        <circle
          cx="362"
          cy="362"
          r="176.5"
          fill="none"
          stroke="#F5F5F5"
          strokeWidth="1"
          strokeDasharray="2 2"
          strokeOpacity="0.1"
        />
      </svg>
    </div>
  );
}
