import type { iconPaths } from "../components/IconPaths";

export interface Service {
  title: string;
  description: string;
  icon: keyof typeof iconPaths;
}

export const services: Service[] = [
  {
    title: "Custom Web Design",
    description:
      "We specialize in custom websites built from scratch that are tailored to your brand. They're optimized for speed, SEO, and conversions.",
    icon: "desktop",
  },
  {
    title: "Boilerplate Web Design",
    description:
      "Pressed on time and resources? We can build you a website using a boilerplate theme from Squarespace or wordpress. We'll customize it to your brand.",
    icon: "boilerplate",
  },
  {
    title: "Copywriting",
    description:
      "We offer bespoke copywriting services that conveys professionlism and reflects your unique voice.",
    icon: "pencil",
  },
  {
    title: "Privacy",
    description:
      "We take your privacy seriously. Your information is never shared with third parties. We offer offshore hosting for anonymity, and forms are encrypted.",
    icon: "lock",
  },
  {
    title: "Protection",
    description:
      "We maintain multiple backups that are updated daily — both locally and in the cloud.",
    icon: "cloud",
  },
  {
    title: "Support",
    description:
      "We offer 24/7 support for all of our clients. We're here to help you with any issues you may have.",
    icon: "phone",
  },
];

export type ServiceKeys = typeof services;
