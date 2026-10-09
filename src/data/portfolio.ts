export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  contribution: string;
  challenges: string;
  outcomes: string;
  category: string;
  categoryColor: 'blue' | 'emerald' | 'purple' | 'amber';
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  dates: string;
  type: string;
  location: string;
  bullets: string[];
  relatedProject?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 'wearth',
    title: 'WEARTH',
    subtitle: 'Full-Stack E-Commerce Platform',
    description: 'Full-stack e-commerce platform supporting product catalogs, variants, inventory, shopping carts, seller workflows, and checkout.',
    longDescription: 'WEARTH is a production-grade full-stack e-commerce platform built with React, Node.js, and MongoDB. It supports the complete buyer and seller lifecycle — from product discovery and variant selection to cart management, checkout, and order fulfillment.',
    problem: 'Building a complete e-commerce system requires handling complex state across product variants, dynamic pricing, inventory tracking, and multi-role user flows — all while maintaining security and a smooth user experience.',
    solution: 'Designed a RESTful API architecture with Node.js and Express, using MongoDB/Mongoose for flexible schema design. Implemented JWT authentication with role-based access control for buyers and sellers. Integrated Razorpay for payment processing and Google OAuth for social login. Used Redux Toolkit on the frontend for predictable state management across cart, checkout, and user sessions.',
    contribution: 'Led full-stack development from architecture to deployment. Designed the database schema, built all API endpoints, implemented authentication, and built the complete frontend with React and Redux Toolkit.',
    challenges: 'Managing cart totals dynamically with product variants required careful MongoDB aggregation pipeline design. Implementing secure multi-role access required a layered middleware approach. Integrating Razorpay webhooks for reliable payment confirmation required idempotent order state handling.',
    outcomes: 'Delivered a fully functional e-commerce platform with live demo. Supports product catalogs, dynamic variants, shopping cart, seller dashboard, and complete checkout flow with Razorpay integration.',
    category: 'Full-Stack',
    categoryColor: 'blue',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'JWT', 'Google OAuth', 'Razorpay'],
    github: 'https://github.com/Vishwaraj-636',
    live: 'https://wearth-nu.vercel.app/',
    featured: true,
  },
  {
    id: 'plant-disease',
    title: 'Plant Disease Detection',
    subtitle: 'Edge AI Mobile Application',
    description: 'On-device plant disease classification across 47 crop health/disease classes using TensorFlow Lite. ~4.6 MB deployed model enables offline inference.',
    longDescription: 'A Flutter-based mobile application for real-time plant disease detection using on-device AI inference. The model classifies images across 47 crop health and disease categories without requiring internet connectivity, making it practical for agricultural use in low-connectivity areas.',
    problem: 'Farmers in low-connectivity regions need a fast, reliable way to identify crop diseases. Cloud-based solutions are impractical due to internet dependency and latency. A deployable on-device model needed to be small enough for mobile use while maintaining accuracy.',
    solution: 'Developed a CNN-based image classification model with Python, TensorFlow, and Keras. Designed image preprocessing and augmentation pipelines to handle the diverse agricultural dataset. Optimized the model using TensorFlow Lite post-training quantization, achieving a ~4.6 MB deployment size. Integrated the model into a Flutter mobile app for cross-platform on-device inference.',
    contribution: 'Developed image preprocessing pipelines and CNN model architecture. Performed TensorFlow Lite optimization and quantization. Integrated the TFLite model into the Flutter application. This was a team project conducted under Samsung PRISM.',
    challenges: 'Balancing model accuracy against size constraints required extensive experimentation with quantization strategies. Preprocessing 47-class agricultural images with varied lighting conditions required robust augmentation pipelines.',
    outcomes: 'Deployed an AI model at ~4.6 MB enabling fully offline plant disease classification across 47 classes. The project was conducted as part of the Samsung PRISM research program and recognized with a certification from Samsung R&D.',
    category: 'Edge AI · Samsung PRISM',
    categoryColor: 'emerald',
    tech: ['Flutter', 'TensorFlow Lite', 'CNN', 'Python', 'OpenCV', 'Keras'],
    github: 'https://github.com/Vishwaraj-636/DetectPlant',
    featured: true,
  },
  {
    id: 'nova',
    title: 'Nova',
    subtitle: 'Programming Language Interpreter',
    description: 'Custom programming language interpreter built in C++ covering lexical analysis, parsing, and runtime evaluation.',
    longDescription: 'Nova is a complete interpreter for a custom programming language, built from scratch in C++. It implements all stages of language processing: lexical analysis (tokenization), parsing (AST construction), and runtime evaluation. Nova supports variables, arithmetic, strings, booleans, conditional branching, and while loops.',
    problem: 'Building a language interpreter requires deep understanding of how programming languages process and execute code. Most learning resources are abstract — building an actual interpreter in a systems language like C++ tests real understanding of CS fundamentals.',
    solution: 'Implemented a hand-written lexer that tokenizes source code into typed tokens. Built a recursive-descent parser that constructs an abstract syntax tree (AST). Developed a tree-walking interpreter that evaluates nodes with proper runtime state management. Each language feature — variables, expressions, conditions, loops — required careful implementation of semantics.',
    contribution: 'Sole developer. Designed the language syntax and implemented the full interpreter pipeline from lexer to runtime evaluator.',
    challenges: 'Implementing proper scoping for variable state, handling nested conditional and loop constructs correctly, and managing runtime errors cleanly required careful design of the evaluation engine.',
    outcomes: 'A working interpreter capable of executing Nova programs with variables, arithmetic, strings, booleans, conditionals, and while loops. Demonstrates strong understanding of compiler/interpreter theory and C++ systems programming.',
    category: 'Systems',
    categoryColor: 'purple',
    tech: ['C++', 'Lexer', 'Parser', 'AST', 'Runtime'],
    github: 'https://github.com/Vishwaraj-636/Nova',
    featured: true,
  },
  {
    id: 'fraud-detection',
    title: 'Payment Fraud Detection',
    subtitle: 'Financial ML Pipeline',
    description: '6.36M+ transactions analyzed. XGBoost selected across 5 models. 99.97% test accuracy, 97% fraud precision, 88% fraud F1-score. Flask deployment.',
    longDescription: 'An end-to-end machine learning pipeline for online payment fraud detection, built on a dataset of 6.36 million financial transactions. The pipeline covers exploratory data analysis, preprocessing, feature engineering, multi-model comparison, and Flask-based deployment.',
    problem: 'Payment fraud causes significant financial losses. Detecting fraud requires handling highly imbalanced datasets, engineering meaningful features from raw transaction data, and deploying a model that performs reliably on unseen transactions.',
    solution: 'Performed thorough EDA and outlier analysis on 6.36M+ transactions. Applied categorical encoding and feature preprocessing. Trained and compared 5 classification models. Selected XGBoost based on evaluation metrics. Serialized the final model and deployed it using Flask as a REST API for real-time Fraud/Not Fraud predictions across 7 transaction features.',
    contribution: 'Built the complete ML pipeline as a team project. Contributed to EDA, preprocessing, model training and evaluation, and Flask deployment. This project was conducted during the SmartBridge ML internship.',
    challenges: 'Managing a 6.36M row dataset required efficient Pandas pipelines. Imbalanced fraud/non-fraud classes required careful evaluation — accuracy alone is misleading, so precision, recall, and F1 were primary metrics. Model selection required comparing multiple algorithms on a consistent evaluation framework.',
    outcomes: 'XGBoost achieved 99.97% test accuracy, 97% fraud precision, and 88% fraud F1-score on the test set. Note: these metrics reflect held-out test performance on a historical dataset and should not be interpreted as live production fraud detection guarantees. The model is deployed via Flask for demonstrative real-time predictions.',
    category: 'ML · Data Science',
    categoryColor: 'amber',
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'Flask'],
    github: 'https://github.com/Vishwaraj-636/online-payment-fraud-detection',
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: 'samsung',
    role: 'Research Intern',
    company: 'Samsung PRISM Program',
    dates: 'Sept 2025 – Jan 2026',
    type: 'Research Internship',
    location: 'India (Remote)',
    bullets: [
      'Researched and developed deep learning approaches for plant disease classification using 11,000+ agricultural images across diverse crop and disease conditions.',
      'Designed image preprocessing and augmentation pipelines using Python, OpenCV, and PIL to clean, standardize, and improve training data quality.',
      'Experimented with CNN-based architectures and TensorFlow Lite optimization, including post-training quantization, for resource-constrained edge deployment.',
      'Achieved ~4.6 MB deployed model size enabling fully offline on-device inference across 47 crop health/disease classes.',
    ],
    relatedProject: 'plant-disease',
    color: 'blue',
  },
  {
    id: 'smartbridge',
    role: 'Machine Learning Intern',
    company: 'SmartBridge',
    dates: 'May 2025 – Jun 2025',
    type: 'ML Internship',
    location: 'India (Remote)',
    bullets: [
      'Built an end-to-end machine learning workflow involving data preprocessing, exploratory analysis, model training, evaluation, and deployment.',
      'Performed EDA, outlier analysis, categorical encoding, and feature preprocessing on a dataset of 6.36M+ financial transactions.',
      'Compared 5 classification models and selected XGBoost based on fraud precision and F1-score as primary evaluation metrics.',
      'Deployed the serialized XGBoost model using Flask for real-time Fraud/Not Fraud predictions across 7 transaction features.',
    ],
    relatedProject: 'fraud-detection',
    color: 'amber',
  },
];

