const iconPaths = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </>
  ),
  phone: (
    <path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L7.1 9.5a16 16 0 0 0 7.4 7.4l1.3-1.3a2 2 0 0 1 2.1-.4c1 .4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  texas: (
    <>
      <path d="M6.3 3.7 9.5 2l2.8 2.2 3.2-.4 1.3 3.5 2.7 2.2-1.8 2.9.4 3.6-3.4.9-2.1 3.1-2.7-2.4-3.6.3-.5-3.5L3 12.2l2-2.7-.6-3.6 1.9-2.2Z" />
      <path d="m11.5 8.3.7 1.4 1.6.2-1.2 1.1.3 1.6-1.4-.8-1.4.8.3-1.6-1.2-1.1 1.6-.2.7-1.4Z" />
    </>
  ),
  scales: (
    <>
      <path d="M12 3v18" />
      <path d="M5 6h14" />
      <path d="m5 6-3 6h6L5 6Z" />
      <path d="m19 6-3 6h6l-3-6Z" />
      <path d="M2 12c0 2 1.3 3 3 3s3-1 3-3" />
      <path d="M16 12c0 2 1.3 3 3 3s3-1 3-3" />
      <path d="M8 21h8" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

const Icon = ({ name, size = 24, className = '' }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
  >
    {iconPaths[name]}
  </svg>
);

export default Icon;
