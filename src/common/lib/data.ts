import React from 'react';

import portfolioImg from '@/../public/images/portfolio.png';
import rkeasyImg from '@/../public/images/rkeasy.png';
import currentviewImg from '@/../public/images/currentview.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'OWL-IT',
    location: 'Ostwestfalen-Lippe, Germany',
    description: {
      de: 'Kubernetes Administrator & stellvertretende Teamleitung (Linux). Verantwortlich für Planung, Aufbau und Betrieb der Kubernetes-Plattform sowie für Security und Automatisierung darum herum.',
      en: 'Kubernetes administrator & deputy team lead (Linux). Responsible for planning, building and operating the Kubernetes platform, plus the security and automation around it.',
    },
    highlights: {
      de: [
        'Betreibe ~20 produktive Kubernetes-Cluster (HA, min. 3 Control-Plane-Nodes, 6–15 Nodes je Cluster)',
        'Stellvertretende Teamleitung im Linux-Team',
        'Entwicklung der "OWL-IT Cloud Console" – ein Self-Service-Portal, das Delivery standardisiert und Härtung/Security-Scans (u.a. Kyverno, Trivy) für Kunden automatisch durchsetzt; produktiv im Einsatz bei externen Kunden, noch vor dem internen Rollout',
        'Delivery über Release-Pipelines, IaC und GitOps (ArgoCD App-of-Apps)',
      ],
      en: [
        'Operate ~20 production Kubernetes clusters (HA, min. 3 control-plane nodes, 6–15 nodes each)',
        'Deputy team lead within the Linux team',
        'Built the "OWL-IT Cloud Console" – a self-service portal that standardizes delivery and automatically enforces hardening/security scanning (Kyverno, Trivy) for customers; live in production for external customers ahead of the internal rollout',
        'Delivery via release pipelines, IaC and GitOps (ArgoCD app-of-apps)',
      ],
    },
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2023 – Present',
  },
  {
    title: 'Kommunales Rechenzentrum',
    location: 'Ostwestfalen-Lippe, Germany',
    description: {
      de: 'System-Administrator. Betrieb und Pflege von Linux-Systemen, Aufbau und Pflege von Netzwerken und Mobile Device Management.',
      en: 'System administrator. Operated and maintained Linux systems, built and maintained networks, and handled mobile device management.',
    },
    highlights: {
      de: [
        'Rollout und Betrieb von Schulserversystemen an über 50 Schulen im Verbandsgebiet',
        '2nd/3rd-Level-Support für Lehrkräfte und Medienbeauftragte',
      ],
      en: [
        'Rolled out and operated school server systems across 50+ schools in the district',
        '2nd/3rd-level support for teachers and media coordinators',
      ],
    },
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jul 2020 – Aug 2023',
  },
  {
    title: 'Berufsbegleitendes Studium',
    location: 'Germany (remote)',
    description: {
      de: 'B.Sc. Cyber-Security (laufend). Fokus auf sichere IT-Infrastrukturen, Netzwerke, Kryptographie und rechtliche Grundlagen.',
      en: "Bachelor's degree in Cybersecurity (ongoing). Focus on secure IT infrastructure, networks, cryptography and legal fundamentals.",
    },
    icon: React.createElement(BookIcon),
    date: 'Okt 2022 – Present',
  },
  {
    title: 'Ausbildung zum Fachinformatiker für Systemintegration',
    location: 'Detmold, Germany',
    description: {
      de: 'Ausbildung zum Fachinformatiker für Systemintegration.',
      en: 'Vocational training as an IT specialist for system integration.',
    },
    icon: React.createElement(BookIcon),
    date: 'Okt 2017 – 2020',
  },
] as const;

export const images = {
  rkeasyImg
};

