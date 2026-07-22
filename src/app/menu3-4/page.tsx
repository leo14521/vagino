import { buildLaserPage } from "@/lib/seo/laser-page-factory";

const { metadata, Page } = buildLaserPage("zisella");

export { metadata };
export default Page;
