const IconHome = require("./icons/home.svg").ReactComponent;
const IconReminders = require("./icons/reminders.svg").ReactComponent;
const IconNotes = require("./icons/notes.svg").ReactComponent;
const IconGrades = require("./icons/grades.svg").ReactComponent;

const Buttons = [
    {
        name: "Home",
        link: "/",
        icon: IconHome
    },
    {
        name: "Reminders",
        link: "/reminders",
        icon: IconReminders
    },
    {
        name: "Notes",
        link: "/notes",
        icon: IconNotes
    },
    {
        name: "Grades",
        link: "/grades",
        icon: IconGrades
    }
]

export default Buttons;