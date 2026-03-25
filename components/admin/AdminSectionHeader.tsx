import type { ReactNode } from "react";
import { MaterialSymbol } from "@/components/MaterialSymbol";

type Props = {
  title: string;
  subtitle?: string;
  icon?: string;
  rightSlot?: ReactNode;
};

export function AdminSectionHeader({ title, subtitle, icon, rightSlot }: Props) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          {icon ? (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/20 text-secondary ring-1 ring-secondary/30">
              <MaterialSymbol name={icon} className="text-2xl" filled />
            </span>
          ) : null}
          <h1 className="font-headline text-3xl text-primary">{title}</h1>
        </div>
        {subtitle ? <p className="font-body text-sm text-on-surface-variant">{subtitle}</p> : null}
      </div>
      {rightSlot ?? null}
    </div>
  );
}

