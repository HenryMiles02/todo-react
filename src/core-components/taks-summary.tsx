import Bagde from "../components/bagde"
import Text from "../components/text"
import useTasks from "../hooks/use-tasks"

export default function TasksSummary() {

    const { tasksCount, concludedTasksCount, isLoadingTasks } = useTasks()
    
    return <>
        <div className="flex items-center gap-2">
            <Text variant="body-sm-bold" className="text-gray-300">Tarefas criadas</Text>
            <Bagde variant="secondary" loading={ isLoadingTasks }>{ tasksCount }</Bagde>
        </div>
        <div className="flex items-center gap-2">
            <Text variant="body-sm-bold" className="text-gray-300">Concluídas</Text>
            <Bagde variant="primary" loading={ isLoadingTasks }>{ concludedTasksCount } de { tasksCount }</Bagde>
        </div>
    </>
}