<div align="center">
  
  
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
  </div>

  <h3 align="center">A Blog Application</h3>

  
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)


## <a name="introduction">🤖 Introduction</a>

HeartBlog is a modern blogging platform built with Next.js, designed to offer users an immersive and intuitive experience for sharing their stories. The app incorporates Clerk for secure and seamless authentication, ensuring a personalized user experience. With MongoDB as its database, HeartBlog efficiently manages content and user data, allowing for scalable and flexible performance. Ideal for bloggers seeking simplicity and efficiency, HeartBlog combines cutting-edge technologies to create a reliable and dynamic platform for expression.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Tailwind CSS
- ShadCN
- React Hook Form
- Zod
- Clerk
- MongoDB
- Vercel

## <a name="features">🔋 Features</a>

👉 **Authentication**: An ultra-secure Clerk service authentication.

👉 **Home Page**: Shows all of the blogs posted along with the author and the post date.

👉 **Create Post**: Allows user to post blogs using the React Hook Form.

and many more, including code architecture and reusability. 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/shahirulprojects/HeartBlog.git
cd HeartBlog
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env.local

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/view-post
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/view-post
NEXT_CLERK_WEBHOOK_SECRET=

#MONGODB
MONGODB_URL=
NEXT_PUBLIC_BASE_URL=localhost:3000
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/) and [MongoDB](https://www.mongodb.com/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


