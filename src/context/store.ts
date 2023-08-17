import {create} from 'zustand';
import { realQuestionsData } from '../lib/questionsData';

export interface Option {
  label: string;
  nextQuestionIndex: number;
  isDescriptionRequired: boolean;
  descriptionHeading?: string;
  descriptionType?: 'text' | 'dropdown' | 'radio'; 
  descriptionOptions?: string[]; 
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  isInputRequired:boolean;
  inputHeading?: string
  
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
    answers: Record<number, string>;
    descriptions: Record<number, string | undefined>; // Add descriptions state
    setAnswer: (index: number, answer: string, description?: string) => void; // Modify setAnswer to accept description
    history: number[]; 
    addToHistory: (index: number) => void; 
    goBack: () => void; 
    userDetails: UserDetails; // New property to store user details
    setUserDetails: (details: UserDetails) => void;
}



export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: realQuestionsData,
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: (index) => set(() => ({ currentQuestionIndex: index })),
  answers: {},
  descriptions:{},
  setAnswer: (index, answer, description) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [index]: answer,
      },
      descriptions: {
        ...state.descriptions,
        [index]: description,
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
    userDetails: {name:'',email:''},
    setUserDetails: (details) => set({ userDetails: details }),
}));