export const projectsData = [
  {
    title: 'RKEasy',
    description: `RKEasy is an open-source project aimed at making RKE2 Kubernetes cluster deployment and management easy and automated.`,
    tags: ['Kubernetes', 'Ansible', `RKE2`],
    imageUrl: rkeasyImg,
    link: 'https://github.com/LucEast/RKEasy',
    internalLink: '/work/rkeasy',
  },
  // {
  //   title: 'Demo Automation of accounting documents processing',
  //   description:
  //     'Upload any receipt or invoice (even a crumpled one from your pocket) and watch our AI accurately extract its data.',
  //   tags: ['TypeScript', 'React', 'Docker', 'Next.js', 'GraphQL', 'Tailwind'],
  //   imageUrl: accountingImg,
  //   link: 'https://demo.grantonai.cz/',
  // },
  // {
  //   title: 'FileDrive',
  //   description:
  //     'A platform for decentralized file storage with robust user management.',
  //   tags: [
  //     'React',
  //     'TypeScript',
  //     'Next.js',
  //     'Convex',
  //     'Clerk',
  //     'Shadcn',
  //     'Tailwind',
  //   ],
  //   imageUrl: filedriveImg,
  //   link: 'https://github.com/bbyc4kes/file-drive',
  // },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      // 'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/LucEast/portfolio',
    internalLink: undefined as string | undefined,
  },
  {
    title: 'Current View',
    description: `A Obsidian plugin that automtically sets the view mode (Reading, Live Preview, Source) for notes based on folder rules, file patterns, or frontmatter.`,
    tags: [
      'TypeScript',
      'Obsidian',
    ],
    imageUrl: currentviewImg,
    link: 'https://github.com/LucEast/obsidian-current-view',
    internalLink: '/work/current-view',
  },

  // {
  //   title: 'Surge',
  //   description:
  //     'Service that allows users to build and manage their own websites with integrated payment processing.',
  //   tags: [
  //     'React',
  //     'TypeScript',
  //     'Next.js',
  //     'MySQL',
  //     'Clerk',
  //     'Stripe Connect',
  //     'Shadcn',
  //     'Tailwind',
  //   ],
  //   imageUrl: surgeImg,
  //   link: 'https://github.com/bbyc4kes/surge',
  // },
] as const;

// export const skillsData = [
//   ['JavaScript', '/svgs/javascript-js.svg'],
//   ['TypeScript', '/svgs/typescript-icon.svg'],
//   ['React', '/svgs/react.svg'],
//   ['Next.js', '/svgs/nextjs.svg'],
//   ['Node.js', '/svgs/node-js.svg'],
//   ['Express', '/svgs/express-original.svg'],
//   ['Tailwind', '/svgs/tailwind-css.svg'],
//   ['Framer', '/svgs/framer.svg'],
//   ['Shadcn', '/svgs/shadcnui.svg'],
//   ['Headless', '/svgs/brand-headlessui.svg'],
//   ['Redux', '/svgs/redux-original.svg'],
//   ['Prisma', '/svgs/file-type-light-prisma.svg'],
//   ['MongoDB', '/svgs/mongodb-original.svg'],
//   ['PostgreSQL', '/svgs/postgresql.svg'],
//   ['MySQL', '/svgs/MySQL.svg'],
//   ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
//   ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
//   ['Cloudinary', '/svgs/cloudinary.svg'],
//   ['Golang', '/svgs/golang.svg'],
//   ['Docker', '/svgs/Docker.svg'],
//   // ['Clerk', '/svgs/clerk.svg'],
//   // ['Axios', '/svgs/axios.svg'],
//   ['HTML', '/svgs/file-type-html.svg'],
//   ['CSS', '/svgs/file-type-css.svg'],
//   // ['Sass', '/svgs/Sass.svg'],
//   ['Git', '/svgs/git.svg'],
//   ['GitHub', '/svgs/github.svg'],
//   ['', '/svgs/etc.svg'],
// ] as const;

export const skillsData = [
  ['Terraform', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'],
  ['Ansible', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg'],
  ['Kubernetes', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'],
  ['Helm', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg'],
  ['ArgoCD', 'https://icon.icepanel.io/Technology/svg/Argo-CD.svg'],
  ['Rancher', 'https://icon.icepanel.io/Technology/svg/Rancher.svg'],
  ['Docker', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'],
  ['GitLab', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'],
  ['GitHub', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'],
  ['Linux', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'],
  ['Go', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'],
  ['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
  ['Bash', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'],
  ['Prometheus', 'https://raw.githubusercontent.com/cncf/artwork/master/projects/prometheus/icon/color/prometheus-icon-color.svg'],
  ['Grafana', 'https://icon.icepanel.io/Technology/svg/Grafana.svg'],
  ['Longhorn', '/svgs/Longhorn.svg'],
  ['Ceph', 'https://www.svgrepo.com/show/330127/ceph.svg'],
  ['WireGuard', 'https://www.svgrepo.com/show/520310/wireguard.svg'],
  ['Proxmox', 'https://www.svgrepo.com/show/342139/proxmox.svg'], // wenn du kein externes Logo findest
] as const;
