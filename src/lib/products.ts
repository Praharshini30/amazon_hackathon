export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  stage: 'beginner' | 'growth' | 'professional';
  badge?: string;
  rating: number;
  reviews: number;
}

export interface JourneyStage {
  key: 'beginner' | 'growth' | 'professional';
  label: string;
  emoji: string;
  tagline: string;
  color: string;
  products: Product[];
  estimatedTotal: number;
  aiInsight: string;
}

export interface Journey {
  id: string;
  aspiration: string;
  categoryId: string;
  categoryName: string;
  stages: JourneyStage[];
  totalInvestment: number;
  createdAt: string;
}

// Product database keyed by category ID
const PRODUCT_DB: Record<string, { beginner: Product[]; growth: Product[]; professional: Product[] }> = {
  'travel-vlogger': {
    beginner: [
      { id: 'tv-b1', name: 'Sony ZV-E10 Vlog Camera', description: 'Flip-screen mirrorless for beginner vloggers.', price: 74800, originalPrice: 89900, image: '/products/camera-1.jpg', category: 'travel-vlogger', stage: 'beginner', badge: 'Best Starter', rating: 4.7, reviews: 2341 },
      { id: 'tv-b2', name: 'Rode VideoMicro II Mic', description: 'Compact directional mic for clear audio.', price: 7900, originalPrice: 9900, image: '/products/mic-1.jpg', category: 'travel-vlogger', stage: 'beginner', badge: 'Essential', rating: 4.8, reviews: 5120 },
      { id: 'tv-b3', name: 'Joby GorillaPod 3K', description: 'Flexible tripod that grips any surface.', price: 4900, originalPrice: 6500, image: '/products/tripod-1.jpg', category: 'travel-vlogger', stage: 'beginner', rating: 4.6, reviews: 3890 },
      { id: 'tv-b4', name: 'SanDisk 128GB Extreme SD', description: 'Fast UHS-I SD card for 4K recording.', price: 2200, originalPrice: 3500, image: '/products/sd-1.jpg', category: 'travel-vlogger', stage: 'beginner', rating: 4.9, reviews: 12400 },
    ],
    growth: [
      { id: 'tv-g1', name: 'DJI OM 6 Gimbal', description: '3-axis smartphone stabilizer.', price: 15900, originalPrice: 19900, image: '/products/gimbal-1.jpg', category: 'travel-vlogger', stage: 'growth', badge: 'Level Up', rating: 4.7, reviews: 1890 },
      { id: 'tv-g2', name: 'GoPro Hero 13 Black', description: 'Waterproof action cam for adventures.', price: 39900, originalPrice: 44900, image: '/products/gopro-1.jpg', category: 'travel-vlogger', stage: 'growth', badge: 'Popular', rating: 4.6, reviews: 8920 },
      { id: 'tv-g3', name: 'Adobe Creative Cloud 1yr', description: 'Premiere Pro + Lightroom bundle.', price: 59900, originalPrice: 65900, image: '/products/adobe-1.jpg', category: 'travel-vlogger', stage: 'growth', badge: 'Pro Tool', rating: 4.5, reviews: 45000 },
      { id: 'tv-g4', name: 'Peak Design Travel Backpack', description: '45L expandable travel camera bag.', price: 29900, originalPrice: 32900, image: '/products/bag-1.jpg', category: 'travel-vlogger', stage: 'growth', rating: 4.8, reviews: 2100 },
    ],
    professional: [
      { id: 'tv-p1', name: 'Sony A7 IV Full-Frame', description: 'Pro mirrorless for cinematic content.', price: 249800, originalPrice: 279900, image: '/products/camera-2.jpg', category: 'travel-vlogger', stage: 'professional', badge: 'Pro Grade', rating: 4.9, reviews: 3420 },
      { id: 'tv-p2', name: 'DJI Mavic 3 Pro Drone', description: 'Hasselblad aerial cinematography.', price: 219900, originalPrice: 249900, image: '/products/drone-1.jpg', category: 'travel-vlogger', stage: 'professional', badge: 'Cinematic', rating: 4.8, reviews: 1560 },
      { id: 'tv-p3', name: 'Sennheiser MKE 600', description: 'Broadcast-quality shotgun mic.', price: 32900, originalPrice: 39900, image: '/products/mic-2.jpg', category: 'travel-vlogger', stage: 'professional', rating: 4.7, reviews: 890 },
      { id: 'tv-p4', name: 'MacBook Pro 16" M4 Max', description: 'Powerhouse for 8K editing on the road.', price: 349900, originalPrice: 399900, image: '/products/laptop-1.jpg', category: 'travel-vlogger', stage: 'professional', badge: 'Beast', rating: 4.9, reviews: 7800 },
    ],
  },
  'fitness': {
    beginner: [
      { id: 'fit-b1', name: 'Nike Pegasus 41 Shoes', description: 'Responsive daily training shoes.', price: 13000, originalPrice: 15000, image: '/products/shoes-1.jpg', category: 'fitness', stage: 'beginner', badge: 'Start Here', rating: 4.6, reviews: 15200 },
      { id: 'fit-b2', name: 'Lululemon Yoga Mat', description: 'Non-slip 5mm reversible mat.', price: 8800, originalPrice: 10800, image: '/products/mat-1.jpg', category: 'fitness', stage: 'beginner', rating: 4.7, reviews: 8900 },
      { id: 'fit-b3', name: 'Fitbit Inspire 3', description: 'Track steps, heart rate, and sleep.', price: 9900, originalPrice: 12900, image: '/products/tracker-1.jpg', category: 'fitness', stage: 'beginner', badge: 'Track It', rating: 4.4, reviews: 22100 },
      { id: 'fit-b4', name: 'HydroFlask 32oz Bottle', description: 'Insulated stainless steel bottle.', price: 4500, originalPrice: 5500, image: '/products/bottle-1.jpg', category: 'fitness', stage: 'beginner', rating: 4.8, reviews: 34000 },
    ],
    growth: [
      { id: 'fit-g1', name: 'Bowflex SelectTech 552', description: 'Adjustable 5-52.5lb dumbbells.', price: 34900, originalPrice: 42900, image: '/products/dumbbell-1.jpg', category: 'fitness', stage: 'growth', badge: 'Home Gym', rating: 4.7, reviews: 6700 },
      { id: 'fit-g2', name: 'Apple Watch Series 10', description: 'Advanced health + fitness tracking.', price: 39900, originalPrice: 44900, image: '/products/watch-1.jpg', category: 'fitness', stage: 'growth', badge: 'Smart', rating: 4.8, reviews: 18200 },
      { id: 'fit-g3', name: 'Theragun Pro', description: 'Percussive therapy for recovery.', price: 29900, originalPrice: 39900, image: '/products/massage-1.jpg', category: 'fitness', stage: 'growth', badge: 'Recovery', rating: 4.6, reviews: 4500 },
      { id: 'fit-g4', name: 'Peloton App 1yr', description: '10,000+ guided fitness classes.', price: 15500, originalPrice: 18000, image: '/products/peloton-1.jpg', category: 'fitness', stage: 'growth', rating: 4.5, reviews: 28000 },
    ],
    professional: [
      { id: 'fit-p1', name: 'Tonal Smart Home Gym', description: 'AI-powered 200lb digital resistance.', price: 299500, originalPrice: 349500, image: '/products/tonal-1.jpg', category: 'fitness', stage: 'professional', badge: 'Elite', rating: 4.7, reviews: 2100 },
      { id: 'fit-p2', name: 'WHOOP 4.0 Band', description: 'Continuous strain + recovery tracking.', price: 23900, originalPrice: 29900, image: '/products/whoop-1.jpg', category: 'fitness', stage: 'professional', badge: 'Athlete', rating: 4.5, reviews: 3400 },
      { id: 'fit-p3', name: 'NordicTrack 2950 Treadmill', description: '22" touchscreen commercial treadmill.', price: 299900, originalPrice: 349900, image: '/products/treadmill-1.jpg', category: 'fitness', stage: 'professional', badge: 'Pro', rating: 4.6, reviews: 1800 },
      { id: 'fit-p4', name: 'Precision Nutrition 6mo', description: 'Expert coaching + personalized plan.', price: 59900, originalPrice: 79900, image: '/products/nutrition-1.jpg', category: 'fitness', stage: 'professional', rating: 4.8, reviews: 920 },
    ],
  },
  'ai-engineer': {
    beginner: [
      { id: 'ai-b1', name: 'Python Crash Course Book', description: 'Best-selling intro to Python.', price: 3500, originalPrice: 4500, image: '/products/book-1.jpg', category: 'ai-engineer', stage: 'beginner', badge: 'Start', rating: 4.7, reviews: 18900 },
      { id: 'ai-b2', name: 'Logitech MX Keys', description: 'Comfort keyboard for coding.', price: 10900, originalPrice: 12900, image: '/products/keyboard-1.jpg', category: 'ai-engineer', stage: 'beginner', rating: 4.8, reviews: 7800 },
      { id: 'ai-b3', name: 'Dell 27" 4K Monitor', description: 'Crisp display for reading code.', price: 44900, originalPrice: 54900, image: '/products/monitor-1.jpg', category: 'ai-engineer', stage: 'beginner', badge: 'Sharp', rating: 4.6, reviews: 5400 },
      { id: 'ai-b4', name: 'Coursera DL Specialization', description: "Andrew Ng's 5-course AI program.", price: 39900, originalPrice: 49900, image: '/products/course-1.jpg', category: 'ai-engineer', stage: 'beginner', badge: 'Learn', rating: 4.9, reviews: 45000 },
    ],
    growth: [
      { id: 'ai-g1', name: 'NVIDIA RTX 4070 GPU', description: '12GB VRAM for local ML training.', price: 59900, originalPrice: 69900, image: '/products/gpu-1.jpg', category: 'ai-engineer', stage: 'growth', badge: 'Train', rating: 4.7, reviews: 3200 },
      { id: 'ai-g2', name: 'MacBook Pro 14" M4 Pro', description: 'Apple Silicon for fast inference.', price: 199900, originalPrice: 229900, image: '/products/macbook-1.jpg', category: 'ai-engineer', stage: 'growth', badge: 'Dev', rating: 4.9, reviews: 12000 },
      { id: 'ai-g3', name: 'GitHub Copilot 1yr', description: 'AI pair programmer assistant.', price: 10000, originalPrice: 12000, image: '/products/copilot-1.jpg', category: 'ai-engineer', stage: 'growth', badge: 'AI', rating: 4.6, reviews: 28000 },
      { id: 'ai-g4', name: 'Flexispot E7 Standing Desk', description: 'Sit-stand for healthy coding.', price: 49900, originalPrice: 69900, image: '/products/desk-1.jpg', category: 'ai-engineer', stage: 'growth', rating: 4.7, reviews: 4100 },
    ],
    professional: [
      { id: 'ai-p1', name: 'NVIDIA RTX 4090 GPU', description: 'Top-tier for LLM training.', price: 159900, originalPrice: 199900, image: '/products/gpu-2.jpg', category: 'ai-engineer', stage: 'professional', badge: 'LLM', rating: 4.8, reviews: 1800 },
      { id: 'ai-p2', name: 'AWS Credits $1,000', description: 'Cloud compute for scale.', price: 100000, originalPrice: 100000, image: '/products/aws-1.jpg', category: 'ai-engineer', stage: 'professional', badge: 'Scale', rating: 4.5, reviews: 890 },
      { id: 'ai-p3', name: 'Dual 32" 4K Monitors', description: 'Pro workspace dual setup.', price: 119900, originalPrice: 149900, image: '/products/monitor-2.jpg', category: 'ai-engineer', stage: 'professional', badge: 'Pro', rating: 4.7, reviews: 2300 },
      { id: 'ai-p4', name: 'OpenAI API $500 Credits', description: 'Build + deploy AI apps.', price: 50000, originalPrice: 50000, image: '/products/openai-1.jpg', category: 'ai-engineer', stage: 'professional', badge: 'Build', rating: 4.9, reviews: 5600 },
    ],
  },
};

