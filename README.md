# 🍕 FOODIEFRENZY - Food Delivery Application

A full-stack food delivery platform with Admin Dashboard, Customer Frontend, and Backend API.

## 📋 Project Structure

```
FOODIEFRENZY/
├── admin/          # Admin Dashboard (React + Vite)
├── frontend/       # Customer Frontend (React + Vite)
├── backend/        # Node.js Express API
└── README.md
```

## 🚀 Deployment Guide

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Atlas or local instance)
- npm or yarn package manager
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/sdyamaan/FOODIEFRENZY.git
cd FOODIEFRENZY
```

### Step 2: Backend Deployment

#### Local Setup
```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=production
JWT_SECRET=your_jwt_secret
```

Start backend:
```bash
npm start
```

#### Deploy to Heroku/Railway/Render
1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables in platform dashboard
4. Deploy

### Step 3: Frontend Deployment

#### Build for Production
```bash
cd frontend
npm install
npm run build
```

#### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

#### Deploy to Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Step 4: Admin Dashboard Deployment

#### Build for Production
```bash
cd admin
npm install
npm run build
```

Deploy similarly to Frontend (Vercel/Netlify)

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | React, Vite, TailwindCSS |
| **Admin Panel** | React, Vite |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT |
| **Version Control** | Git |

## 📝 Environment Variables Setup

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/foodiefrenzy
PORT=5000
NODE_ENV=production
JWT_SECRET=your_secret_key
API_URL=http://localhost:5000
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.com
```

### Admin (.env)
```env
VITE_API_URL=https://your-backend-url.com
```

## 🔗 Deployment Links

After deployment, update these URLs:
- **Frontend**: [Your Vercel/Netlify URL]
- **Admin Dashboard**: [Your Vercel/Netlify URL]
- **Backend API**: [Your Heroku/Railway/Render URL]

## ✅ Post-Deployment Checklist

- [ ] All environment variables are set correctly
- [ ] Backend API is running and accessible
- [ ] Frontend connects to Backend API successfully
- [ ] Admin panel is accessible and functional
- [ ] MongoDB database is connected
- [ ] CORS is properly configured
- [ ] API endpoints are tested
- [ ] SSL certificates are valid (for HTTPS)

## 📚 API Documentation

API endpoints documentation available at `/api/docs`

## 🆘 Troubleshooting

### Common Issues
- **Port already in use**: Change PORT in .env
- **MongoDB connection error**: Verify connection string in .env
- **CORS errors**: Check backend CORS configuration
- **Build errors**: Clear node_modules and reinstall dependencies

## 📄 License
MIT License - Feel free to use this project

## 👨‍💻 Developer

Created by sdyamaan - [@GitHub](https://github.com/sdyamaan)