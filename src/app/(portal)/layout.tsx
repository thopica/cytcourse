import "@/styles/member-tailwind.css";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="member-root min-h-screen bg-member-page font-sans text-base text-member-text">
      {children}
    </div>
  );
}
