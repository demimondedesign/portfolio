export interface Package {
  title: string;
  subheading: string;
  price: number;
  priceText?: string;
  features?: string[];
}

export const quickStart: Package = {
  title: "Quick Start",
  subheading: "Complete in 1 week",
  price: 1500,
  features: [
    "Built in Squarespace",
    "Up to 7 pages including photo gallery",
    "Responsive design",
    "Logo design",
    "Custom color palette",
    "Contact form",
    "Google Analytics",
  ],
};

export const standard: Package = {
  title: "Basic",
  subheading: "Complete in 2-4 weeks",
  price: 2500,
  features: [
    "Built from design template",
    "All features in Quick Start",
    "Custom web design: fonts, colors, branding",
    "Domain privacy",
    "Loading speed optimized",
    "SEO optimized",
    "Daily backups",
  ],
};

export const premium: Package = {
  title: "Premium",
  subheading: "Complete in 4-8 weeks",
  price: 2500,
  priceText: "+",
  features: [
    "Built from scatch to represent your unique brand",
    "All features in Basic",
    "Completely custom graphics",
    "Custom jQuery/Animation",
    "Daily backups",
    "Meetings 2/week to discuss progress and make revisions",
  ],
};