export const skills = {
  Frontend: ['React', 'JavaScript', 'Redux Toolkit', 'HTML', 'CSS'],
  'Backend & APIs': ['Node.js', 'Express', 'REST APIs', 'FastAPI', 'Socket.IO'],
  'Databases & Infra': ['MongoDB', 'PostgreSQL', 'SQLite', 'Docker', 'Git', 'GitHub'],
  'AI & Machine Learning': ['Python', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'CNNs', 'OpenCV', 'RAG', 'LangChain'],
  'Programming Languages': ['C++', 'Java', 'JavaScript', 'Python', 'SQL'],
};

export const certifications = [
  { title: 'Samsung PRISM Program Certification', issuer: 'Samsung R&D', year: '2026' },
  { title: 'Machine Learning Internship Certification', issuer: 'SmartBridge', year: '2025' },
  { title: 'Getting Started with Artificial Intelligence', issuer: 'IBM SkillsBuild', year: '2025' },
  { title: 'Journey to Cloud: Envisioning Your Solution', issuer: 'IBM SkillsBuild', year: '2025' },
];

export const links = {
  github: 'https://github.com/Vishwaraj-636',
  linkedin: 'https://www.linkedin.com/in/vishwarajsinghshekhawat/',
  email: 'vishwarajsingh636@gmail.com',
  leetcode: 'https://leetcode.com/u/vishwarajsingh636/',
  resume: '/Vishwaraj Singh Shekhawat.pdf',
};
