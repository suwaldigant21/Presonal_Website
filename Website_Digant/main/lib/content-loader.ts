export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  coverImage?: string
  tags?: string[]
}

export interface ResearchPaper {
  id: string
  title: string
  abstract: string
  publication: string
  year: string
  pdfUrl?: string
  content: string // Added content property for full text
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image?: string
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

// Mock data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: "MyCv",
    title: "My CV",
    excerpt: "A brief overview of my professional journey and skills",
    content:
      "This is my CV, which outlines my education, work experience, skills, and projects. It provides a snapshot of my professional journey and showcases my qualifications.",
    date: "May 19, 2025",
    coverImage: "/CV.jpg?height=160&width=320",
    tags: ["CV", "Resume", "Personal"],
  },
  {
    id: "exploring-machine-learning",
    title: "Exploring Machine Learning with Python",
    excerpt: "A beginner's guide to machine learning concepts and implementation",
    content:
      "Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to learn from data, without being explicitly programmed.",
    date: "April 22, 2024",
    coverImage: "/placeholder.svg?height=160&width=320",
    tags: ["Machine Learning", "Python", "AI"],
  },
  {
    id: "responsive-design-principles",
    title: "Responsive Design Principles",
    excerpt: "Creating websites that work well on any device",
    content:
      "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.",
    date: "March 10, 2024",
    coverImage: "/placeholder.svg?height=160&width=320",
    tags: ["CSS", "Web Design", "Responsive"],
  },
  {
    id: "understanding-algorithms",
    title: "Understanding Algorithms and Data Structures",
    excerpt: "A comprehensive guide to common algorithms and data structures",
    content:
      "Algorithms and data structures are essential concepts in computer science that help solve complex problems efficiently.",
    date: "February 5, 2024",
    coverImage: "/placeholder.svg?height=160&width=320",
    tags: ["Algorithms", "Data Structures", "Computer Science"],
  },
  {
    id: "web-accessibility",
    title: "Web Accessibility Best Practices",
    excerpt: "Making the web accessible to everyone",
    content:
      "Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.",
    date: "January 15, 2024",
    coverImage: "/placeholder.svg?height=160&width=320",
    tags: ["Accessibility", "Web Development", "HTML"],
  },
]

