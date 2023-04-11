interface Task {
    name: string
    description: string
    priority: number
    tags: Array<string>
    dueDate: Date
    assignedTo: {
        name: string
        email: string
    }
    complete: boolean
    comments: Array<string>
    logTaskInfo: Function
}

const task: Task = {
    name: 'Complete project',
    description: 'Finish the project before the deadline',
    priority: 1,
    tags: ['important', 'urgent'],
    dueDate: new Date('2023-04-30'),
    assignedTo: {
        name: 'John Doe',
        email: 'johndoe@example.com'
    },
    complete: false,
    comments: ['Great work so far!'],
    logTaskInfo() {
        console.log(`Task: ${this.name}\nDescription: ${this.description}\nPriority: ${this.priority}\nTags: ${this.tags}\nDue date: ${this.dueDate}\nAssigned to: ${this.assignedTo.name} (${this.assignedTo.email})\nComplete: ${this.complete}`);
    }
};

task.logTaskInfo();