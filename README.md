\# AI Task Manager Platform



\## Overview



AI Task Manager Platform is a full-stack productivity application designed to help users efficiently create, manage, and track their daily tasks.



The application provides secure authentication, user-specific task management, CRUD operations, task status tracking, and a responsive dashboard interface.



This project was developed using Angular, Node.js, Express.js, and MongoDB with a focus on clean architecture, maintainable code, and real-world software development practices.



\---



\# Project Highlights



\- Secure user authentication using JWT

\- Complete task management system

\- User-specific data handling

\- Responsive dashboard interface

\- REST API based backend architecture

\- MongoDB database integration

\- AI-assisted development workflow



\---



\# Features



\## Authentication and Security



The application includes:



\- User registration and login

\- JWT-based authentication

\- Protected API routes

\- Secure user-specific task access

\- Middleware-based authorization



\---



\## Task Management



Users can:



\- Create tasks

\- View personal tasks

\- Update task details

\- Delete tasks

\- Change task completion status

\- Manage task priorities



Each task contains:



\- Title

\- Description

\- Status

\- Priority

\- User association

\- Created and updated information



\---



\## Dashboard



The dashboard provides:



\- Total task count

\- Pending task count

\- Completed task count

\- Task creation interface

\- Task management interface



The interface is designed with a clean layout and responsive behavior across different screen sizes.



\---



\# Application Architecture



The project follows a separate frontend and backend architecture.



```

AI Task Manager Platform



|

├── frontend

|   |

|   ├── Angular Application

|   ├── Components

|   ├── Services

|   ├── Forms

|   └── UI Logic

|

|

├── backend

|   |

|   ├── Express Server

|   ├── Authentication Middleware

|   ├── API Routes

|   ├── MongoDB Models

|   └── Database Operations

|

|

└── README.md

```



\---



\# Technology Stack



\## Frontend



\- Angular

\- TypeScript

\- HTML5

\- CSS3

\- Angular Standalone Components

\- Angular Forms

\- Angular Services

\- Component Communication



\## Backend



\- Node.js

\- Express.js

\- RESTful APIs

\- JWT Authentication

\- Middleware Architecture



\## Database



\- MongoDB

\- Mongoose ODM



\## Development Tools



\- Visual Studio Code

\- Postman

\- Git and GitHub

\- ChatGPT



\---



\# Application Workflow



\## Authentication Flow



1\. User registers an account.

2\. User logs in using credentials.

3\. Backend validates the user.

4\. JWT token is generated.

5\. Protected APIs verify the token.

6\. User can access personal task data.



\---



\## Task Management Flow



User Interface  

↓  

Angular Service  

↓  

REST API Request  

↓  

Express Backend  

↓  

MongoDB Database  



The application ensures that users can only access and modify their own tasks.



\---



\# API Endpoints



\## Authentication APIs



\### Register User



```

POST /api/auth/register

```



\### Login User



```

POST /api/auth/login

```



\---



\## Task APIs



\### Get Tasks



```

GET /api/tasks

```



\### Create Task



```

POST /api/tasks

```



\### Update Task



```

PUT /api/tasks/:id

```



\### Delete Task



```

DELETE /api/tasks/:id

```



\---



\# AI-Assisted Development



AI tools were used as development assistants throughout the project.



\## AI Tool Used



ChatGPT



\## Areas Where AI Helped



\- Debugging Angular errors

\- Understanding framework concepts

\- Improving component structure

\- Reviewing code quality

\- Troubleshooting backend issues

\- Improving documentation



AI was used to improve development speed and problem-solving efficiency. The core application design, implementation, database structure, and integration were developed and tested manually.



\---



\# Challenges Faced and Solutions



\## Frontend and Backend Data Communication



\### Challenge



Handling incorrect data flow between Angular forms and backend APIs during task creation.



\### Solution



Debugged request payloads, verified API responses, and corrected frontend-backend communication.



\---



\## Dynamic Task Updates



\### Challenge



Refreshing the task list after creating or updating tasks without reloading the page.



\### Solution



Implemented Angular component communication using EventEmitter to trigger real-time data refresh.



\---



\## Authentication and Data Security



\### Challenge



Ensuring users could only access their own tasks.



\### Solution



Implemented JWT authentication middleware and user-based database filtering.



\---



\## Responsive Dashboard Design



\### Challenge



Creating a dashboard that works across desktop and smaller screens.



\### Solution



Used CSS Grid, Flexbox, and responsive media queries for adaptive layouts.



\---



\# Future Improvements



Future enhancements planned:



\- AI-based task recommendations

\- Smart task prioritization

\- Task search and filtering

\- Due dates and reminders

\- Notification system

\- Real-time updates using WebSockets

\- Advanced analytics dashboard

\- Cloud deployment and CI/CD integration



\---



\# Local Setup Instructions



\## Backend Setup



Navigate to backend folder:



```

cd backend

```



Install dependencies:



```

npm install

```



Create environment file:



```

PORT=3000



MONGO\_URI=your\_mongodb\_connection\_string



JWT\_SECRET=your\_secret\_key

```



Start backend:



```

npm run dev

```



Backend runs at:



```

http://localhost:3000

```



\---



\## Frontend Setup



Navigate to frontend folder:



```

cd frontend

```



Install dependencies:



```

npm install

```



Run Angular application:



```

ng serve

```



Frontend runs at:



```

http://localhost:4200

```



\---



\# Development Practices



The project follows:



\- Modular application structure

\- REST API architecture

\- Secure authentication practices

\- Clean separation of frontend and backend

\- Error handling

\- Responsive UI principles

\- Meaningful Git commits



\---



\# Developer



\## Gokularamanan J



Full Stack Developer



Technical Skills:



\- Angular

\- React.js

\- JavaScript

\- TypeScript

\- Node.js

\- Express.js

\- MongoDB

\- REST APIs

\- JWT Authentication

\- Git and GitHub



\---



This project represents practical full-stack development experience with modern web technologies and AI-assisted engineering practices.

