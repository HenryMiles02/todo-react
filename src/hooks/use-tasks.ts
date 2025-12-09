import useLocalStorage from "use-local-storage";
import { TASK_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import React from "react";

export default function useTasks () {
    const [tasksData] = useLocalStorage<Task[]>(TASK_KEY, [])
    const [tasks, setTasks] = React.useState<Task[]>([])
    const [isLoadingTasks, setIsLoadingTasks] = React.useState(true)

    async function fetchTasks() {
        console.time("Carregando tarefas...")
        if (isLoadingTasks) {
            await delay(2000);
            setIsLoadingTasks(false)
        }

        setTasks(tasksData)
        console.timeEnd("Carregando tarefas...")
    }

    React.useEffect(() => {
        fetchTasks()
    }, [tasksData]);

    return {
        tasks,
        tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length,
        isLoadingTasks,
    }
}