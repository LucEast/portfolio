export type Bilingual = {
  de: string;
  en: string;
};

export type BilingualList = {
  de: string[];
  en: string[];
};

export type CaseStudyLink = {
  label: string;
  href: string;
};

export type CaseStudyContent = {
  title: string;
  subtitle: Bilingual;
  tags: string[];
  sections: {
    problem: Bilingual;
    context: Bilingual;
    responsibility: Bilingual;
    approach: BilingualList;
    decisions: BilingualList;
    outcome: Bilingual;
    retrospective: Bilingual;
  };
  links: CaseStudyLink[];
};
