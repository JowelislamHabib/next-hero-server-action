import { AddTasks } from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import React from "react";

const TaskPage = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <h2 className="py-4">Tasks: {tasks.length}</h2>
      <AddTasks createATask={createATask} />
      <div className="grid grid-cols-3 gap-4 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
<h2>Tasks: 0</h2>;
