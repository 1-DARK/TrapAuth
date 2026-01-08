# Trap Auth

A full-stack MERN authentication application with email verification, password reset functionality, and a modern React frontend.

## Features

- **User Authentication**

  - Sign up with email verification
  - Login with JWT-based authentication
  - Logout functionality
  - Password reset via email
  - Protected routes with token verification

- **Email Integration**

  - Email verification on signup
  - Password reset emails via Mailtrap

- **Modern UI**
  - React 19 with Vite
  - Tailwind CSS v4 for styling
  - Framer Motion for animations
  - React Hot Toast for notifications
  - Lucide React icons

## Tech Stack

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Mailtrap** for email services
- **cookie-parser** for handling cookies
- **CORS** enabled

### Frontend

- **React 19**
- **Vite** for fast development
- **Tailwind CSS v4**
- **React Router DOM v7**
- **Zustand** for state management
- **Axios** for API requests
- **Framer Motion** for animations

## Project Structure

```
Trap_auth/
├── backend/
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── db/
│   │   └── connectDB.js
│   ├── mailtrap/
│   ├── middleware/
│   │   └── verifyToken.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── auth.route.js
│   ├── utils/
│   └── index.js
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── store/
│       ├── lib/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── package.json
└── .env
```

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Trap_auth
   ```

2. **Install dependencies**

   ```bash
   # Install root dependencies (backend)
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory with the following variables:

   ```env
   PORT=5001
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   MAILTRAP_TOKEN=your_mailtrap_token
   CLIENT_URL=http://localhost:5001
   ```

## Usage

### Development Mode

Run both backend and frontend concurrently:

**Backend:**

```bash
npm run dev
```

Server will start at `http://localhost:5001`

**Frontend (in a separate terminal):**

```bash
cd frontend
npm run dev
```

Frontend will start at `http://localhost:3000` (default Vite port)

### Production Mode

**Backend:**

```bash
npm start
```

**Frontend:**

```bash
cd frontend
npm run build
npm run preview
```

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint                 | Description                 | Auth Required |
| ------ | ------------------------ | --------------------------- | ------------- |
| POST   | `/signup`                | Register a new user         | No            |
| POST   | `/login`                 | Login user                  | No            |
| POST   | `/logout`                | Logout user                 | No            |
| POST   | `/verify-email`          | Verify user email           | No            |
| POST   | `/forgot-password`       | Send password reset email   | No            |
| POST   | `/reset-password/:token` | Reset password with token   | No            |
| GET    | `/check-auth`            | Check authentication status | Yes           |

## Frontend Routes

- `/` - Dashboard (protected)
- `/signup` - User registration
- `/login` - User login
- `/verify-email` - Email verification

## Scripts

### Root (Backend)

- `npm run dev` - Start backend with nodemon
- `npm start` - Start backend in production

### Frontend

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Security Features

- JWT-based authentication
- HTTP-only cookies for token storage
- Password hashing with bcryptjs
- Email verification before access
- Protected routes with middleware
- CORS configuration
