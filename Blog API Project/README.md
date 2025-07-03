# Blog REST API with Frontend Rendering

This project demonstrates a basic blog system using **Node.js** and **Express.js**, with separate **backend API** and **frontend rendering servers**. It covers all core **CRUD operations** using a RESTful architecture.

---

## Overview

- The **Backend API Server** (`localhost:4000`) handles all data operations for blog posts.
- The **Frontend Server** (`localhost:3000`) fetches data from the backend and renders pages using **EJS templates**.
- This project showcases the separation of concerns between data handling (API) and UI rendering.

---

## Key Features

✅ REST API  
✅ Full CRUD (Create, Read, Update, Delete) functionality  
✅ EJS-based frontend with clean layout  
✅ Axios for internal server-to-server communication  
✅ In-memory post storage for quick prototyping  

---

##  Preview

### Home Page
![Blog Home Page](https://github.com/user-attachments/assets/2e7a1e94-1a6c-48d1-be3f-657dad310e0f)

### New Post Form
![To post new articles](https://github.com/user-attachments/assets/cadbbc0a-aecc-43eb-a06b-e07f32a648fd)

### Edit Post
![To edit the existing Blogs](https://github.com/user-attachments/assets/ebded3ab-8d16-41a2-9240-c048a5c46ab3)


---

##  How to Run

1. **Install dependencies** in both frontend and backend folders (or root, if combined):
   ```bash
   npm install

2. **Start the Frontend Server (port 3000)**:
   ```bash
    node server.js

3. Start the API Server (port 4000):
   ```bash
   node index.js

Visit: http://localhost:3000

