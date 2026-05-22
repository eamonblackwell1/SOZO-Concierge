export interface Stylist {
  stylist_id: string;
  name: string;
  name_ja: string;
  salon: string;
  salon_id: string;
  neighborhood: string;
  english_summary: string;
  languages: string[];
  specialties: string;
  personality_signal: string;
  typical_guest: string;
  schedule_next_14_days: { date: string; slots: string[] }[];
  price_range_yen: [number, number];
  portfolio_themes: string;
  review_highlights_english: string[];
  is_sozo_master: boolean;
  salon_english_score: number;
  international_guest_count_6mo: number;
  google_review_avg_english_only: number;
  photo_url: string;
  portfolio_urls: string[];
}

export interface Salon {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
}

export const salons: Salon[] = [
  {
    "id": "sozo-harajuku",
    "name": "SOZO Hair & Make",
    "neighborhood": "Harajuku",
    "address": "3-21-8 Jingumae, Shibuya-ku, Tokyo 150-0001"
  },
  {
    "id": "dal-shibuya",
    "name": "DAL Shibuya",
    "neighborhood": "Shibuya",
    "address": "1-14-11 Dogenzaka, Shibuya-ku, Tokyo 150-0043"
  },
  {
    "id": "bikka-aoyama",
    "name": "BIKKA Aoyama",
    "neighborhood": "Aoyama",
    "address": "5-9-2 Minami-Aoyama, Minato-ku, Tokyo 107-0062"
  },
  {
    "id": "loave-omotesando",
    "name": "LOAVE Omotesando",
    "neighborhood": "Omotesando",
    "address": "4-5-17 Jingumae, Shibuya-ku, Tokyo 150-0001"
  },
  {
    "id": "nalu-ebisu",
    "name": "NALU Ebisu",
    "neighborhood": "Ebisu",
    "address": "1-22-3 Ebisu-Nishi, Shibuya-ku, Tokyo 150-0021"
  },
  {
    "id": "koze-ginza",
    "name": "KOZE Ginza",
    "neighborhood": "Ginza",
    "address": "6-7-14 Ginza, Chuo-ku, Tokyo 104-0061"
  },
  {
    "id": "riku-roppongi",
    "name": "RIKU Roppongi",
    "neighborhood": "Roppongi",
    "address": "7-3-10 Roppongi, Minato-ku, Tokyo 106-0032"
  },
  {
    "id": "hana-nakameguro",
    "name": "HANA Nakameguro",
    "neighborhood": "Nakameguro",
    "address": "2-45-11 Kamimeguro, Meguro-ku, Tokyo 153-0051"
  },
  {
    "id": "tsumugi-daikanyama",
    "name": "TSUMUGI Daikanyama",
    "neighborhood": "Daikanyama",
    "address": "17-6 Daikanyamacho, Shibuya-ku, Tokyo 150-0034"
  },
  {
    "id": "shin-shinjuku",
    "name": "SHIN Shinjuku",
    "neighborhood": "Shinjuku",
    "address": "3-34-1 Shinjuku, Shinjuku-ku, Tokyo 160-0022"
  },
  {
    "id": "kaze-shimokitazawa",
    "name": "KAZE Shimokitazawa",
    "neighborhood": "Shimokitazawa",
    "address": "2-30-2 Kitazawa, Setagaya-ku, Tokyo 155-0031"
  }
];

