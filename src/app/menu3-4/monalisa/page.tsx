import { buildLaserPage } from "@/lib/seo/laser-page-factory";

const { metadata, Page } = buildLaserPage("monalisa");

export { metadata };
export default Page;
