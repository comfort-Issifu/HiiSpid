export default function Spinner({ size = "medium", color = "red" }) {
  const sizeClasses = {
    small: "w-6 h-6 border-2 mr-2",
    medium: "w-12 h-12 border-4",
    large: "w-20 h-20 border-8",
  };

  const colorClasses = {
    red: "border-primary",
    white: "border-white",
  };

  return (
    <div className="flex justify-center items-center h-64">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
}
