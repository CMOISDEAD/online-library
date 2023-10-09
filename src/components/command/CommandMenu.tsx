import { KBarAnimator, KBarPositioner, KBarPortal, KBarSearch } from "kbar";
import { Results } from "./Results";

export const CommandMenu = () => {
  return (
    <KBarPortal>
      <KBarPositioner className="z-50">
        <KBarAnimator className="z-50 w-full max-w-xl overflow-hidden rounded border border-divider bg-background p-2 shadow">
          <KBarSearch className="z-50 my-1 w-full rounded border border-divider bg-background p-3 focus:outline-0" />
          <Results />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};
