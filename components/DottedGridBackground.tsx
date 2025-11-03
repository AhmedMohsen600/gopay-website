export function DottedGridBackground() {
  return (
    <div className="absolute inset-0  pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="724"
        height="724"
        className="opacity-100 absolute sm:top-[-362px] xl:top-[-303px] top-[-460px]"
        style={{ left: "calc(50% - 362px)" }}
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
