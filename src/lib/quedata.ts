
export type Choice = {
    choice_text: string;
    next_question_id: number;
    input_required: boolean;
  };
  
 export  type Question = {
    question_id:number;
    question: string;
    type: 'choice' | 'text';
    choices?: Choice[];
  };
  
  export type UserResponse = {
    question_id: number;
    choice_id?: number; // For 'choice' type questions with input_required
    user_input?: string; // For 'text' type questions and input_required choices
  };
  const questions: Question[] = [
    {
      question_id: 1,
      question: "Welcome to our Marketing Agency! How can we assist you today?",
      type: 'choice',
      choices: [
        {
          choice_text: "I'm interested in social media marketing.",
          next_question_id: 2,
          input_required: false,
        },
        {
          choice_text: "I need help with SEO strategies.",
          next_question_id: 3,
          input_required: false,
        },
        {
          choice_text: "I want to discuss a comprehensive marketing campaign.",
          next_question_id: 4,
          input_required: false,
        },
      ],
    },
    {
      question_id: 2,
      question: "What is your business's target audience?",
      type: 'text',
    },
    {
      question_id: 3,
      question: "Great choice! Which social media platforms are you targeting?",
      type: 'choice',
      choices: [
        {
          choice_text: "Facebook and Instagram",
          next_question_id: 5,
          input_required: false,
        },
        {
          choice_text: "Twitter and LinkedIn",
          next_question_id: 6,
          input_required: false,
        },
      ],
    },
    {
      question_id: 4,
      question: "SEO is crucial. Do you have an existing website?",
      type: 'choice',
      choices: [
        {
          choice_text: "Yes, I have a website.",
          next_question_id: 7,
          input_required: false,
        },
        {
          choice_text: "No, I don't have a website.",
          next_question_id: 8,
          input_required: false,
        },
      ],
    },
    {
      question_id: 5,
      question: "Tell us more about your target audience on Facebook and Instagram.",
      type: 'text',
    },
    {
      question_id: 6,
      question: "What are your goals on Twitter and LinkedIn?",
      type: 'text',
    },
    {
      question_id: 7,
      question: "Exciting! Could you tell us more about your marketing goals?",
      type: 'choice',
      choices: [
        {
          choice_text: "Increase brand awareness",
          next_question_id: 9,
          input_required: false,
        },
        {
          choice_text: "Drive more leads and conversions",
          next_question_id: 10,
          input_required: false,
        },
        {
          choice_text: "Launch a new product or service",
          next_question_id: 11,
          input_required: false,
        },
      ],
    },
    {
      question_id: 8,
      question: "Sure thing! What are you looking to achieve without a website?",
      type: 'text',
    },
    {
      question_id: 9,
      question: "How do you plan to increase brand awareness?",
      type: 'text',
    },
    {
      question_id: 10,
      question: "Tell us more about your target audience for lead generation.",
      type: 'text',
    },
    {
      question_id: 11,
      question: "Exciting! What's your new product or service all about?",
      type: 'text',
    },
    // Add more questions...
  ];
  
  export default questions;