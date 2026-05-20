export interface Quote {
  text: string;
  source: string;
  attribution: string;
}

export interface FrustrationCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  quotes: Quote[];
}

export interface JourneyStep {
  label: string;
  emoji: string;
  description: string;
  outcome?: "negative" | "neutral";
}

export const heroQuote: Quote = {
  text: "I spent three hours trying to book a hair salon in Tokyo. Every site was in Japanese, Google Translate butchered the menus, and I ended up just walking into a random place near my hotel. They didn't speak English, I couldn't explain what I wanted, and I left looking nothing like the photo I showed them.",
  source: "r/JapanTravel",
  attribution: "u/blonde_adventures",
};

export const categories: FrustrationCategory[] = [
  {
    id: "language",
    title: "Language Barrier",
    icon: "🗣️",
    description:
      "Most Tokyo salons operate entirely in Japanese. Even salons with 'English OK' listings often mean basic greetings, not the nuanced hair consultation a foreign guest needs.",
    quotes: [
      {
        text: "I showed photos on my phone but couldn't explain that I wanted the tone, not the exact cut. They copied the photo literally and I ended up with bangs I didn't ask for.",
        source: "r/JapanTravel",
        attribution: "u/mel_in_tokyo",
      },
      {
        text: "The stylist kept saying 'OK OK' to everything I said but clearly didn't understand. I didn't realize until it was too late. ¥28,000 for a haircut I hated.",
        source: "Google Reviews",
        attribution: "Sarah K. — visiting from London",
      },
      {
        text: "My hotel concierge called ahead to translate for me, but the phone game of telephone made it worse. The stylist got a completely different brief.",
        source: "TripAdvisor",
        attribution: "TravellerMark2024",
      },
    ],
  },
  {
    id: "booking",
    title: "Booking Confusion",
    icon: "📱",
    description:
      "Hot Pepper Beauty — Japan's dominant salon booking platform — is entirely in Japanese with no English option. Foreign visitors face a maze of untranslatable menus, coupon systems, and member-only pricing.",
    quotes: [
      {
        text: "Hot Pepper Beauty might as well be encrypted. I tried Google Translate on every page and still couldn't figure out which 'course' meant a simple cut and color.",
        source: "r/JapanTravel",
        attribution: "u/confused_in_shibuya",
      },
      {
        text: "I found a salon on Instagram that looked amazing, but their booking was Hot Pepper only. No email, no English form, no way to book without a Japanese phone number.",
        source: "r/JapanTravel",
        attribution: "u/harajuku_hair_help",
      },
    ],
  },
  {
    id: "style",
    title: "Style Mismatch",
    icon: "✂️",
    description:
      "Japanese hair culture has its own aesthetic vocabulary. What a Western guest expects from 'layers' or 'natural color' can differ dramatically from the Japanese interpretation — and neither side realizes until after the cut.",
    quotes: [
      {
        text: "I asked for 'natural blonde highlights' and got something closer to orange. Apparently their idea of blonde for Asian hair is very different from what I meant for my brown hair.",
        source: "Reddit",
        attribution: "u/nordic_nomad",
      },
      {
        text: "They gave me the most perfectly executed Japanese layered bob. It was technically flawless. It was also absolutely not what I wanted. The cultural gap is real.",
        source: "Blog post",
        attribution: "Emily R. — expat in Minato-ku",
      },
      {
        text: "Every salon I tried would default to the 'safe' Japanese style instead of what I actually asked for. I think they were nervous about doing Western styles wrong.",
        source: "r/japanlife",
        attribution: "u/three_years_in_tokyo",
      },
    ],
  },
  {
    id: "price",
    title: "Price Opacity",
    icon: "💰",
    description:
      "Salon pricing in Japan is notoriously opaque for visitors. Coupon prices, member prices, and 'consultation required' listings make it impossible to compare or budget — leading to bill shock or avoidance entirely.",
    quotes: [
      {
        text: "The listing said ¥5,500 for a cut. My bill was ¥18,000. Apparently the ¥5,500 was a 'first-visit coupon' price for a different menu item and I got the 'consultation course' instead.",
        source: "Google Reviews",
        attribution: "David P. — visiting from Sydney",
      },
      {
        text: "I gave up trying to compare prices between salons. Some list by 'course,' some by service, some say 'ask staff.' How is anyone supposed to make a decision?",
        source: "r/JapanTravel",
        attribution: "u/aussie_in_akihabara",
      },
    ],
  },
];

export const journeySteps: JourneyStep[] = [
  {
    label: "Google Search",
    emoji: "🔍",
    description: '"English speaking hair salon Tokyo"',
  },
  {
    label: "Outdated Lists",
    emoji: "📋",
    description: "Blog posts from 2019 with broken links",
    outcome: "neutral",
  },
  {
    label: "Hot Pepper Beauty",
    emoji: "🇯🇵",
    description: "Entirely in Japanese, gives up",
    outcome: "negative",
  },
  {
    label: "Instagram DM",
    emoji: "📸",
    description: "No reply or 'Japanese only'",
    outcome: "negative",
  },
  {
    label: "Walk-in",
    emoji: "🚶",
    description: "Random salon near hotel",
    outcome: "neutral",
  },
  {
    label: "Disappointed",
    emoji: "😔",
    description: "Wrong style, surprise bill, no recourse",
    outcome: "negative",
  },
];

