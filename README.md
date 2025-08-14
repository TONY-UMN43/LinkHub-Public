# LinkHub
A Full-Stack Project that has core LinkedIn features such as user authentication, job postings, user feeds, and company profiles.
## License
This project is for **viewing purposes only**.  
Do not copy, modify, or redistribute any part of this code without explicit permission.  
© 2025 Tony Akinyemi. All rights reserved.



## Description
LinkHub is a professional networking project that was inspired by LinkedIn.

The user flow for this project is that the user either creates an account or logins to an existing one, they see post on their user feed and they also have the ability to look all the jobs posted recently to last on their user feed. Google Gemini was used for the CSS design of this application to create a user-friendly experience where the UI of this application is able to run on tablets, phones, laptops, and desktops. This design choice was made because it was impractical to test the UI of this project across hundreds of different screens and many different browsers.

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
- Backend: FasAPI
- Database: PostgreSQL


## How to Run (Only for Recruiters)
- Contact the email listed in the "Contact Me" section down below for full repo
- git clone git@github.com_NAME_
- cd LinkHub
- cd Backend
- pip install -r requirements.txt
- cd ../frontend
- npm install
- Create .env file and create these variables
  - DATABASE = "my_database_connection"
  - REACT_APP_API_BASE = http://localhost:8000
- cd Backend
- run "python3 -m venv venv"
- run "source ./venv/bin/activate"
- "uvicorn main:app --reload"
- Run the application from there

## Project Goal
The goal of designing this project was to gain practical experience with software engineering and to see how real-world social media applications store data and handle features such as user authentication and user feeds. React and PostgreSQL, in particular, are used in many real-world applications such as Instagram, Facebook, YouTube, and more. By using these real-world tools to build this project, it was a very valuable learning experience of how real-world applications work behind the scenes.  

# Screenshots
| User Profile | User Feed |
|--------------|-----------|
| ![User-Profile Page](assets/Screen-shot-user-profile.png) | ![User-Feed Page](assets/Screen-shot-user-feed.png) |

| Home Page |
|-----------|
| ![Home Page](assets/Screen-shot-home.png) | ![Mobile View](assets/mobile.png) |


## Future Improvements
- Implement a Redis cache system to decrease latency and load times
- Add role-specific privileges for employees added to the company
  - HR & Recruiters can create job postings and review applications
  - The owner can edit the company profile
  - General members are listed under company employees, but don't have any other privileges
- Add Job Application process
  - Allow users to fill out LinkedIn Job application on website
  - Add a way for users to view their job applications
  - Add a pipeline for accepted job applicants
- Add ability for users to upload profile pictures


## Contact Me
- Email: tony.akinyemi5@gmail.com
- LinkedIn: [Tony Akinyemi](https://www.linkedin.com/in/tony-akinyemi/)


