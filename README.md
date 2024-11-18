LinkedIn Clone
A LinkedIn-inspired web application built with modern web development technologies. This project replicates the LinkedIn user interface (UI) and user experience (UX) while implementing core functionalities such as user authentication, posting content, and viewing posts. It is designed to be mobile-responsive and provides a seamless experience across devices.

Features
Frontend
React.js: A robust frontend library for building user interfaces.
Redux: For state management, ensuring smooth data flow across the app.
CSS with Styled Components: For writing scoped and modular CSS, creating a visually appealing and maintainable UI.
Mobile Responsiveness: Fully optimized for different screen sizes, ensuring a great experience on mobile devices.
Backend
Appwrite: A backend-as-a-service for managing authentication, database, and media storage.
Functionalities

User Authentication: Secure sign-up and login functionality using Google OAuth via Appwrite.
Post Creation: Allows users to create and share posts, including text, images, and videos.
Real-Time Feed: Dynamically displays posts in chronological order using Appwrite's database and storage.
Responsive Design: Optimized for desktop and mobile devices using Styled Components.
State Management: Efficient state handling with Redux to manage users, posts, and application state.
Appwrite Integration:
Authentication: Powered by Appwrite's account services.
Database: Posts and user data are stored and managed in Appwrite's database.
Storage: Uploaded images and videos are securely handled using Appwrite's storage service.

Styled like LinkedIn for familiarity.
Includes interactive buttons for actions such as like, comment, share, and save.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