// Mock data for research papers
const researchPapers: ResearchPaper[] = [
  {
    id: "aiinfraud",
    title: "Analysis of Credit Card Fraud Detection Using Machine Learning",
    abstract:
      "_This is my research paper written by me for my 'Fundamentals of Computer Science' module project which involves analysis of credit card fraud detection using Machine Learning. This is submitted to my university Leeds Beckket University in School of Computing, Creative Technology and Engineering in Academic Year: 2023/24, Level 4 through my tutor Pratik Shrestha._",
    publication: "",
    year: "2024",
    pdfUrl: "#",
    content: `**Introduction**

The swift digitization of financial transactions has led to a sky-high surge in credit card fraud as credit cards have become a primary mode of payment for various individuals and businesses, thus presenting a substantially challenge to the global ecosystem as credit card frauds have heightened significantly. In 2023, worldwide credit card fraud losses surpassed $32 billion, with fraudulent patterns becoming increasingly complex and harder to detect (Smith, T., Brown, R., & Williams, E. (2023)) and is predicted to surpass over $50 billion by 2025 (Nilson Report, 2023). This increase in problem has been demanding a big worldwide shift in how the financial institutions use fraud detection and prevention strategies. With the exponential growth in electronic transactions, the current fraud detections systems which are primarily based on rule-based approaches and statistical methods have been proven inadequate in addressing modern fraud patterns. The present system suffers from various problems and is not limited to:
• Inability to adapt to new fraud patterns, 
• Limited ability to process large amount of data 
• Difficulty in prevention against complex fraud patterns.

The development of Machine Learning (ML) technologies has revolutionized fraud detection by offering easy and adaptive solutions, capable of processing large amount of transaction data in real time. ML based approaches have proven their effectiveness by achieving significant scores including enhanced detection accuracy from 60% to 95%, ability to identify complex fraud patterns and real time adaptation to emerging threats (Johnson, P., & Lee, S. (2022)). 

This research paper aims to provide a comprehensive analysis of Machine Learning application in fraud detection system. As financial transactions continue to evolve, fraudsters are developing more sophisticated techniques that’s why implementing effective ML based fraud detection systems has become crucial for maintaining the security of the global financial system.
 
**Understanding Credit Card Fraud**

Credit card fraud refers to the crime by unauthorized use of a credit card or its details to obtain personal gains. The most common ways fraudsters use include:

• Card Not Present (CNP) Fraud: This is one of the most popular and major types of card fraud techniques used by criminals. It occurs when a fraudster uses a stolen credit card information to make unauthorized purchases without the actual possession of the card. This typically happens in online transactions and is in most prevalent due to the boom of ecommerce. CNP card frauds are done through various methods such as:
o Data Breaches: Hackers hack company databases and steal customer information, including credit card details.
o Phishing: Fraudsters send emails or messages that appear to be from real companies, tricking victims into revealing their card information or by installing malware such as spyware by persuading to click suspicious links.

• Card Present (CP) Fraud: This is also one of the major types of card fraud techniques after CNP. It is the result of card being physically stolen or used without the user’s authorization to make purchase at a physical store or other location. Criminals perform CP fraud by:
o Stolen Cards: A thief steals a physical card and uses it at an ATM or other general shops.
o Skimming: Criminals use advanced devices such as card reader to capture card information from ATMs.
o Counterfeit Cards or Device Cloning: Criminals obtain a original credit card information through various means such as skimming, data breaches etc to create fake cards and then are used to make purchases at a physical store or to withdraw cash from ATMs.

• Application Fraud: It occurs when a fraudster uses false information on an application in financial institutions to take loans and credit cards. Fraudsters may use other person’s personal information to apply for new credit cards or existing accounts. 

**Machine Learning in Fraud Detection**

Machine Learning (ML) is a branch of artificial intelligence (AI) that trains a computer system to learn patterns from data and make decisions and predictions. Credit Card Fraud is difficult to detect because fraudsters often mimic legitimate user behaviour. Current system has many vulnerabilities, and ML has offered a transformative approach in detecting fraud by learning patterns and making real-time decisions. ML can be effectively applied in fraud detection by using different algorithms like:

• Supervised Learning: This algorithm uses labelled datasets, where transactions are categorized as either fraudulent or legitimate. Algorithms learn from historical data to predict future outcomes.
The most used algorithms are: 
o Logistic Regression: It is a statistical method used to predict the probability of an event occurring based on a set of variables. It estimates a transaction being fraudulent based on statistics. It is simple and readable and relatively faster to train.
o Decision Trees: It creates a tree like model and flowchart-like structure to help identify fraudulent transactions through a given set of rules. It is easy to understand a visualize and handles numerical data efficiently.
o Random Forest: It uses a combination of decision trees to increase its prediction accuracy.

• Unsupervised Learning: This algorithm uses unlabelled data sets. The most used algorithms are:
o Clustering: It is an algorithm that groups similar data sets together. It groups the users based on purchasing power, demographics, geo-location and identifies it as a unusual potential fraud when an unusual data set varies from being normal.
o Autoencoders: It is an algorithm in which a machine is trained to learn numerous normal transactions and when it gets trained enough it will show a transaction is unusual or fraudulent, when it won’t match the learned pattern.

• Hybrid Learning: As the name suggests, it is a combination of both supervised and unsupervised method to improve the accuracy and efficiency in finding the unusual patterns in the transaction. For example: An unsupervised model finds unusual odds then it is also checked by the supervised model for improving the accuracy and reduce false errors.

 
**Case Studies and Application**

• Case Study 1: JPMorgan Chase’s ML integration

o JPMorgan Chase has highly invested in AI/ML, developing “Omni AI” platform with the help of Amazon Web Services (AWS) and LLM Suite to help in fraud detection. JPMorgan is using advanced AI models to analyse numerous transaction data, user behaviour, and predict potentially fraud activities. In the initial days, JPMorgan faced over 100,000 fraud attempts monthly, $380 million in annual fraud losses, 3,500 customer complaints about false decline and average detection time of (8-12hrs), but with the deployment of their new “Fraud Force” ML system they have achieved higher processing speed of 2 milliseconds per transactions, real time screening platform with achievements like 85% reduction in fraud losses, customer satisfaction increase by staggering 48% (Based on JPMorgan Chase Annual Report 2023, Amazon Web Services and research by Thompson et.al., 2023)

• Case Study 2: PayPal ML integration

o PayPal has deployed a multi-layered approach to fraud prevention by combining rule-based system with advanced ML algorithms. Their system analyses real-time transaction data, considering factors like user behaviour, device information, and geographical location. It uses hybrid model which is a combination of supervised learning model like logistic regression and unsupervised learning model such as clustering to identify unusual patterns. In the initial days of the year 2022, PayPal reported $2.2 billion in payment fraud attempts with over 426 million active accounts to monitor and complex international transaction patterns and need for instant payment processing but after the deployment of a AI system with their custom fraud scoring algorithm, PayPal has been processing over 100,000 data sets per second with real time decision making and has achieved  a substantial amount of fraud loss prevention , totalling $1.9 billion and 99.99% of transaction success rate with exceptionally low fraud rate of just 0.05%, positioning PayPal as an industry leader in minimizing fraud and has also significantly reduced the processing time to just 0.2 seconds (PayPal Financial Reports, Davis et al., 2023).  

• Case Study 3:  Bank of America’s Regional Approach

o The Bank of America has been applying state by state different strategy by focusing and understanding local fraud patterns and trends then developing regional ML models and integrating them with existing system so that they can effectively identify and prevent risks specific to that area. After the implementation of ML models, Bank of America has achieved 92% fraud detection rate with over 75% reduction of false error alarms in fraud cases and over $1.8 billion saved in potential fraud (Bank of America Security Report 2023, Anderson et al., 2024).

**Conclusion**

Credit Card fraud continues to be a major threat to the global financial ecosystem. Machine Learning has literally changed the way how the fraud detection worked, offering unmatched accuracy and adaptability in the current scenario. The comprehensive analysis of this research paper demonstrates the understanding of ongoing credit card fraud and ML based approaches and techniques in identifying of fraudulent activities in the global financial ecosystem while also showcasing the real-life case studies of finance-tech giants. However significant challenges remain in the areas regarding model training, real time processing and adaptation to complex fraud patterns, there is a hope of twinkling light as there is a continuing evolution taking place in the AI field, this domain has also been constantly improving and adapting to counter emerging threats. As the field continues to evolve the integration of ML will greatly help the future generation by reducing and eliminating the number of fraudulent activities happening in the global financial ecosystem worldwide. 



 
**References**

Smith, T., Brown, R., & Williams, E. (2023). Machine Learning Applications in Financial Security: A Comprehensive Review. Journal of Banking Technology, 18(1), 12-28.

Johnson, P., & Lee, S. (2022). Evolution of Credit Card Fraud Detection: From Rule-based to Machine Learning Systems. Financial Security Review, 12(3), 234-251.

Anderson, R., Garcia, M., & Thompson, K. (2023). Optimizing Real-time Fraud Detection Systems: A Performance Analysis. Journal of Financial Technology, 15(4), 78-92.

Thompson, L., Anderson, M., & Davis, K. (2023). Deep Learning Architectures for Temporal Pattern Recognition in Financial Transactions. Neural Computing and Applications, 35(2), 167-185

Davis, J., Wilson, M., & Roberts, A. (2023). Ensemble Learning Approaches in Financial Fraud Detection. International Journal of Machine Learning Applications, 8(2), 145-163.

Thompson, L., Anderson, M., & Davis, K. (2023). Deep Learning Architectures for Temporal Pattern Recognition in Financial Transactions. Neural Computing and Applications, 35(2), 167-185

[Nilson Report](https://nilsonreport.com/research-16th-edition/)

[JPMorgan Chase 2023 Annual Report](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2023.pdf)

[AWS Case Study: JPMorgan Chase](https://aws.amazon.com/solutions/case-studies/jpmorgan-chase/)

[PayPal Annual Reports](https://investor.pypl.com/financials/annual-reports/default.aspx)

[Bank of America 2023 Annual Reports](https://investor.bankofamerica.com/regulatory-and-other-filings/annual-reports?year=2023)
.`,
  },
  {
    id: "blockchain-security",
    title: "Enhancing Security in Blockchain Networks",
    abstract:
      "A comprehensive analysis of security challenges in blockchain networks and proposed solutions to enhance security and privacy.",
    publication: "International Journal of Cryptography",
    year: "2023",
    pdfUrl: "#",
    content: "Full text content for the blockchain security paper goes here.",
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing: Challenges and Opportunities",
    abstract:
      "This paper discusses the current state of quantum computing, its challenges, and potential applications in various fields.",
    publication: "Journal of Quantum Computing",
    year: "2023",
    pdfUrl: "#",
    content: "Full text content for the quantum computing paper goes here.",
  },
  {
    id: "sustainable-computing",
    title: "Sustainable Computing: Reducing Carbon Footprint",
    abstract:
      "An analysis of methods to reduce the carbon footprint of computing systems and data centers through energy-efficient algorithms and hardware.",
    publication: "Environmental Computing Journal",
    year: "2022",
    pdfUrl: "#",
    content: "Full text content for the sustainable computing paper goes here.",
  },
]

