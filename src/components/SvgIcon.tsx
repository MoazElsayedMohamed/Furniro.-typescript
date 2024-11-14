export const SvgIcon = ({ name = "", prefix = "icon", ...props }) => {
  const symboldId = `#${prefix}-${name}`;

  return (
    <svg {...props} aria-hidden="true" className="w-6 h-5">
      <use href={symboldId} />
    </svg>
  );
};
