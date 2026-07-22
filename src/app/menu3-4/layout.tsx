import { QueryTabRedirect } from "@/components/legacy/query-tab-redirect";

export default function LaserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryTabRedirect scope="laser" />
      {children}
    </>
  );
}
