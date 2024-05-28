import {format} from 'date-fns';
import ProjectManager from "./project-manager";
export default class UserInterface {


    static showProjectForm() {
        let projectAdd = document.getElementById('projectAdd')
        projectAdd.style.display = 'none'

        let form = document.createElement('form');
        form.setAttribute('id', 'formCreation')
        form.setAttribute('name', 'formCreation')

        const divCont = document.createElement('div')
        const titleLabel = document.createElement('label')
        titleLabel.textContent = "Title: "
        const titleInput = document.createElement('input')
        titleInput.setAttribute('type', 'text')
        titleInput.setAttribute('name', 'title')

        const backButton = document.createElement('button');
        backButton.setAttribute('type', 'button');
        backButton.setAttribute('id', 'backButton')
        backButton.textContent = "Back";

        form.appendChild(backButton)
        divCont.appendChild(titleLabel)
        divCont.appendChild(titleInput)
        form.appendChild(divCont)

        const cont = document.getElementById('cont')
        cont.appendChild(form)
    }

    static hideProjectForm() {
        const form = document.getElementById('formCreation');
        if (form) {
            form.remove();
        }
        document.getElementById('projectAdd').style.display = 'block';
    }

    static createProjectCard(title) {
        let bigCont = document.getElementById('bigCont')
        let divcard = document.createElement('div')
        divcard.classList.add('divcard')
        divcard.id = title
        let parag = document.createElement('p')
        parag.textContent = title;
        
        divcard.appendChild(parag)
        bigCont.appendChild(divcard)
    }

    static showTaskForm(divcard) {
        let buttonTask = divcard.querySelector('.buttonTask');
        if (buttonTask) {
            buttonTask.style.display = 'none';
        }

        let form = document.createElement('form');
        form.setAttribute('id', 'formCreationSec');
        form.setAttribute('name', 'formCreationSec');

        const titleLabel = document.createElement('label');
        titleLabel.textContent = "Title: ";
        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('name', 'title');

        const descLabel = document.createElement('label');
        descLabel.textContent = "Description: ";
        const descInput = document.createElement('input');
        descInput.setAttribute('type', 'text');
        descInput.setAttribute('name', 'description');

        const dateLabel = document.createElement('label');
        dateLabel.textContent = "Date: ";
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('name', 'date');

        const priorityLabel = document.createElement('label')
        priorityLabel.textContent = 'Priority: '
        const prioritySelect = document.createElement('select')
        prioritySelect.setAttribute('name', 'priority');
        const optionLow = document.createElement('option');
        optionLow.textContent = 'Low'
        const optionMedium = document.createElement('option');
        optionMedium.textContent = 'Medium'
        const optionHigh = document.createElement('option');
        optionHigh.textContent = 'High'
        prioritySelect.appendChild(optionLow)
        prioritySelect.appendChild(optionMedium)
        prioritySelect.appendChild(optionHigh)

        const backButtonSec = document.createElement('button');
        backButtonSec.setAttribute('type', 'button');
        backButtonSec.setAttribute('id', 'backButtonSec')
        backButtonSec.textContent = "Back";

        const submitButton = document.createElement('input');
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('value', 'Submit');

        form.appendChild(backButtonSec);
        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        form.appendChild(descLabel);
        form.appendChild(descInput);
        form.appendChild(dateLabel);
        form.appendChild(dateInput);
        form.appendChild(priorityLabel);
        form.appendChild(prioritySelect);
        form.appendChild(submitButton);

        divcard.appendChild(form);
    }

    static hideTaskForm(divcard) {
        const form = divcard.querySelector('#formCreationSec');
        if (form) {
            form.remove();
        }
        const buttonTask = divcard.querySelector('.buttonTask');
        if (buttonTask) {
            buttonTask.style.display = 'block';
        }
    }


    static createTaskCard(task) {
        let bigCont = document.getElementById('bigCont');

        let divcardsec = document.createElement('div');
        divcardsec.classList.add('divcardsec');
        


        let paragsec = document.createElement('p');
        paragsec.textContent = "Title: " + task.title;

        let paragdescsec = document.createElement('p');
        paragdescsec.textContent = "Description: " + task.description;

        let paragDateSec = document.createElement('p')
        const formatedDate = format(new Date(task.date), 'dd MMMM yyyy')
        paragDateSec.textContent = "Date: " + formatedDate;

        let paragPrioirtySec = document.createElement('p')
        paragPrioirtySec.textContent = "Priority: " + task.priority;

        const delButton = document.createElement('button')
        delButton.setAttribute('id', 'delButton')
        delButton.innerHTML = "Delete"


        divcardsec.appendChild(paragsec);
        divcardsec.appendChild(paragdescsec);
        divcardsec.appendChild(paragDateSec);
        divcardsec.appendChild(paragPrioirtySec);
        divcardsec.appendChild(delButton);
        bigCont.appendChild(divcardsec);
    }

    static hideOtherProjectCards(exceptDivCard) {
        let alldivcard = document.querySelectorAll('.divcard');
        let bigCont = document.getElementById('bigCont');

        let backButtonThir = document.getElementById('backButtonThir')

        if (!backButtonThir) {
            backButtonThir = document.createElement('button');
            backButtonThir.setAttribute('type', 'button');
            backButtonThir.setAttribute('id', 'backButtonThir')
            backButtonThir.textContent = "Back Page";
            backButtonThir.style.display = 'block'
        }
        
        alldivcard.forEach(card => {
            if (card !== exceptDivCard) {
                card.style.display = 'none';

            }
        })
 
        if (bigCont.firstChild) {
            bigCont.insertBefore(backButtonThir, bigCont.firstChild);
        } else {
            bigCont.appendChild(backButtonThir);
        }
        
    }


    static showProjectAdd() {
        const projectAdd = document.getElementById('projectAdd');
        const backButtonThir = document.getElementById('backButtonThir');
        const buttonTasks = document.querySelectorAll('.buttonTask');
        const divcardsecs = document.querySelectorAll('.divcardsec');
        const formCreationSecs = document.querySelectorAll('#formCreationSec')
        const divcards = document.querySelectorAll('.divcard')

        
        projectAdd.style.display = 'block'
        backButtonThir.style.display = 'none';
        
        formCreationSecs.forEach(formCreationSec => {
            formCreationSec.style.display = 'none';
        });

        buttonTasks.forEach(buttonTask => {
            buttonTask.style.display = 'none';
        });

        divcardsecs.forEach(divcardsec => {
            divcardsec.style.display = 'none';
        });

        divcards.forEach(divcard => {
            divcard.style.display = 'none';
        });
        
    
    }

    static unhideTasks() {
        const projectAdd = document.getElementById('projectAdd');
        const backButtonThir = document.getElementById('backButtonThir');
        const buttonTasks = document.querySelectorAll('.buttonTask');

        projectAdd.style.display = 'block'
        backButtonThir.style.display = 'block';

        buttonTasks.forEach(buttonTask => {
            buttonTask.style.display = 'block'; 
        });
        
    }

    static unhideForm(divcard) {
        const formCreationSecs = document.querySelectorAll('#formCreationSec')
        const divcardsecs = document.querySelectorAll('.divcardsec');
        
        
        console.log(divcardsecs)
        if (divcard) {
            divcardsecs.forEach(divcardsec => {
                    divcardsec.style.display = 'block';
            });
        }

    }

    static showAllProjectCards() {
        const divcards = document.querySelectorAll('.divcard');
        divcards.forEach(divcard => {
            divcard.style.display = 'block';
        });
    }

}