import {create} from 'zustand';
import { questions } from '../lib/questionsData';

export interface Option {
  label: string;
  nextQuestionIndex: number;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface QuestionStore {
    questions: Question[];
    currentQuestionIndex: number;
    setCurrentQuestionIndex: (index: number) => void;
    answers: Record<number, string>;
    setAnswer: (index: number, answer: string) => void;
    history: number[]; // Add history array
    addToHistory: (index: number) => void; // Add addToHistory function
    goBack: () => void; // Add goBack function
}



export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: questions,
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: (index) => set(() => ({ currentQuestionIndex: index })),
  answers: {},
  setAnswer: (index, answer) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [index]: answer,
      },
    })),
  history: [], // Initialize history array
  addToHistory: (index) => set((state) => ({ history: [...state.history, index] })),
  goBack: () =>
    set((state) => {
      const newHistory = [...state.history];
      newHistory.pop(); // Remove the last index from history
      const prevIndex = newHistory[newHistory.length - 1]; // Get the previous index
      return {
        history: newHistory,
        currentQuestionIndex: prevIndex, // Set the current index to the previous index
      };
    }),
}));

