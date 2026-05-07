import { MemberHeader } from "@/components/portal/MemberHeader";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MemberHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-6 pb-16">{children}</main>
    </>
  );
}
