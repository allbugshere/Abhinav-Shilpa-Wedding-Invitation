import { createFileRoute } from "@tanstack/react-router";

import { MusicProvider, MusicToggle } from "@/components/wedding/MusicProvider";
import { SiteNav } from "@/components/wedding/SiteNav";
import { BlessingsSection } from "@/components/wedding/sections/BlessingsSection";
import { CountdownSection } from "@/components/wedding/sections/CountdownSection";
import { EventsSection } from "@/components/wedding/sections/EventsSection";
import { HeroSection } from "@/components/wedding/sections/HeroSection";
import { InvitationSection } from "@/components/wedding/sections/InvitationSection";

const TITLE = "Abhinav ❤ Shilpa — Wedding Invitation · 5 December 2026";
const DESCRIPTION =
  "Together with their families, Abhinav & Shilpa invite you to celebrate their wedding on 5th December 2026 at Committee Rest House, Nahan, Distt. Sirmour (HP).";

// The home route ships no og:image, so hosting can inject the project's social preview.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MusicProvider>
      <SiteNav />
      <main>
        <HeroSection />
        <InvitationSection />
        <EventsSection />
        <CountdownSection />
        <BlessingsSection />
      </main>
      <MusicToggle />
    </MusicProvider>
  );
}
