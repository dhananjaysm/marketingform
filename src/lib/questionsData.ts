// // export const questions: Question[] = [
// //   {
// //     id: 1,
// //     question: "What is the main goal of your marketing campaign?",
// //     options: [
// //       {
// //         label: "Increase Brand Awareness",
// //         subQuestionId: 2,
// //         
// //
// //       },
// //       {
// //         label: "Generate Leads",
// //         subQuestionId: 3,
// //         
// //         isDropdownInputRequired: true,
// //         descriptionOptions: ["Option1", "Option2"],
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   {
// //     id: 2,
// //     question: "How do you plan to increase brand awareness?",
// //     options: [
// //       {
// //         label: "Social Media",
// //         subQuestionId: 4,
// //         
// //
// //       },
// //       {
// //         label: "Content Marketing",
// //         subQuestionId: 5,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   {
// //     id: 3,
// //     question: "What type of leads are you looking for?",
// //     options: [
// //       {
// //         label: "B2B",
// //         subQuestionId: 6,
// //         
// //
// //       },
// //       {
// //         label: "B2C",
// //         subQuestionId: 7,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   {
// //     id: 4,
// //     question: "Which social media platforms do you want to focus on?",
// //     options: [
// //       {
// //         label: "Facebook",
// //         subQuestionId: 8,
// //         isDescriptionRequired: true,
// //
// //       },
// //       {
// //         label: "Instagram",
// //         subQuestionId: 9,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   {
// //     id: 5,
// //     question: "What type of content are you planning for content marketing?",
// //     options: [
// //       {
// //         label: "Blog Posts",
// //         subQuestionId: 10,
// //         
// //
// //       },
// //       {
// //         label: "Videos",
// //         subQuestionId: 11,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   {
// //     id: 6,
// //     question: "What industry is your B2B target audience in?",
// //     options: [
// //       {
// //         label: "Technology",
// //         subQuestionId: 12,
// //         
// //
// //       },
// //       {
// //         label: "Healthcare",
// //         subQuestionId: 13,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   {
// //     id: 7,
// //     question: "What age group is your B2C target audience in?",
// //     options: [
// //       {
// //         label: "18-24",
// //         subQuestionId: 14,
// //         
// //
// //       },
// //       {
// //         label: "25-34",
// //         subQuestionId: 15,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   {
// //     id: 8,
// //     question: "What is your target audience on Facebook interested in?",
// //     options: [
// //       {
// //         label: "Fashion",
// //         subQuestionId: 16,
// //         
// //
// //       },
// //       {
// //         label: "Travel",
// //         subQuestionId: 17,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   {
// //     id: 9,
// //     question: "What is your target audience on Instagram interested in?",
// //     options: [
// //       {
// //         label: "Food and Cooking",
// //         subQuestionId: 18,
// //         
// //
// //       },
// //       {
// //         label: "Fitness",
// //         subQuestionId: 19,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   {
// //     id: 10,
// //     question: "How frequently do you plan to publish blog posts?",
// //     options: [
// //       {
// //         label: "Weekly",
// //         subQuestionId: 20,
// //         
// //
// //       },
// //       {
// //         label: "Monthly",
// //         subQuestionId: 21,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: true,
// //   },
// //   {
// //     id: 11,
// //     question: "What type of videos are you planning?",
// //     options: [
// //       {
// //         label: "Tutorials",
// //         subQuestionId: 22,
// //         
// //
// //       },
// //       {
// //         label: "Product Demos",
// //         subQuestionId: 23,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   {
// //     id: 12,
// //     question:
// //       "What specific area of technology is your B2B target audience interested in?",
// //     options: [
// //       {
// //         label: "Software Development",
// //         subQuestionId: 24,
// //         
// //
// //       },
// //       {
// //         label: "Cybersecurity",
// //         subQuestionId: 25,
// //         
// //
// //       },
// //     ],
// //     isInputRequired: false,
// //   },
// //   // ... Continue adding more questions and options
// // ];

// import { Question } from "../context/store";

// export const realQuestionsData: Question[] = [
//   {
//     id: 1,
//     question: "Help me grow my business through digital",
//     hasMultipleAnswers: false,
//     options: [
//       {
        
//         label: "I have a D2C Brand",
        
//         subQuestionId: 1,
//       },
//       {
        
//         label: "I have a B2B Business",
        
//         subQuestionId: 2,
//       },
//       {
        
//         label: "I am a Not for Profit Business",
        
//         subQuestionId: 3,
//       },
//     ],
//     isInputRequired: false,
//   },
//   {
//     id: 2,
//     hasMultipleAnswers: false,

//     question:
//       "We usually see a D2C brand use the following to reach and engage with their potential customers through these channels. Which of these are you using?",
//     options: [
//       {
        
//         label: "Online Marketplaces",
        
//         subQuestionId: 4,
//       },
//       {
        
//         label: "Social Media",
        
//         subQuestionId: 5,
//       },
//       {
        
//         label: "Website",
        

//         subQuestionId: 6,
//       },
//       {
        
//         label: "Emailers",
        

//         subQuestionId: 7,
//       },
//       {
        
//         label: "Whatsapp",
        

//         subQuestionId: 8,
//       },
//       {
        
//         label: "Offline Store",
        

//         subQuestionId: 9,
//       },
//       {
        
//         label: "Partnerships",
        

//         subQuestionId: 10,
//       },
//     ],
//     isInputRequired: false,
//   },
//   {
//     id: 3,
//     //i have a b2b
//     hasMultipleAnswers: false,

//     question: "How do you plan to increase brand awareness?",
//     options: [
//       {
        
//         label: "Social Media",
//         subQuestionId: 4,
        
//       },
//       {
        
//         label: "Content Marketing",
//         subQuestionId: 5,
        
//       },
//     ],
//     isInputRequired: false,
//   },
//   {
//     id: 4,
//     hasMultipleAnswers: false,
//     // I am a not for profit
//     question: "How do you plan to increase brand awareness?",
//     options: [
//       {
        
//         label: "Social Media",
//         subQuestionId: 4,
        
//       },
//       {
        
//         label: "Content Marketing",
//         subQuestionId: 5,
        
//       },
//     ],
//     isInputRequired: false,
//   },
//   {
//     id: 5,
//     hasMultipleAnswers: true,
//     question: "Online Marketplaces. Nice, which ones?",
//     options: [
//       {
        
//         label: "Amazon",
//         subQuestionId: 5,
//         isDescriptionRequired: true,
//         descriptionType: "radio",
//         descriptionHeading:
//           "Great! Are you happy with it or concerned about them:",
//         descriptionOptions: [
//           "Being not optimized well for the platform",
//           "The commission rates are too high",
//           "Nah, I’m ok with it",
//         ],
//       },
//       {
        
//         label: "Ebay",
//         subQuestionId: 5,
//         isDescriptionRequired: true,
//         descriptionType: "radio",
//         descriptionHeading:
//           "Great! Are you happy with it or concerned about them:",
//         descriptionOptions: [
//           "Being not optimized well for the platform",
//           "The commission rates are too high",
//           "Nah, I’m ok with it",
//         ],
//       },
//       {
        
//         label: "Flipkart",
//         subQuestionId: 5,
//         isDescriptionRequired: true,
//         descriptionType: "radio",
//         descriptionHeading:
//           "Great! Are you happy with it or concerned about them:",
//         descriptionOptions: [
//           "Being not optimized well for the platform",
//           "The commission rates are too high",
//           "Nah, I’m ok with it",
//         ],
//       },
//       {
        
//         label: "Myntra",
//         subQuestionId: 5,
//         isDescriptionRequired: true,
//         descriptionType: "radio",
//         descriptionHeading:
//           "Great! Are you happy with it or concerned about them:",
//         descriptionOptions: [
//           "Being not optimized well for the platform",
//           "The commission rates are too high",
//           "Nah, I’m ok with it",
//         ],
//       },
//       {
        
//         label: "Etsy",
//         subQuestionId: 5,
//         isDescriptionRequired: true,
//         descriptionType: "radio",
//         descriptionHeading:
//           "Great! Are you happy with it or concerned about them:",
//         descriptionOptions: [
//           "Being not optimized well for the platform",
//           "The commission rates are too high",
//           "Nah, I’m ok with it",
//         ],
//       },
//     ],
//     isInputRequired: false,
//   },
//   {
//     //Social Media Option
//     id: 6,
//     question: "Social Media",
//     hasMultipleAnswers: false,

//     options: [
//       {
        
//         label: "Content creation on own profiles",
//         subQuestionId: 7,
//         isDescriptionRequired: true,
//         descriptionType: "text",
//         descriptionHeading:
//           "Great, how about you share your SM links so that we know you better?",
//       },
//       {
        
//         label: "Paid ads",
//         subQuestionId: 7,
//         isDescriptionRequired: true,
//         descriptionType: "radio",
//         descriptionHeading:
//           "Ok, so what is your ROAS or RoI on the ads? We can help you calculate that for you if you need, and give you our recommendations?",
//         descriptionOptions: [
//           "That would be great",
//           "No, I’ll live with it for now",
//         ],
//       },
//       {
        
//         label: "Influencer Collabs",
//         subQuestionId: 7,
//         isDescriptionRequired: true,
//         descriptionType: "radio",
//         descriptionHeading:
//           "Great, lets know your target audience better to suggest a plan forward",
//         descriptionOptions: [
//           "That would be great",
//           "No, I’ll live with it for now",
//         ],
//       },
//     ],
//     isInputRequired: false,
//   },
//   {
//     //Social Media Option
//     id: 7,
//     question: "Website",
//     hasMultipleAnswers: false,

//     options: [],
//     isInputRequired: true,
//     inputHeading: "Share your link and lets see how its doing for you.",
//   },
// ];
