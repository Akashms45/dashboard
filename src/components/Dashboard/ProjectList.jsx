import {
  FcSynchronize,
  FcFinePrint,
  FcMindMap,
  FcCircuit,
  FcMultipleDevices,
} from "react-icons/fc";

export const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: "Develop API Endpoints",
      date: "Nov 26, 2024",
      icon: FcMindMap,
    },
    { id: 2, title: "Onboarding Flow", date: "Nov 28, 2024", icon: FcCircuit },
    {
      id: 3,
      title: "Build Dashboard",
      date: "Nov 30, 2024",
      icon: FcFinePrint,
    },
    {
      id: 4,
      title: "Optimize Page Load",
      date: "Dec 5, 2024",
      icon: FcSynchronize,
    },
    {
      id: 5,
      title: "Cross-Browser Testing",
      date: "Dec 6, 2024",
      icon: FcMultipleDevices,
    },
  ];

  return (
    <div className="border bg-white rounded-xl p-8 flex flex-col min-h-[200px]">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-lg truncate">Project</h1>
        <button className="truncate border rounded-full px-3 py-1 text-sm border-gray-500 hover:bg-gray-100">
          + New
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-4 ">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div key={project.id} className="flex items-center gap-3">
              <Icon className="text-green-700 size-8 " />

              <div>
                <p className="font-medium truncate">{project.title}</p>
                <p className="text-gray-400 text-sm truncate">
                  Due date: {project.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
