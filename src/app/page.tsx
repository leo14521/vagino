import { WomenSurgerySections } from "@/components/women/women-surgery-sections";
import {
  FaqPageJsonLd,
  MedicalProcedureJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { WOMEN_FAQ_ENTRIES } from "@/data/faq-women";
import {
  WOMEN_HOME_DESCRIPTION,
  WOMEN_HOME_PATH,
  WOMEN_HOME_TITLE,
  WOMEN_PROCEDURE_DESCRIPTION,
  WOMEN_PROCEDURE_NAME,
  womenHomeMetadata,
} from "@/lib/women-home-seo";

export const metadata = womenHomeMetadata;

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd
        path={WOMEN_HOME_PATH}
        name={WOMEN_HOME_TITLE}
        description={WOMEN_HOME_DESCRIPTION}
      />
      <MedicalProcedureJsonLd
        path={WOMEN_HOME_PATH}
        name={WOMEN_PROCEDURE_NAME}
        procedureType="TherapeuticProcedure"
        description={WOMEN_PROCEDURE_DESCRIPTION}
      />
      <FaqPageJsonLd entries={WOMEN_FAQ_ENTRIES} />
      <div className="relative flex min-h-screen flex-col bg-[#FDFBF7]">
        <WomenSurgerySections />
      </div>
    </>
  );
}
