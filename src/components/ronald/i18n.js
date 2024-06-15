import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React",
                    "Course": "Course",
                    "Date": "Date",
                    "Color": "Color",
                    "Content": "Content",
                    "Due date": "Due date",
                    "Add": "Add",
                    "Cancel": "Cancel",
                    "My notes": "My notes",

                    "You have ": "You have ",
                    " upcoming tasks.": " upcoming tasks.",
                    "Closed": "Closed",
                    "Active": "Active",

                    "Course name" : "Course name",
                    "Course credits" : "Course credits",
                    "Course grade (0-5)" : "Course grade (0-5)",
                    "Course to remove": "Course to remove",
                    "Remove": "Remove",
                    "Career GPA": "Career GPA",
                    "Career": "Career",
                    "Semester": "Semester",
                    "Credits": "Credits",
                    "Add course": "Add course",
                    "Remove course": "Remove course",
                    "Your GPA as of now is": "Your GPA as of now is",

                    "All tasks": "All tasks",
                    "New Task": "New Task",
                    "Title": "Title",
                    "Description: ": "Description: ",
                    "Date: ": "Date: ",
                    "Time: ": "Time: ",
                    "Tag: ": "Tag: ",
                    "State: ": "State: ",
                    "Submit": "Submit",
                    "New Task +": "New Task +",
                    "All": "All",
                    "Backlog": "Backlog",
                    "Hours": "Hours",

                    "Home": "Home",
                    "Reminders": "Reminders",
                    "Notes": "Notes",
                    "Grades": "Grades",
                }
            },
            es: {
                translation: {
                    "Welcome to React": "Bienvenido a React",
                    "Course": "Curso",
                    "Date": "Fecha",
                    "Color": "Color",
                    "Content": "Contenido",
                    "Due date": "Fecha de entrega",
                    "Add": "Añadir",
                    "Cancel": "Cancelar",
                    "My notes": "Mis notas",

                    "You have ": "Tienes ",
                    " upcoming tasks.": " tareas pendientes.",
                    "Closed": "Cerrado",
                    "Active": "Activo",

                    "Course name" : "Nombre del curso",
                    "Course credits" : "Créditos del curso",
                    "Course grade (0-5)" : "Nota del curso (0-5)",
                    "Course to remove": "Curso a eliminar",
                    "Remove": "Eliminar",
                    "Career GPA": "GPA de la carrera",
                    "Career": "Carrera",
                    "Semester": "Semestre",
                    "Credits": "Créditos",
                    "Add course": "Añadir curso",
                    "Remove course": "Eliminar curso",
                    "Your GPA as of now is": "Tu GPA actual es",
                    
                    "All tasks": "Todas las tareas",
                    "New Task": "Nueva tarea",
                    "Title": "Título",
                    "Description: ": "Descripción: ",
                    "Date: ": "Fecha: ",
                    "Time: ": "Hora: ",
                    "Tag: ": "Etiqueta: ",
                    "State: ": "Estado: ",
                    "Submit": "Enviar",
                    "New Task +": "Nueva tarea +",
                    "All": "Todas",
                    "Backlog": "Pendientes",
                    "Hours": "Horas",

                    "Home": "Inicio",
                    "Reminders": "Recordatorios",
                    "Notes": "Notas",
                    "Grades": "Carrera",
                }
            }
        },
        lng: navigator.language, // if you want to use language detected from the browser
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;