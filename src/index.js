import ProjectManager from "./project-manager";
import UserInterface from "./user-interface";


const projectManager = new ProjectManager();


document.getElementById('projectAdd').addEventListener('click', () => {
    UserInterface.showProjectForm();
    
});

document.getElementById('cont').addEventListener('submit', (event) => {
    if (event.target.id === 'formCreation') {
        event.preventDefault();
        const title = event.target.title.value;
        projectManager.addProject(title);
        UserInterface.createProjectCard(title);
        UserInterface.hideProjectForm();
    }
});

document.addEventListener('click', (event) => {
    let target = event.target;
    let divcard = target.closest('.divcard');
    if (divcard) {
        console.log("Clicked on project card:", divcard.id);
        console.log(divcard)
        UserInterface.hideOtherProjectCards(divcard);
        UserInterface.renderTasksFromArray(divcard.id);
        UserInterface.unhideTasks();

        UserInterface.unhideForm(divcard);

        const projectAdd = document.getElementById('projectAdd');
        projectAdd.style.display = 'none';

        
        if (!divcard.querySelector('.buttonTask')) {
            let buttonTask = document.createElement('button');
            buttonTask.classList.add('buttonTask');
            buttonTask.innerHTML = "Add Task";
            divcard.appendChild(buttonTask);
            console.log("Task button added for project:", divcard.id);
        }
        else {
            console.log("Task button already exists for project:", divcard.id);
        }
    }
});
document.addEventListener('click', (event) => {
    let buttonTask = event.target.closest('.buttonTask');
    let divcard = event.target.closest('.divcard');
    let bigCont = document.getElementById('bigCont')
    if (buttonTask && divcard) {
        console.log("Clicked on task button for project:", divcard.id);
        UserInterface.showTaskForm(divcard);
        const form = bigCont.querySelector('#formCreationSec');
        if (form) {
            form.removeEventListener('submit', handleTaskFormSubmit);
            form.addEventListener('submit', handleTaskFormSubmit);
        }
    }
});

function handleTaskFormSubmit(event) {
    if (event.target.id === 'formCreationSec') {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const date = event.target.date.value;
        const priority = event.target.priority.value;
        const task = { title, description, date, priority };

        const divcard = event.target.closest('.divcard');
        projectManager.addTaskToProject(divcard.id, task);
        UserInterface.createTaskCard(task);
        UserInterface.hideTaskForm(divcard);
    


        
    }
}

document.addEventListener('click', (event) => {
    if (event.target.id === 'delButton') {
        const divcardsec = event.target.closest('.divcardsec');
        const divcard = divcardsec.previousElementSibling;
        const projectTitle = divcard.id;
        console.log(projectTitle)
        const taskIndex = Array.from(divcard.querySelectorAll('.divcardsec')).indexOf(divcardsec);
        projectManager.deleteTaskFromProject(projectTitle, taskIndex);
        divcardsec.remove();
    }
});

document.addEventListener('click', (event) => {
    if (event.target.id === 'backButton') {
        UserInterface.hideProjectForm();
    }
})

document.addEventListener('click', (event) => {
    if (event.target.id === 'backButtonSec') {
        const divcard = event.target.closest('.divcard');
        UserInterface.hideTaskForm(divcard);
    }
})

document.addEventListener('click', (event) => {
    if (event.target.id === 'backButtonThir') {
        UserInterface.showProjectAdd();
        UserInterface.showAllProjectCards();
        UserInterface.unhideForm(divcard);
        
    }
})