const AI_INSIGHTS: Record<string, Record<string, string>> = {
  'travel-vlogger': {
    beginner: 'Start light. A good camera, clear audio, and flexibility — these three let you capture real stories without being weighed down.',
    growth: 'Your audience grows when your production quality grows. Stabilization, action shots, and professional editing separate you from the crowd.',
    professional: "You're building a media brand. Cinematic gear, aerial footage, and broadcast-quality audio — this is your full-time creative toolkit.",
  },
  fitness: {
    beginner: 'Every transformation starts with showing up. Good shoes, a mat, and tracking your progress builds the habit that changes everything.',
    growth: "You've built the habit. Now build the environment. Home gym equipment and smart tracking accelerate your results exponentially.",
    professional: 'Elite performance requires elite tools. Smart resistance, precision nutrition, and continuous monitoring push you past plateaus.',
  },
  'ai-engineer': {
    beginner: 'Every AI engineer started with a book and curiosity. Learn Python, take the fundamentals course, and build your first models.',
    growth: "You're building real systems. A powerful GPU, a fast machine, and AI-assisted tools multiply your output 10x.",
    professional: "You're training models that matter. Top-tier compute, cloud scale, and pro tooling let you deploy AI that impacts millions.",
  },
};

export function buildJourney(categoryId: string, aspiration: string): Journey {
  const products = PRODUCT_DB[categoryId] || PRODUCT_DB['travel-vlogger'];
  const insights = AI_INSIGHTS[categoryId] || AI_INSIGHTS['travel-vlogger'];

  const stages: JourneyStage[] = [
    {
      key: 'beginner',
      label: 'Beginner',
      emoji: '🌱',
      tagline: 'Your transformation starts here.',
      color: 'emerald',
      products: products.beginner,
      estimatedTotal: products.beginner.reduce((s, p) => s + p.price, 0),
      aiInsight: insights.beginner,
    },
    {
      key: 'growth',
      label: 'Growth',
      emoji: '🚀',
      tagline: 'Level up your setup.',
      color: 'amber',
      products: products.growth,
      estimatedTotal: products.growth.reduce((s, p) => s + p.price, 0),
      aiInsight: insights.growth,
    },
    {
      key: 'professional',
      label: 'Professional',
      emoji: '⚡',
      tagline: 'Build your future setup.',
      color: 'indigo',
      products: products.professional,
      estimatedTotal: products.professional.reduce((s, p) => s + p.price, 0),
      aiInsight: insights.professional,
    },
  ];

  const totalInvestment = stages.reduce((s, st) => s + st.estimatedTotal, 0);

  return {
    id: crypto.randomUUID(),
    aspiration,
    categoryId,
    categoryName: categoryId.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    stages,
    totalInvestment,
    createdAt: new Date().toISOString(),
  };
}
