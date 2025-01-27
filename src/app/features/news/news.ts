// src/app/models/article.model.ts

export interface Article {
  id:string,
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  date: string;
  link: string;  // Ensure 'link' is included in the interface
}

// Sample data
export const News: Article[] = [

  {
    id: '1',
    imageUrl: 'https://example.com/images/emergency-care.jpg',
    category: 'Emergency Care',
    title: 'How to Handle Medical Emergencies Effectively',
    description: 'Medical emergencies can be overwhelming, but knowing how to respond can save lives. This post covers the essential steps you need to take during various emergencies, such as heart attacks, severe bleeding, or accidents. Learn the importance of staying calm, administering basic first aid, and recognizing when it’s critical to call for professional help. Prepare yourself with the knowledge to act swiftly and confidently during life-threatening situations.',
    date: '2025-01-27',
    link: 'https://example.com/posts/how-to-handle-medical-emergencies'
  },
  {
    id: '2',
    imageUrl: 'https://example.com/images/surgery.jpg',
    category: 'Surgery',
    title: 'Preparing for Surgery: What You Need to Know',
    description: 'Facing surgery can be a daunting experience, but being well-prepared can make all the difference. In this post, we delve into what you should do before your procedure, including consultations, preoperative tests, and lifestyle adjustments. We also discuss what to expect on the day of surgery and how to follow postoperative care instructions to ensure a smooth recovery. Equip yourself with the knowledge to reduce anxiety and improve your overall surgical experience.',
    date: '2025-01-20',
    link: 'https://example.com/posts/preparing-for-surgery'
  },
  {
    id: '3',
    imageUrl: 'https://example.com/images/health-check.jpg',
    category: 'Health & Wellness',
    title: 'The Importance of Regular Health Checkups',
    description: 'Routine health checkups are a cornerstone of preventive medicine. This post highlights why scheduling regular visits to your doctor can help detect potential health issues early, even before symptoms arise. We cover the types of screenings you should consider based on your age, gender, and medical history. Additionally, we explore how regular checkups contribute to a healthier lifestyle by encouraging better habits and providing a deeper understanding of your overall well-being.',
    date: '2025-01-15',
    link: 'https://example.com/posts/importance-of-regular-health-checkups'
  }
];


export function findArticleByTitle(id: string): Article | undefined {
  return News.find(article => article.id === id);
}
