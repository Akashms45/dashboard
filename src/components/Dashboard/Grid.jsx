import { StateCards } from "./StateCards";
import { UnderGrid } from "./UnderGrid";

export const Grid = () => {
  return (
    <div className="px-4 gap-3">
      <StateCards />
      <UnderGrid />
    </div>
  );
};
