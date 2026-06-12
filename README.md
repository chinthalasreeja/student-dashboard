# Student Dashboard — Next-Gen Learning Dashboard

A futuristic student learning dashboard built as part of the **Frontend Intern Challenge**.

This project focuses on **server-rendered data**, **smooth animations**, **responsive design**, and a **modern Bento Grid interface** powered by Supabase.

---

## Live Demo

Deployed on **Vercel**

Add your URL here:

```txt
https://your-vercel-url.vercel.app
```

---

## GitHub Repository

Add your repository URL:

```txt
https://github.com/your-username/student-dashboard
```

---

## Tech Stack

### Framework

* Next.js (App Router)

### Database / Backend

* Supabase

### Styling

* Tailwind CSS

### Animation

* Framer Motion

### Icons

* Lucide React

### Deployment

* Vercel

---

## Features Implemented

### Dashboard Layout

* Bento Grid dashboard structure
* Dark theme UI
* Gradient glow background
* Glassmorphism effects

### Sidebar

* Responsive sidebar
* Desktop → full navigation
* Tablet → icon collapse
* Mobile → bottom navigation

### Hero Tile

* Welcome section
* Daily learning streak indicator
* Premium dashboard styling

### Dynamic Course Tiles

* Data fetched from Supabase
* Animated progress bars
* Hover interactions
* Smooth spring animations

### Activity Tile

* Contribution-style activity graph

### Loading Experience

* Skeleton loading screen
* Smooth loading transitions

### Motion & Interaction

* Framer Motion integration
* Sequential tile entrance animations
* Hover scale effects
* Spring physics

### Deployment

* GitHub integration
* Vercel production deployment

---

## Architecture Decisions

### Server Components (RSC)

Course data is fetched inside Next.js Server Components.

Benefits:

* Faster initial load
* Secure server-side data access
* Reduced client-side requests

---

### Client Components

Interactive UI components use Client Components:

Examples:

* Course cards
* Sidebar interactions
* Motion animations

This keeps rendering efficient while enabling rich interactions.

---

## Database Schema

Supabase table:

```sql
courses1
```

Columns:

```txt
id
title
progress
created_at
```

Example Data:

```txt
Advanced React Patterns — 75%

Next.js Mastery — 45%

TypeScript Pro — 90%

System Design — 60%
```

---

## Environment Variables

Create:

```txt
.env.local
```

Add:

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Example template included:

```txt
.env.example
```

---

## Run Locally

Install:

```bash
npm install
```

Start:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Build

```bash
npm run build
```

---

## Folder Structure

```plaintext
app/
components/
 dashboard/
lib/
public/
types/

README.md
.env.example
```

---

## Challenges Faced

* Setting up Supabase environment variables for production
* Handling Server Components correctly
* Avoiding layout shifts during animation
* Making Bento Grid responsive across devices
* Configuring deployment on Vercel

---

## Future Improvements

* Authentication
* Real activity analytics
* Course filtering
* Dark / Light theme toggle
* User profiles
* Dashboard customization

---

## Submission Checklist

* Next.js App Router
* Supabase Integration
* Tailwind CSS
* Framer Motion
* Responsive Layout
* Loading States
* GitHub Repository
* Vercel Deployment
* `.env.example`
* README Documentation

---

Built by **Sreeja Chinthala**
