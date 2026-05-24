import { CATEGORIES } from '@/lib/categories';

const FEATURED_CATS = [
  { title: 'Electronics', items: ['Cameras', 'Monitors', 'GPUs', 'Keyboards'], link: 'See more', emoji: '🖥️' },
  { title: 'Fitness & Sports', items: ['Shoes', 'Dumbbells', 'Trackers', 'Yoga Mats'], link: 'See more', emoji: '💪' },
  { title: 'Creator Tools', items: ['Microphones', 'Tripods', 'Gimbals', 'Lights'], link: 'See more', emoji: '🎬' },
  { title: 'Home Office', items: ['Standing Desks', 'Chairs', 'Monitors', 'Keyboards'], link: 'See more', emoji: '🏠' },
  { title: 'Gaming', items: ['Controllers', 'Headsets', 'GPUs', 'Chairs'], link: 'See more', emoji: '🎮' },
  { title: 'Fashion', items: ['Sneakers', 'Watches', 'Bags', 'Sunglasses'], link: 'See more', emoji: '👟' },
  { title: 'Books & Learning', items: ['Python', 'AI/ML', 'Business', 'Design'], link: 'See more', emoji: '📚' },
  { title: 'Kitchen & Cooking', items: ['Knives', 'Pans', 'Blenders', 'Ovens'], link: 'See more', emoji: '👨‍🍳' },
];

export function CategoryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {FEATURED_CATS.map((cat) => (
        <div key={cat.title} className="amazon-card">
          <h3 className="text-lg font-bold text-gray-900 mb-3">{cat.title}</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {cat.items.map((item) => (
              <div key={item} className="text-center">
                <div className="w-full aspect-square bg-gray-100 rounded-sm flex items-center justify-center text-3xl mb-1">
                  {cat.emoji}
                </div>
                <span className="text-xs text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <a href="#" className="amazon-link text-sm">{cat.link}</a>
        </div>
      ))}
    </div>
  );
}
