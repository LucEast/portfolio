import type { Metadata } from 'next';
import CaseStudy from '@/common/components/case-study';
import { currentViewCaseStudy } from '@/common/lib/case-studies/current-view';

export const metadata: Metadata = {
  title: 'Current View — Lucas Ostmann',
  description: currentViewCaseStudy.subtitle.en,
};

async function getDownloadCount(): Promise<number | undefined> {
  try {
    const res = await fetch(
      'https://api.github.com/repos/LucEast/obsidian-current-view/releases?per_page=100',
      { next: { revalidate: 86400 } },
    );

    if (!res.ok) return undefined;

    const releases: { assets: { download_count: number }[] }[] =
      await res.json();

    return releases.reduce(
      (total, release) =>
        total +
        release.assets.reduce((sum, asset) => sum + asset.download_count, 0),
      0,
    );
  } catch {
    return undefined;
  }
}

export default async function CurrentViewPage() {
  const downloads = await getDownloadCount();

  return (
    <CaseStudy content={currentViewCaseStudy} liveDownloads={downloads} />
  );
}
