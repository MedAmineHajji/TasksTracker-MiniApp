# TasksTracker-MiniApp
A fullstack mini-project using **NestJS** and **React.js**, ideal for practicing CRUD operations, Git workflows, and fullstack integration using MongoDB.

## 🔧 Concept

Build a basic task tracker where users can:

- Add a task
- View all tasks
- Mark a task as done (via status updates)

---

## 🚀 Feature Scope

### 🔹 Frontend (React.js)
- A form to **add a task** via a Modal (popup)
- A **task list** display
- Each task has:
  - `Title`
  - `Description`
  - `Status` (Enum: `To Do`, `Doing`, `Done`)

  ### 🔹 Backend (NestJS + MongoDB + Mongoose)
- REST API endpoints:
  - `GET /tasks` – list all tasks
  - `POST /tasks` – create a new task
  - `PATCH /tasks/:id/status` – update task status
- Store data using **MongoDB** via **Mongoose ODM**
- Each task includes a `createdAt: Date` field

---

## 📁 Suggested Folder Structure
<pre lang="md">project-root/
│
├── server/ # NestJS backend
├── client/ # React frontend
└── README.md</pre>

---

## 🌱 Git Instructions

1. **Init** git in an empty folder
2. **Add remote repository**
3. **Clone** the empty GitHub repository.
4. **Create a new branch** from `main` called `dev`:
   ```bash
   git checkout -b dev
5. **Commit regularly** with clear messages:
    - feat(backend): implement basic task endpoints
    - feat(frontend): create task list component
6. **Push** the dev branch to remote
7. **Open a Pull Request** from **dev** into **main** on GitHub.