// Mock data for projects
const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/placeholder.svg?height=128&width=256",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication and payment integration.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=128&width=256",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "weather-app",
    title: "Weather Application",
    description: "A weather application that provides real-time weather information based on location.",
    technologies: ["JavaScript", "API", "CSS"],
    image: "/placeholder.svg?height=128&width=256",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description: "A task management application with features like task creation, deletion, and status tracking.",
    technologies: ["React", "Firebase", "CSS"],
    image: "/placeholder.svg?height=128&width=256",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "chat-application",
    title: "Real-time Chat Application",
    description: "A real-time chat application with private messaging and group chat functionality.",
    technologies: ["Socket.io", "Node.js", "Express"],
    image: "/placeholder.svg?height=128&width=256",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "A blog platform with content management system and user authentication.",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    image: "/placeholder.svg?height=128&width=256",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A fitness tracking application to monitor workouts, nutrition, and progress.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "/placeholder.svg?height=128&width=256",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "recipe-app",
    title: "Recipe Application",
    description: "A recipe application with search functionality and meal planning features.",
    technologies: ["React", "API", "CSS"],
    image: "/placeholder.svg?height=128&width=256",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "movie-database",
    title: "Movie Database",
    description: "A movie database application with search, filtering, and user reviews.",
    technologies: ["React", "API", "Styled Components"],
    image: "/placeholder.svg?height=128&width=256",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "music-player",
    title: "Music Player",
    description: "A music player application with playlist creation and audio visualization.",
    technologies: ["JavaScript", "Web Audio API", "CSS"],
    image: "/placeholder.svg?height=128&width=256",
    demoUrl: "#",
    githubUrl: "#",
  },
]

// Functions to get data
export const getBlogPosts = (): BlogPost[] => {
  return blogPosts
}

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id)
}

export const getResearchPapers = (): ResearchPaper[] => {
  return researchPapers
}

export const getResearchPaperById = (id: string): ResearchPaper | undefined => {
  return researchPapers.find((paper) => paper.id === id)
}

export const getProjects = (): Project[] => {
  return projects
}

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}
