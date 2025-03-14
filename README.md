 
# 🤝 EventAssist 🤝

This project is a Volunteer Engagement Platform designed to connect users with social causes and volunteer opportunities. It allows users to register, manage their profiles, discover and join volunteer events, post and respond to community help requests, and form teams for long-term initiatives.



## 🛠️ Tech Stack

**🌍 Front-end:** React.js, TailwindCSS

**🖥️ Back-end:** Node.js, Express.js

**🛢️ Database:** PostgreSQL

**🔑 Authentication:** JWT (JSON Web Token)


## 🌟 Features
1️⃣ User Registration & Profile Management
- Secure user authentication and authorization with email and password (JWT).
- User profiles containing basic info, skills, and supported causes.
- Profile edit functionality and volunteer history tracking.

2️⃣ Discover & Join Volunteer Events
- Users and organizations can create events with title, description, date, time, location, and category.
- Public event feed with filters for category, location, and availability.
- One-click registration for events.

3️⃣ Community Help Requests
- Users and organizations can post requests for help.
- Volunteers can offer assistance through comments.
- Requests categorized by urgency (low, medium, urgent).
- Better UI like other social media platforms

4️⃣ Form Teams & Group Initiatives 
- Users can create private or public volunteer teams.
- Strictly authorization for private groups from feed.
- User can access thier joined groups list.
- Teams have dashboards showing members, events, and achievements.
- A leaderboard to highlight the most active teams (manually).




## 🛢️ Database Schema
Link: https://drive.google.com/file/d/12xleV5gVxguQCDjuqcvK09d--YEUtBb4/view?usp=sharing


![Database](https://res.cloudinary.com/ddrvm4qt3/image/upload/v1741960287/EventAssist.drawio_fdcjki.png)







## 📥 Installation

Install my-project with npm 🚀

```bash
  git clone https://github.com/Asiful-Haque/EventAssist-Volunteering_Platform
  cd EventAssist-Volunteering_Platform
```
```bash
  Install dependencies:
  npm install
```
```bash
  Set up environment variables:
  Create a .env file and add necessary credentials:
  DATABASE_URL=your_database_url
  JWT_SECRET=your_secret_key
```

```bash
  Start the server:
  frontend: npm start
  backend: node app.js
```

## 🔗 API Reference

#### 👤 User 

```http
  POST /api/users/register - Register a new user
  POST /api/users/login - Authenticate user and return a token
  POST /api/users/volunteering-history - Add users volunteeting history
  GET /api/users/volunteering-history - fetch users volunteering history
  GET /api/users/profile - Retrieve user profile data
  PUT /api/users/edit_profile - Edit user profile details
  PUT /api/users/update_points - Update user point automatically
  GET /api/users/sorted_by_points - Get users to show in leaderboard
```

#### 📊 Dashboard 

```http
  /api/dashboard - Base Route
```

#### 🌍 Community Help Post 

```http
  POST /api/helpPost/create_post - Create a new help Post
  GET /api/helpPost/getPosts - Fetch all help posts 
  POST /api/helpPost/submitComment - Submit a comment to the posts
  GET /api/helpPost/getComments/:post_id - Get comments for the post 
```

#### 🎟️ Events

```http
  POST /api/event/add_event - Create a new event
  GET /api/event/get_events - Fetch all events  
```

#### 🏆 Teams

```http
  GET /api/teams/get_teams - Retrieve all teams 
  POST /api/teams/add_teams - Create a new team 
  POST /api/teams/see_members - Fetch all members of a team 
  POST /api/teams/see_events - Fetch all events organized by a team   
  GET /api/teams/see_private_teams - Fetch all private groups of each user
```



## 🏎️ Run Locally



Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

