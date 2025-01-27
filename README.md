# BuzzChat

**BuzzChat** is a real-time chat application designed for smooth and instant communication between users. It includes essential chat features like real-time messaging, persistent chat history, and image sharing using Cloudinary for efficient image storage and delivery.

---

## Features

### Core Features:
- **User Authentication**: Secure sign-up, login, and logout functionality using JWT-based authentication.
- **Real-Time Messaging**: Instant delivery of messages using **Socket.IO**.
- **Message History**: Persistent storage of messages for future reference.
- **Image Sharing**: Share images seamlessly with optimized delivery using **Cloudinary**.
- **Responsive Design**: Optimized for seamless use on both desktop and mobile devices.

---

## Tech Stack

### Front-End:
- **React.js**: User interface development.
- **Tailwind CSS**: For modern and responsive design.
- **Axios**: API integration for communication with the backend.

### Back-End:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Backend framework for building RESTful APIs.
- **Socket.IO**: Real-time, bi-directional communication.

### Database:
- **MongoDB**: For storing user details, chat messages, and references to uploaded images.

### Tools and Services:
- **JWT**: For secure authentication.
- **Cloudinary**: For image upload, storage, and optimized delivery.
- **Nodemon**: For hot-reloading during development.
- **Dotenv**: To manage environment variables.

---

## Installation and Setup

### Prerequisites:
- **Node.js** and **npm** installed on your system.
- **MongoDB Atlas** or a local MongoDB instance running.
- A **Cloudinary** account with API credentials.

### Steps:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/buzzchat.git
   cd buzzchat

2. **Set up the backend**:

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Create a `.env` file and configure the environment variables:
     ```env
     PORT=5001
     MONGODB_URI=<your_mongo_connection_string>
     JWT_SECRET=<your_secret_key>
     CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
     CLOUDINARY_API_KEY=<your_cloudinary_api_key>
     CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
     ```

3. **Start the server**:
   ```bash
   npm run dev

4. **Set up the frontend**:

   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Start the development server:
     ```bash
     npm run dev
     ```

5. **Access the application**:

   - Open your browser and visit [http://localhost:5173](http://localhost:5173).

