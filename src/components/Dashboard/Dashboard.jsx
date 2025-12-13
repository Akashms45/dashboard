import { Grid } from "./Grid";
import { MobileHeader } from "./MobileHeader";
import { TopCard } from "./TopCard";

export const Dashboard = ({
  mobileOpen,
  setMobileOpen,
  setSearchVisible,
  setOpen,
}) => {
  return (
    <div className="bg-neutral-100 rounded-lg shadow border">
      <div className="md:hidden">
        <MobileHeader
          setMobileOpen={setMobileOpen}
          setSearchVisible={setSearchVisible}
          setOpen={setOpen}
        />
      </div>

      <TopCard mobileOpen={mobileOpen} />
      <Grid />
    </div>
  );
};
