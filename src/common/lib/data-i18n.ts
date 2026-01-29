import React from 'react';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';
import portfolioImg from '@/../public/images/portfolio.png';
import rkeasyImg from '@/../public/images/rkeasy.png';
import currentviewImg from '@/../public/images/currentview.png';

export const getExperiencesData = (t: any) => [
  {
    title: t('experience.owlit.title'),
    location: t('experience.owlit.location'),
    description: t('experience.owlit.description'),
    icon: React.createElement(BriefcaseBusinessIcon),
    date: t('experience.owlit.date'),
  },
  {
    title: t('experience.krz.title'),
    location: t('experience.krz.location'),
    description: t('experience.krz.description'),
    icon: React.createElement(BriefcaseBusinessIcon),
    date: t('experience.krz.date'),
  },
  {
    title: t('experience.study.title'),
    location: t('experience.study.location'),
    description: t('experience.study.description'),
    icon: React.createElement(BookIcon),
    date: t('experience.study.date'),
  },
  {
    title: t('experience.training.title'),
    location: t('experience.training.location'),
    description: t('experience.training.description'),
    icon: React.createElement(BookIcon),
    date: t('experience.training.date'),
  },
];

export const getProjectsData = (locale: string) => [
  {
    title: 'RKEasy',
    description: locale === 'de' 
      ? 'RKEasy ist ein Open-Source-Projekt, das die Bereitstellung und Verwaltung von RKE2 Kubernetes-Clustern einfach und automatisiert macht.'
      : 'RKEasy is an open-source project aimed at making RKE2 Kubernetes cluster deployment and management easy and automated.',
    tags: ['Kubernetes', 'Ansible', 'RKE2'],
    imageUrl: rkeasyImg,
    link: 'https://github.com/LucEast/RKEasy',
  },
  {
    title: 'Portfolio',
    description: locale === 'de'
      ? 'Das Portfolio, das du gerade betrachtest! Dieses Projekt zeigt meine Arbeit und bietet Informationen über mich.'
      : `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: ['React', 'TypeScript', 'Next.js', 'Framer Motion', 'React Email', 'Tailwind'],
    imageUrl: portfolioImg,
    link: 'https://github.com/LucEast/portfolio',
  },
  {
    title: 'Current View',
    description: locale === 'de'
      ? 'Ein Obsidian-Plugin, das automatisch den Ansichtsmodus (Lesen, Live-Vorschau, Quelle) für Notizen basierend auf Ordnerregeln, Dateimustern oder Frontmatter setzt.'
      : 'An Obsidian plugin that automatically sets the view mode (Reading, Live Preview, Source) for notes based on folder rules, file patterns, or frontmatter.',
    tags: ['TypeScript', 'Obsidian'],
    imageUrl: currentviewImg,
    link: 'https://github.com/LucEast/obsidian-current-view',
  },
];
