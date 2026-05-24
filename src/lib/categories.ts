export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: string;
  gradient: string;
  description: string;
  keywords: string[];
}

export const CATEGORIES: Category[] = [
  { id: 'travel-vlogger', name: 'Travel Vlogger', emoji: '✈️', color: 'blue', gradient: 'from-blue-500 to-cyan-400', description: 'Capture the world. Build your audience.', keywords: ['travel', 'vlog', 'vlogger', 'youtube'] },
  { id: 'gamer', name: 'Gamer', emoji: '🎮', color: 'purple', gradient: 'from-purple-500 to-pink-500', description: 'Level up your gaming setup.', keywords: ['game', 'gamer', 'gaming', 'esports'] },
  { id: 'streamer', name: 'Streamer', emoji: '📺', color: 'violet', gradient: 'from-violet-500 to-fuchsia-500', description: 'Go live. Build your community.', keywords: ['stream', 'streamer', 'twitch', 'live'] },
  { id: 'ai-engineer', name: 'AI Engineer', emoji: '🤖', color: 'indigo', gradient: 'from-indigo-500 to-blue-600', description: 'Build the future with AI.', keywords: ['ai', 'machine learning', 'ml', 'engineer', 'developer'] },
  { id: 'software-dev', name: 'Software Developer', emoji: '💻', color: 'emerald', gradient: 'from-emerald-500 to-teal-500', description: 'Code your future.', keywords: ['software', 'developer', 'programmer', 'code'] },
  { id: 'cybersecurity', name: 'Cybersecurity Expert', emoji: '🔐', color: 'red', gradient: 'from-red-500 to-orange-500', description: 'Protect the digital world.', keywords: ['cybersecurity', 'security', 'hacker', 'ethical'] },
  { id: 'fitness', name: 'Fitness Journey', emoji: '💪', color: 'green', gradient: 'from-green-500 to-emerald-400', description: 'Transform your body and life.', keywords: ['fitness', 'gym', 'workout', 'health'] },
  { id: 'bodybuilder', name: 'Bodybuilder', emoji: '🏋️', color: 'amber', gradient: 'from-amber-500 to-orange-500', description: 'Sculpt your physique.', keywords: ['bodybuilder', 'muscle', 'weight', 'lifting'] },
  { id: 'chef', name: 'Chef', emoji: '👨‍🍳', color: 'orange', gradient: 'from-orange-500 to-red-400', description: 'Master the culinary arts.', keywords: ['chef', 'cook', 'cooking', 'culinary', 'kitchen'] },
  { id: 'baker', name: 'Baker', emoji: '🧁', color: 'pink', gradient: 'from-pink-400 to-rose-400', description: 'Create delicious baked goods.', keywords: ['baker', 'baking', 'pastry', 'bread'] },
  { id: 'fashion-designer', name: 'Fashion Designer', emoji: '🎨', color: 'fuchsia', gradient: 'from-fuchsia-500 to-pink-500', description: 'Design your brand.', keywords: ['fashion', 'designer', 'clothing', 'style'] },
  { id: 'photographer', name: 'Photographer', emoji: '📸', color: 'sky', gradient: 'from-sky-500 to-blue-500', description: 'Capture perfect moments.', keywords: ['photo', 'photographer', 'camera', 'photography'] },
  { id: 'filmmaker', name: 'Filmmaker', emoji: '🎬', color: 'slate', gradient: 'from-slate-600 to-zinc-700', description: 'Tell stories through film.', keywords: ['filmmaker', 'film', 'cinema', 'video', 'director'] },
  { id: 'podcaster', name: 'Podcaster', emoji: '🎙️', color: 'teal', gradient: 'from-teal-500 to-cyan-500', description: 'Share your voice with the world.', keywords: ['podcast', 'podcaster', 'audio', 'voice'] },
  { id: 'music-producer', name: 'Music Producer', emoji: '🎵', color: 'violet', gradient: 'from-violet-600 to-purple-500', description: 'Create the next hit.', keywords: ['music', 'producer', 'beat', 'dj', 'audio'] },
  { id: 'dj', name: 'DJ', emoji: '🎧', color: 'cyan', gradient: 'from-cyan-500 to-blue-500', description: 'Own the dance floor.', keywords: ['dj', 'mix', 'club', 'electronic'] },
  { id: 'digital-artist', name: 'Digital Artist', emoji: '🖌️', color: 'rose', gradient: 'from-rose-500 to-pink-600', description: 'Create stunning digital art.', keywords: ['art', 'artist', 'digital', 'illustration', 'draw'] },
  { id: 'youtuber', name: 'YouTuber', emoji: '▶️', color: 'red', gradient: 'from-red-500 to-rose-500', description: 'Grow your channel.', keywords: ['youtube', 'youtuber', 'content', 'creator'] },
  { id: 'tiktok-creator', name: 'TikTok Creator', emoji: '📱', color: 'pink', gradient: 'from-pink-500 to-violet-500', description: 'Go viral on short form.', keywords: ['tiktok', 'short', 'viral', 'reels'] },
  { id: 'entrepreneur', name: 'Entrepreneur', emoji: '🚀', color: 'amber', gradient: 'from-amber-500 to-yellow-400', description: 'Build your empire.', keywords: ['entrepreneur', 'startup', 'business', 'founder'] },
  { id: 'coffee-enthusiast', name: 'Coffee Enthusiast', emoji: '☕', color: 'stone', gradient: 'from-stone-600 to-amber-700', description: 'Perfect your brew.', keywords: ['coffee', 'espresso', 'brew', 'barista'] },
  { id: 'sneaker-collector', name: 'Sneaker Collector', emoji: '👟', color: 'zinc', gradient: 'from-zinc-600 to-slate-700', description: 'Build the collection.', keywords: ['sneaker', 'shoes', 'kicks', 'collector'] },
  { id: 'barber', name: 'Barber', emoji: '💈', color: 'blue', gradient: 'from-blue-600 to-indigo-600', description: 'Master the craft of cutting.', keywords: ['barber', 'haircut', 'grooming', 'fade'] },
  { id: 'makeup-artist', name: 'Makeup Artist', emoji: '💄', color: 'rose', gradient: 'from-rose-400 to-pink-500', description: 'Transform with makeup.', keywords: ['makeup', 'beauty', 'cosmetic', 'artist'] },
  { id: 'interior-designer', name: 'Interior Designer', emoji: '🏠', color: 'amber', gradient: 'from-amber-400 to-orange-400', description: 'Design beautiful spaces.', keywords: ['interior', 'design', 'home', 'decor'] },
  { id: 'home-office', name: 'Home Office Setup', emoji: '🖥️', color: 'slate', gradient: 'from-slate-500 to-gray-600', description: 'Build the perfect workspace.', keywords: ['office', 'desk', 'workspace', 'remote'] },
  { id: 'student', name: 'Student Setup', emoji: '📚', color: 'blue', gradient: 'from-blue-400 to-indigo-400', description: 'Ace your studies.', keywords: ['student', 'study', 'college', 'university'] },
  { id: 'car-enthusiast', name: 'Car Enthusiast', emoji: '🏎️', color: 'red', gradient: 'from-red-600 to-orange-500', description: 'Build your dream garage.', keywords: ['car', 'auto', 'vehicle', 'motor'] },
  { id: 'pet-care', name: 'Pet Care Starter', emoji: '🐾', color: 'amber', gradient: 'from-amber-400 to-yellow-300', description: 'Give your pet the best.', keywords: ['pet', 'dog', 'cat', 'animal'] },
  { id: 'drone-pilot', name: 'Drone Pilot', emoji: '🚁', color: 'sky', gradient: 'from-sky-400 to-blue-500', description: 'Take to the skies.', keywords: ['drone', 'pilot', 'aerial', 'fly'] },
  { id: 'productivity', name: 'Productivity Enthusiast', emoji: '⚡', color: 'yellow', gradient: 'from-yellow-400 to-amber-500', description: 'Optimize everything.', keywords: ['productivity', 'efficient', 'organize', 'system'] },
  { id: 'smart-home', name: 'Smart Home Creator', emoji: '🏡', color: 'teal', gradient: 'from-teal-400 to-emerald-500', description: 'Automate your life.', keywords: ['smart home', 'iot', 'automation', 'alexa'] },
];

export function detectCategory(input: string): Category {
  const text = input.toLowerCase();
  let bestMatch = CATEGORIES[0];
  let bestScore = 0;

  for (const cat of CATEGORIES) {
    let score = 0;
    for (const kw of cat.keywords) {
      if (text.includes(kw)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = cat;
    }
  }

  return bestMatch;
}
