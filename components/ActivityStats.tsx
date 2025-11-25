"use client";

interface StatsProps {
  icon: any;
  icon2: any;
  value: string;
  label: string;
  percentage: string;
}

const ActivityStats = ({
  icon,
  icon2,
  value,
  label,
  percentage,
}: StatsProps) => {
  const percentageValue = Number(percentage);

  const percentageColor =
    percentageValue >= 15
      ? "text-green-600"
      : percentageValue >= 10
      ? "text-red-500"
      : "text-yellow-600";

  const badgeBg =
    percentageValue >= 15
      ? "bg-green-100"
      : percentageValue < 10
      ? "bg-red-100"
      : "bg-yellow-100";
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex  flex-1 flex-col gap-2">
      {/* icon */}
      <div className="text-4xl text-blue-300 ">{icon} </div>
      {/* digits */}
      <div className="text-2xl font-bold text-gray-800">{value} </div>
      {/* label */}
      <div className="text-gray-500 text-sm">{label} </div>
      {/* percentage + indicator */}
      <div
        className={`flex items-center gap-2 text-sm font-semibold w-fit px-2 py-1 rounded-lg ${badgeBg} ${percentageColor}`}
      >
        <span className="text-lg">{icon2}</span>
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

export default ActivityStats;
