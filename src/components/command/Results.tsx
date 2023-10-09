import React, { forwardRef, useMemo } from "react";
import { ActionId, ActionImpl, KBarResults, useMatches } from "kbar";
import { Kbd } from "@nextui-org/react";

export const Results = () => {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-3 py-2 uppercase opacity-60">{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId!}
          />
        )
      }
    />
  );
};

interface KbarProps {
  action: ActionImpl;
  active: boolean;
  currentRootActionId: ActionId;
}

const ResultItem = forwardRef(
  (
    { action, active, currentRootActionId }: KbarProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const ancestors = useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId,
      );
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        className={`flex cursor-pointer content-center items-center justify-between border border-divider px-2 py-3 ${
          active ? "border-content2 bg-content1" : "bg-background"
        }`}
      >
        <div className="flex content-center items-center gap-4">
          {action.icon && action.icon}
          <div className="flex flex-col">
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <div key={ancestor.id}>
                    <span className="mr-2 opacity-60">{ancestor.name}</span>
                    <span className="mr-2">&rsaquo;</span>
                  </div>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span className="text-sm">{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length && (
          <div aria-hidden className="grid grid-flow-col gap-2">
            {action.shortcut.map((sc) => (
              <Kbd>{sc}</Kbd>
            ))}
          </div>
        )}
      </div>
    );
  },
);
