<a  name="readme-top"></a>

<!-- PROJECT LOGO -->
<br  />
<div  align="center">

<a  href="https://q-pros.com/">
<img  src="https://github.com/user-attachments/assets/42a14cce-a7a7-4c05-8a97-a20a1a4a3019"  alt="Logo"  width="150"  height="100"  style="margin: 0 15;">
</a>
<h3  align="center"> Task Management Technical Assignment</h3>
</div>

  

<!-- TABLE OF CONTENTS -->

<details>

<summary>Table of Contents</summary>

<ol>
<li><a  href="#Overview">Overview</a></li>
<li><a  href="#project-structure">Project Structure</a></li>
<li><a  href="#tech-stack-usage">Tech Stack</a></li>
<li><a  href="#setup-and-installation">Getting started</a></li>
<li><a  href="#docker-setup">Docker Setup</a></li>
<li><a  href="#test-cases">Test Cases</a></li>
<li><a  href="#video-walkthrough">Video Walkthrough</a></li>
<li><a  href="#conclusion">Conclusion</a></li>
</ol>
</details>

  

<!-- Overview -->

## Overview

  

Welcome to the Task Management Application project! This application is built using React and provides users with a streamlined interface to manage their tasks efficiently. Based on a carefully crafted UX/UI design from Figma, this application aims to deliver a user-friendly and visually appealing task management experience.

  

<!-- The Workflow -->

## Project Structure

  

The project is organized into the following components:

  

```plaintext
├── React-frontend/
│   ├── Dockerfile
│   ├── pnpm-lock.yaml
│   ├── package.json
│   ├── .gitignore
│   ├── src/
│	├── components/
│	│   ├── Buttons/
│	│   │   ├── buttons.css        # Styling for buttons
│	│   │   ├── DropdownButton.js  # Dropdown button component
│	│   │   ├── EditDelete.js      # Edit/Delete button component
│	│   │   ├── NewTask.js         # New Task button component
│	│   ├── DeleteTaskModal/
│	│   │   ├── DeleteTaskModal.js # Modal component for deleting tasks
│	│   │   ├── index.js           # Export module for DeleteTaskModal
│	│   │   ├── style.css          # Styling for DeleteTaskModal
│	│   ├── Filter/
│	│   │   ├── Filter.js          # Filter component for tasks
│	│   │   ├── index.js           # Export module for Filter
│	│   │   ├── style.css          # Styling for Filter component
│	│   ├── Header/
│	│   │   ├── Header.js          # Header component
│	│   │   ├── index.js           # Export module for Header
│	│   │   ├── style.css          # Styling for Header component
│	│   ├── Task/
│	│   │   ├── index.js           # Export module for Task
│	│   │   ├── style.css          # Styling for Task component
│	│   │   ├── Task.js            # Task component for displaying tasks
│	│   ├── TaskModal/
│	│   │   ├── index.js           # Export module for TaskModal
│	│   │   ├── style.css          # Styling for TaskModal
│	│   │   ├── TaskModal.js       # Modal component for task operations (create/edit)
│	│   ├── Tooltip/
│	│   │   ├── index.js           # Export module for Tooltip
│	│   │   ├── style.css          # Styling for Tooltip component
│	│   │   ├── Tooltip.js         # Tooltip component for additional information
│	├── redux/
│	│   ├── store.js               # Redux store configuration
│	│   ├── tasksSlice.js          # Redux slice for managing task states
│	├── utils/
│	│   ├── localStorage.js        # Utility functions for local storage management
│	├── App.css                    # Global styles for the app
│	├── App.js                     # Main App component
│	├── App.test.js                # Tests for the App component
│	├── index.css                  # Global CSS styles
│	├── index.js                   # Entry point for the React application

```
<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- Tech Stack usage-->

## Tech Stack Usage
This project is built using the following technologies:

- **React.js**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps, used for managing the application's state.
- **CSS**: Styling the application with either utility-first CSS or scoped styles.
- **JavaScript (ES6+)**: The primary language for building the app, taking advantage of modern JavaScript features.
- **pnpm**: A fast, disk space-efficient package manager that manages the project dependencies.

### Setup and Installation

To get started with this project, follow these steps:

1. **Install pnpm**: If you don't have `pnpm` installed globally, you can install it using npm:
   ```bash
   npm install -g pnpm
   ```

2. **Clone the repository**: Clone the project repository to your local machine.
   ```bash
   git clone https://github.com/MHF0/Task-management
   cd Task-management
   ```

3. **Install dependencies**: Use `pnpm` to install all required dependencies.
   ```bash
   pnpm install
   ```

4. **Run the application**: Start the development server using `pnpm`.
   ```bash
   pnpm start
   ```
   This will run the app in development mode. Open `http://localhost:3000` to view it in the browser.

5. **Test the Deployed Application**: The application has been deployed on Netlify. You can test it live using the following link:

