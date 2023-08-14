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
  isInputRequired:boolean;
}

interface QuestionStore {
    questions: Question[];
    currentQuestionIndex: number;
    setCurrentQuestionIndex: (index: number) => void;
    answers: Record<number, string>;
    setAnswer: (index: number, answer: string) => void;
    history: number[]; 
    addToHistory: (index: number) => void; 
    goBack: () => void; 
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
  history: [], 
  addToHistory: (index) =>
    set((state) => {
      console.log('Adding to History:', index);
      console.log('Current History:', state.history);

      return {
        history: [...state.history, index],
      };
    }),

  goBack: () =>
    set((state) => {
      console.log('Going Back');
      console.log('History:', state.history);

      const newHistory = [...state.history];
      // console.log('New History:', newHistory);
      
      const prevIndex = newHistory[newHistory.length - 1]; // Get the previous index
      
      // If the history is empty, return to the first question
      const currentQuestionIndex = prevIndex !== undefined ? prevIndex : 0;
      newHistory.pop(); // Remove the last index from history

      console.log('Previous Index:', prevIndex);
      console.log('Current Index:', currentQuestionIndex);

      return {
        history: newHistory,
        currentQuestionIndex,
      };
    }),
}));

