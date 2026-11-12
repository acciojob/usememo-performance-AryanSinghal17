
import React, { useState, useMemo } from "react";

function generateTasks() {
  const tasks = [];

  for (let i = 1; i <= 50; i++) {
    tasks.push({
      id: i,
      title: `Task ${i}`,
      completed: i <= 25
    });
  }

  return tasks;
}

function App() {
  const [tasks] = useState(generateTasks);
  const [activeTab, setActiveTab] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const filteredTasks = useMemo(() => {
    console.log("Filtering tasks...");

    const start = Date.now();

    while (Date.now() - start < 500) {
    }

    if (activeTab === "Active") {
      return tasks.filter((task) => !task.completed);
    }

    if (activeTab === "Completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, activeTab]);

  return (
    <div
      style={{
        background: darkMode ? "#222" : "#f4f4f4",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        padding: "30px",
        transition: "0.3s"
      }}
    >
      <h1>Todo App - useMemo Performance</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setActiveTab("All")}>
          All
        </button>

        <button onClick={() => setActiveTab("Active")}>
          Active
        </button>

        <button onClick={() => setActiveTab("Completed")}>
          Completed
        </button>
      </div>

      <h2>Showing: {activeTab}</h2>

      <h3>Total Tasks: {filteredTasks.length}</h3>

      <div>
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            style={{
              padding: "12px",
              margin: "10px 0",
              background: darkMode ? "#444" : "white",
              borderRadius: "5px"
            }}
          >
            <span>{task.title}</span>

            <span style={{ marginLeft: "15px" }}>
              {task.completed ? "Completed" : "Active"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
