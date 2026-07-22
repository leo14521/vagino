"use client";

import { MonalisaPanel, RevivePanel, ZisellaPanel } from "@/components/sections/laser-link-section";
import { LaserTabNav } from "@/components/navigation/laser-tab-nav";
import { LASER_TAB_LABELS, type LaserTabId } from "@/lib/seo/laser-pages";

export function LaserCareSection({ activeTab }: { activeTab: LaserTabId }) {
  return (
    <section
      id="laser-care"
      className="scroll-mt-28 border-y border-[#E9E4DB]/70 bg-[#F6F3EE] py-16 md:py-24 lg:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <LaserTabNav currentLabel={LASER_TAB_LABELS[activeTab]} />

        <div key={activeTab} role="tabpanel" className="space-y-12 md:space-y-16">
          {activeTab === "zisella" && <ZisellaPanel />}
          {activeTab === "monalisa" && <MonalisaPanel />}
          {activeTab === "revive" && <RevivePanel />}
        </div>
      </div>
    </section>
  );
}
