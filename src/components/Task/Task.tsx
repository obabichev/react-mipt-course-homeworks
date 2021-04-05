import React from "react";
import {Normalized, TaskType} from "../../types/types";

interface TaskProps {
    taskId: string;
    tasks: Normalized<TaskType>;
}

export const Task = ({taskId, tasks}: TaskProps) => {

    const task = tasks[taskId];

    if (!task) {
        return null;
    }

    return <div>
        <div style={{display: "grid", textAlign: "left"}}>
            <div>{task.title}</div>
            <div style={{marginLeft: "20%"}}>
                {task.subtasks.map(subtaskId => (
                    <Task key={subtaskId} taskId={subtaskId} tasks={tasks}/>
                ))}
            </div>
        </div>
    </div>
}