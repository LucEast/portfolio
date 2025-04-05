import React from 'react';

import portfolioImg from '@/../public/images/portfolio.png';
import rkeasyImg from '@/../public/images/rkeasy.png';
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
    description:
      'Kubernetes Administrator & Stellvertretende Teamleitung (Linux). Planung, Aufbau und Betrieb von Kubernetes-Clustern sowie Entwicklung einer internen Cloud-Management-Konsole. Fokus auf DevSecOps, IaC, Security und Automatisierung.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2023 – Present',
  },
  {
    title: 'Kommunales Rechenzentrum',
    location: 'Ostwestfalen-Lippe, Germany',
    description:
      'System-Administrator. Betrieb und Pflege von Linux-Systemen, aufbau und pflege von Netzwerken und Mobile Device Management.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jul 2020 – Aug 2023',
  },
  {
    title: 'Berufsbegleitendes Studium',
    location: 'Germany (remote)',
    description:
      "Bachelor's degree in Cybersecurity (laufend). Fokus auf sichere IT-Infrastrukturen, Netzwerke, Kryptographie und rechtliche Grundlagen.",
    icon: React.createElement(BookIcon),
    date: 'Okt 2022 – Present',
  },
  {
    title: 'Ausbildung zum Fachinformatiker für Systemintegration',
    location: 'Detmold, Germany',
    description:
      "Ausbildung zum Fachinformatiker für Systemintegration.",
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
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/LucEast/portfolio',
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
