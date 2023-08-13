import { Question } from "../context/store";
export const questions: Question[] = [
  {
    id: 1,
    question: "What is the main goal of your marketing campaign?",
    options: [
      { label: "Increase Brand Awareness", nextQuestionIndex: 2 },
      { label: "Generate Leads", nextQuestionIndex: 3 },
    ],
  },
  {
    id: 2,
    question: "How do you plan to increase brand awareness?",
    options: [
      { label: "Social Media", nextQuestionIndex: 4 },
      { label: "Content Marketing", nextQuestionIndex: 5 },
    ],
  },
  {
    id: 3,
    question: "What type of leads are you looking for?",
    options: [
      { label: "B2B", nextQuestionIndex: 6 },
      { label: "B2C", nextQuestionIndex: 7 },
    ],
  },
  {
    id: 4,
    question: "Which social media platforms do you want to focus on?",
    options: [
      { label: "Facebook", nextQuestionIndex: 8 },
      { label: "Instagram", nextQuestionIndex: 9 },
    ],
  },
  {
    id: 5,
    question: "What type of content are you planning for content marketing?",
    options: [
      { label: "Blog Posts", nextQuestionIndex: 10 },
      { label: "Videos", nextQuestionIndex: 11 },
    ],
  },
  {
    id: 6,
    question: "What industry is your B2B target audience in?",
    options: [
      { label: "Technology", nextQuestionIndex: 12 },
      { label: "Healthcare", nextQuestionIndex: 13 },
    ],
  },
  {
    id: 7,
    question: "What age group is your B2C target audience in?",
    options: [
      { label: "18-24", nextQuestionIndex: 14 },
      { label: "25-34", nextQuestionIndex: 15 },
    ],
  },
  {
    id: 8,
    question: "What is your target audience on Facebook interested in?",
    options: [
      { label: "Fashion", nextQuestionIndex: 16 },
      { label: "Travel", nextQuestionIndex: 17 },
    ],
  },
  {
    id: 9,
    question: "What is your target audience on Instagram interested in?",
    options: [
      { label: "Food and Cooking", nextQuestionIndex: 18 },
      { label: "Fitness", nextQuestionIndex: 19 },
    ],
  },
  {
    id: 10,
    question: "How frequently do you plan to publish blog posts?",
    options: [
      { label: "Weekly", nextQuestionIndex: 20 },
      { label: "Monthly", nextQuestionIndex: 21 },
    ],
  },
  {
    id: 11,
    question: "What type of videos are you planning?",
    options: [
      { label: "Tutorials", nextQuestionIndex: 22 },
      { label: "Product Demos", nextQuestionIndex: 23 },
    ],
  },
  {
    id: 12,
    question: "What specific area of technology is your B2B target audience interested in?",
    options: [
      { label: "Software Development", nextQuestionIndex: 24 },
      { label: "Cybersecurity", nextQuestionIndex: 25 },
    ],
  },
  // ... Continue adding more questions and options
];