[**Live Demo on Netlify**](https://farhan-task-management.netlify.app/)

Simply click on the link to explore the application's features and functionality.

### Scripts

Here are some useful scripts defined in the project:

- **Start the development server**:
  ```bash
  pnpm start
  ```
  This will start the React development server.

- **Build the project for production**:
  ```bash
  pnpm build
  ```
  This will create an optimized production build in the `build` directory.

### Dependency Management

Using `pnpm` ensures that your dependencies are installed in a fast and space-efficient manner. It also creates a `node_modules/.pnpm` directory with symlinks to package files, reducing duplication and improving performance.


<!-- Docker File -->
## Docker Setup

### Why Use Docker?

Docker simplifies the process of building, running, and deploying applications by containerizing them. Using a Dockerfile to containerize your React.js frontend application offers several benefits:

- **Consistency**: Docker ensures that your application runs the same way in any environment, whether it's on your local machine, a staging server, or in production.
- **Isolation**: Containers provide a clean environment with all necessary dependencies, preventing conflicts with other software on the host system.
- **Scalability**: Docker makes it easier to scale your application by deploying multiple containers across different servers or cloud environments.
- **Portability**: Docker containers can be easily moved between different systems or cloud providers, enhancing flexibility in deployment.

### Docker Setup

To containerize and run the React.js frontend application, follow these steps:

1. **Build the Docker Image**

   Open a terminal in the root directory of the project and run the following command to build the Docker image:

   ```bash
   docker build -t react-frontend .
   ```

   This command creates a Docker image named `react-frontend` using the instructions specified in the `Dockerfile` located in the project's root directory.

2. **Run the Docker Container**

   After building the image, run the container with the following command:

   ```bash
   docker run -p 80:80 react-frontend
   ```

   This command starts a Docker container from the `react-frontend` image and maps port 80 of the container to port 80 on your host machine. You can access the running application by navigating to `http://localhost` in your web browser.

3. **Stopping the Container**

   To stop the running container, use the following command:

   ```bash
   docker stop <container_id>
   ```

   Replace `<container_id>` with the ID or name of your running container, which can be found using `docker ps`.

<!-- Test Cases -->

## Test Cases

In this chapter, we will outline the test cases covered in this service. The test cases are divided into crucial user experience scenarios, focusing on adding, updating, and deleting tasks. These scenarios are essential to ensure the application behaves as expected and provides a seamless user experience.

#### 1. **Adding a Task**
   - **Test Case 1.1**: Verify that a user can successfully add a new task with all required fields filled.
   - **Test Case 1.2**: Check that the newly added task appears in the correct category and is displayed in the task list.
   - **Test Case 1.3**: Ensure that the task title is not empty; if it is, an appropriate error message should be shown.
   - **Test Case 1.4**: Validate that the task is saved in local storage, so it persists after a page refresh.
   - **Test Case 1.5**: Confirm that the task creation modal closes after a task is successfully added.
   - **Test Case 1.6**: Verify that the user can cancel the task addition, and no new task is created.
   -   **Test Case 1.7**: Verify that the user cannot add a task if the category is not created. If the user types a category, they must press Enter to create it before proceeding.

#### 2. **Updating a Task**
   - **Test Case 2.1**: Verify that a user can successfully edit an existing task, including updating the title, description, and category.
   - **Test Case 2.2**: Check that the updated task information is reflected in the task list immediately after saving.
   - **Test Case 2.3**: Ensure that the task editing modal displays the current task information when opened.
   - **Test Case 2.4**: Validate that the user can cancel the update process, and the original task remains unchanged.
   - **Test Case 2.5**: Confirm that updates to a task are saved in local storage.

#### 3. **Deleting a Task**
   - **Test Case 3.1**: Verify that a user can successfully delete a task and that it is removed from the task list.
   - **Test Case 3.2**: Check that a confirmation modal appears when attempting to delete a task.
   - **Test Case 3.3**: Ensure that the task is deleted from local storage, so it does not reappear after a page refresh.
   - **Test Case 3.4**: Validate that the user can cancel the deletion process, and the task remains in the task list.
   - **Test Case 3.5**: Confirm that deleted tasks are not recoverable once confirmed.

#### 4. **Filtering and Completion Status**
   - **Test Case 4.1**: Verify that tasks can be filtered by category and that only tasks belonging to the selected category are displayed.
   - **Test Case 4.2**: Check that tasks can be filtered by completion status (e.g., completed vs. incomplete).
   - **Test Case 4.3**: Ensure that marking a task as complete or incomplete updates its status both visually and in local storage.
   - **Test Case 4.4**: Validate that tasks remain filtered correctly after adding, editing, or deleting tasks.
---

### Video Walkthrough
A video will be provided to demonstrate these test cases in action. The video will cover:
- **Adding a Task**

https://github.com/user-attachments/assets/34685be2-e3e1-4205-878b-894fc522fcd7

- **Updating a Task**

https://github.com/user-attachments/assets/5216b7ba-c095-45e5-92d4-02c534a42fdb

- **Deleting a Task**

https://github.com/user-attachments/assets/64dfece0-d385-4e14-8607-e17048862d3f

- **Filtering Tasks by Category and Completion Status**

https://github.com/user-attachments/assets/da28022c-52ba-4c66-a530-d4c0edf18efd

Stay tuned for the video to get a detailed walkthrough of the user experience and functionality testing.

  

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

  

<!-- Conclusion -->

## Conclusion

In conclusion, the Task Management Application project provides a comprehensive solution for managing tasks efficiently and effectively. Leveraging modern technologies such as React.js, Redux, and CSS modules, the application offers a user-friendly interface that simplifies task management. The project's structure ensures modularity and maintainability, while the use of `pnpm` for dependency management enhances performance and efficiency.

The thorough testing of critical user interactions—adding, updating, and deleting tasks—ensures that the application delivers a seamless user experience. The filtering and completion status functionalities further enhance task organization and visibility. 

By following the setup and installation instructions, users can quickly get the application up and running, and the live demo link offers a convenient way to explore the application’s features in a real-world environment.

Overall, this project exemplifies best practices in frontend development, providing both a robust application and a clear, organized approach to task management. With its attention to detail in both design and functionality, the Task Management Application is well-positioned to meet user needs and expectations.

Thank you for exploring this project. We hope it proves valuable in your task management endeavors.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
