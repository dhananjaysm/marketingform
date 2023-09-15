import { create } from "zustand";
// import { realQuestionsData } from "../lib/questionsData";

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "Help me grow my business through digital",
    options: [
      { id: 1, label: "I have a D2C brand", subQuestionIndex: 0 },
      { id: 2, label: "I have a B2B Business", subQuestionIndex: 1 },
      { id: 3, label: "I am a not for profit business" },
    ],
   
    hasMultipleAnswers: false,
    isFollowUpQuestion: false,
  },
  // Add more questions here...
];

const mockSubQuestions: Question[] = [
  {
    id: 2,
    question:
      "We usually see a D2C brand use the following to reach and engage with their potential customers through these channels. Which of these are you using?    ",
    options: [
      {
        id: 1,
        label: "Online marketplaces",
        subQuestionIndex: 2,
        optionIcon: "",
      },
      { id: 2, label: "Social Media", subQuestionIndex: 4 },
      { id: 3, label: "Website", subQuestionIndex: 9 },
      { id: 4, label: "Emailers" },
      { id: 5, label: "Whatsapp" },
      { id: 6, label: "Offline store" },
      { id: 7, label: "Partnerships" },
    ],
    hasMultipleAnswers: true,
    isFollowUpQuestion: false,
  },
  {
    id: 3,
    question:
      "That’s great. It’s not an easy job to run one, I know. So how can we help you grow your B2B business?",
    options: [
      { id: 1, label: "I need more leads", subQuestionIndex: 11 },
      {
        id: 2,
        label: "I need to build and engage my network",
        subQuestionIndex: 11,
      },
      {
        id: 3,
        label: "I need to improve my lead conversion rate",
        subQuestionIndex: 11,
      },
      { id: 4, label: "I need a revamp of the brand", subQuestionIndex: 11 },
      {
        id: 5,
        label: "I need assistance with Employer Branding",
        subQuestionIndex: 11,
      },
    ],
    hasMultipleAnswers: true,
    isFollowUpQuestion: false,
  },
  {
    id: 4,
    question: "Nice, Which Ones?",
    options: [
      { id: 1, label: "Amazon", subQuestionIndex: 3 },
      { id: 2, label: "Ebay", subQuestionIndex: 3 },
      { id: 3, label: "Flipkart", subQuestionIndex: 3 },
      { id: 4, label: "Myntra", subQuestionIndex: 3 },
      { id: 5, label: "Etsy", subQuestionIndex: 3 },
    ],
    hasMultipleAnswers: true,
    isFollowUpQuestion: false, //This will make sure next question also gets added
  },
  {
    id: 5,
    question: "Great! Are you happy with it or concerned about them :",
    options: [
      { id: 1, label: "Being not optimized well for the platform" },
      { id: 2, label: "The commission rates are too high" },
      { id: 3, label: "Nah, I’m ok with it" },
    ],
    hasMultipleAnswers: false,
    isFollowUpQuestion: true,
  },
  {
    id: 6,
    question: "Social Media",
    options: [
      { id: 1, label: "Content creation on own profiles", subQuestionIndex: 5 },
      { id: 2, label: "Paid ads", subQuestionIndex: 6 },
      { id: 3, label: "Influencer Collabs", subQuestionIndex: 8 },
    ],
    hasMultipleAnswers: true,
    isFollowUpQuestion: false,
  },
  {
    id: 7,
    question:
      "Great, how about you share your SM links so that we know you better?",
    options: [],
    inputType: "text",
    hasMultipleAnswers: false,
    isFollowUpQuestion: false,
  },
  {
    id: 8,
    question:
      "Ok, so what is your ROAS or RoI on the ads? We can help you calculate that for you if you need, and give you our recommendations?    ",
    options: [
      { id: 1, label: "That would be great", subQuestionIndex: 7 },
      { id: 2, label: "No, I’ll live with it for now" },
    ],
    hasMultipleAnswers: false,
    isFollowUpQuestion: false,
  },
  {
    id: 9,
    question: "Upload reports",
    options: [],
    subQuestionForm:[
      {
        questionId:1,
        label:"Please upload the report",
        inputType:'fileUpload',
        value:''
      }
    ],
    hasMultipleAnswers: false,
    isFollowUpQuestion: false,
  },
  {
    id: 10,
    question:
      "Great, lets know your target audience better to suggest a plan forward",
    options: [],
    subQuestionForm: [
      {
        questionId: 1,
        inputType: "dropdown",
        label: "Define age group",
        options: [
          { id: 1, label: "1 to 20 (years)" },
          { id: 2, label: "21 to 40 (years)" },
          { id: 3, label: "41 to 60 (years)" },
          { id: 4, label: "61 to 80 (years)" },
        ],
        value: [], // Store the selected option label here
      },
      {
        questionId: 2,
        inputType: "multiSelect",
        label: "Define Location",
        options: [
          { id: 1, label: "India" },
          { id: 2, label: "International" },
          // Add more options...
        ],
        value: "", // Store the selected option label here
      },
      {
        questionId: 3,
        inputType: "multiSelect",
        label: "Select Location type in India",
        options: [
          { id: 1, label: "Metropolitan" },
          { id: 2, label: "Town 2" },
          { id: 3, label: "Town 3" },
          { id: 4, label: "Villages" },
          // Add more options...
        ],
        value: "", // Store the selected option label here
      },
      {
        questionId: 4,
        inputType: "multiSelect",
        label: "Select International Location",
        options: [
          { id: 1, label: "Europe" },
          { id: 2, label: "US" },
          { id: 3, label: "South East Asia" },
          { id: 4, label: "Middle East" },
          { id: 5, label: "Australia" },
          // Add more options...
        ],
        value: "", // Store the selected option label here
      },
      {
        questionId: 5,
        inputType: "multiSelect",
        label: "Select Gender",
        options: [
          { id: 1, label: "Male" },
          { id: 2, label: "Female" },

          // Add more options...
        ],
        value: "", // Store the selected option label here
      },
      {
        questionId: 6,
        inputType: "text",
        label:
          "Do you have a budget you want us to keep in mind for a campaign in a month?",
        options: [],
        value: "", // Store the selected option label here
      },

      // {
      //   questionId: 4,
      //   inputType: "radio",
      //   label: "Select a radio option",
      //   options: [
      //     { id: 1, label: "Radio 1" },
      //     { id: 2, label: "Radio 2" },
      //     // Add more options...
      //   ],
      //   value: "", // Store the selected radio option label here
      // },
      // Add more form fields...
    ],
    hasMultipleAnswers: false,
    isFollowUpQuestion: false,
  },
  {
    // Website
    id: 11,
    question: "Share your website link and lets see how its doing for you",
    options: [
      {
        id: 1,
        label:
          "Thanks! Please share your email address. You will received the report there shortly.",
      },
    ],
    hasMultipleAnswers: false,
    isFollowUpQuestion: false,
  },
  {
    // if in social media content is not selected
    // If you’re not doing this, you really really must, especially since you’re a D2C brand. It’s possibly where most of the time of your potential customers is being spent to reach your potential customers, build trust with them and build loyalty with them

    id: 12,
    question:
      "No social media content? Should we help you with finding some people who can help you create it?",
    options: [
      { id: 1, label: "Yes,please" },
      {
        id: 2,
        label: "No, I need a other digital services for my business",
      },
    ],
    inputHeading:
      "If you’re not doing this, you really really must, especially since you’re a D2C brand. It’s possibly where most of the time of your potential customers is being spent to reach your potential customers, build trust with them and build loyalty with them.",
    hasMultipleAnswers: false,
    isFollowUpQuestion: false,
  },

  {
    id: 13,
    question:
      "That should be doable. Can you share a few details about your company and let us share a plan of action  with you then?    ",
    options: [
      { id: 1, label: "Sure", subQuestionIndex: 14 },
      { id: 2, label: "No" },
    ],
    hasMultipleAnswers: false,
    isFollowUpQuestion: false,
  },
  {
    id: 14,
    question: "Great, do you have a website?",
    options: [
      { id: 1, label: "Yes", subQuestionIndex: 15 },
      { id: 1, label: "No", },
    ],

    hasMultipleAnswers: false,
    isFollowUpQuestion: false,
  },
  {
    id: 15,
    question: "Please share your website link.",
    options: [],
    inputType: "text",
    hasMultipleAnswers: false,
    isFollowUpQuestion: true,
  },
  {
    id: 16,
    question: "And a Linkedin profile?",
    options: [
      { id: 1, label: "Yes", subQuestionIndex: 15 },
      { id: 1, label: "No", subQuestionIndex: 15 },
    ],

    hasMultipleAnswers: false,
    isFollowUpQuestion: true,
  },
  {
    id: 17,
    question: "Please share your LinkedIn profile link.",
    options: [],
    inputType: "text",
    hasMultipleAnswers: false,
    isFollowUpQuestion: false,
  },
  {
    id: 18,
    question: "And are you running any campaigns as of now?",
    options: [
      { id: 1, label: "Yes" },
      { id: 1, label: "No" },
    ],

    hasMultipleAnswers: false,
    isFollowUpQuestion: true,
  },
];

