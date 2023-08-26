import { create } from "zustand";
// import { realQuestionsData } from "../lib/questionsData";
const mockQuestions: Question[] = [
  {
    id: 1,
    question: "How satisfied are you with our marketing services?",
    options: [
      { id: 1, label: "Very Satisfied" },
      { id: 2, label: "Satisfied" },
      { id: 3, label: "Neutral" },
      { id: 4, label: "Dissatisfied" },
      { id: 5, label: "Very Dissatisfied", subQuestionId: 2 },
    ],
    hasMultipleAnswers: false,
  },
  {
    id: 2,
    question: "What aspects of our services are you dissatisfied with?",
    options: [
      { id: 1, label: "Communication" },
      { id: 2, label: "Campaign Results" },
      { id: 3, label: "Customer Support" },
      { id: 4, label: "Other" },
    ],
    hasMultipleAnswers: true,
  },
  {
    id: 3,
    question: "Would you recommend our agency to others?",
    options: [
      { id: 1, label: "Definitely" },
      { id: 2, label: "Probably" },
      { id: 3, label: "Not Sure" },
      { id: 4, label: "Probably Not" },
      { id: 5, label: "Definitely Not" },
    ],
    hasMultipleAnswers: false,
  },
  // Add more questions here...
];
export interface Option {
  id:number
  label: string;
  subQuestionId?:number;
  optionIcon?:string;
  
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  hasMultipleAnswers: boolean;
}
export interface SubQuestion {
  id: number;
  question:string;
  descriptionOptions?: string[];
  descriptionHeading?: string;
  descriptionType?: "text" | "dropdown" | "radio";
}
interface UserDetails {
  name: string;
  email: string;
  // Add more user details properties as needed
}

interface QuestionStore {
  questions: Question[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  answers: Record<number, string[]>;
  descriptions: Record<number, Record<string, string | undefined>>;
  setAnswer: (index: number, answer: string[], description?: string) => void; // Modify setAnswer to accept description
  history: number[];
  addToHistory: (index: number) => void;
  goBack: () => void;
  userDetails: UserDetails; // New property to store user details
  setUserDetails: (details: UserDetails) => void;
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: mockQuestions,
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: (index) =>
    set(() => ({ currentQuestionIndex: index })),
  answers: [],
  descriptions: {},
  setAnswer: (mainIndex, optionLabels, description) =>
  set((state) => {
    const updatedDescriptions = {
      ...state.descriptions,
      [mainIndex]: {
        ...state.descriptions[mainIndex],
        [optionLabels[0]]: description,
      },
    };

    return {
      answers: {
        ...state.answers,
        [mainIndex]: optionLabels, // Store the selected options
      },
      descriptions: updatedDescriptions,
    };
  }),
  history: [],
  addToHistory: (index) =>
    set((state) => {
      console.log("Adding to History:", index);
      console.log("Current History:",state.history);
      console.log("Answers:",state.answers);
      return {
        history: [...state.history, index],
        
      };
    }),

  goBack: () =>
    set((state) => {
      console.log("Going Back");
      console.log("History:", state.history);

      const newHistory = [...state.history];
      // console.log('New History:', newHistory);

      const prevIndex = newHistory[newHistory.length - 1]; // Get the previous index

      // If the history is empty, return to the first question
      const currentQuestionIndex = prevIndex !== undefined ? prevIndex : 0;
      newHistory.pop(); // Remove the last index from history

      console.log("Previous Index:", prevIndex);
      console.log("Current Index:", currentQuestionIndex);

      return {
        history: newHistory,
        currentQuestionIndex,
      };
    }),
  userDetails: { name: "", email: "" },
  setUserDetails: (details) => set({ userDetails: details }),
}));
