import { DayBar } from "./DayBar";
import { Reminders } from "./Reminders";
import { ProjectList } from "./ProjectList";
import { Teams } from "./Teams";
import { Progress } from "./Progress";
import { TimeTracker } from "./TimeTracker";

export const UnderGrid = () => {
  return (
    <div
      className="
        mt-5 grid gap-5
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-[2fr_1.3fr_1.2fr]
      "
    >
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-5">
        <DayBar />
        <Teams />
      </div>

      {/* MIDDLE COLUMN */}
      <div className="flex flex-col gap-5">
        <Reminders />
        <Progress />
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-5">
        <ProjectList />
        <TimeTracker />
      </div>
    </div>
  );
};
