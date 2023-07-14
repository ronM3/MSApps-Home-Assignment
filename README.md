# PixaImage - Full Stack Photo Gallery

This is a full stack project built with Node.js, Express, React (Vite), and Redux Toolkit. The project aims to display and manage a collection of photos with pagination, sorting, and a user-friendly interface.

## Live: 
https://msapps-api-assignment.onrender.com

## Functionality

- Pagination: The backend API supports pagination to retrieve a subset of photos per page.
- Sorting: The backend API allows sorting photos by ID or Date.
- Caching: Photos are cached to improve performance and reduce API calls.
- Frontend UI: The frontend application provides a responsive user interface with a modern design.
- State Management: Redux Toolkit is used for state management, providing a centralized store for data and actions.
- Generic Modal: A reusable modal component is used for displaying photo details or selecting categories.
- Error Handling: The backend includes an error handler middleware to handle and respond to errors.
- Loading Spinner: A loading spinner is displayed during data fetching to provide visual feedback to the user.

## Backend (Node.js and Express)

The backend directory contains server-side code built with Node.js and Express. It provides API endpoints for retrieving and sorting photos. Caching is implemented for improved performance, and an error handler middleware is included.  It also follows a layered architecture approach to separate concerns and improve maintainability.

API Endpoints:
* `GET /photos:` Retrieves paginated photos with support for category filtering.
* `GET /photos/:`category/sortById/:sortOrder: Retrieves paginated photos sorted by ID in the specified order.
* `GET /photos/:`category/sortByDate/:sortOrder: Retrieves paginated photos sorted by Date in the specified order.

### Middleware

- `paginationMiddleware`: A middleware function that extracts pagination details from the request query parameters and attaches them to the `req.pagination` object.

## Frontend (React with Redux Toolkit)
Frontend (React with Redux Toolkit)
The frontend directory contains client-side code built with React (Vite) and Redux Toolkit. It offers a responsive UI for displaying photos, interacting with the backend API, and features a reusable modal component. Additionally, a loading spinner component is displayed during data fetching to provide visual feedback.
