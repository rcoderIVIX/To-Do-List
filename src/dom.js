import { project, todo,} from "./logic";


export function create(){

let pInput = document.querySelector('#p-input')

let wrapper = document.querySelector('.todo')

let tasksWindow = document.querySelector(".tasks")

let makeProject = document.createElement("button")
makeProject.classList.add("btn")
makeProject.textContent = "Make Project"

wrapper.appendChild(makeProject)

makeProject.addEventListener("click",()=>{
    
    
    let projectTitle = document.createElement("input")
    projectTitle.type = "text"
    projectTitle.id = "project-title"
    projectTitle.placeholder = "Project Title..."



    
    wrapper.appendChild(projectTitle)

    let addButton = document.createElement("button")
    addButton.textContent = "Add Project to List"
    addButton.classList.add("btn2")

    wrapper.appendChild(addButton)

    let deleteAll = document.createElement("button")
    deleteAll.textContent = "Delete All Entries?"
    deleteAll.classList.add("btn3")
    wrapper.appendChild(deleteAll)

    deleteAll.addEventListener("click", ()=>{
        while (tasksWindow.firstChild) {
            tasksWindow.removeChild(tasksWindow.firstChild);
          }
    })

    addButton.addEventListener("click", ()=>{
        let newnewProject = new project (projectTitle.value)

        let inReserve = document.createElement("div")
        inReserve.textContent = newnewProject.name;
        inReserve.classList.add("project")

        tasksWindow.appendChild(inReserve)

        inReserve.addEventListener("click", ()=>{
            inReserve.remove()

            let taskTitle = document.createElement("input")
            taskTitle.placeholder = "Task Title..."

            let taskDescription = document.createElement("input")
            taskDescription.placeholder = "Task Description..."

            let taskPriority = document.createElement("input")
            taskPriority.placeholder = "Task Priority..."

            let addTask = document.createElement("button")
            addTask.classList.add("btn4")
            addTask.textContent = "Add Task to Project"

            tasksWindow.appendChild(taskTitle)
            tasksWindow.appendChild(taskDescription)
            tasksWindow.appendChild(taskPriority)
            tasksWindow.appendChild(addTask)

            addTask.addEventListener("click", ()=>{
                let newTask = new todo(taskTitle.value,taskDescription.value,taskPriority.value);
                
                while (tasksWindow.firstChild) {
                    tasksWindow.removeChild(tasksWindow.firstChild);
                  }

                  tasksWindow.appendChild(inReserve)

                  let newDiv = document.createElement("div")
                  newDiv.classList.add("new-div")
                  inReserve.appendChild(newDiv)


                  let title = document.createElement("div")
                  let desc = document.createElement("div")
                  let prio = document.createElement("div")

                  title.textContent = "Task Title:   " + newTask.title;
                  desc.textContent = "Task Description:   " + newTask.description;
                  prio.textContent = "Task Priority:   " + newTask.priority;

                newDiv.appendChild(title)
                newDiv.appendChild(desc)
                newDiv.appendChild(prio)


                

            })
        })
        


    });

    
   
})


let makeTask = document.createElement("button")
makeTask.classList.add("btn2")
makeTask.textContent = "Make Task"
wrapper.appendChild(makeTask_)

}


