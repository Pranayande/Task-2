Perfect 👍 Since you’ve already completed **Task 3 (React + TypeScript + Ant Design frontend)** for your Kaiburr assignment and have **screenshots for Home and Execute pages**, here’s a complete, polished **`README.md`** file you can directly paste into your GitHub repository.

It’s designed to look professional and clean — includes your tech stack, features, API connection info, and screenshot placeholders.

---

```markdown
# 🌐 Kaiburr Task UI – React 19 + TypeScript + Ant Design

This project is the **frontend (Task 3)** of the Kaiburr assignment, built using **React 19**, **TypeScript**, and **Ant Design**.  
It connects to the **Java Spring Boot + MongoDB backend** created in Task 1 to provide a modern, user-friendly interface for managing and executing tasks.

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ **React 19** | UI Framework |
| 🧠 **TypeScript** | Type-safe JavaScript |
| 🎨 **Ant Design** | UI Components and Styling |
| 🌍 **Axios / Fetch API** | HTTP client for backend communication |
| ⚙️ **Vite** | Fast React development build tool |
| 💾 **Java Spring Boot + MongoDB** | Backend (from Task 1) |

---

## ⚙️ Features

✅ **Create Task** – Add a new task with name, owner, and shell command.  
🔍 **View All Tasks** – Display all existing tasks from the database.  
🔎 **Search Task** – Search tasks dynamically by name.  
🗑️ **Delete Task** – Remove a task by ID.  
⚡ **Run Command** – Execute a task’s shell command and capture the output.  
📜 **View Command Output** – Display real-time or stored execution output in the UI.  
💡 **Responsive Design** – Works on desktop and mobile.  
🧏‍♀️ **Accessible UI** – Keyboard-friendly and accessible components.  

---

## 🏗️ Project Structure

```

src/
├─ components/
│   ├─ TaskForm.tsx          # Form for creating/updating tasks
│   ├─ TaskTable.tsx         # Displays tasks in a table
│   ├─ ExecuteModal.tsx      # Shows command execution output
│
├─ pages/
│   ├─ Home.tsx              # Home dashboard with list of tasks
│   ├─ Execute.tsx           # Execute task and view output
│
├─ services/
│   └─ api.ts                # Axios instance and API methods
│
├─ App.tsx                   # Main layout and routing
├─ main.tsx                  # React entry point
└─ index.css                 # Global styles

````

---

## 🌐 Backend Connection

This frontend connects to your **Kaiburr Task API (Task 1)** running on port `8080`.  
You can update the backend URL in `src/services/api.ts`:

```typescript
const API_BASE_URL = "http://localhost:8080/api/tasks";
````

---

## 🧭 Available Pages

### 🏠 Home Page

Displays all existing tasks and allows creation, deletion, and searching.

📸 **Screenshot:**
![Home Page](https://github.com/Pranayande/Task-2/blob/main/Home%201.png)

---

### ⚡ Execute Page

Allows the user to execute a selected task, view its command output, and track execution time.

📸 **Screenshot:**
![Execute Page](https://github.com/Pranayande/Task-2/blob/main/Execute%201.png)

---

## 🧪 API Endpoints Used

| Method | Endpoint                   | Purpose                 |
| ------ | -------------------------- | ----------------------- |
| GET    | `/api/tasks`               | Get all tasks           |
| GET    | `/api/tasks/{id}`          | Get task by ID          |
| GET    | `/api/tasks/search/{name}` | Search task by name     |
| PUT    | `/api/tasks`               | Create or update a task |
| DELETE | `/api/tasks/{id}`          | Delete task             |
| PUT    | `/api/tasks/{id}/run`      | Execute shell command   |

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/kaiburr-task-ui.git
cd kaiburr-task-ui
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Backend URL

In `src/services/api.ts`, make sure the base URL points to your Java backend:

```typescript
const API_BASE_URL = "http://localhost:8080/api/tasks";
```

### 4️⃣ Start the Application

```bash
npm run dev
```

> The app will run at **[http://localhost:5173](http://localhost:5173)**

---

## 💅 UI Components

| Component                                 | Description                     |
| ----------------------------------------- | ------------------------------- |
| **Form (Ant Design Form, Input, Button)** | Used to create new tasks        |
| **Table (Ant Design Table)**              | Displays task list with actions |
| **Modal (Ant Design Modal)**              | Displays command output         |
| **Message / Notification**                | Used for alerts and feedback    |

---

## 🧠 Usability and Accessibility Highlights

* Consistent color palette with high contrast
* Keyboard navigation supported in forms and modals
* ARIA labels used for interactive elements
* Clear feedback for success/error states

---

## 🖼️ Screenshot Gallery

| Page      | Screenshot                               |
| --------- | ---------------------------------------- |
| 🏠 Home   | ![Home Page](screenshots/home.png)       |
| ⚡ Execute | ![Execute Page](screenshots/execute.png) |

> Screenshots captured from live UI demonstrating functionality and clean layout.

---

## 👨‍💻 Author

**Purna Chandu**
Kaiburr Assignment – React Frontend (Task 3)
📅 October 2025

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

### 💬 Repository Description (for GitHub)

> React 19 + TypeScript + Ant Design frontend for Kaiburr Task API.
> Supports CRUD, search, command execution, and output visualization with a clean UI.

```

---

✅ **What to do next:**
1. Create a `screenshots/` folder in your React project.
2. Add:
   - `home.png`
   - `execute.png`
3. Paste this text into your `README.md`.
4. Commit and push to GitHub.

Would you like me to include **setup instructions for connecting this UI with your backend repo (Task 1)** — so both run together locally with CORS handled?
```
