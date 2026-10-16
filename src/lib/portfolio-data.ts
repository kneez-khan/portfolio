export type Metric = { label: string; value: string };
export type Project = {
  id: string;
  title: string;
  kind: string;
  overview: string;
  dataset?: string;
  models: string[];
  metrics: Metric[];
  workflow?: string[];
  includes?: string[];
  tech: string[];
  note?: string;
};

// Contact details — edit these values to update every link on the site.
export const CONTACT = {
  email: "kneezkhan12@gmail.com",
  phone: "03316443907",
  github: "https://github.com/kneez-khan",
  // Paste the real LinkedIn profile URL here to activate the LinkedIn button.
  linkedin: "",
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "thesis", label: "Thesis" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { title: "Data & Analytics", items: ["Python", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Statistical Analysis"] },
  { title: "Machine Learning", items: ["Scikit-learn", "Regression", "Classification", "Random Forest", "Decision Trees", "Logistic Regression", "Model Evaluation", "Feature Engineering"] },
  { title: "Database & Development", items: ["MySQL", "SQL", "C++", "Data Structures", "Algorithms", "Git/GitHub"] },
  { title: "Other Technical Skills", items: ["UI/UX Design", "Software Quality Assurance", "Networking", "Project Management"] },
];

export const EXPERIENCE = [
  {
    role: "Data Analyst",
    duration: "",
    description: "Working with data to clean, analyze, interpret, and present meaningful insights while developing practical skills in Python, Pandas, data visualization, and analytical problem-solving.",
    points: ["Data cleaning and preprocessing", "Exploratory data analysis", "Working with structured datasets", "Identifying trends and patterns", "Preparing analytical outputs", "Supporting data-driven decision making"],
  },
  { role: "UI/UX Designer Intern", duration: "1 Month", description: "Worked on interface design, visual structure, usability, and user-centered design concepts.", points: [] },
  { role: "Science & Mathematics Teacher", duration: "", description: "Taught science and mathematics while developing communication, organization, leadership, and problem-solving skills.", points: [] },
];

export const THESIS_FLOW = ["Video Input", "Frame Extraction", "YOLO Detection", "Transformer Analysis", "Score Fusion", "Event Detection", "Temporal Padding", "Event Merging", "Final Video Summary"];

export const PROJECTS: Project[] = [
  {
    id: "lahore", title: "Lahore House Price Prediction", kind: "Regression",
    overview: "Predicting Lahore house prices from property features, with preprocessing, feature engineering, and Random Forest regression.",
    dataset: "Zameen Lahore House Listings",
    models: ["Random Forest", "Regression-based approaches", "Feature preprocessing and engineering"],
    metrics: [{ label: "R²", value: "0.807" }, { label: "MAE", value: "120.09" }, { label: "RMSE", value: "329.69" }],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    id: "churn", title: "Telco Customer Churn Prediction", kind: "Classification",
    overview: "Identifying customers likely to churn from demographic, service, billing, and account features using logistic regression.",
    dataset: "Telco Customer Churn",
    models: ["Logistic Regression"],
    metrics: [{ label: "Accuracy", value: "80.7%" }, { label: "F1 Score", value: "0.609" }],
    tech: ["Python", "Pandas", "Scikit-learn", "Data Preprocessing"],
  },
  {
    id: "phone", title: "Smartphone Resale Price Prediction", kind: "Regression",
    overview: "A machine learning model for estimating smartphone resale prices using device specifications and market-related attributes.",
    models: ["Random Forest Regressor"],
    metrics: [{ label: "R²", value: "0.905" }, { label: "MAE", value: "4,542.59" }, { label: "RMSE", value: "7,097.10" }],
    tech: ["Python", "Pandas", "Scikit-learn", "Feature Engineering"],
  },
  {
    id: "retail", title: "Retail Sales Analysis", kind: "Analytics",
    overview: "An analytical project focused on identifying sales trends, seasonal patterns, product behavior, and business insights from retail sales data.",
    models: ["Trend analysis", "Seasonal analysis"],
    metrics: [],
    includes: ["Data cleaning", "Trend analysis", "Seasonal analysis", "Business insights", "Dashboard visualization"],
    tech: ["Python", "Pandas", "Data Visualization", "Power BI"],
  },
  {
    id: "violence", title: "Violence Detection & Video Summarization", kind: "Computer Vision · Thesis",
    overview: "A computer vision research project that detects violent/fighting events in video and generates one combined fighting-event summary video.",
    dataset: "Violence / Non-Violence video-frame dataset",
    models: ["YOLO-based violence detection", "Transformer-based temporal modeling", "Combined scoring approach"],
    metrics: [{ label: "YOLO Accuracy", value: "94.1%" }, { label: "Transformer", value: "81.17%" }],
    note: "Reported individual-model accuracies from the existing project documentation. A validated combined accuracy has not been established; no combined result is claimed.",
    workflow: ["Video Input", "Frame Extraction", "YOLO Detection", "Transformer Temporal Analysis", "Combined Violence Score", "Event Detection", "Event Padding", "Event Merging", "Final Fighting Summary Video"],
    tech: ["Python", "YOLO", "Transformers", "Computer Vision"],
  },
  {
    id: "weapon", title: "Query-Based Pistol Detection", kind: "Computer Vision · NLP",
    overview: "Natural-language query understanding paired with YOLO object detection. The currently trained detector recognizes the pistol class, not all weapon types.",
    dataset: "Kaggle Gun Detection Dataset",
    models: ["YOLO26 object detection", "Transformer-based query understanding"],
    metrics: [],
    workflow: ["User Natural-Language Query", "Query Understanding", "Visual Detection", "YOLO Bounding Boxes", "Relevant Object Filtering", "Result"],
    tech: ["Python", "YOLO26", "Transformers", "Computer Vision"],
  },
];

export const ACHIEVEMENTS = [
  { title: "Robotics — NERC 2024", detail: "LEGO Robotics Winner", icon: "cpu" },
  { title: "Event Committee Leadership", detail: "Event Committee Leader", icon: "users" },
  { title: "Sports & Activities", detail: "Basketball · Poomsae · Taekwondo", icon: "activity" },
  { title: "Teaching Experience", detail: "Science & Mathematics", icon: "book" },
  { title: "Academic Projects", detail: "Machine Learning · Computer Vision · Data Analytics", icon: "layers" },
  { title: "Scholarship / Academic Recognition", detail: "Academic recognition", icon: "award" },
] as const;
