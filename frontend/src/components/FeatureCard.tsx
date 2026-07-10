type Props = {
  icon: string;
  title: string;
  description: string;
  color: string;
  onClick?: () => void;
};

function FeatureCard({
  icon,
  title,
  description,
  color,
  onClick,
}: Props) {
  return (
    <div
     onClick={onClick}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-slate-900
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500
      hover:shadow-2xl
      cursor-pointer
      "
    >
      {/* Gradient Top Border */}

      <div
        className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${color}`}
      />

      <div className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 text-slate-400 leading-7">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">

        <span className="text-blue-400 font-medium">
          Open Expert
        </span>

        <span className="text-xl transition-transform group-hover:translate-x-2">
          →
        </span>

      </div>

    </div>
  );
}

export default FeatureCard;