export const stylists: Stylist[] = [
  {
    stylist_id: "mori-takeshi",
    name: "Mori Takeshi",
    name_ja: "森 毅",
    salon: "SOZO Hair & Make",
    salon_id: "sozo-harajuku",
    neighborhood: "Harajuku",
    english_summary: "Native-level English — Mori spent a decade working in London and Melbourne before returning to Tokyo to open SOZO. He switches effortlessly between English and Japanese and is completely comfortable discussing complex color theory, layering techniques, and lifestyle-based styling in English.",
    languages: ["English","Japanese"],
    specialties: "Creative cuts, lived-in color, balayage, editorial styling",
    personality_signal: "Warm and philosophical — takes time to understand your lifestyle before touching your hair",
    typical_guest: "International creatives in their 30s-40s who want a style that works across cultures",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          }
    ],
    price_range_yen: [15000, 35000],
    portfolio_themes: "Effortless texture, editorial-meets-wearable, natural movement",
    review_highlights_english: [
          "Mori is genuinely one of the best stylists I've ever had, in any country. He understood my hair texture immediately and gave me a cut that somehow looked perfect air-dried AND styled.",
          "I was so nervous about getting my hair done in Tokyo but Mori made the whole experience feel like catching up with an old friend. Incredible attention to detail.",
          "Third visit now. I plan my Tokyo trips around getting my hair done here. That's how good he is.",
          "He spent 15 minutes just talking about my daily routine before he even picked up scissors. The result was the most 'me' haircut I've ever had."
    ],
    is_sozo_master: true,
    salon_english_score: 95,
    international_guest_count_6mo: 42,
    google_review_avg_english_only: 4.9,
    photo_url: "https://i.pravatar.cc/150?u=mori-takeshi",
    portfolio_urls: ["/portfolio/mori-takeshi-1.jpg","/portfolio/mori-takeshi-2.jpg","/portfolio/mori-takeshi-3.jpg","/portfolio/mori-takeshi-4.jpg","/portfolio/mori-takeshi-5.jpg"],
  },

  {
    stylist_id: "yuki-tanaka",
    name: "Yuki Tanaka",
    name_ja: "田中 ゆき",
    salon: "SOZO Hair & Make",
    salon_id: "sozo-harajuku",
    neighborhood: "Harajuku",
    english_summary: "Strong conversational English — Yuki studied abroad in Vancouver for two years and handles appointments entirely in English. She occasionally pauses to find the right technical word but always communicates clearly.",
    languages: ["English","Japanese"],
    specialties: "Balayage, highlights, color correction, glossing treatments",
    personality_signal: "Energetic and bubbly — loves showing you inspiration photos and getting excited about transformations",
    typical_guest: "American and Canadian women in their 20s-30s looking for natural-looking dimensional color",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          }
    ],
    price_range_yen: [12000, 28000],
    portfolio_themes: "Sun-kissed balayage, honey tones, seamless blends",
    review_highlights_english: [
          "Yuki gave me the best balayage I've ever had and I've been to multiple salons in LA. The blend was absolutely seamless.",
          "She really listened when I said I wanted low-maintenance color. Three months later and it still looks amazing growing out.",
          "Super friendly, made me feel comfortable instantly. My highlights look so natural my friends thought I'd been at the beach."
    ],
    is_sozo_master: false,
    salon_english_score: 95,
    international_guest_count_6mo: 38,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=yuki-tanaka",
    portfolio_urls: ["/portfolio/yuki-tanaka-1.jpg","/portfolio/yuki-tanaka-2.jpg","/portfolio/yuki-tanaka-3.jpg","/portfolio/yuki-tanaka-4.jpg"],
  },

  {
    stylist_id: "hana-sato",
    name: "Hana Sato",
    name_ja: "佐藤 花",
    salon: "SOZO Hair & Make",
    salon_id: "sozo-harajuku",
    neighborhood: "Harajuku",
    english_summary: "Conversational English — Hana can discuss styles and preferences comfortably but may use simpler vocabulary for very technical explanations. She keeps a visual reference tablet with English labels to ensure nothing gets lost in translation.",
    languages: ["English","Japanese"],
    specialties: "Women's precision cuts, bob specialists, Japanese straightening, keratin treatments",
    personality_signal: "Calm and meticulous — speaks softly and works with quiet confidence",
    typical_guest: "Professional women 30s-50s who want polished, low-maintenance cuts",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [10000, 22000],
    portfolio_themes: "Sharp bobs, sleek layers, precision one-length cuts",
    review_highlights_english: [
          "Hana gave me the sharpest bob I've ever had. Every single hair was exactly where it should be.",
          "I brought a photo and she replicated it perfectly while also adjusting for my face shape. Really skilled.",
          "Quiet but incredibly precise. She doesn't waste a single snip.",
          "The keratin treatment she did completely transformed my frizzy hair. Silky smooth for months."
    ],
    is_sozo_master: true,
    salon_english_score: 95,
    international_guest_count_6mo: 30,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=hana-sato",
    portfolio_urls: ["/portfolio/hana-sato-1.jpg","/portfolio/hana-sato-2.jpg","/portfolio/hana-sato-3.jpg","/portfolio/hana-sato-4.jpg"],
  },

  {
    stylist_id: "ken-watanabe",
    name: "Ken Watanabe",
    name_ja: "渡辺 健",
    salon: "SOZO Hair & Make",
    salon_id: "sozo-harajuku",
    neighborhood: "Harajuku",
    english_summary: "Fluent English — Ken grew up bilingual with a Japanese father and American mother. Completely native-level in both languages. Often acts as an informal interpreter for other stylists in the salon.",
    languages: ["English","Japanese"],
    specialties: "Men's cuts, fades, textured crops, beard grooming",
    personality_signal: "Easygoing and funny — treats every appointment like hanging out with a friend",
    typical_guest: "Expat men 25-40, military personnel, international business travelers who want a reliable English-speaking barber",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          }
    ],
    price_range_yen: [8000, 15000],
    portfolio_themes: "Clean fades, textured crops, modern classic men's cuts",
    review_highlights_english: [
          "Finally found a barber in Tokyo who understands western men's hair. Ken nailed the fade on the first try.",
          "I've been going to Ken every month for two years. Consistently the best men's cut in Tokyo.",
          "Great conversation, great cut, great vibes. Ken is the real deal."
    ],
    is_sozo_master: false,
    salon_english_score: 95,
    international_guest_count_6mo: 35,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=ken-watanabe",
    portfolio_urls: ["/portfolio/ken-watanabe-1.jpg","/portfolio/ken-watanabe-2.jpg","/portfolio/ken-watanabe-3.jpg"],
  },

  {
    stylist_id: "emi-nakamura",
    name: "Emi Nakamura",
    name_ja: "中村 恵美",
    salon: "SOZO Hair & Make",
    salon_id: "sozo-harajuku",
    neighborhood: "Harajuku",
    english_summary: "Advanced English — Emi worked at a salon in NYC for three years and speaks English fluently with a slight accent. She's particularly good at explaining color processes and aftercare in English.",
    languages: ["English","Japanese","Korean (basic)"],
    specialties: "Vivid color, creative color, color correction, fashion color",
    personality_signal: "Bold and artistic — approaches hair like a canvas and loves pushing creative boundaries",
    typical_guest: "Fashion-forward women and non-binary clients 20s-30s who want statement color",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [14000, 32000],
    portfolio_themes: "Vivid pastels, color melts, editorial fashion color, creative placements",
    review_highlights_english: [
          "Emi turned my boring brown hair into a lavender dream. I literally cried happy tears in the chair.",
          "The color correction she did was nothing short of miraculous. I came in with patchy orange and left with gorgeous rose gold.",
          "She's a true artist. Every color she creates looks like it belongs on a magazine cover.",
          "I flew from Singapore specifically to get my hair done by Emi. Worth every yen."
    ],
    is_sozo_master: true,
    salon_english_score: 95,
    international_guest_count_6mo: 40,
    google_review_avg_english_only: 4.9,
    photo_url: "https://i.pravatar.cc/150?u=emi-nakamura",
    portfolio_urls: ["/portfolio/emi-nakamura-1.jpg","/portfolio/emi-nakamura-2.jpg","/portfolio/emi-nakamura-3.jpg","/portfolio/emi-nakamura-4.jpg","/portfolio/emi-nakamura-5.jpg"],
  },

  {
    stylist_id: "aoi-yamamoto",
    name: "Aoi Yamamoto",
    name_ja: "山本 葵",
    salon: "SOZO Hair & Make",
    salon_id: "sozo-harajuku",
    neighborhood: "Harajuku",
    english_summary: "Intermediate English — Aoi can handle standard nail consultation conversations in English and knows all the technical terms for nail art. For complex custom requests, she uses a translation app to make sure she gets the details right.",
    languages: ["English","Japanese"],
    specialties: "Japanese gel nail art, 3D nail design, hand-painted nail art, simple gel manicures",
    personality_signal: "Detail-obsessed and patient — can spend hours on intricate hand-painted designs without rushing",
    typical_guest: "Fashion-conscious women 20s-40s, tourists wanting a Japanese gel nail experience",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          }
    ],
    price_range_yen: [8000, 18000],
    portfolio_themes: "Intricate gel art, seasonal designs, minimalist nail art, 3D embellishments",
    review_highlights_english: [
          "The level of detail in Aoi's nail art is insane. She painted tiny cherry blossoms that looked like actual photographs.",
          "Best nail experience of my life. Japanese gel nails are on another level and Aoi is a master of the craft.",
          "I showed her a complicated Pinterest design and she recreated it perfectly. So talented."
    ],
    is_sozo_master: false,
    salon_english_score: 95,
    international_guest_count_6mo: 22,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=aoi-yamamoto",
    portfolio_urls: ["/portfolio/aoi-yamamoto-1.jpg","/portfolio/aoi-yamamoto-2.jpg","/portfolio/aoi-yamamoto-3.jpg","/portfolio/aoi-yamamoto-4.jpg"],
  },

  {
    stylist_id: "ryo-fujita",
    name: "Ryo Fujita",
    name_ja: "藤田 涼",
    salon: "SOZO Hair & Make",
    salon_id: "sozo-harajuku",
    neighborhood: "Harajuku",
    english_summary: "Basic conversational English — Ryo understands appointment-related English well and knows key styling terms, but longer conversations are easier with simple sentences. He's earnest and always makes an effort, and the salon provides translation support if needed.",
    languages: ["English (basic)","Japanese"],
    specialties: "Digital perms, wave perms, Korean-style perms, men's textured perms",
    personality_signal: "Quiet and focused — lets his work speak for itself, incredibly precise with rod placement",
    typical_guest: "Korean and Japanese clients seeking trendy perm styles, plus a growing number of Western clients wanting Asian-style perms",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          }
    ],
    price_range_yen: [12000, 25000],
    portfolio_themes: "Soft wave perms, Korean S-curl, men's textured perms, volume perms",
    review_highlights_english: [
          "Ryo gave me the most beautiful Korean-style perm. Soft, bouncy waves that looked completely natural.",
          "I was nervous about a language barrier but he used photos really well and the result was exactly what I wanted.",
          "The digital perm he did lasted so much longer than any perm I've gotten in the US. Really impressed with the technique."
    ],
    is_sozo_master: false,
    salon_english_score: 95,
    international_guest_count_6mo: 18,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=ryo-fujita",
    portfolio_urls: ["/portfolio/ryo-fujita-1.jpg","/portfolio/ryo-fujita-2.jpg","/portfolio/ryo-fujita-3.jpg"],
  },

  {
    stylist_id: "daiki-ito",
    name: "Daiki Ito",
    name_ja: "伊藤 大輝",
    salon: "DAL Shibuya",
    salon_id: "dal-shibuya",
    neighborhood: "Shibuya",
    english_summary: "Fluent English — Daiki trained in London for four years at Vidal Sassoon Academy and speaks English with confidence. He can explain cutting techniques in detail and loves discussing hair theory with curious clients.",
    languages: ["English","Japanese"],
    specialties: "Sassoon-style precision cuts, geometric bobs, creative short cuts",
    personality_signal: "Intellectual and passionate — talks about hair geometry like an architect talks about buildings",
    typical_guest: "Style-conscious professionals 30s-40s who appreciate technical precision",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [13000, 28000],
    portfolio_themes: "Architectural bobs, graphic lines, precision layering",
    review_highlights_english: [
          "Daiki approaches cutting like a science. Every angle was deliberate. The result was the most structured, beautiful bob I've ever worn.",
          "He actually explained the geometry behind why he was cutting at specific angles. Fascinating and the cut was flawless.",
          "I've been to three other salons in Tokyo and Daiki is head and shoulders above the rest for precision work."
    ],
    is_sozo_master: true,
    salon_english_score: 88,
    international_guest_count_6mo: 35,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=daiki-ito",
    portfolio_urls: ["/portfolio/daiki-ito-1.jpg","/portfolio/daiki-ito-2.jpg","/portfolio/daiki-ito-3.jpg","/portfolio/daiki-ito-4.jpg"],
  },

  {
    stylist_id: "sakura-hayashi",
    name: "Sakura Hayashi",
    name_ja: "林 さくら",
    salon: "DAL Shibuya",
    salon_id: "dal-shibuya",
    neighborhood: "Shibuya",
    english_summary: "Good conversational English — Sakura lived in Australia for a gap year and maintains her English through regular international clients. She communicates preferences well, though she might ask you to repeat if you speak very quickly.",
    languages: ["English","Japanese"],
    specialties: "Trendy layered cuts, face-framing layers, curtain bangs, wolf cuts",
    personality_signal: "Trendy and upbeat — always knows what's blowing up on Korean and Japanese hair TikTok",
    typical_guest: "Young women 20s who follow East Asian hair trends and want the latest looks",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          }
    ],
    price_range_yen: [9000, 18000],
    portfolio_themes: "Korean-inspired layers, curtain bangs, soft wolf cuts, airy layering",
    review_highlights_english: [
          "Sakura gave me the perfect curtain bangs! She adjusted them for my forehead shape and they frame my face beautifully.",
          "I showed her three different Korean influencer photos and she combined elements from each. So creative.",
          "Really fun to hang out with during the appointment. She showed me trending styles on her phone and helped me choose."
    ],
    is_sozo_master: false,
    salon_english_score: 88,
    international_guest_count_6mo: 25,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=sakura-hayashi",
    portfolio_urls: ["/portfolio/sakura-hayashi-1.jpg","/portfolio/sakura-hayashi-2.jpg","/portfolio/sakura-hayashi-3.jpg","/portfolio/sakura-hayashi-4.jpg"],
  },

  {
    stylist_id: "taro-kobayashi",
    name: "Taro Kobayashi",
    name_ja: "小林 太郎",
    salon: "DAL Shibuya",
    salon_id: "dal-shibuya",
    neighborhood: "Shibuya",
    english_summary: "Intermediate English — Taro can manage a full appointment in English, covering the basics of what you want and how to maintain it. He uses photos heavily in consultation and has a tablet with curated English-labeled examples.",
    languages: ["English","Japanese"],
    specialties: "All-over color, root touch-ups, gray coverage, toning",
    personality_signal: "Reliable and thorough — the kind of stylist who checks your color from six different angles before finishing",
    typical_guest: "Expat women 35-55 who need regular color maintenance with someone they can communicate with",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          }
    ],
    price_range_yen: [10000, 22000],
    portfolio_themes: "Rich brunettes, warm blondes, seamless gray coverage, glossy finishes",
    review_highlights_english: [
          "Taro matched my usual color perfectly on the first try. I showed him my previous stylist's formula and he nailed it.",
          "I've been getting my grays covered by Taro for six months now. Consistent, reliable, always looks natural.",
          "He really takes his time with color mixing. The result is always perfectly even and lasts well."
    ],
    is_sozo_master: false,
    salon_english_score: 88,
    international_guest_count_6mo: 28,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=taro-kobayashi",
    portfolio_urls: ["/portfolio/taro-kobayashi-1.jpg","/portfolio/taro-kobayashi-2.jpg","/portfolio/taro-kobayashi-3.jpg"],
  },

  {
    stylist_id: "mika-shimizu",
    name: "Mika Shimizu",
    name_ja: "清水 美香",
    salon: "DAL Shibuya",
    salon_id: "dal-shibuya",
    neighborhood: "Shibuya",
    english_summary: "Strong English — Mika has a degree in English literature and spent a year at a salon in San Francisco. She's particularly adept at understanding what Western clients mean when they describe their curly hair struggles.",
    languages: ["English","Japanese"],
    specialties: "Curly hair cuts, DevaCut-inspired techniques, curl definition treatments, diffuser styling education",
    personality_signal: "Empathetic and patient — she really gets how emotional the curly hair journey can be",
    typical_guest: "Mixed-race individuals and Western expats with curly/wavy hair who struggle to find a stylist who understands their texture",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          }
    ],
    price_range_yen: [11000, 24000],
    portfolio_themes: "Defined curls, bouncy ringlets, wavy lobs, curly fringes",
    review_highlights_english: [
          "AS A CURLY GIRL IN TOKYO, finding Mika was like finding an oasis in a desert. She actually understands curl patterns!",
          "First stylist in Japan who didn't try to straighten my hair or look confused. She knows the curly girl method inside and out.",
          "Mika taught me how to style my own curls with Japanese products. Game changer.",
          "She cut my 3B curls dry and shaped them perfectly. I almost cried with relief."
    ],
    is_sozo_master: false,
    salon_english_score: 88,
    international_guest_count_6mo: 32,
    google_review_avg_english_only: 4.9,
    photo_url: "https://i.pravatar.cc/150?u=mika-shimizu",
    portfolio_urls: ["/portfolio/mika-shimizu-1.jpg","/portfolio/mika-shimizu-2.jpg","/portfolio/mika-shimizu-3.jpg","/portfolio/mika-shimizu-4.jpg"],
  },

  {
    stylist_id: "jun-ogawa",
    name: "Jun Ogawa",
    name_ja: "小川 純",
    salon: "DAL Shibuya",
    salon_id: "dal-shibuya",
    neighborhood: "Shibuya",
    english_summary: "Functional English — Jun knows all the essential barbering vocabulary and can conduct an appointment, but extended conversation is limited. He's great with visual references and always confirms with photos before cutting.",
    languages: ["English (functional)","Japanese"],
    specialties: "Men's cuts, classic side parts, undercuts, Asian men's hair styling",
    personality_signal: "Cool and understated — minimal chit-chat, maximum skill",
    typical_guest: "International men 20s-30s, especially those wanting a clean, modern Japanese men's cut",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [8000, 14000],
    portfolio_themes: "Clean undercuts, textured side parts, natural Korean-style men's cuts",
    review_highlights_english: [
          "Jun gave me the cleanest undercut I've ever had. Razor sharp lines.",
          "Not the most talkative but who cares when the cut is this good. Efficient and skilled.",
          "He understood exactly what I wanted from just one photo. Quick, clean, perfect."
    ],
    is_sozo_master: false,
    salon_english_score: 88,
    international_guest_count_6mo: 20,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=jun-ogawa",
    portfolio_urls: ["/portfolio/jun-ogawa-1.jpg","/portfolio/jun-ogawa-2.jpg","/portfolio/jun-ogawa-3.jpg"],
  },

  {
    stylist_id: "nana-inoue",
    name: "Nana Inoue",
    name_ja: "井上 奈々",
    salon: "DAL Shibuya",
    salon_id: "dal-shibuya",
    neighborhood: "Shibuya",
    english_summary: "Good English — Nana lived in Hawaii for three years as a child and maintained her English through international work. She's warm and communicative, especially skilled at calming nervous first-time clients.",
    languages: ["English","Japanese"],
    specialties: "Updos, event styling, wedding hair, braided styles, blowouts",
    personality_signal: "Warm and reassuring — makes brides and event-goers feel beautiful and relaxed on their big day",
    typical_guest: "International brides, embassy event attendees, women needing formal event styling",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          }
    ],
    price_range_yen: [10000, 25000],
    portfolio_themes: "Romantic updos, elegant chignons, loose braided styles, red carpet waves",
    review_highlights_english: [
          "Nana did my hair for my wedding at Meiji Shrine and it stayed perfect through 12 hours of photos, ceremony, and reception.",
          "She did a trial run the week before my event and was open to all my feedback. The final result on the day was stunning.",
          "I needed an updo for the embassy Christmas party and she created something that got compliments all night long."
    ],
    is_sozo_master: false,
    salon_english_score: 88,
    international_guest_count_6mo: 23,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=nana-inoue",
    portfolio_urls: ["/portfolio/nana-inoue-1.jpg","/portfolio/nana-inoue-2.jpg","/portfolio/nana-inoue-3.jpg","/portfolio/nana-inoue-4.jpg"],
  },

  {
    stylist_id: "kenji-murakami",
    name: "Kenji Murakami",
    name_ja: "村上 健二",
    salon: "BIKKA Aoyama",
    salon_id: "bikka-aoyama",
    neighborhood: "Aoyama",
    english_summary: "Fluent English — Kenji spent five years at a top salon in New York's SoHo district before returning to Tokyo. His English is polished and professional, with a natural American cadence. He can discuss complex color formulations and hair science in depth.",
    languages: ["English","Japanese"],
    specialties: "Premium color, foiling techniques, lived-in highlights, luxury treatments",
    personality_signal: "Polished and confident — exudes luxury without being intimidating",
    typical_guest: "Affluent international residents 35-55, fashion industry professionals, diplomats' spouses",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          }
    ],
    price_range_yen: [18000, 35000],
    portfolio_themes: "Rich multi-tonal color, expensive-looking highlights, luminous finishes",
    review_highlights_english: [
          "Kenji is the only colorist I trust with my hair. His foiling technique creates the most natural-looking dimension I've ever seen.",
          "Worth every single yen. This is luxury hair care at its finest. The color he gave me looked like it cost thousands of dollars — because it did, and it was worth it.",
          "After a string of mediocre color jobs in Tokyo, a friend recommended Kenji. Life changing.",
          "He uses products I've never heard of and the results speak for themselves. My hair has never been healthier."
    ],
    is_sozo_master: true,
    salon_english_score: 92,
    international_guest_count_6mo: 38,
    google_review_avg_english_only: 4.9,
    photo_url: "https://i.pravatar.cc/150?u=kenji-murakami",
    portfolio_urls: ["/portfolio/kenji-murakami-1.jpg","/portfolio/kenji-murakami-2.jpg","/portfolio/kenji-murakami-3.jpg","/portfolio/kenji-murakami-4.jpg","/portfolio/kenji-murakami-5.jpg"],
  },

  {
    stylist_id: "yumi-sasaki",
    name: "Yumi Sasaki",
    name_ja: "佐々木 由美",
    salon: "BIKKA Aoyama",
    salon_id: "bikka-aoyama",
    neighborhood: "Aoyama",
    english_summary: "Advanced English — Yumi is highly articulate in English and specializes in consulting with international clients about Japanese hair treatments. She can explain the chemistry of straightening treatments in clear, accessible English.",
    languages: ["English","Japanese"],
    specialties: "Japanese thermal straightening, acid straightening, hair restoration treatments, damaged hair repair",
    personality_signal: "Knowledgeable and reassuring — like a hair doctor who explains every step of the treatment process",
    typical_guest: "International women with frizzy or damaged hair seeking Japanese straightening expertise",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          }
    ],
    price_range_yen: [15000, 30000],
    portfolio_themes: "Glass-like straightening results, damaged hair transformations, sleek and healthy finishes",
    review_highlights_english: [
          "Yumi saved my hair. I came in with years of bleach damage and she recommended a treatment plan instead of just one session. Incredibly honest and knowledgeable.",
          "The Japanese straightening she did was the best I've experienced anywhere in the world. My hair has never been this smooth.",
          "She turned down my request for more bleach because my hair couldn't handle it, and suggested alternatives. I respect that so much."
    ],
    is_sozo_master: true,
    salon_english_score: 92,
    international_guest_count_6mo: 33,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=yumi-sasaki",
    portfolio_urls: ["/portfolio/yumi-sasaki-1.jpg","/portfolio/yumi-sasaki-2.jpg","/portfolio/yumi-sasaki-3.jpg","/portfolio/yumi-sasaki-4.jpg"],
  },

  {
    stylist_id: "haruto-kato",
    name: "Haruto Kato",
    name_ja: "加藤 陽翔",
    salon: "BIKKA Aoyama",
    salon_id: "bikka-aoyama",
    neighborhood: "Aoyama",
    english_summary: "Conversational English — Haruto can conduct a full consultation in English using shorter sentences. He's great at reading visual references and always double-checks your expectations with before/after photos from his portfolio.",
    languages: ["English","Japanese"],
    specialties: "Balayage, hand-painted highlights, brunette dimension, sombre techniques",
    personality_signal: "Artistic and thoughtful — takes his time in consultation and considers your request from multiple angles",
    typical_guest: "International women 25-40 wanting Instagram-worthy balayage in Tokyo",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          }
    ],
    price_range_yen: [14000, 28000],
    portfolio_themes: "Caramel balayage, chocolate dimension, face-framing money pieces",
    review_highlights_english: [
          "Haruto's balayage is honestly better than what I get in New York. The placement was so strategic and the blend was flawless.",
          "He studied my natural growth pattern before deciding where to place highlights. That attention to detail really shows in the result.",
          "Gorgeous balayage that looks natural even as it grows out. Exactly what I asked for."
    ],
    is_sozo_master: false,
    salon_english_score: 92,
    international_guest_count_6mo: 28,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=haruto-kato",
    portfolio_urls: ["/portfolio/haruto-kato-1.jpg","/portfolio/haruto-kato-2.jpg","/portfolio/haruto-kato-3.jpg","/portfolio/haruto-kato-4.jpg"],
  },

  {
    stylist_id: "rei-takahashi",
    name: "Rei Takahashi",
    name_ja: "高橋 玲",
    salon: "BIKKA Aoyama",
    salon_id: "bikka-aoyama",
    neighborhood: "Aoyama",
    english_summary: "Good English — Rei picked up English working with international models during Fashion Week seasons. Comfortable with styling vocabulary and can carry a conversation, though they sometimes switch to showing photos when words get tricky.",
    languages: ["English","Japanese"],
    specialties: "Textured hair, Afro hair care, protective styles, twist-outs, silk press",
    personality_signal: "Cool and inclusive — creates a safe space for all hair textures and identities",
    typical_guest: "Black expats and mixed-race individuals who need a stylist experienced with textured and Afro hair",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [12000, 26000],
    portfolio_themes: "Defined twist-outs, sleek silk presses, protective braided styles, natural hair celebrations",
    review_highlights_english: [
          "Finding a stylist in Tokyo who knows how to work with 4C hair felt impossible until I found Rei. They are a lifesaver.",
          "Rei did a silk press on my natural hair that was absolutely flawless. No heat damage, just smooth, shiny perfection.",
          "I'm mixed race and most salons in Japan have no idea what to do with my hair. Rei gets it completely.",
          "They even stocked specific products for textured hair after I became a regular. That kind of care means everything."
    ],
    is_sozo_master: false,
    salon_english_score: 92,
    international_guest_count_6mo: 25,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=rei-takahashi",
    portfolio_urls: ["/portfolio/rei-takahashi-1.jpg","/portfolio/rei-takahashi-2.jpg","/portfolio/rei-takahashi-3.jpg","/portfolio/rei-takahashi-4.jpg","/portfolio/rei-takahashi-5.jpg"],
  },

  {
    stylist_id: "saki-endo",
    name: "Saki Endo",
    name_ja: "遠藤 咲希",
    salon: "BIKKA Aoyama",
    salon_id: "bikka-aoyama",
    neighborhood: "Aoyama",
    english_summary: "Intermediate English — Saki communicates effectively for standard appointments. She has a prepared English consultation sheet that helps cover all the important questions about your hair history and goals.",
    languages: ["English","Japanese","Mandarin (basic)"],
    specialties: "Color correction, bleach recovery, toner mastery, vivid-to-natural transitions",
    personality_signal: "Analytical and honest — will tell you straight if what you want isn't achievable in one session",
    typical_guest: "International clients who had a color disaster elsewhere and need expert correction",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [13000, 30000],
    portfolio_themes: "Dramatic before/afters, orange-to-ash transformations, color rescues",
    review_highlights_english: [
          "I walked in with green-tinged hair from a terrible bleach job. Saki fixed it in one session. Absolute wizard.",
          "She was completely upfront about what was realistic and created a multi-session plan to get me to platinum safely.",
          "The best color correction I've ever had, and I've needed a lot of them over the years."
    ],
    is_sozo_master: false,
    salon_english_score: 92,
    international_guest_count_6mo: 22,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=saki-endo",
    portfolio_urls: ["/portfolio/saki-endo-1.jpg","/portfolio/saki-endo-2.jpg","/portfolio/saki-endo-3.jpg"],
  },

  {
    stylist_id: "akira-nishida",
    name: "Akira Nishida",
    name_ja: "西田 晃",
    salon: "BIKKA Aoyama",
    salon_id: "bikka-aoyama",
    neighborhood: "Aoyama",
    english_summary: "Functional English — Akira handles the essentials of an English appointment competently. He knows cut-specific vocabulary well. For anything beyond basics, the front desk can assist with translation.",
    languages: ["English (functional)","Japanese"],
    specialties: "Precision men's cuts, executive styling, classic gentlemen's cuts, hot towel shaves",
    personality_signal: "Refined and professional — treats men's grooming as a craft with the seriousness it deserves",
    typical_guest: "International businessmen in Aoyama/Omotesando area, embassy staff",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          }
    ],
    price_range_yen: [10000, 20000],
    portfolio_themes: "Tailored executive cuts, clean partings, timeless men's style",
    review_highlights_english: [
          "Akira gave me the most gentlemanly haircut I've ever received. Hot towel, precise scissors work, impeccable finish.",
          "I go before every important client meeting. Always leaves me looking sharp and polished.",
          "Classic barber skills with Japanese precision. A rare combination."
    ],
    is_sozo_master: false,
    salon_english_score: 92,
    international_guest_count_6mo: 18,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=akira-nishida",
    portfolio_urls: ["/portfolio/akira-nishida-1.jpg","/portfolio/akira-nishida-2.jpg","/portfolio/akira-nishida-3.jpg"],
  },

  {
    stylist_id: "shun-morita",
    name: "Shun Morita",
    name_ja: "森田 駿",
    salon: "LOAVE Omotesando",
    salon_id: "loave-omotesando",
    neighborhood: "Omotesando",
    english_summary: "Native English speaker — Shun grew up in Sydney, Australia, and moved to Tokyo at 22 to pursue hairdressing. His English is fully native with an Aussie accent. He also speaks Japanese natively from his home environment.",
    languages: ["English","Japanese"],
    specialties: "Creative cuts, editorial styling, runway prep, avant-garde color",
    personality_signal: "Charismatic and daring — pushes clients to try something new while respecting their comfort zone",
    typical_guest: "Creative professionals, photographers, musicians, people who want a statement look",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [14000, 30000],
    portfolio_themes: "Runway-inspired cuts, editorial color, wearable avant-garde, bold transformations",
    review_highlights_english: [
          "Shun convinced me to go shorter than I ever have and I've never felt more like myself. He has this gift for seeing what will work on you.",
          "The most creative stylist I've met in Japan. He approaches hair like an artist but never forgets you have to live with it on a Tuesday morning.",
          "I came in wanting 'something different' and he delivered beyond my wildest expectations. True visionary.",
          "His energy is infectious. You leave the chair feeling like a rock star."
    ],
    is_sozo_master: true,
    salon_english_score: 90,
    international_guest_count_6mo: 36,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=shun-morita",
    portfolio_urls: ["/portfolio/shun-morita-1.jpg","/portfolio/shun-morita-2.jpg","/portfolio/shun-morita-3.jpg","/portfolio/shun-morita-4.jpg","/portfolio/shun-morita-5.jpg"],
  },

  {
    stylist_id: "mayu-okada",
    name: "Mayu Okada",
    name_ja: "岡田 真由",
    salon: "LOAVE Omotesando",
    salon_id: "loave-omotesando",
    neighborhood: "Omotesando",
    english_summary: "Good conversational English — Mayu spent two years assisting at a bridal salon in London and communicates comfortably about updos, braiding, and event styling. She uses mood boards during consultation to bridge any language gaps.",
    languages: ["English","Japanese"],
    specialties: "Bridal hair, special occasion updos, elaborate braiding, kimono-appropriate hair styling",
    personality_signal: "Romantic and attentive — treats every bride like she's the most important person in the world",
    typical_guest: "International brides planning Tokyo weddings, event-goers needing traditional-meets-modern styling",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [12000, 28000],
    portfolio_themes: "Bridal elegance, kimono hairstyles with a modern twist, intricate braiding, soft romantic waves",
    review_highlights_english: [
          "Mayu did both my Western ceremony updo and my kimono hairstyle for the reception. Both were absolutely breathtaking.",
          "She came to my hotel at 5 AM on my wedding day and was calm, focused, and made me feel beautiful. An angel.",
          "The bridal trial was so thorough. She tried three different styles and we discussed every pin placement."
    ],
    is_sozo_master: false,
    salon_english_score: 90,
    international_guest_count_6mo: 20,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=mayu-okada",
    portfolio_urls: ["/portfolio/mayu-okada-1.jpg","/portfolio/mayu-okada-2.jpg","/portfolio/mayu-okada-3.jpg","/portfolio/mayu-okada-4.jpg"],
  },

  {
    stylist_id: "takumi-arai",
    name: "Takumi Arai",
    name_ja: "新井 匠",
    salon: "LOAVE Omotesando",
    salon_id: "loave-omotesando",
    neighborhood: "Omotesando",
    english_summary: "Advanced English — Takumi studies English daily and has worked hard to reach his current level. He speaks thoughtfully and precisely, sometimes pausing to choose the perfect word. International clients appreciate his effort and clarity.",
    languages: ["English","Japanese"],
    specialties: "Organic color, ammonia-free formulations, scalp-conscious coloring, henna blends",
    personality_signal: "Gentle and health-conscious — prioritizes the long-term health of your hair and scalp over quick results",
    typical_guest: "Health-conscious international women who want color without harsh chemicals",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          }
    ],
    price_range_yen: [12000, 26000],
    portfolio_themes: "Natural-looking color with organic products, gentle gray blending, chemical-free transformations",
    review_highlights_english: [
          "Takumi uses all organic products and my sensitive scalp thanked me. No burning, no irritation, and the color was beautiful.",
          "I have allergies to PPD and he found an alternative formula that works perfectly. So grateful.",
          "He explained every ingredient he was using and why. I've never felt so informed and safe during a color service."
    ],
    is_sozo_master: false,
    salon_english_score: 90,
    international_guest_count_6mo: 22,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=takumi-arai",
    portfolio_urls: ["/portfolio/takumi-arai-1.jpg","/portfolio/takumi-arai-2.jpg","/portfolio/takumi-arai-3.jpg"],
  },

  {
    stylist_id: "rina-matsumoto",
    name: "Rina Matsumoto",
    name_ja: "松本 里奈",
    salon: "LOAVE Omotesando",
    salon_id: "loave-omotesando",
    neighborhood: "Omotesando",
    english_summary: "Conversational English — Rina handles daily salon English well and has a warm personality that bridges any small gaps. She's particularly good at reading body language and picking up on whether you're happy with the direction.",
    languages: ["English","Japanese"],
    specialties: "Balayage, highlights, toning, glossing, low-maintenance color",
    personality_signal: "Cheerful and intuitive — reads the room perfectly and adjusts her approach accordingly",
    typical_guest: "Busy international moms and professionals who want beautiful hair without frequent salon visits",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          }
    ],
    price_range_yen: [11000, 24000],
    portfolio_themes: "Grow-out-friendly balayage, rooted blondes, warm honey tones, effortless dimension",
    review_highlights_english: [
          "Rina understood that as a working mom, I need color that looks good for 4-5 months. She delivered perfectly.",
          "The most natural-looking highlights I've gotten since moving to Japan. She really tailors the placement to your growth pattern.",
          "Friendly, fast, and fantastic results. My go-to every time I'm in Omotesando.",
          "She recommended a gloss treatment between color appointments that keeps everything fresh. Smart and thoughtful."
    ],
    is_sozo_master: false,
    salon_english_score: 90,
    international_guest_count_6mo: 26,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=rina-matsumoto",
    portfolio_urls: ["/portfolio/rina-matsumoto-1.jpg","/portfolio/rina-matsumoto-2.jpg","/portfolio/rina-matsumoto-3.jpg","/portfolio/rina-matsumoto-4.jpg"],
  },

  {
    stylist_id: "sota-kimura",
    name: "Sota Kimura",
    name_ja: "木村 颯太",
    salon: "LOAVE Omotesando",
    salon_id: "loave-omotesando",
    neighborhood: "Omotesando",
    english_summary: "Intermediate English — Sota manages well for men's appointments. He knows grooming terminology and can discuss styles. For more nuanced requests, he'll pull up reference images to make sure you're aligned.",
    languages: ["English","Japanese"],
    specialties: "Men's grooming, pompadours, slickbacks, razor fades, beard shaping",
    personality_signal: "Suave and detail-oriented — takes men's grooming seriously and treats it as an art form",
    typical_guest: "Style-conscious international men 25-45 who want a premium grooming experience",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          }
    ],
    price_range_yen: [9000, 16000],
    portfolio_themes: "Sharp pompadours, textured quiffs, clean razor lines, vintage-modern hybrids",
    review_highlights_english: [
          "Sota gave me the best pompadour I've ever had. It held for three days without needing to restyle.",
          "The hot towel treatment and attention to detail made this feel like a first-class experience.",
          "He shaped my beard so precisely I looked like I stepped out of a GQ shoot."
    ],
    is_sozo_master: false,
    salon_english_score: 90,
    international_guest_count_6mo: 18,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=sota-kimura",
    portfolio_urls: ["/portfolio/sota-kimura-1.jpg","/portfolio/sota-kimura-2.jpg","/portfolio/sota-kimura-3.jpg"],
  },

  {
    stylist_id: "hinata-yoshida",
    name: "Hinata Yoshida",
    name_ja: "吉田 陽向",
    salon: "LOAVE Omotesando",
    salon_id: "loave-omotesando",
    neighborhood: "Omotesando",
    english_summary: "Good English — Hinata is particularly patient with children and speaks English clearly and slowly when working with families. She studied early childhood education before becoming a stylist and brings that warmth to family appointments.",
    languages: ["English","Japanese"],
    specialties: "Kids' cuts, family appointments, women's everyday cuts, simple color",
    personality_signal: "Patient and nurturing — has a magical ability to keep children calm and still in the chair",
    typical_guest: "International families with young children, expat moms needing a kid-friendly salon experience",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [8000, 16000],
    portfolio_themes: "Adorable kids' styles, family-friendly looks, simple and beautiful everyday hair",
    review_highlights_english: [
          "My 3-year-old usually screams at the barber. Hinata had him laughing and sitting still within minutes. Witchcraft, I swear.",
          "She does both me and my two kids in one appointment. It's so convenient and the results are always lovely.",
          "The most kid-friendly salon experience in Tokyo. She has stickers, a tablet with cartoons, and infinite patience.",
          "My daughter asked to go back to 'the nice hair lady.' Highest possible endorsement from a 5-year-old."
    ],
    is_sozo_master: false,
    salon_english_score: 90,
    international_guest_count_6mo: 24,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=hinata-yoshida",
    portfolio_urls: ["/portfolio/hinata-yoshida-1.jpg","/portfolio/hinata-yoshida-2.jpg","/portfolio/hinata-yoshida-3.jpg"],
  },

  {
    stylist_id: "kai-hashimoto",
    name: "Kai Hashimoto",
    name_ja: "橋本 海",
    salon: "NALU Ebisu",
    salon_id: "nalu-ebisu",
    neighborhood: "Ebisu",
    english_summary: "Fluent English — Kai is half Japanese, half American and grew up in Honolulu. Fully bilingual and bicultural. He brings a relaxed Hawaiian energy to the salon and immediately puts international clients at ease.",
    languages: ["English","Japanese"],
    specialties: "Beachy waves, textured cuts, surf-inspired styles, natural movement",
    personality_signal: "Laid-back and genuine — makes every appointment feel like a chill hangout session",
    typical_guest: "Laid-back international creatives, surfers, digital nomads, anyone who wants effortless-looking hair",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          }
    ],
    price_range_yen: [11000, 22000],
    portfolio_themes: "Beachy texture, lived-in waves, effortless movement, salt-spray vibes",
    review_highlights_english: [
          "Kai gave me the beach waves I've been trying to achieve for years. He just GETS textured hair.",
          "Felt like getting my hair done by a friend in Hawaii. So relaxed, so easy, and the result was gorgeous.",
          "He's the only stylist who's ever made my thick, straight Asian hair look like it has natural wave to it. Magic hands."
    ],
    is_sozo_master: true,
    salon_english_score: 85,
    international_guest_count_6mo: 30,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=kai-hashimoto",
    portfolio_urls: ["/portfolio/kai-hashimoto-1.jpg","/portfolio/kai-hashimoto-2.jpg","/portfolio/kai-hashimoto-3.jpg","/portfolio/kai-hashimoto-4.jpg"],
  },

  {
    stylist_id: "mio-suzuki",
    name: "Mio Suzuki",
    name_ja: "鈴木 澪",
    salon: "NALU Ebisu",
    salon_id: "nalu-ebisu",
    neighborhood: "Ebisu",
    english_summary: "Intermediate English — Mio is passionate about organic hair care and has learned English specifically to share this knowledge with international clients. She speaks carefully and clearly, though complex discussions about chemistry may require a bit of back-and-forth.",
    languages: ["English","Japanese"],
    specialties: "Organic coloring, plant-based treatments, scalp care, natural henna",
    personality_signal: "Earthy and knowledgeable — deeply committed to holistic hair health",
    typical_guest: "Eco-conscious international residents who prioritize natural and organic products",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [10000, 22000],
    portfolio_themes: "Natural henna results, healthy scalp transformations, chemical-free color, botanical shine",
    review_highlights_english: [
          "Mio uses only plant-based products and my hair has never been healthier. The henna color she mixed was rich and gorgeous.",
          "Finally a stylist in Tokyo who doesn't think organic means boring. The colors she achieves naturally are stunning.",
          "She did a full scalp analysis before my treatment. That level of care is rare anywhere in the world."
    ],
    is_sozo_master: false,
    salon_english_score: 85,
    international_guest_count_6mo: 15,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=mio-suzuki",
    portfolio_urls: ["/portfolio/mio-suzuki-1.jpg","/portfolio/mio-suzuki-2.jpg","/portfolio/mio-suzuki-3.jpg"],
  },

  {
    stylist_id: "yuta-taniguchi",
    name: "Yuta Taniguchi",
    name_ja: "谷口 悠太",
    salon: "NALU Ebisu",
    salon_id: "nalu-ebisu",
    neighborhood: "Ebisu",
    english_summary: "Conversational English — Yuta communicates well enough for a full appointment and has a relaxed communication style. He often uses hand gestures and visual examples which makes consultations fun and collaborative.",
    languages: ["English","Japanese"],
    specialties: "Textured crops, layered cuts, Japanese messy styling, air-dry friendly cuts",
    personality_signal: "Relaxed and collaborative — treats the appointment like a creative partnership",
    typical_guest: "International men and women 20s-30s who want a trendy but wearable Tokyo look",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          }
    ],
    price_range_yen: [9000, 18000],
    portfolio_themes: "Effortless Tokyo cool, messy chic, air-dry texture, undone sophistication",
    review_highlights_english: [
          "Yuta gave me a cut that literally looks good whether I style it or roll out of bed. That's talent.",
          "He showed me how to style it with just my fingers and a tiny bit of wax. Low maintenance perfection.",
          "Such a chill vibe in his chair. No pressure, just good vibes and a great haircut."
    ],
    is_sozo_master: false,
    salon_english_score: 85,
    international_guest_count_6mo: 19,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=yuta-taniguchi",
    portfolio_urls: ["/portfolio/yuta-taniguchi-1.jpg","/portfolio/yuta-taniguchi-2.jpg","/portfolio/yuta-taniguchi-3.jpg"],
  },

  {
    stylist_id: "nanami-fukuda",
    name: "Nanami Fukuda",
    name_ja: "福田 七海",
    salon: "NALU Ebisu",
    salon_id: "nalu-ebisu",
    neighborhood: "Ebisu",
    english_summary: "Basic conversational English — Nanami handles appointments in English with assistance from visual aids and her salon's English menu. She's great with repeat clients who have established a rhythm together.",
    languages: ["English (basic)","Japanese"],
    specialties: "Cold perms, body wave perms, root perms, perm aftercare education",
    personality_signal: "Methodical and caring — treats perm chemistry with scientific precision",
    typical_guest: "Asian expats and locals wanting Korean-style perms, plus curious Western clients wanting to try Japanese perming",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [11000, 23000],
    portfolio_themes: "Loose body waves, Korean root perms, volumizing perms, natural-looking movement",
    review_highlights_english: [
          "Nanami's cold perm gave me the most natural waves. It didn't look 'permed' at all — just naturally wavy.",
          "Language was a slight barrier but the results were incredible. She's clearly a perm expert.",
          "She spent a lot of time testing my hair elasticity before deciding on the solution strength. Very careful and professional."
    ],
    is_sozo_master: false,
    salon_english_score: 85,
    international_guest_count_6mo: 12,
    google_review_avg_english_only: 4.4,
    photo_url: "https://i.pravatar.cc/150?u=nanami-fukuda",
    portfolio_urls: ["/portfolio/nanami-fukuda-1.jpg","/portfolio/nanami-fukuda-2.jpg","/portfolio/nanami-fukuda-3.jpg"],
  },

  {
    stylist_id: "leo-saito",
    name: "Leo Saito",
    name_ja: "齋藤 玲央",
    salon: "NALU Ebisu",
    salon_id: "nalu-ebisu",
    neighborhood: "Ebisu",
    english_summary: "Good English — Leo spent a year working in a barbershop in Brooklyn and came back with strong English skills and a love for American barbering culture. He mixes Japanese precision with New York cool.",
    languages: ["English","Japanese"],
    specialties: "Men's fades, skin fades, line-ups, creative designs, beard sculpting",
    personality_signal: "Cool and creative — blasts hip-hop during appointments and turns every fade into a work of art",
    typical_guest: "Young international men 20s-30s who want a fresh, detailed fade with personality",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [8000, 15000],
    portfolio_themes: "Sharp fades, creative line work, detailed beard sculpting, artistic designs",
    review_highlights_english: [
          "Leo's fades are tighter than anything I got in Brooklyn. Japanese precision meets NYC swagger.",
          "The line-up was so clean I could use it as a ruler. Dude is an artist with clippers.",
          "He added a subtle design in the fade without me even asking and it was fire. This guy gets it.",
          "Best barber experience in Tokyo, hands down. Great music, great conversation, perfect cut."
    ],
    is_sozo_master: false,
    salon_english_score: 85,
    international_guest_count_6mo: 22,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=leo-saito",
    portfolio_urls: ["/portfolio/leo-saito-1.jpg","/portfolio/leo-saito-2.jpg","/portfolio/leo-saito-3.jpg","/portfolio/leo-saito-4.jpg"],
  },

  {
    stylist_id: "masahiro-noguchi",
    name: "Masahiro Noguchi",
    name_ja: "野口 雅弘",
    salon: "KOZE Ginza",
    salon_id: "koze-ginza",
    neighborhood: "Ginza",
    english_summary: "Fluent business English — Masahiro has 20+ years of experience and has been serving international clients in Ginza for over a decade. His English is professional and polished, with the vocabulary to discuss any service in detail.",
    languages: ["English","Japanese","French (conversational)"],
    specialties: "Luxury color, premium cut and blow-dry, scalp treatments, anti-aging hair care",
    personality_signal: "Distinguished and gracious — makes you feel like you're his most important client of the day",
    typical_guest: "High-end international business travelers, luxury hotel concierge referrals, diplomats",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          }
    ],
    price_range_yen: [20000, 35000],
    portfolio_themes: "Timeless elegance, polished sophistication, age-defying color, immaculate blow-dries",
    review_highlights_english: [
          "Walking into Masahiro's salon in Ginza is like entering a different world. The service is impeccable and the results are consistently flawless.",
          "My concierge at the Peninsula recommended him and it was the best recommendation of my entire trip to Tokyo.",
          "He noticed my hair was thinning at the crown and suggested a volumizing treatment I hadn't even considered. True professional."
    ],
    is_sozo_master: true,
    salon_english_score: 90,
    international_guest_count_6mo: 40,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=masahiro-noguchi",
    portfolio_urls: ["/portfolio/masahiro-noguchi-1.jpg","/portfolio/masahiro-noguchi-2.jpg","/portfolio/masahiro-noguchi-3.jpg","/portfolio/masahiro-noguchi-4.jpg"],
  },

  {
    stylist_id: "chihiro-watanabe-k",
    name: "Chihiro Watanabe",
    name_ja: "渡辺 千尋",
    salon: "KOZE Ginza",
    salon_id: "koze-ginza",
    neighborhood: "Ginza",
    english_summary: "Advanced English — Chihiro completed a certificate program in London and speaks English with a refined, careful precision. She excels at explaining color processes step by step so you always know exactly what's happening.",
    languages: ["English","Japanese"],
    specialties: "Luxury highlights, glazing, dimensional brunette, color for fine hair",
    personality_signal: "Elegant and precise — every stroke of her brush is intentional and her work ethic is extraordinary",
    typical_guest: "Sophisticated international women 40-60 who expect five-star service",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [16000, 32000],
    portfolio_themes: "Luminous brunettes, subtle highlights for mature hair, dimensional richness, mirror-shine finishes",
    review_highlights_english: [
          "Chihiro gave me the most beautiful, subtle highlights. They look completely natural — like my hair just decided to be perfect.",
          "The salon experience at KOZE Ginza is luxurious from the moment you walk in, and Chihiro is the crown jewel.",
          "She noticed my hair was drier on the ends and adjusted the formula accordingly. That level of observation is rare.",
          "I've been coming from Hong Kong quarterly for two years now. Worth the trip every time."
    ],
    is_sozo_master: true,
    salon_english_score: 90,
    international_guest_count_6mo: 34,
    google_review_avg_english_only: 4.9,
    photo_url: "https://i.pravatar.cc/150?u=chihiro-watanabe-k",
    portfolio_urls: ["/portfolio/chihiro-watanabe-k-1.jpg","/portfolio/chihiro-watanabe-k-2.jpg","/portfolio/chihiro-watanabe-k-3.jpg","/portfolio/chihiro-watanabe-k-4.jpg","/portfolio/chihiro-watanabe-k-5.jpg"],
  },

  {
    stylist_id: "ryosuke-yamada",
    name: "Ryosuke Yamada",
    name_ja: "山田 良介",
    salon: "KOZE Ginza",
    salon_id: "koze-ginza",
    neighborhood: "Ginza",
    english_summary: "Functional English — Ryosuke handles men's appointments well in English. He's direct and efficient, and has a solid grasp of grooming vocabulary. Don't expect long conversations, but expect a perfect haircut.",
    languages: ["English (functional)","Japanese"],
    specialties: "Executive men's cuts, hot scissor cuts, scalp massage, gentlemen's grooming packages",
    personality_signal: "Professional and efficient — treats men's hair care as a precision craft",
    typical_guest: "International executives staying at Ginza luxury hotels, corporate expat men",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [12000, 22000],
    portfolio_themes: "Polished executive looks, clean-cut professionalism, distinguished gentleman's style",
    review_highlights_english: [
          "The hot scissor cut was a revelation. My hair has never felt smoother or looked more polished.",
          "Ryosuke doesn't waste time chatting but the cut is absolutely immaculate. Exactly what a busy executive needs.",
          "The full grooming package with scalp massage, hot scissors, and styling was the most relaxing 90 minutes of my trip."
    ],
    is_sozo_master: false,
    salon_english_score: 90,
    international_guest_count_6mo: 25,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=ryosuke-yamada",
    portfolio_urls: ["/portfolio/ryosuke-yamada-1.jpg","/portfolio/ryosuke-yamada-2.jpg","/portfolio/ryosuke-yamada-3.jpg"],
  },

  {
    stylist_id: "ayaka-ono",
    name: "Ayaka Ono",
    name_ja: "小野 彩花",
    salon: "KOZE Ginza",
    salon_id: "koze-ginza",
    neighborhood: "Ginza",
    english_summary: "Good conversational English — Ayaka is a gentle communicator who speaks English slowly and clearly. She's especially skilled at making nervous first-time international clients feel comfortable with Japanese straightening treatments.",
    languages: ["English","Japanese"],
    specialties: "Japanese straightening, acid perm straightening, damaged hair rehabilitation, deep conditioning",
    personality_signal: "Gentle and reassuring — holds your hand (figuratively) through every step of the treatment",
    typical_guest: "International women with thick, wavy, or frizzy hair who've heard about Japanese straightening and want to try it with someone trustworthy",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          }
    ],
    price_range_yen: [15000, 30000],
    portfolio_themes: "Dramatic straightening befores/afters, silk-smooth results, healthy shine transformations",
    review_highlights_english: [
          "I was terrified of chemical straightening but Ayaka walked me through every step and the result was incredible. Silky smooth hair for the first time in my life.",
          "She tested a small section first to check how my hair would react. That kind of caution gave me so much confidence.",
          "The straightening lasted six months and my hair actually felt healthier after. Japanese straightening is no joke and Ayaka is a master."
    ],
    is_sozo_master: false,
    salon_english_score: 90,
    international_guest_count_6mo: 28,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=ayaka-ono",
    portfolio_urls: ["/portfolio/ayaka-ono-1.jpg","/portfolio/ayaka-ono-2.jpg","/portfolio/ayaka-ono-3.jpg","/portfolio/ayaka-ono-4.jpg"],
  },

  {
    stylist_id: "hiroshi-tanabe",
    name: "Hiroshi Tanabe",
    name_ja: "田辺 博",
    salon: "KOZE Ginza",
    salon_id: "koze-ginza",
    neighborhood: "Ginza",
    english_summary: "Strong English — Hiroshi picked up English working at luxury hotels in his twenties before switching to hair. He has hospitality-grade English — polished, attentive, and anticipates your needs before you express them.",
    languages: ["English","Japanese"],
    specialties: "Senior men's styling, gray blending for men, thinning hair solutions, scalp micropigmentation consultation",
    personality_signal: "Discreet and sophisticated — handles sensitive topics like hair loss with grace and confidentiality",
    typical_guest: "International men 45-65 dealing with graying or thinning hair who want subtle, dignified solutions",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          }
    ],
    price_range_yen: [12000, 24000],
    portfolio_themes: "Distinguished gray blending, natural-looking thinning solutions, age-appropriate refinement",
    review_highlights_english: [
          "Hiroshi helped me transition to gray gracefully instead of clinging to box dye. I look ten years younger and more natural.",
          "He was so tactful discussing my thinning hair. No awkwardness, just solutions. The cut he gave me makes it virtually unnoticeable.",
          "A gentleman's stylist in every sense of the word. Discreet, skilled, and makes you feel great about aging."
    ],
    is_sozo_master: false,
    salon_english_score: 90,
    international_guest_count_6mo: 20,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=hiroshi-tanabe",
    portfolio_urls: ["/portfolio/hiroshi-tanabe-1.jpg","/portfolio/hiroshi-tanabe-2.jpg","/portfolio/hiroshi-tanabe-3.jpg"],
  },

  {
    stylist_id: "mei-honda",
    name: "Mei Honda",
    name_ja: "本田 芽依",
    salon: "KOZE Ginza",
    salon_id: "koze-ginza",
    neighborhood: "Ginza",
    english_summary: "Intermediate English — Mei knows nail terminology well in English and can consult on designs, colors, and nail health. Her English is focused and service-oriented, making the appointment smooth and clear.",
    languages: ["English","Japanese"],
    specialties: "Luxury gel nails, Swarovski nail art, French manicures, nail repair and strengthening",
    personality_signal: "Meticulous and glamorous — every nail she does looks like it belongs in a luxury magazine",
    typical_guest: "International women wanting premium Japanese nail art, luxury hotel guests, special occasion clients",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [9000, 20000],
    portfolio_themes: "Luxury gel art, Swarovski embellishments, elegant French tips, crystal and mirror designs",
    review_highlights_english: [
          "Mei's nail art is museum-quality. Each nail was a tiny masterpiece with Swarovski crystals perfectly placed.",
          "The most luxurious nail experience I've ever had. The Ginza salon setting, the attention to detail, the perfect result — worth every yen.",
          "I got a simple French manicure and even that was the best I've ever had. Her lines are impossibly precise."
    ],
    is_sozo_master: false,
    salon_english_score: 90,
    international_guest_count_6mo: 18,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=mei-honda",
    portfolio_urls: ["/portfolio/mei-honda-1.jpg","/portfolio/mei-honda-2.jpg","/portfolio/mei-honda-3.jpg","/portfolio/mei-honda-4.jpg"],
  },

  {
    stylist_id: "riku-ishikawa",
    name: "Riku Ishikawa",
    name_ja: "石川 陸",
    salon: "RIKU Roppongi",
    salon_id: "riku-roppongi",
    neighborhood: "Roppongi",
    english_summary: "Fluent English — Riku lived in London for six years and his salon in Roppongi was specifically designed to serve the international community. He speaks English with a slight British inflection and handles all types of consultations with ease.",
    languages: ["English","Japanese","Spanish (basic)"],
    specialties: "International hair textures, versatile cutting, creative color, multicultural styling",
    personality_signal: "Worldly and adaptable — instantly adjusts his approach based on your hair texture and cultural background",
    typical_guest: "The diverse Roppongi international community — military families, embassy staff, multinational professionals",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          }
    ],
    price_range_yen: [13000, 27000],
    portfolio_themes: "Diverse textures, multicultural styling, versatile cuts that work on any hair type",
    review_highlights_english: [
          "Riku is the rare stylist who's genuinely experienced with ALL hair types. Black hair, Asian hair, fine European hair — he handles it all brilliantly.",
          "His salon feels like a little international haven in Roppongi. Everyone is welcome and everyone leaves looking amazing.",
          "As someone with mixed-race hair that confuses most stylists, finding Riku was a revelation.",
          "He asked about my heritage and hair care routine before starting. That cultural awareness makes all the difference."
    ],
    is_sozo_master: true,
    salon_english_score: 96,
    international_guest_count_6mo: 45,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=riku-ishikawa",
    portfolio_urls: ["/portfolio/riku-ishikawa-1.jpg","/portfolio/riku-ishikawa-2.jpg","/portfolio/riku-ishikawa-3.jpg","/portfolio/riku-ishikawa-4.jpg","/portfolio/riku-ishikawa-5.jpg"],
  },

  {
    stylist_id: "tomoko-ueda",
    name: "Tomoko Ueda",
    name_ja: "上田 朋子",
    salon: "RIKU Roppongi",
    salon_id: "riku-roppongi",
    neighborhood: "Roppongi",
    english_summary: "Strong English — Tomoko worked in salons catering to international clients for over eight years. She's comfortable discussing any hairstyle in English and often helps translate for other salon staff.",
    languages: ["English","Japanese"],
    specialties: "Blowouts, blow-dry styling, silk press, smoothing treatments, keratin",
    personality_signal: "Warm and chatty — you'll leave knowing her life story and she'll know yours",
    typical_guest: "International women who love a perfect blowout, embassy event regulars",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          }
    ],
    price_range_yen: [8000, 18000],
    portfolio_themes: "Bouncy blowouts, sleek straight finishes, voluminous curled ends, old Hollywood waves",
    review_highlights_english: [
          "Tomoko's blowout lasted three days. THREE DAYS. I've never experienced anything like it.",
          "She chatted with me the whole time and made the appointment fly by. Plus my hair looked incredible for my embassy dinner.",
          "The best blowout bar in Tokyo doesn't exist because Tomoko IS the blowout bar."
    ],
    is_sozo_master: false,
    salon_english_score: 96,
    international_guest_count_6mo: 35,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=tomoko-ueda",
    portfolio_urls: ["/portfolio/tomoko-ueda-1.jpg","/portfolio/tomoko-ueda-2.jpg","/portfolio/tomoko-ueda-3.jpg"],
  },

  {
    stylist_id: "naoto-maeda",
    name: "Naoto Maeda",
    name_ja: "前田 直人",
    salon: "RIKU Roppongi",
    salon_id: "riku-roppongi",
    neighborhood: "Roppongi",
    english_summary: "Good conversational English — Naoto's English is natural and easy to understand. He learned primarily through international friendships and music, so his English has a casual, friendly tone.",
    languages: ["English","Japanese"],
    specialties: "Creative vivid color, neon color, UV-reactive color, fashion-forward looks",
    personality_signal: "Edgy and fun — the kind of stylist who makes you want to do something wild with your hair",
    typical_guest: "Young international nightlife crowd, artists, performers, anyone wanting bold hair for the Roppongi scene",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          }
    ],
    price_range_yen: [12000, 28000],
    portfolio_themes: "Neon brights, split-dye, UV-reactive color, anime-inspired looks",
    review_highlights_english: [
          "Naoto did a split-dye pink and blue that GLOWS UNDER BLACKLIGHT. I was the star of every club in Roppongi.",
          "He turned my boring hair into a work of art. The color placement was so creative — he used my natural cowlick as a design element.",
          "Honestly the most fun I've ever had at a salon. Great music, great vibes, insane color work."
    ],
    is_sozo_master: false,
    salon_english_score: 96,
    international_guest_count_6mo: 28,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=naoto-maeda",
    portfolio_urls: ["/portfolio/naoto-maeda-1.jpg","/portfolio/naoto-maeda-2.jpg","/portfolio/naoto-maeda-3.jpg","/portfolio/naoto-maeda-4.jpg"],
  },

  {
    stylist_id: "kanako-sugimoto",
    name: "Kanako Sugimoto",
    name_ja: "杉本 加奈子",
    salon: "RIKU Roppongi",
    salon_id: "riku-roppongi",
    neighborhood: "Roppongi",
    english_summary: "Advanced English — Kanako spent three years working at a salon in Dubai where English was the primary language. She's professional and clear, especially when consulting on extensions and the maintenance they require.",
    languages: ["English","Japanese","Arabic (basic)"],
    specialties: "Hair extensions, tape-ins, hand-tied wefts, extension maintenance, length transformations",
    personality_signal: "Glamorous and encouraging — loves helping clients achieve their dream hair length",
    typical_guest: "International women wanting length and volume, models, content creators",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [15000, 35000],
    portfolio_themes: "Dramatic length transformations, seamless extension blends, voluminous long hair, mermaid looks",
    review_highlights_english: [
          "Kanako's tape-in extensions are completely invisible. My friends had no idea my hair wasn't naturally this long.",
          "She spent 30 minutes matching extension colors to my natural hair. That attention to detail is why the result looks so real.",
          "The hand-tied wefts she installed are the most comfortable extensions I've ever worn. And I've tried everything."
    ],
    is_sozo_master: false,
    salon_english_score: 96,
    international_guest_count_6mo: 30,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=kanako-sugimoto",
    portfolio_urls: ["/portfolio/kanako-sugimoto-1.jpg","/portfolio/kanako-sugimoto-2.jpg","/portfolio/kanako-sugimoto-3.jpg","/portfolio/kanako-sugimoto-4.jpg"],
  },

  {
    stylist_id: "daisuke-wada",
    name: "Daisuke Wada",
    name_ja: "和田 大輔",
    salon: "RIKU Roppongi",
    salon_id: "riku-roppongi",
    neighborhood: "Roppongi",
    english_summary: "Conversational English — Daisuke's English is practical and service-oriented. He communicates clearly about what he's doing and why, though deeper conversations flow better with simpler vocabulary.",
    languages: ["English","Japanese"],
    specialties: "Traditional barbering, straight razor shaves, classic cuts, military-style cuts",
    personality_signal: "Old-school and meticulous — treats barbering as a time-honored tradition",
    typical_guest: "US military personnel from nearby bases, international men wanting a proper traditional shave",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [8000, 16000],
    portfolio_themes: "Classic high-and-tights, regulation cuts, traditional straight razor finishes, clean military precision",
    review_highlights_english: [
          "Finally found a barber near Roppongi who can do a proper high-and-tight. Daisuke nails it every time.",
          "The straight razor shave was the most relaxing 20 minutes of my deployment. Hot towel, perfect technique, incredibly smooth.",
          "Been coming here monthly since I got stationed in Tokyo. Consistent, reliable, and always regulation-perfect."
    ],
    is_sozo_master: false,
    salon_english_score: 96,
    international_guest_count_6mo: 32,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=daisuke-wada",
    portfolio_urls: ["/portfolio/daisuke-wada-1.jpg","/portfolio/daisuke-wada-2.jpg","/portfolio/daisuke-wada-3.jpg"],
  },

  {
    stylist_id: "yua-hirata",
    name: "Yua Hirata",
    name_ja: "平田 結愛",
    salon: "RIKU Roppongi",
    salon_id: "riku-roppongi",
    neighborhood: "Roppongi",
    english_summary: "Good English — Yua is a patient communicator who uses photos, diagrams, and even quick hair sketches to make sure you're on the same page. International clients love her visual consultation style.",
    languages: ["English","Japanese"],
    specialties: "Curly cuts, natural hair care, twist-outs, wash-and-go styling, DevaCurl-inspired methods",
    personality_signal: "Nurturing and celebratory — she genuinely celebrates every curl pattern she works with",
    typical_guest: "Black and mixed-race women in the Roppongi international community seeking natural hair care",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [10000, 22000],
    portfolio_themes: "Embraced natural textures, defined wash-and-gos, shaped Afros, protective styling",
    review_highlights_english: [
          "Yua was so excited about my 4A curls she literally clapped when they bounced after cutting. That enthusiasm means everything.",
          "She studied natural hair care specifically because she saw a need in the community. That dedication shows in her work.",
          "After years of straightening my hair in Japan because no one could cut it properly, Yua taught me to love my natural texture.",
          "She has a whole shelf of products for textured hair. In Japan! I could have cried."
    ],
    is_sozo_master: false,
    salon_english_score: 96,
    international_guest_count_6mo: 24,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=yua-hirata",
    portfolio_urls: ["/portfolio/yua-hirata-1.jpg","/portfolio/yua-hirata-2.jpg","/portfolio/yua-hirata-3.jpg","/portfolio/yua-hirata-4.jpg"],
  },

  {
    stylist_id: "satoshi-otsuka",
    name: "Satoshi Otsuka",
    name_ja: "大塚 聡",
    salon: "HANA Nakameguro",
    salon_id: "hana-nakameguro",
    neighborhood: "Nakameguro",
    english_summary: "Good conversational English — Satoshi is a quiet, thoughtful communicator. He doesn't talk much but every word counts. He uses a detailed consultation form in both English and Japanese to make sure he understands your vision perfectly.",
    languages: ["English","Japanese"],
    specialties: "Minimalist cuts, undone texture, shag cuts, soft layers, Japanese wabi-sabi aesthetic",
    personality_signal: "Quiet and philosophical — approaches hair like a meditation, finds beauty in imperfection",
    typical_guest: "Design-conscious international creatives 30s-40s who appreciate minimalist, intentional style",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          }
    ],
    price_range_yen: [12000, 24000],
    portfolio_themes: "Wabi-sabi texture, perfectly imperfect layers, intentional undone-ness, minimalist beauty",
    review_highlights_english: [
          "Satoshi's cuts look like they just happened naturally. There's an artistry to that kind of 'effortless' that very few stylists achieve.",
          "The quietest, most meditative haircut of my life. And somehow the best. His salon in Nakameguro is like a hair temple.",
          "He cut my hair in complete silence for 45 minutes and I left looking like a cooler version of myself. No notes."
    ],
    is_sozo_master: false,
    salon_english_score: 78,
    international_guest_count_6mo: 16,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=satoshi-otsuka",
    portfolio_urls: ["/portfolio/satoshi-otsuka-1.jpg","/portfolio/satoshi-otsuka-2.jpg","/portfolio/satoshi-otsuka-3.jpg","/portfolio/satoshi-otsuka-4.jpg"],
  },

  {
    stylist_id: "mizuki-kawaguchi",
    name: "Mizuki Kawaguchi",
    name_ja: "川口 瑞希",
    salon: "HANA Nakameguro",
    salon_id: "hana-nakameguro",
    neighborhood: "Nakameguro",
    english_summary: "Intermediate English — Mizuki communicates clearly for standard services and has a gentle, patient manner. She uses a lot of visual references and will sketch quick style ideas on paper to bridge any communication gaps.",
    languages: ["English","Japanese"],
    specialties: "Natural styling, low-chemical treatments, botanical color, hemp oil treatments",
    personality_signal: "Serene and mindful — her appointments feel like a wellness ritual",
    typical_guest: "International residents who value slow living, sustainability, and natural beauty",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [10000, 20000],
    portfolio_themes: "Natural movement, botanical-colored tones, healthy hair celebrations, understated elegance",
    review_highlights_english: [
          "Getting my hair done at HANA is like going to a spa. Mizuki's gentle technique and botanical products make it a healing experience.",
          "She used a plant-based color that smelled amazing and left my hair softer than any chemical dye ever has.",
          "Mizuki recommended a hemp oil treatment for my dry ends and the results were remarkable. So nourishing."
    ],
    is_sozo_master: false,
    salon_english_score: 78,
    international_guest_count_6mo: 12,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=mizuki-kawaguchi",
    portfolio_urls: ["/portfolio/mizuki-kawaguchi-1.jpg","/portfolio/mizuki-kawaguchi-2.jpg","/portfolio/mizuki-kawaguchi-3.jpg"],
  },

  {
    stylist_id: "kosei-nakata",
    name: "Kosei Nakata",
    name_ja: "中田 晃生",
    salon: "HANA Nakameguro",
    salon_id: "hana-nakameguro",
    neighborhood: "Nakameguro",
    english_summary: "Basic-to-intermediate English — Kosei tries hard and can get through an appointment, but complex requests should be supported with photos. He's enthusiastic and will ask clarifying questions to make sure he gets it right.",
    languages: ["English (basic-intermediate)","Japanese"],
    specialties: "Men's cuts, natural styling, textured crops, Japanese men's trends",
    personality_signal: "Earnest and hardworking — his genuine effort to communicate makes up for any language gaps",
    typical_guest: "Male expats living in the Nakameguro area who want a neighborhood barber they can build a relationship with",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          }
    ],
    price_range_yen: [8000, 14000],
    portfolio_themes: "Relaxed men's style, natural texture, easy-going crops, neighborhood cool",
    review_highlights_english: [
          "Kosei doesn't speak perfect English but he TRIES so hard and the haircut is always great. Love this guy.",
          "He remembered my style from last time and just went for it. That's the kind of barber relationship I missed from back home.",
          "Great value for a really solid men's cut in a chill Nakameguro setting."
    ],
    is_sozo_master: false,
    salon_english_score: 78,
    international_guest_count_6mo: 10,
    google_review_avg_english_only: 4.4,
    photo_url: "https://i.pravatar.cc/150?u=kosei-nakata",
    portfolio_urls: ["/portfolio/kosei-nakata-1.jpg","/portfolio/kosei-nakata-2.jpg","/portfolio/kosei-nakata-3.jpg"],
  },

  {
    stylist_id: "asami-fuji",
    name: "Asami Fuji",
    name_ja: "藤 麻美",
    salon: "HANA Nakameguro",
    salon_id: "hana-nakameguro",
    neighborhood: "Nakameguro",
    english_summary: "Conversational English — Asami speaks calmly and clearly, making her easy to understand even when vocabulary is limited. She has prepared English cards explaining each organic product she uses, which international clients appreciate.",
    languages: ["English","Japanese"],
    specialties: "Organic color, ammonia-free highlights, scalp-safe treatments, pregnancy-safe coloring",
    personality_signal: "Caring and transparent — explains every product she puts on your hair and why",
    typical_guest: "Pregnant international women, new mothers, anyone concerned about chemical exposure during coloring",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          }
    ],
    price_range_yen: [11000, 23000],
    portfolio_themes: "Safe and beautiful color, gentle transformations, pregnancy-safe options, soft natural tones",
    review_highlights_english: [
          "Asami colored my hair while I was pregnant and I felt completely safe. She showed me every product's ingredient list and explained the safety testing.",
          "I have chemical sensitivities and she found a formula that doesn't trigger my reactions. The color is still gorgeous.",
          "She creates the most beautiful soft caramel tones using completely organic products. Didn't think that was possible."
    ],
    is_sozo_master: false,
    salon_english_score: 78,
    international_guest_count_6mo: 14,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=asami-fuji",
    portfolio_urls: ["/portfolio/asami-fuji-1.jpg","/portfolio/asami-fuji-2.jpg","/portfolio/asami-fuji-3.jpg"],
  },

  {
    stylist_id: "rena-okamoto",
    name: "Rena Okamoto",
    name_ja: "岡本 玲奈",
    salon: "HANA Nakameguro",
    salon_id: "hana-nakameguro",
    neighborhood: "Nakameguro",
    english_summary: "Good English — Rena spent a summer at a salon in Portland, Oregon, and maintained her English through online conversation practice. She's chatty and open, which makes the appointment fly by.",
    languages: ["English","Japanese"],
    specialties: "Women's layered cuts, curtain bangs, long layers, dry cutting",
    personality_signal: "Friendly and conversational — the appointment feels like catching up with a girlfriend",
    typical_guest: "International women 25-35 living in the Nakameguro/Meguro area wanting a reliable local stylist",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          }
    ],
    price_range_yen: [9000, 18000],
    portfolio_themes: "Flattering face-framing cuts, lived-in layers, easy everyday style",
    review_highlights_english: [
          "Rena is my go-to for curtain bangs. She adjusts them perfectly for my face shape every time.",
          "Such a lovely experience. We chatted about travel the whole time and I walked out with gorgeous layers.",
          "She dry-cuts the final shape which I've never experienced before. It makes the result so much more precise for how my hair naturally falls.",
          "Discovered this salon walking around Nakameguro and it became my regular spot. Rena is wonderful."
    ],
    is_sozo_master: false,
    salon_english_score: 78,
    international_guest_count_6mo: 18,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=rena-okamoto",
    portfolio_urls: ["/portfolio/rena-okamoto-1.jpg","/portfolio/rena-okamoto-2.jpg","/portfolio/rena-okamoto-3.jpg","/portfolio/rena-okamoto-4.jpg"],
  },

  {
    stylist_id: "minami-kurosawa",
    name: "Minami Kurosawa",
    name_ja: "黒澤 南",
    salon: "TSUMUGI Daikanyama",
    salon_id: "tsumugi-daikanyama",
    neighborhood: "Daikanyama",
    english_summary: "Fluent English — Minami studied fashion in Paris and worked at a salon in Le Marais before returning to Tokyo. She speaks English beautifully with subtle French expressions sprinkled in. Equally fluent in Japanese and French.",
    languages: ["English","Japanese","French"],
    specialties: "French-inspired cutting, effortless Parisian style, undone elegance, editorial work",
    personality_signal: "Sophisticated and creative — sees every client as a muse and every cut as a story",
    typical_guest: "Fashion industry insiders, creative directors, international women who want understated Parisian-Tokyo chic",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [15000, 30000],
    portfolio_themes: "Effortless French style, undone bobs, messy chic, editorial elegance",
    review_highlights_english: [
          "Minami gave me the most Parisian haircut I've ever had — and I lived in Paris for five years. She just gets that effortless thing.",
          "Her Daikanyama salon is stunning. The aesthetic, the music, the coffee — and then the haircut matches the experience.",
          "I've never felt more chic walking out of a salon. She has a gift for making you look like you didn't try at all, in the best possible way.",
          "She studied my bone structure for a full minute before deciding where to cut. That's the kind of artistry you pay for."
    ],
    is_sozo_master: true,
    salon_english_score: 88,
    international_guest_count_6mo: 32,
    google_review_avg_english_only: 4.9,
    photo_url: "https://i.pravatar.cc/150?u=minami-kurosawa",
    portfolio_urls: ["/portfolio/minami-kurosawa-1.jpg","/portfolio/minami-kurosawa-2.jpg","/portfolio/minami-kurosawa-3.jpg","/portfolio/minami-kurosawa-4.jpg","/portfolio/minami-kurosawa-5.jpg"],
  },

  {
    stylist_id: "yuto-hasegawa",
    name: "Yuto Hasegawa",
    name_ja: "長谷川 悠人",
    salon: "TSUMUGI Daikanyama",
    salon_id: "tsumugi-daikanyama",
    neighborhood: "Daikanyama",
    english_summary: "Advanced English — Yuto spent two years at a salon in Melbourne and his English is confident and natural. He's particularly articulate when explaining balayage techniques and color theory.",
    languages: ["English","Japanese"],
    specialties: "Balayage, foilyage, creative blonde work, tone-on-tone color, color melts",
    personality_signal: "Perfectionist and passionate — gets visibly excited when a color comes out exactly right",
    typical_guest: "International women wanting premium balayage, stylists from other countries seeking inspiration",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          }
    ],
    price_range_yen: [14000, 30000],
    portfolio_themes: "Dimensional blondes, seamless balayage, tone-on-tone richness, color melt artistry",
    review_highlights_english: [
          "Yuto's balayage is a religious experience. The dimension and depth in my blonde has never looked this good.",
          "He was so meticulous with foil placement — each one was deliberate and strategic. The result speaks for itself.",
          "I'm a hairstylist from Melbourne and I came to Yuto specifically to learn from his technique. He's world-class."
    ],
    is_sozo_master: false,
    salon_english_score: 88,
    international_guest_count_6mo: 26,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=yuto-hasegawa",
    portfolio_urls: ["/portfolio/yuto-hasegawa-1.jpg","/portfolio/yuto-hasegawa-2.jpg","/portfolio/yuto-hasegawa-3.jpg","/portfolio/yuto-hasegawa-4.jpg"],
  },

  {
    stylist_id: "kaede-miyamoto",
    name: "Kaede Miyamoto",
    name_ja: "宮本 楓",
    salon: "TSUMUGI Daikanyama",
    salon_id: "tsumugi-daikanyama",
    neighborhood: "Daikanyama",
    english_summary: "Conversational English — Kaede communicates well for consultations and has a warm, reassuring presence. She sometimes pauses to find the right word but always gets her point across clearly.",
    languages: ["English","Japanese"],
    specialties: "Japanese acid straightening, silk straightening, straightening + color combination, post-straightening styling",
    personality_signal: "Gentle and trustworthy — clients feel safe putting their damaged or difficult hair in her hands",
    typical_guest: "International women who want Japanese straightening but in a more intimate, boutique setting than large chain salons",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          }
    ],
    price_range_yen: [14000, 28000],
    portfolio_themes: "Sleek transformations, glass hair, straightening that still looks natural, healthy shine",
    review_highlights_english: [
          "Kaede's straightening technique is the best I've found in Tokyo. My hair is sleek but still has body and movement — not flat-ironed looking.",
          "She refused to straighten and color on the same day to protect my hair health. That integrity is worth its weight in gold.",
          "The silk straightening treatment she did made my hair feel like actual silk. Not an exaggeration."
    ],
    is_sozo_master: false,
    salon_english_score: 88,
    international_guest_count_6mo: 20,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=kaede-miyamoto",
    portfolio_urls: ["/portfolio/kaede-miyamoto-1.jpg","/portfolio/kaede-miyamoto-2.jpg","/portfolio/kaede-miyamoto-3.jpg"],
  },

  {
    stylist_id: "tatsuya-kondo",
    name: "Tatsuya Kondo",
    name_ja: "近藤 達也",
    salon: "TSUMUGI Daikanyama",
    salon_id: "tsumugi-daikanyama",
    neighborhood: "Daikanyama",
    english_summary: "Intermediate English — Tatsuya handles men's appointments competently in English and has a straightforward communication style. He keeps things efficient and focused, which most male clients prefer anyway.",
    languages: ["English","Japanese"],
    specialties: "Men's precision scissors cuts, Japanese thinning technique, texture with thinning shears, men's perm",
    personality_signal: "Precise and efficient — no wasted movement, no wasted words, just excellent results",
    typical_guest: "International men in the Daikanyama area, professionals who want a quick but premium men's cut",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [9000, 16000],
    portfolio_themes: "Clean Japanese men's cuts, expertly thinned texture, weightless layers, sleek-to-messy versatility",
    review_highlights_english: [
          "Tatsuya used thinning shears in a way I've never experienced. My thick hair suddenly had perfect movement and no bulk.",
          "In and out in 40 minutes with a better cut than I've gotten in two hours elsewhere. Efficient and exceptional.",
          "He has this unique Japanese thinning technique that removes weight without losing length. Brilliant."
    ],
    is_sozo_master: false,
    salon_english_score: 88,
    international_guest_count_6mo: 14,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=tatsuya-kondo",
    portfolio_urls: ["/portfolio/tatsuya-kondo-1.jpg","/portfolio/tatsuya-kondo-2.jpg","/portfolio/tatsuya-kondo-3.jpg"],
  },

  {
    stylist_id: "aya-nishimura",
    name: "Aya Nishimura",
    name_ja: "西村 彩",
    salon: "TSUMUGI Daikanyama",
    salon_id: "tsumugi-daikanyama",
    neighborhood: "Daikanyama",
    english_summary: "Good English — Aya is naturally sociable and has built her English skills through years of international client work. She's especially good at understanding what clients want for special occasions even when they struggle to articulate it.",
    languages: ["English","Japanese"],
    specialties: "Event styling, updos, half-up styles, loose romantic curls, festival and party hair",
    personality_signal: "Enthusiastic and celebratory — treats every event like it's the most exciting thing happening that day",
    typical_guest: "International women preparing for events, galas, parties, and special occasions in the Daikanyama/Shibuya area",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          }
    ],
    price_range_yen: [9000, 22000],
    portfolio_themes: "Romantic event hair, loose elegant updos, modern half-up styles, red-carpet-ready looks",
    review_highlights_english: [
          "Aya did my hair for a black-tie gala and I felt like a movie star all night. The updo lasted through hours of dancing.",
          "She's so enthusiastic about what you're getting dressed up for. Her excitement becomes your excitement.",
          "Quick, gorgeous, and exactly what I showed her. She's my go-to for every event in Tokyo now."
    ],
    is_sozo_master: false,
    salon_english_score: 88,
    international_guest_count_6mo: 18,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=aya-nishimura",
    portfolio_urls: ["/portfolio/aya-nishimura-1.jpg","/portfolio/aya-nishimura-2.jpg","/portfolio/aya-nishimura-3.jpg","/portfolio/aya-nishimura-4.jpg"],
  },

  {
    stylist_id: "kengo-sakamoto",
    name: "Kengo Sakamoto",
    name_ja: "坂本 健吾",
    salon: "SHIN Shinjuku",
    salon_id: "shin-shinjuku",
    neighborhood: "Shinjuku",
    english_summary: "Fluent English — Kengo lived in the US for eight years, including stints at salons in Chicago and Los Angeles. His English is completely natural with an American accent. He often serves as the salon's primary English-speaking point of contact.",
    languages: ["English","Japanese"],
    specialties: "Versatile cuts for all genders, razor cutting, modern mullets, shag cuts, editorial",
    personality_signal: "Dynamic and inclusive — creates a high-energy, welcoming atmosphere where everyone belongs",
    typical_guest: "Shinjuku's diverse international crowd — tourists, business travelers, LGBTQ+ community, digital nomads",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [11000, 24000],
    portfolio_themes: "Gender-fluid cuts, modern mullets, razor-textured shags, boundary-pushing shapes",
    review_highlights_english: [
          "Kengo is the most inclusive stylist I've encountered in Tokyo. As a non-binary person, I felt completely seen and respected.",
          "He gave me a modern mullet that made me feel like a rock star. His razor work is unreal.",
          "The salon is right near Shinjuku station — so convenient for tourists — and Kengo's English is flawless.",
          "I asked for 'something edgy but wearable' and he absolutely delivered. He has incredible creative instincts."
    ],
    is_sozo_master: true,
    salon_english_score: 82,
    international_guest_count_6mo: 38,
    google_review_avg_english_only: 4.8,
    photo_url: "https://i.pravatar.cc/150?u=kengo-sakamoto",
    portfolio_urls: ["/portfolio/kengo-sakamoto-1.jpg","/portfolio/kengo-sakamoto-2.jpg","/portfolio/kengo-sakamoto-3.jpg","/portfolio/kengo-sakamoto-4.jpg","/portfolio/kengo-sakamoto-5.jpg"],
  },

  {
    stylist_id: "shiori-harada",
    name: "Shiori Harada",
    name_ja: "原田 栞",
    salon: "SHIN Shinjuku",
    salon_id: "shin-shinjuku",
    neighborhood: "Shinjuku",
    english_summary: "Advanced English — Shiori is articulate and thoughtful in English. She completed an English language program specifically to better serve international clients and practices daily. She's especially clear when explaining color correction processes.",
    languages: ["English","Japanese"],
    specialties: "Color correction, bleach repair, toner expertise, ashy and cool-toned color, platinum work",
    personality_signal: "Patient and educational — explains every step so you understand exactly what's happening to your hair",
    typical_guest: "International clients who need color fixes, bleach damage recovery, or want to achieve cool-toned colors that are tricky in Japanese salons",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [12000, 28000],
    portfolio_themes: "Cool-toned transformations, platinum achievements, orange-to-ash rescues, icy blondes",
    review_highlights_english: [
          "I came in with brassy orange after a bad bleach job. Shiori turned it into the iciest platinum blonde. She's a color correction genius.",
          "She explained the entire process before starting, told me honestly how many sessions it would take, and the result was perfect.",
          "The best toning I've ever had. She mixed a custom formula that neutralized every hint of brassiness."
    ],
    is_sozo_master: false,
    salon_english_score: 82,
    international_guest_count_6mo: 24,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=shiori-harada",
    portfolio_urls: ["/portfolio/shiori-harada-1.jpg","/portfolio/shiori-harada-2.jpg","/portfolio/shiori-harada-3.jpg","/portfolio/shiori-harada-4.jpg"],
  },

  {
    stylist_id: "ryoma-ueno",
    name: "Ryoma Ueno",
    name_ja: "上野 龍馬",
    salon: "SHIN Shinjuku",
    salon_id: "shin-shinjuku",
    neighborhood: "Shinjuku",
    english_summary: "Conversational English — Ryoma is enthusiastic and energetic, which helps carry conversations even when vocabulary is limited. He uses his phone to translate complex words and is never embarrassed about it.",
    languages: ["English","Japanese"],
    specialties: "Creative cuts, asymmetric styles, disconnected undercuts, avant-garde shapes",
    personality_signal: "Energetic and experimental — his enthusiasm is contagious and he makes bold look approachable",
    typical_guest: "Young international tourists wanting a unique Tokyo haircut experience, creative types",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [9000, 20000],
    portfolio_themes: "Asymmetric bobs, disconnected layers, sculptural shapes, Tokyo street-style inspired",
    review_highlights_english: [
          "Ryoma is pure energy. He was bouncing around showing me ideas on his phone and the excitement was infectious. The asymmetric cut he gave me was incredible.",
          "I wanted something I couldn't get at home and he delivered. A truly unique Tokyo cut that I got compliments on for months.",
          "He pulled out his translation app a few times but his enthusiasm communicated more than words ever could."
    ],
    is_sozo_master: false,
    salon_english_score: 82,
    international_guest_count_6mo: 20,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=ryoma-ueno",
    portfolio_urls: ["/portfolio/ryoma-ueno-1.jpg","/portfolio/ryoma-ueno-2.jpg","/portfolio/ryoma-ueno-3.jpg"],
  },

  {
    stylist_id: "misaki-goto",
    name: "Misaki Goto",
    name_ja: "後藤 美咲",
    salon: "SHIN Shinjuku",
    salon_id: "shin-shinjuku",
    neighborhood: "Shinjuku",
    english_summary: "Intermediate English — Misaki is particularly skilled at using visual communication to supplement her English. She has a binder of perm examples with English descriptions and aftercare instructions that she goes through with every international client.",
    languages: ["English","Japanese"],
    specialties: "Korean-style perms, body wave perms, spiral perms, perm for men, volume root perms",
    personality_signal: "Organized and thorough — leaves nothing to chance, especially with chemical services",
    typical_guest: "K-drama-inspired international clients, Asian expats wanting Korean-style perms, anyone curious about Asian perming",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          }
    ],
    price_range_yen: [11000, 24000],
    portfolio_themes: "Soft Korean waves, bouncy body perms, face-framing perm placement, dramatic spiral curls",
    review_highlights_english: [
          "Misaki gave me the K-drama waves I've been showing every stylist back home without success. She nailed it on the first try.",
          "The perm binder she showed me was so helpful. I could pick exactly the wave pattern I wanted and she delivered precisely that.",
          "My perm lasted four months and grew out beautifully. Her rod placement was clearly very strategic."
    ],
    is_sozo_master: false,
    salon_english_score: 82,
    international_guest_count_6mo: 22,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=misaki-goto",
    portfolio_urls: ["/portfolio/misaki-goto-1.jpg","/portfolio/misaki-goto-2.jpg","/portfolio/misaki-goto-3.jpg"],
  },

  {
    stylist_id: "takashi-nakai",
    name: "Takashi Nakai",
    name_ja: "中井 隆",
    salon: "SHIN Shinjuku",
    salon_id: "shin-shinjuku",
    neighborhood: "Shinjuku",
    english_summary: "Good English — Takashi spent a year at a barbershop in Manchester, England, and picked up solid English with a hint of a Northern accent that international clients find charming. He's direct and straightforward in communication.",
    languages: ["English","Japanese"],
    specialties: "Textured men's cuts, messy quiffs, European-style men's cuts, point cutting",
    personality_signal: "Direct and genuine — tells it like it is and his honesty builds instant trust",
    typical_guest: "European men 25-40, British and Australian expats who want a stylist who understands Western men's hair trends",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [8000, 15000],
    portfolio_themes: "Textured European-style men's cuts, messy sophistication, tousled quiffs, point-cut dimension",
    review_highlights_english: [
          "Takashi is the only barber in Tokyo who's ever given me a proper European textured cut. Most Japanese barbers want to make my hair too neat.",
          "Love that he's direct. 'That won't work with your hair type' — and then suggests something better. Refreshing honesty.",
          "Great chat, great cut, great price for Shinjuku. He's my regular now."
    ],
    is_sozo_master: false,
    salon_english_score: 82,
    international_guest_count_6mo: 20,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=takashi-nakai",
    portfolio_urls: ["/portfolio/takashi-nakai-1.jpg","/portfolio/takashi-nakai-2.jpg","/portfolio/takashi-nakai-3.jpg"],
  },

  {
    stylist_id: "yuki-mori",
    name: "Yuki Mori",
    name_ja: "森 有希",
    salon: "SHIN Shinjuku",
    salon_id: "shin-shinjuku",
    neighborhood: "Shinjuku",
    english_summary: "Functional English — Yuki M. can handle nail consultations in English and knows design terminology well. She uses an illustrated menu with English descriptions that makes choosing designs easy for non-Japanese speakers.",
    languages: ["English (functional)","Japanese"],
    specialties: "Character nail art, anime nails, pop culture designs, kawaii gel nails, seasonal themes",
    personality_signal: "Playful and creative — her energy is pure Shinjuku pop culture",
    typical_guest: "Tourists wanting a quintessential kawaii Japanese nail experience, anime fans, pop culture enthusiasts",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          }
    ],
    price_range_yen: [8000, 16000],
    portfolio_themes: "Anime character nails, kawaii designs, pop culture art, seasonal Japanese themes",
    review_highlights_english: [
          "Yuki painted my favorite anime characters on my nails and they were PERFECT. Every detail was spot-on. I showed everyone I met in Tokyo.",
          "The most fun nail experience ever. She has a huge catalog of designs and can customize anything.",
          "I got sakura-themed nails for spring and they were so beautiful I was sad when they grew out."
    ],
    is_sozo_master: false,
    salon_english_score: 82,
    international_guest_count_6mo: 15,
    google_review_avg_english_only: 4.5,
    photo_url: "https://i.pravatar.cc/150?u=yuki-mori",
    portfolio_urls: ["/portfolio/yuki-mori-1.jpg","/portfolio/yuki-mori-2.jpg","/portfolio/yuki-mori-3.jpg","/portfolio/yuki-mori-4.jpg"],
  },

  {
    stylist_id: "sora-kitamura",
    name: "Sora Kitamura",
    name_ja: "北村 空",
    salon: "KAZE Shimokitazawa",
    salon_id: "kaze-shimokitazawa",
    neighborhood: "Shimokitazawa",
    english_summary: "Strong English — Sora is self-taught in English through music, film, and years of befriending international regulars. His English is casual and peppered with slang, but completely fluent. He'll reference indie bands and films in conversation.",
    languages: ["English","Japanese"],
    specialties: "Indie-inspired cuts, vintage styles, rockabilly, modern retro, gender-neutral cutting",
    personality_signal: "Creative rebel — Shimokitazawa's indie spirit personified, passionate about subcultures",
    typical_guest: "Musicians, artists, indie kids, international creatives drawn to Shimokitazawa's countercultural vibe",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": []
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": []
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          }
    ],
    price_range_yen: [10000, 20000],
    portfolio_themes: "Indie rock hair, vintage-inspired cuts, Shimokitazawa cool, genre-bending styles",
    review_highlights_english: [
          "Sora's salon is hidden above a vintage record shop in Shimokitazawa. The vibe alone is worth the visit, and the haircut is even better.",
          "He asked me what music I listen to before deciding on a cut. That's the most Shimokitazawa thing I've ever experienced.",
          "A truly unique salon experience. Vinyl records playing, coffee brewing, and Sora giving you the coolest haircut of your life.",
          "He cut my hair while we debated the best Radiohead album. Multitasking king."
    ],
    is_sozo_master: true,
    salon_english_score: 75,
    international_guest_count_6mo: 18,
    google_review_avg_english_only: 4.7,
    photo_url: "https://i.pravatar.cc/150?u=sora-kitamura",
    portfolio_urls: ["/portfolio/sora-kitamura-1.jpg","/portfolio/sora-kitamura-2.jpg","/portfolio/sora-kitamura-3.jpg","/portfolio/sora-kitamura-4.jpg"],
  },

  {
    stylist_id: "mana-takeda",
    name: "Mana Takeda",
    name_ja: "武田 愛",
    salon: "KAZE Shimokitazawa",
    salon_id: "kaze-shimokitazawa",
    neighborhood: "Shimokitazawa",
    english_summary: "Good conversational English — Mana communicates warmly and effectively in English. She's particularly good at understanding abstract requests like 'I want to feel braver' and translating them into color choices.",
    languages: ["English","Japanese"],
    specialties: "Creative color, pastel tones, color blocking, peek-a-boo color, hidden rainbow",
    personality_signal: "Whimsical and intuitive — reads your personality and translates it into color",
    typical_guest: "Creative international women who want fun, expressive color that reflects their personality",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": []
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": []
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          }
    ],
    price_range_yen: [11000, 26000],
    portfolio_themes: "Pastel dreams, hidden color reveals, peek-a-boo rainbow, color as self-expression",
    review_highlights_english: [
          "I told Mana I wanted my hair to feel like spring and she gave me the most perfect soft pink to lavender gradient. She's a poet with hair color.",
          "The hidden rainbow she did under my natural brown is my favorite secret. Business-appropriate on the outside, party underneath.",
          "She asked me about my personality before choosing colors. The result felt so deeply 'me' that I got emotional."
    ],
    is_sozo_master: false,
    salon_english_score: 75,
    international_guest_count_6mo: 14,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=mana-takeda",
    portfolio_urls: ["/portfolio/mana-takeda-1.jpg","/portfolio/mana-takeda-2.jpg","/portfolio/mana-takeda-3.jpg","/portfolio/mana-takeda-4.jpg"],
  },

  {
    stylist_id: "hayato-matsuda",
    name: "Hayato Matsuda",
    name_ja: "松田 隼人",
    salon: "KAZE Shimokitazawa",
    salon_id: "kaze-shimokitazawa",
    neighborhood: "Shimokitazawa",
    english_summary: "Intermediate English — Hayato gets by well in English and his passion for vintage culture gives him plenty of conversation topics with international clients. He'll occasionally reach for his phone to look up a word but keeps the vibe relaxed.",
    languages: ["English","Japanese"],
    specialties: "Vintage men's cuts, pompadours, rockabilly, classic barbering with a modern twist",
    personality_signal: "Retro-cool and passionate — decorated his station with vintage barber memorabilia",
    typical_guest: "International men who appreciate vintage style, rockabilly enthusiasts, classic car culture fans",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": []
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "11:30",
                      "14:00",
                      "15:30"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": []
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          }
    ],
    price_range_yen: [8000, 15000],
    portfolio_themes: "Rockabilly pompadours, vintage side parts, retro-modern hybrids, greaser-inspired cuts",
    review_highlights_english: [
          "Hayato gave me a pompadour that Elvis would be jealous of. This guy lives and breathes vintage barbering.",
          "His station is decorated with old barber ads and classic car photos. The whole experience feels like stepping back in time.",
          "Best old-school barber cut I've gotten in Asia. He understands the craft."
    ],
    is_sozo_master: false,
    salon_english_score: 75,
    international_guest_count_6mo: 10,
    google_review_avg_english_only: 4.4,
    photo_url: "https://i.pravatar.cc/150?u=hayato-matsuda",
    portfolio_urls: ["/portfolio/hayato-matsuda-1.jpg","/portfolio/hayato-matsuda-2.jpg","/portfolio/hayato-matsuda-3.jpg"],
  },

  {
    stylist_id: "nozomi-aoki",
    name: "Nozomi Aoki",
    name_ja: "青木 望",
    salon: "KAZE Shimokitazawa",
    salon_id: "kaze-shimokitazawa",
    neighborhood: "Shimokitazawa",
    english_summary: "Conversational English — Nozomi is warm and encouraging, making communication easy even when her vocabulary is limited. She trained specifically in curly hair techniques and learned English terminology from international curly hair communities online.",
    languages: ["English","Japanese"],
    specialties: "Curly hair, wavy hair, Curly Girl Method, diffuser education, curl-specific cutting",
    personality_signal: "Encouraging and educational — empowers clients to love and care for their natural texture",
    typical_guest: "International women with curly or wavy hair in the west Tokyo area, mixed-heritage families",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-19",
                "slots": []
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": []
          },
          {
                "date": "2026-05-23",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "11:00",
                      "13:30",
                      "15:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-26",
                "slots": []
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": []
          },
          {
                "date": "2026-05-30",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          }
    ],
    price_range_yen: [10000, 20000],
    portfolio_themes: "Celebrated curls, enhanced waves, Curly Girl transformations, joyful natural texture",
    review_highlights_english: [
          "Nozomi is the curly hair savior of west Tokyo. She actually shapes curls individually and the result is incredible.",
          "She taught me a whole new curl routine using Japanese products I didn't know existed. My curls have never looked better.",
          "After years of bad haircuts from stylists who don't understand wavy hair, finding Nozomi was life-changing."
    ],
    is_sozo_master: false,
    salon_english_score: 75,
    international_guest_count_6mo: 12,
    google_review_avg_english_only: 4.6,
    photo_url: "https://i.pravatar.cc/150?u=nozomi-aoki",
    portfolio_urls: ["/portfolio/nozomi-aoki-1.jpg","/portfolio/nozomi-aoki-2.jpg","/portfolio/nozomi-aoki-3.jpg"],
  },

  {
    stylist_id: "jin-okuda",
    name: "Jin Okuda",
    name_ja: "奥田 仁",
    salon: "KAZE Shimokitazawa",
    salon_id: "kaze-shimokitazawa",
    neighborhood: "Shimokitazawa",
    english_summary: "Basic-to-intermediate English — Jin manages appointments in English with support from visual references. He has a relaxed attitude about the language barrier and uses humor and body language to keep the atmosphere light.",
    languages: ["English (basic-intermediate)","Japanese"],
    specialties: "Unisex cuts, textured bobs, shag cuts, lived-in layers, effortless cool",
    personality_signal: "Chill and unpretentious — zero ego, pure craft, Shimokitazawa to the core",
    typical_guest: "Adventurous international visitors who stumble upon the salon, local expats in the Shimokitazawa area",
    schedule_next_14_days: [
          {
                "date": "2026-05-17",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-18",
                "slots": []
          },
          {
                "date": "2026-05-19",
                "slots": [
                      "10:00",
                      "11:00",
                      "13:30",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-20",
                "slots": [
                      "10:00",
                      "14:00",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-21",
                "slots": [
                      "10:00",
                      "11:30",
                      "14:00",
                      "15:30",
                      "17:00"
                ]
          },
          {
                "date": "2026-05-22",
                "slots": [
                      "10:00",
                      "13:00",
                      "14:30",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-23",
                "slots": []
          },
          {
                "date": "2026-05-24",
                "slots": [
                      "10:00",
                      "11:00",
                      "14:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-25",
                "slots": []
          },
          {
                "date": "2026-05-26",
                "slots": [
                      "10:00",
                      "12:00",
                      "15:00"
                ]
          },
          {
                "date": "2026-05-27",
                "slots": [
                      "11:00",
                      "14:00",
                      "16:00",
                      "17:30"
                ]
          },
          {
                "date": "2026-05-28",
                "slots": [
                      "10:00",
                      "11:30",
                      "13:00",
                      "15:00",
                      "16:30"
                ]
          },
          {
                "date": "2026-05-29",
                "slots": [
                      "10:00",
                      "13:00",
                      "16:00"
                ]
          },
          {
                "date": "2026-05-30",
                "slots": []
          }
    ],
    price_range_yen: [8000, 16000],
    portfolio_themes: "Effortless shags, textured bobs, neighbourhood cool, unisex versatility",
    review_highlights_english: [
          "Found Jin's salon while wandering Shimokitazawa and got the best haircut of my trip to Japan. Happy accident.",
          "He doesn't speak tons of English but his vibe is so relaxed that communication was never a problem. Plus, the cut was sick.",
          "The shag cut he gave me had everyone asking who my stylist was. I just said 'a genius in Shimokitazawa.'",
          "Great price, zero pretension, incredible haircut. The Shimokitazawa trifecta."
    ],
    is_sozo_master: false,
    salon_english_score: 75,
    international_guest_count_6mo: 8,
    google_review_avg_english_only: 4.4,
    photo_url: "https://i.pravatar.cc/150?u=jin-okuda",
    portfolio_urls: ["/portfolio/jin-okuda-1.jpg","/portfolio/jin-okuda-2.jpg","/portfolio/jin-okuda-3.jpg"],
  }
];
