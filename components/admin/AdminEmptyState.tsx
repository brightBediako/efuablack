import { MaterialSymbol } from "@/components/MaterialSymbol";
import { AdminCard } from "@/components/admin/AdminCard";

type Props = {
  title: string;
  description?: string;
  icon?: string;
};

export function AdminEmptyState({ title, description, icon }: Props) {
  return (
    <AdminCard className="relative overflow-hidden p-10">
      <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/20 blur-2xl" />
      <span className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
      <svg
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 opacity-10"
        width="320"
        height="140"
        viewBox="0 0 320 140"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 95C40 70 70 120 110 95C150 70 180 115 220 95C260 75 290 105 320 90V140H0V95Z"
          fill="currentColor"
        />
      </svg>
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        {icon ? (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/20 text-secondary ring-1 ring-secondary/30">
            <MaterialSymbol name={icon} className="text-3xl" filled />
          </span>
        ) : null}
        <p className="mt-4 font-headline text-lg text-primary">{title}</p>
        {description ? <p className="mt-1 font-body text-sm text-on-surface-variant">{description}</p> : null}
      </div>
    </AdminCard>
  );
}

