import { buildLaserPage } from "@/lib/seo/laser-page-factory";

const { metadata, Page } = buildLaserPage("revive");

export { metadata };
export default Page;