export interface Option {
  id: number;
  label: string;
  subQuestionIndex?: number;
  optionIcon?: string;
}

export interface FormField {
  questionId: number;
  inputType: "text" | "dropdown" | "radio" | "multiSelect" | "fileUpload";
  label?: string; // Label for the input (if applicable)
  options?: Option[]; // Options for dropdown or radio (if applicable)
  value: string | string[]; // Current value of the field
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  hasMultipleAnswers: boolean;
  inputHeading?: string;
  inputType?: "text" | "dropdown" | "radio";
  isFollowUpQuestion: boolean;
  subQuestionForm?: FormField[];
}

interface UserDetails {
  name: string;
  email: string;
}

interface Answer {
  question: string; // Question text
  answer: string[]; // Selected answer options
}


interface QuestionStore {
  questions: Question[];
  flowQuestions: Question[];
  subQuestions: Question[];
  answeredQuestions: Question[],
  questionFlow: [];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  answers: Record<number, Answer>;
  setAnswer: (index: number, answer: Answer) => void;
  insertQuestion: (index: number) => void;
  insertSubQuestion: (subQuestionIndex: number) => void;
  removeSubQuestion: (subQuestionIndex: number) => void;
  userDetails: UserDetails;
  setUserDetails: (details: UserDetails) => void;
  goBack: () => void;
  addAnsweredQuestion:(question: Question)=>void;
  removeLastAnsweredQuestion:()=> void;
  
}

