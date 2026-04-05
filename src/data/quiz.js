const quiz = [

    {
        id: 1,
        question: "What field are you trying to get into?",
        key: "field",
        options: [
            { id: "a", label: "Tech & Computing", description: "Software, IT, Data, Cybersecurity" },
            { id: "b", label: "Art & Design", description: "Visual Arts, UI/UX, Illustrations, Media" },
            { id: "c", label: "Business & Finance", description: "Management, Accounting, Marketing" },
            { id: "d", label: "Health & Community", description: "Nursing, Social work, Wellness" },
        ]
    },
    {
        id: 2,
        question: "How do you learn best?",
        key: "learning",
        options: [
            { id: "a", label: "Hands-on & Project Work", description: "Labs, Clinicals, building real things" },
            { id: "b", label: "Deep Theory & Lectures", description: "Reading, Research, Seminars" },
            { id: "c", label: "Studio & Creative making", description: "Iterating, Experimenting, Expressing" },
            { id: "d", label: "Flexible & Self-directed", description: "Online, Hybrid, My own pace" },
        ]
    },
    {
        id: 3,
        question: "How much time can you realistically commit?",
        key: "commitment",
        options: [
            { id: "a", label: "Full-time", description: "Labs, Clinicals, building real things" },
            { id: "b", label: "Part-time evenings", description: "I'm working, need flexibility" },
            { id: "c", label: "Weekend only", description: "Family or work takes priority" },
            { id: "d", label: "Fully online / self-paced", description: "I need to study on my own schedule" },
        ]
    },
    {
        id: 4,
        question: "How quickly do you need to be job-ready?",
        key: "timeline",
        options: [
            { id: "a", label: "As soon as possible", description: "1-2 years, I need to move fast" },
            { id: "b", label: "3-4 year degree", description: "I'm willing to invest the full-time" },
            { id: "c", label: "Just a certification", description: "Short course, then back to work" },
            { id: "d", label: "Still exploring", description: "Not in rush, just figuring it out" },
        ]
    },
    {
        id: 5,
        question: "What's your biggest concern about going back?",
        key: "concern",
        options: [
            { id: "a", label: "Cost & Affordability", description: "Tuition and living expenses are a worry" },
            { id: "b", label: "Keeping up academically", description: "It's been a while since I was in school" },
            { id: "c", label: "Balancing life & school", description: "Family, job, or other commitments" },
            { id: "d", label: "Getting hired after", description: "Will employers actually value this?" },
        ]
    },
    {
        id: 6,
        question: "Where in BC are you based?",
        key: "location",
        options: [
            { id: "a", label: "Vancouver/Burnaby", description: "Core Metro Vancouver area" },
            { id: "b", label: "North Shore", description: "North Vancouver, West Vancouver" },
            { id: "c", label: "Surrey / Richmond / Delta", description: "South of the Fraser, Lower Mainland" },
            { id: "d", label: "Can relocate / online", description: "Location isn't a limiting factor" },
        ]
    }
]
  
export default quiz;