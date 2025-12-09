import useLocalStorage from "use-local-storage";
import { TASK_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import React from "react";


export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEY, [])
    const [isUpdationTask, setIsUpdationTask] =React.useState(false);
    const [isDeletingTask, setIsDeletingTask] =React.useState(false);

    function prepareTask() {
        setTasks([...tasks, { 
                id: Math.random().toString(36).substring(2, 9), 
                title:"", 
                state: TaskState.Creating
            },
        ])
    }

    async function updateTask (
        id: string,
        payload: { title: Task["title"] }) {
        setIsUpdationTask(true)

        await delay(1000);
        setTasks(
            tasks.map((task) => task.id === id ? {
                ...task, state: TaskState.Created, ...payload 
            } : task)
        )

        setIsUpdationTask(false)

    }

    function updateTaskStatus (
        id: string,
        concluded: boolean,
    ) {
        setTasks(
            tasks.map((task) => task.id === id ? {...task, concluded} : task)
        )
    }

    async function deleteTask (id: string) {
        setIsDeletingTask(true) 

        await delay(1000)

        setTasks(tasks.filter((task) => task.id !== id))

        setIsDeletingTask(false)

    }

    return {
        prepareTask,
        updateTask,
        updateTaskStatus,
        deleteTask,
        isUpdationTask,
        isDeletingTask,
    }
}