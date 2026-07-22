import { QueryTabRedirect } from "@/components/legacy/query-tab-redirect";

export default function LabiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryTabRedirect scope="labia" />
      {children}
    </>
  );
}
