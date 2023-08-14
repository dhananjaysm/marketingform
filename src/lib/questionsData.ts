import { Question } from "../context/store";
export const questions: Question[] = [
  {
    id: 1,
    question: "What is the main goal of your marketing campaign?",
    options: [
      {
        label: "Increase Brand Awareness",
        nextQuestionIndex: 2,
        isDescriptionRequired: false,
      },
      {
        label: "Generate Leads",
        nextQuestionIndex: 3,
        isDescriptionRequired: false,
      },
    ],
    isInputRequired: false,
  },
  {
    id: 2,
    question: "How do you plan to increase brand awareness?",
    options: [
      {
        label: "Social Media",
        nextQuestionIndex: 4,
        isDescriptionRequired: false,
      },
      {
        label: "Content Marketing",
        nextQuestionIndex: 5,
        isDescriptionRequired: false,
      },
    ],
    isInputRequired: false,
  },
  {
    id: 3,
    question: "What type of leads are you looking for?",
    options: [
      { label: "B2B", nextQuestionIndex: 6, isDescriptionRequired: false },
      { label: "B2C", nextQuestionIndex: 7, isDescriptionRequired: false },
    ],
    isInputRequired: false,
  },
  {
    id: 4,
    question: "Which social media platforms do you want to focus on?",
    options: [
      { label: "Facebook", nextQuestionIndex: 8, isDescriptionRequired: true },
      {
        label: "Instagram",
        nextQuestionIndex: 9,
        isDescriptionRequired: false,
      },
    ],
    isInputRequired: false,
  },
  {
    id: 5,
    question: "What type of content are you planning for content marketing?",
    options: [
      {
        label: "Blog Posts",
        nextQuestionIndex: 10,
        isDescriptionRequired: false,
      },
      { label: "Videos", nextQuestionIndex: 11, isDescriptionRequired: false },
    ],
    isInputRequired: false,
  },
  {
    id: 6,
    question: "What industry is your B2B target audience in?",
    options: [
      {
        label: "Technology",
        nextQuestionIndex: 12,
        isDescriptionRequired: false,
      },
      {
        label: "Healthcare",
        nextQuestionIndex: 13,
        isDescriptionRequired: false,
      },
    ],
    isInputRequired: false,
  },
  {
    id: 7,
    question: "What age group is your B2C target audience in?",
    options: [
      { label: "18-24", nextQuestionIndex: 14, isDescriptionRequired: false },
      { label: "25-34", nextQuestionIndex: 15, isDescriptionRequired: false },
    ],
    isInputRequired: false,
  },
  {
    id: 8,
    question: "What is your target audience on Facebook interested in?",
    options: [
      { label: "Fashion", nextQuestionIndex: 16, isDescriptionRequired: false },
      { label: "Travel", nextQuestionIndex: 17, isDescriptionRequired: false },
    ],
    isInputRequired: false,
  },
  {
    id: 9,
    question: "What is your target audience on Instagram interested in?",
    options: [
      {
        label: "Food and Cooking",
        nextQuestionIndex: 18,
        isDescriptionRequired: false,
      },
      { label: "Fitness", nextQuestionIndex: 19, isDescriptionRequired: false },
    ],
    isInputRequired: false,
  },
  {
    id: 10,
    question: "How frequently do you plan to publish blog posts?",
    options: [
      { label: "Weekly", nextQuestionIndex: 20, isDescriptionRequired: false },
      { label: "Monthly", nextQuestionIndex: 21, isDescriptionRequired: false },
    ],
    isInputRequired: true,
  },
  {
    id: 11,
    question: "What type of videos are you planning?",
    options: [
      {
        label: "Tutorials",
        nextQuestionIndex: 22,
        isDescriptionRequired: false,
      },
      {
        label: "Product Demos",
        nextQuestionIndex: 23,
        isDescriptionRequired: false,
      },
    ],
    isInputRequired: false,
  },
  {
    id: 12,
    question:
      "What specific area of technology is your B2B target audience interested in?",
    options: [
      {
        label: "Software Development",
        nextQuestionIndex: 24,
        isDescriptionRequired: false,
      },
      {
        label: "Cybersecurity",
        nextQuestionIndex: 25,
        isDescriptionRequired: false,
      },
    ],
    isInputRequired: false,
  },
  // ... Continue adding more questions and options
];
