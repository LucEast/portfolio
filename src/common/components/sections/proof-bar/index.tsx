'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/common/stores/locale';
import {
  Layers3,
  ShieldCheck,
  Users,
  Download,
  GraduationCap,
} from 'lucide-react';

const content = {
  de: [
    {
      icon: Layers3,
      text: '~20 Kubernetes-Cluster in Betrieb (HA, min. 3 Control-Plane-Nodes, 6–15 Nodes)',
    },
    {
      icon: Users,
      text: 'Stellvertretende Teamleitung (Linux)',
    },
    {
      icon: ShieldCheck,
      text: 'Self-Service Cloud-Plattform live bei externen Kunden',
    },
    {
      icon: Download,
      text: 'Open-Source Obsidian-Plugin, ~17.000 Downloads',
    },
    {
      icon: GraduationCap,
      text: 'Laufendes B.Sc. Cyber-Security',
    },
  ],
  en: [
    {
      icon: Layers3,
      text: '~20 Kubernetes clusters in production (HA, min. 3 control-plane nodes, 6–15 nodes)',
    },
    {
      icon: Users,
      text: 'Deputy Linux team lead',
    },
    {
      icon: ShieldCheck,
      text: 'Self-service cloud platform live for external customers',
    },
    {
      icon: Download,
      text: 'Open-source Obsidian plugin, ~17,000 downloads',
    },
    {
      icon: GraduationCap,
      text: 'Ongoing B.Sc. Cyber-Security',
    },
  ],
} as const;

export default function ProofBar() {
  const { locale } = useLocale();
  const items = content[locale];

  return (
    <section className="z-10 flex w-full justify-center px-4 dark:bg-darkBg">
      <motion.ul
        className="grid w-full max-w-5xl grid-cols-1 gap-3 py-6 sm:grid-cols-2 lg:grid-cols-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className="borderBlack flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3 text-left text-sm text-gray-700 dark:bg-white/5 dark:text-white/80"
            >
              <Icon className="h-5 w-5 shrink-0 text-lightPrimary dark:text-darkPrimary" />
              <span>{item.text}</span>
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
}
