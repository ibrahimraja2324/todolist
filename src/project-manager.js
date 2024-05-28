export default class ProjectManager {
    constructor() {
        this.projects = []
    }

    addProject(title) {
        let newProject = {[title]: []}
        this.projects.push(newProject);
    }

    addTaskToProject(projectTitle, task) {
        const project = this.projects.find(project => Object.keys(project)[0] === projectTitle);
        if (project) {
            project[projectTitle].push(task)
        }
    }

    deleteProject(index) {
        this.projects.splice(index, 1)
    }

    deleteTaskFromProject(projectTitle, taskIndex) {
        const project = this.projects.find(project => Object.keys(project)[0] === projectTitle);
        if (project) {
            project[projectTitle].splice(taskIndex, 1);
        }
    }
}


