import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function AdminCard({ children, className }: Props) {
  return (
    <div
      className={[
        "rounded-2xl border border-outline-variant/60 bg-surface-container-lowest/70 shadow-sm backdrop-blur",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

