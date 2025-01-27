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
  },

  {
    id: '4',
    imageUrl: 'https://example.com/images/mental-health.jpg',
    category: 'Mental Health',
    title: 'Why Mental Health is Just as Important as Physical Health',
    description: 'Mental health plays a critical role in our overall well-being, yet it is often overlooked. In this post, we explore the deep connection between mental and physical health and how issues like stress, anxiety, and depression can manifest as physical symptoms, such as fatigue or chronic pain. We also delve into practical approaches to improving mental health, such as mindfulness exercises, maintaining work-life balance, seeking professional therapy, and fostering strong personal relationships. By recognizing the importance of mental health, you can take proactive steps to build resilience, improve emotional well-being, and lead a more fulfilling life. Whether you’re managing a specific mental health condition or simply looking to enhance your quality of life, this guide provides actionable tips and resources to help you on your journey.',
    date: '2025-01-10',
    link: 'https://example.com/posts/mental-health-importance'
  },
  {
    id: '5',
    imageUrl: 'https://example.com/images/blood-testing.jpg',
    category: 'Diagnostic Services',
    title: 'Understanding the Importance of Routine Blood Tests',
    description: 'Blood testing is an essential part of preventive healthcare, offering valuable insights into your body’s overall health. This post provides a detailed look at why routine blood tests are important and what they can reveal about your health, including information about cholesterol levels, blood sugar, liver and kidney function, and the detection of vitamin deficiencies. We break down the different types of common blood tests, such as complete blood count (CBC), lipid panels, and tests for specific conditions like diabetes. Additionally, we discuss how regular blood work helps in early detection of potential health problems, making it easier to address them before they become severe. Learn what to expect during the blood testing process, how to prepare for accurate results, and why regular communication with your doctor about these tests is vital for long-term wellness.',
    date: '2025-01-05',
    link: 'https://example.com/posts/importance-of-blood-tests'
  },
  {
    id: '6',
    imageUrl: 'https://example.com/images/pharmacy.jpg',
    category: 'Medicine & Pharmacy',
    title: 'How to Safely Use Prescription Medications',
    description: 'Prescription medications are a powerful tool for managing chronic illnesses and acute health conditions, but they must be used with care to ensure safety and effectiveness. This post offers a thorough guide to understanding your prescriptions, including how to read labels, follow dosage instructions, and recognize common side effects. We explain the importance of consulting with your doctor or pharmacist about potential drug interactions, especially if you’re taking multiple medications. Additionally, we provide tips on proper storage to maintain medication potency and safety, such as keeping medicines in a cool, dry place and out of reach of children. The post also highlights how to identify signs of allergic reactions or adverse effects and what steps to take if they occur. By following these guidelines, you can take control of your medication regimen and improve your health outcomes while minimizing risks.',
    date: '2025-01-02',
    link: 'https://example.com/posts/safe-use-of-prescription-medications'
  }
];


export function findArticleByTitle(id: string): Article | undefined {
  return News.find(article => article.id === id);
}
