export const Progress = () => {
  const completed = 48; // completed %
  const inProgress = 34; // in progress %
  const pending = 42; // remaining %

  const radius = 80;
  const circumference = Math.PI * radius; // HALF the circle
  const strokeWidth = 22;

  const completedLength = (completed / 100) * circumference;
  const inProgressLength = (inProgress / 100) * circumference;
  const pendingLength = (pending / 100) * circumference;

  return (
    <div className=" \min-h-[200px] border bg-white rounded-xl p-6 flex flex-col items-center ">
      <h1 className="font-bold mb-4 text-lg w-full truncate">
        Project Progress
      </h1>

      <div className="relative mt-4 w-60 h-36 truncate">
        {/* Background arc */}
        <svg width="240" height="130" className="absolute top-0 left-0">
          {/* COMPLETED (solid green) */}
          <path
            d="M20 110 A100 100 0 0 1 220 110"
            stroke="#1e8f50"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={`${completedLength} ${circumference}`}
            strokeLinecap="round"
          />

          {/* IN PROGRESS (darker green) */}
          <path
            d="M20 110 A100 100 0 0 1 220 110"
            stroke="#0b4f30"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={`${inProgressLength} ${circumference}`}
            strokeDashoffset={-completedLength}
            strokeLinecap="round"
          />

          {/* PENDING (striped) */}
          <path
            d="M20 110 A100 100 0 0 1 220 110"
            stroke="url(#pattern)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={`${pendingLength} ${circumference}`}
            strokeDashoffset={-(completedLength + inProgressLength)}
            strokeLinecap="round"
          />

          {/* Stripe pattern */}
          <defs>
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width="6"
              height="6"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="6" stroke="#ccc" strokeWidth="4" />
            </pattern>
          </defs>
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-6">
          <h1 className="text-4xl font-bold truncate">{completed}%</h1>
          <p className="text-green-600 font-medium">Project Ended</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-around w-full text-sm mt-6 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-700 truncate"></span>
          Completed
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-900 truncate"></span>
          In Progress
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-400 truncate"></span>
          Pending
        </div>
      </div>
    </div>
  );
};
