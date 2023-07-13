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

## Architecture Layers

The project follows a layered architecture approach to separate concerns and improve maintainability:

- **Controllers**: Handles the user interface and user interactions. It includes components, styles, and UI-related logic.
- **Services**: Contains business logic, services, and helpers. It handles data fetching, caching, sorting, and pagination.
- **Services Agents**: Provides access to external data sources, such as APIs or databases. In this project, it includes the backend API for retrieving photos.

## Backend (Node.js and Express)

The backend directory contains the server-side code built with Node.js and Express. It provides the API endpoints for retrieving and sorting photos.

API Endpoints:
GET /photos: Retrieves paginated photos with support for category filtering.
GET /photos/:category/sortById/:sortOrder: Retrieves paginated photos sorted by ID in the specified order.
GET /photos/:category/sortByDate/:sortOrder: Retrieves paginated photos sorted by Date in the specified order.
Caching: Photos are cached to reduce API calls and improve performance.
Error Handler: An error handler middleware is implemented to handle and respond to errors.

### Middleware

- `paginationMiddleware`: A middleware function that extracts pagination details from the request query parameters and attaches them to the `req.pagination` object.

### Services and Helpers

- `photosService`: Provides functions for fetching and sorting photos.
- `serviceHelper`: Contains helper functions for calculating pagination, sorting photos, and caching.

## Frontend (React with Redux Toolkit)

The frontend directory contains the client-side code built with React (Vite) and Redux Toolkit. It provides a responsive user interface for displaying photos and interacting with the backend API.

### Components and Functionality

- `PhotosContainer`: The main component responsible for rendering the photos and handling pagination.
- `TypeSelectModal`: A reusable modal component for selecting a photo category or displaying photo details.
- `LoadingSpinner`: A spinner component displayed during data fetching.
- State Management: Redux Toolkit is used for efficient state management, providing a centralized store for data and actions.
- Error Handling: Errors from the backend API are properly handled and displayed to the user.
- Loading Spinner: A spinner component is displayed during data fetching to provide visual feedback.
