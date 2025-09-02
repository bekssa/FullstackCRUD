# Bookstore CRUD Application

This project is a **Fullstack CRUD Application** for managing books. It provides functionality to **add, edit, delete, and view books**.

## Tech Stack

* **Frontend:** React 19, Next.js 15, Ant Design 5.0
* **Backend:** .NET 8.0 (ASP.NET Core)
* **Database:** PostgreSQL (running in Docker)

## Features

* Add new books
* Edit existing books
* Delete books
* View a list of books
* Fully integrated frontend and backend

## Important Notes

* Since this project uses **React 19** with **Ant Design 5.0**, some compatibility issues may occur, as Ant Design v5 officially supports React 16–18. For more details, check [Ant Design compatibility notes](https://ant.design/docs/react/v5-for-19).
* Recommendation: If you encounter issues, consider using **React 18** instead of React 19 for smoother compatibility with Ant Design 5.

## Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/bekssa/FullstackCRUD
   cd <project-folder>
   ```

2. Start the backend (.NET 8.0):

   ```bash
   dotnet run
   ```

3. Start the database (PostgreSQL with Docker):

   ```bash
   docker-compose up -d
   ```

4. Start the frontend (Next.js):

   ```bash
   npm install
   npm run dev
   ```

The application should now be available at `http://localhost:3000`.
