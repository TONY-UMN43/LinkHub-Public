# LinkHub
A Full-Stack Project that has core LinkedIn features such as user authentication, job postings, user feeds, and company profiles.
## License
This project is for **viewing purposes only**.  
Do not copy, modify, or redistribute any part of this code without explicit permission.  
© 2025 Tony Akinyemi. All rights reserved.



## Description
LinkHub is a professional networking project that was inspired by LinkedIn.

1. Create an account or log in with an existing one.

2. View user posts on your user feed.

3. Search recently posted jobs and company profiles.

4. Connect with other users by using the friend request system.

The responsive CSS design was assisted by Google Gemini, which provided layout suggestions and styling guidance. The CSS was then optimized for the final design to ensure that it worked seamlessly across mobile, tablet, laptop, and desktop devices.

## Live Demo
- [Live Site](https://delicate-starburst-7bb860.netlify.app/)

## Features
- User Authentication using OAuth2 & JWT
- Company profile creation
    - Employees can be added to a company
    - Jobs can be created from a company
- Job Postings on User Feed
- Friend Request system between users
- Ability for users to create text post
  
## Tech-stack
- Frontend: React
- Backend: FastAPI
- Database: PostgreSQL


## How to Run (Only for Recruiters)

Because the backend contains sensitive business logic, the full repository is private. Recruiters can request access by emailing me (contact info below)

Get Files
```Terminal
git clone git@github.com:NAME/LinkHub.git
```
Install FastAPI Dependencies
```Terminal
cd LinkHub
cd Backend
pip install -r requirements.txt
```
Install React Dependencies
```Terminal
cd ../frontend
npm install
```
Set Environment Variable
- Create .env file and create these variables
  
  - `DATABASE = "my_database_connection"`
  - `REACT_APP_API_BASE = http://localhost:8000`
Start the Frontend Client
```Terminal
npm start
```
Start the Backend Server
```Terminal
cd Backend
python3 -m venv venv
source ./venv/bin/activate"
uvicorn main:app --reload
```
Run the application from there

## Project Impact
LinkHub showcases my ability to design, develop, and deploy a full-stack production-ready product for users.

It shows skills in every area of full-stack - building a secure backend with FastAPI, creating a PostgreSQL database to store persistent data, and developing an optimized React frontend with the help of Google Gemini.

Used real-life features such as JWT authentication, company job postings, and user feeds that fetch data from the database.

This project reflects the process of turning high-level System Design ideas into a polished program. It also reflects being able to use Google Gemini when there are technical limitations.

# Screenshots
| User Profile | User Feed |
|--------------|-----------|
| ![User-Profile Page](assets/Screen-shot-user-profile.png) | ![User-Feed Page](assets/Screen-shot-user-feed.png) |

| Home Page |
|-----------|
| ![Home Page](assets/Screen-shot-home.png) | ![Mobile View](assets/mobile.png) |


## Future Improvements
- **Performance**: Implement a Redis cache system to decrease latency and load times
- **Roles**: Add role-specific privileges for employees added to the company
  - HR & Recruiters can create job postings and review applications
  - The owner can edit the company profile
  - General members are listed under company employees, but don't have any other privileges
- **Job Applications**
  - Allow users to fill out LinkedIn Job application on website
  - Add a way for users to view their job applications
  - Add a pipeline for accepted job applicants
- **Images**: Use AWS to allow users to upload profile pictures


## Contact Me
- Email: tony.akinyemi5@gmail.com
- LinkedIn: [Tony Akinyemi](https://www.linkedin.com/in/tony-akinyemi/)


