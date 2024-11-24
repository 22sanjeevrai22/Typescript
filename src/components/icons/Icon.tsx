import { icons } from "./Icons";

type IconProps = {
  name: string;
  className: string;
};

const Icon = ({ name, className = "" }: IconProps) => {
  const iconSvg = icons[name] || icons["default"];
  return (
    <>
      <span className={`svg-icon ${className}`}>{iconSvg}</span>
    </>
  );
};

export default Icon;
