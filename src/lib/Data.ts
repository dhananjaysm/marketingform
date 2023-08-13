/**
 * id: Question ID
 * question: Question description
 * type: Type of question (radio button, checkbox, text field, etc)
 * options: Options for checkbox and radio button, in case of text field it is undefined.
 * next: Next question to be asked
 */

const json = [
    {
        id: 0,
        question: "What is profession?",
        type: "radio",
        options: [
            { text: "Software Engineer", value: "Software Engineer", next: 1 },
            { text: "Electronics Engineer", value: "Electronics Engineer", next: 2 },
            { text: "Mechanical Engineer", value: "Mechanical Engineer", next: 3 },
        ],
    },
    {
        id: 1,
        question: "Your expertise in?",
        type: "checkbox",
        next: 4,
        options: [
            { text: "Web Developement", value: "Web Developement" },
            { text: "Android Developement", value: "Android Developement" },
            { text: "Devops Engineer", value: "Devops Engineer" },
            { text: "Data Analyst", value: "Data Analyst" },
        ],
    },
    {
        id: 2,
        question: "Your expertise in?",
        type: "checkbox",
        next: 4,
        options: [
            { text: "IC Design", value: "IC Design" },
            { text: "Communication", value: "Communication" },
            { text: "Satellite", value: "Satellite" },
            { text: "IOT Engineer", value: "IOT Engineer" },
        ],
    },
    {
        id: 3,
        question: "Your expertise in?",
        type: "checkbox",
        next: 4,
        options: [
            { text: "Electric Vehicle", value: "Electric Vehicle" },
            { text: "Motors", value: "Motors" },
            { text: "Design", value: "Design" },
            { text: "Aeropace", value: "Aeropace" },
        ],
    },
    {
        id: 4,
        question: "Do you work at Appture?",
        type: "radio",
        options: [
            { text: "Yes", value: "Yes", next: 5 },
            { text: "No, I work at somewhere else", value: "No", next: 6 },
        ],
    },
    {
        id: 5,
        question: "Hurrayyyy! You work at Appture. Please share you work experiance",
        isLast: true,
        type: "text",
    },
    {
        id: 6,
        question: "Write your company name and work experience.",
        isLast: true,
        type: "text",
    },
    {
        id: 7,
        question: null,
        submit: true,
    },
];

export default json;
