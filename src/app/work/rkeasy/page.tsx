import type { Metadata } from 'next';
import CaseStudy from '@/common/components/case-study';
import { rkeasyCaseStudy } from '@/common/lib/case-studies/rkeasy';

export const metadata: Metadata = {
  title: 'RKEasy — Lucas Ostmann',
  description: rkeasyCaseStudy.subtitle.en,
};

export default function RkeasyPage() {
  return <CaseStudy content={rkeasyCaseStudy} />;
}
