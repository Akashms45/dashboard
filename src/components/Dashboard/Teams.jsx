import logo1 from "../../assest/profilepic.jpg";

export const Teams = () => {
  const projects = [
    {
      id: 1,
      FirstName: "Alexandra Deff",
      work: "Github Project Repository",
      logo: logo1,
      status: "Completed",
    },
    {
      id: 2,
      FirstName: "Edwin Adenike",
      work: "Integrate User Authentication System",
      logo: logo1,
      status: "In Progress",
    },
    {
      id: 3,
      FirstName: "Isaac Oluwatermilorun",
      work: "Develop Search and Filter Functionality",
      logo: logo1,
      status: "Pending",
    },
    {
      id: 4,
      FirstName: "David Oshodi",
      work: "Responsive Layout for Homepage",
      logo: logo1,
      status: "In Progress",
    },
  ];

  const statusColors = {
    Completed: "border-green-700 border text-green-700 ",
    "In Progress": "border-yellow-500 border text-yellow-500",
    Pending: "border-red-700 border text-red-700",
  };

  return (
    <div className="border bg-white rounded-xl p-6 flex flex-col min-h-[200px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-lg truncate">Team Collaboration</h1>
        <button className="truncate border border-green-800 rounded-full px-3 py-1 text-sm text-green-800 hover:bg-green-100">
          + Add Member
        </button>
      </div>

      <div className="flex flex-col space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={project.logo}
                alt={project.FirstName}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="w-full">
                <p className="font-semibold truncate w-full">
                  {project.FirstName}
                </p>

                <p className="text-gray-500 text-sm line-clamp-2 w-full">
                  Working on{" "}
                  <span className="text-black font-medium">{project.work}</span>
                </p>
              </div>
            </div>

            <span
              className={`text-xs px-3 py-1 rounded-lg font-medium truncate ${
                statusColors[project.status]
              }`}
            >
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
