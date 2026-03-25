# SYSTEM ARCHITECTURE DOCUMENT

## Project: Efua Black Official Website
## Type: Artist + Ministry Hybrid Platform
## Stack: Next.js, Node.js, MongoDB

---

# 1. COMPLETE SYSTEM ARCHITECTURE

## 1.1 High-Level Architecture

Frontend (Next.js)
- UI Components
- Pages (App Router)
- Client-side interactions

Backend (Next.js API Routes)
- Booking API
- Contact API
- Subscription API

Database (MongoDB)
- Bookings
- Contacts
- Subscribers
- Testimonials (optional)

Media Storage
- Cloudinary (images/videos)

External Services
- YouTube (video embeds)
- Spotify (music embeds)
- Email Service (SendGrid / Nodemailer)
- reCAPTCHA (spam protection)

---

## 1.2 Architecture Flow

User → Frontend (Next.js UI)
→ API Routes (Backend Logic)
→ Database (MongoDB)
→ External Services (Email, Media)

---

# 2. FILE AND FOLDER STRUCTURE

The Next.js app lives at the **repository root** (same directory as `package.json`) for straightforward Vercel and local workflows.

```
/repository-root   ← Next.js project root (deploy this)
│
├── /app
│   ├── /page.tsx
│   ├── /about
│   ├── /music
│   ├── /ministry
│   ├── /events
│   ├── /media
│   ├── /contact
│   ├── /booking
│
├── /components
│   ├── /ui
│   ├── /layout
│   ├── /sections
│
├── /lib
│   ├── db.ts
│   ├── email.ts
│   ├── validators.ts
│
├── /models
│   ├── Booking.ts
│   ├── Contact.ts
│   ├── Subscriber.ts
│
├── /services
│   ├── bookingService.ts
│   ├── contactService.ts
│   ├── emailService.ts
│
├── /hooks
│   ├── useForm.ts
│
├── /store
│   ├── uiStore.ts
│
├── /styles
│   ├── globals.css
│
├── /utils
│   ├── helpers.ts
│
├── /public
│   ├── images
│
├── /config
│   ├── env.ts
│
└── package.json
```

---

# 3. RESPONSIBILITIES OF EACH COMPONENT

## 3.1 Frontend

### Pages
- Handle routing and layout composition
- Fetch data where necessary

### Components
- UI: Buttons, cards, inputs
- Sections: Hero, Events, Music lists
- Layout: Navbar, Footer

---

## 3.2 Backend (API Routes)

### Booking API
- Validate input
- Store booking in DB
- Send notification email

### Contact API
- Handle general inquiries
- Store messages

### Subscription API
- Save emails
- Trigger welcome email

---

## 3.3 Database Models

### Booking
- Stores event booking details

### Contact
- Stores inquiries

### Subscriber
- Stores email list

---

## 3.4 Services Layer

### bookingService
- Business logic for bookings

### emailService
- Send emails via provider

---

## 3.5 Utilities

### db.ts
- MongoDB connection

### validators.ts
- Input validation

---

# 4. STATE MANAGEMENT STRATEGY

## 4.1 Approach

Use lightweight state management:
- React Context (global UI state)
- Zustand (optional for scalability)

---

## 4.2 State Types

### Global State
- UI states (modals, loading)

### Local State
- Forms (React Hook Form recommended)

---

## 4.3 Form Handling

- React Hook Form
- Zod for validation

---

# 5. SERVICE INTEGRATIONS

## 5.1 Email Service
- SendGrid or Nodemailer
- Booking confirmations
- Contact responses

---

## 5.2 Media
- Cloudinary for uploads
- YouTube embeds

---

## 5.3 Analytics
- Google Analytics
- Search Console

---

## 5.4 Security
- reCAPTCHA
- Input sanitization

---

# 6. DEPLOYMENT

- Vercel (Frontend + API)
- MongoDB Atlas (DB)
- Cloudinary (Media)

---

# 7. SCALABILITY NOTES

- Modular services
- API separation possible later
- Easy migration to microservices

---

# FINAL NOTE

Focus on simplicity and maintainability.
Avoid overengineering early.