const useQuestionStore = create<QuestionStore>((set) => ({
  flowQuestions: [mockQuestions[0]],
  questions: mockQuestions,
  subQuestions: mockSubQuestions,
  answeredQuestions: [],
  questionFlow: [],
  currentQuestionIndex: 0,
  insertQuestion: (index) =>
    set((state) => {
      const newFlowQuestions = [...state.flowQuestions, state.questions[index]];

      return {
        ...state, // Include all existing properties
        flowQuestions: newFlowQuestions,
        // questionFlow: [...state.questionFlow, currentQuestionIndex + 1],
      };
    }),
  setCurrentQuestionIndex: (index) =>
    set(() => ({ currentQuestionIndex: index })),
  answers: [],
  setAnswer: (mainIndex, answer) =>
    set((state) => {
      return {
        answers: {
          ...state.answers,
          [mainIndex]: answer, // Store the selected options
        },
      };
    }),
  insertSubQuestion: (subQuestionIndex) =>
    set((state) => {
      const subQuestion = state.subQuestions[subQuestionIndex];

      if (!subQuestion) {
        console.error(`Sub-question not found for index ${subQuestionIndex}`);
        console.log("Current subquestions:", state.subQuestions);
        return state; // Return the original state if sub-question is not found
      }

      const isSubQuestionAlreadyInserted =
        state.flowQuestions.includes(subQuestion);

      if (!isSubQuestionAlreadyInserted) {
        // Find the index of the next question in flowQuestions
        const nextQuestionIndex = state.flowQuestions.findIndex(
          (question) =>
            question.id === state.subQuestions[subQuestionIndex + 1]?.id
        );

        // If the next question is found, insert the sub-question before it
        const newFlowQuestions = [...state.flowQuestions];
        if (nextQuestionIndex !== -1) {
          newFlowQuestions.splice(nextQuestionIndex, 0, subQuestion);
        } else {
          newFlowQuestions.push(subQuestion);
        }

        console.log("New Flow Questions", newFlowQuestions);

        // If the next sub-question has isFollowUpQuestion flag true
        if (
          subQuestionIndex + 1 < state.subQuestions.length &&
          state.subQuestions[subQuestionIndex + 1].isFollowUpQuestion
        ) {
          const nextSubQuestion = state.subQuestions[subQuestionIndex + 1];
          newFlowQuestions.push(nextSubQuestion);
          console.log(
            "Inserting next sub-question with isFollowUpQuestion flag"
          );
        }

        return {
          ...state, // Include all existing properties
          flowQuestions: newFlowQuestions,
        };
      }

      return state; // Return the original state if sub-question is already inserted
    }),

  // Method to remove a sub-question from the flowQuestions array
  removeSubQuestion: (subQuestionIndex) =>
    set((state) => {
      const subQuestion = state.subQuestions[subQuestionIndex];

      if (!subQuestion) {
        console.error(`Sub-question not found for index ${subQuestionIndex}`);
        return state; // Return the original state if sub-question is not found
      }

      const newFlowQuestions = state.flowQuestions.filter(
        (question) => question !== subQuestion
      );

      // If the next sub-question has isFollowUpQuestion flag and there's a next sub-question
      if (
        subQuestionIndex + 1 < state.subQuestions.length &&
        state.subQuestions[subQuestionIndex + 1].isFollowUpQuestion
      ) {
        const nextSubQuestion = state.subQuestions[subQuestionIndex + 1];
        const nextSubQuestionIndex = newFlowQuestions.indexOf(nextSubQuestion);
        if (nextSubQuestionIndex !== -1) {
          newFlowQuestions.splice(nextSubQuestionIndex, 1);
          console.log(newFlowQuestions);
          console.log(
            `Removing next sub-question with isFollowUpQuestion flag`
          );
        }
      }

      return {
        ...state, // Include all existing properties
        flowQuestions: newFlowQuestions,
      };
    }),
  userDetails: { name: "", email: "" },
  setUserDetails: (details) => set({ userDetails: details }),
  goBack: () =>
    set((state) => {
      const newFlowQuestions = state.flowQuestions.slice(
        0,
        state.currentQuestionIndex
      );
      const newAnswers = { ...state.answers };
      const removedQuestionIndices = Object.keys(state.answers)
        .map(Number)
        .filter((index) => index >= state.currentQuestionIndex);

      for (const index of removedQuestionIndices) {
        delete newAnswers[index];
      }

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
        flowQuestions: newFlowQuestions,
        answers: newAnswers,
      };
    }),
    addAnsweredQuestion: (question: Question) =>
    set((state) => ({ answeredQuestions: [...state.answeredQuestions, question] })),
    removeLastAnsweredQuestion: () =>
    set((state) => ({ answeredQuestions: state.answeredQuestions.slice(0, -1) })),

   

}));




export default useQuestionStore;
