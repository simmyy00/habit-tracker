# Habit Tracker Web App

---

## Overview

The Habit Tracker is a simple and interactive web application designed to help users build and maintain daily habits. Users can add habits, track their progress, and stay motivated through a streak system and completion tracking.

The project focuses on demonstrating core front-end development skills using HTML, CSS, and JavaScript, with an emphasis on interactivity, data persistence, and user experience.

---

## Purpose

The purpose of this project is to create a functional and user-friendly tool that encourages consistency in daily routines. It also serves as a demonstration of JavaScript-driven interactivity and structured front-end development.

---

## Features

* Add new habits
* Mark habits as completed
* Delete habits
* Streak tracking system (increments daily)
* Dark mode toggle
* Progress tracker (completed vs total habits)
* Data persistence using localStorage
* Empty state message when no habits exist

---

## User Stories

| User Type | Goal                   | Reason                        |
| --------- | ---------------------- | ----------------------------- |
| User      | Add a habit            | To track daily routines       |
| User      | Mark habit as complete | To monitor progress           |
| User      | See streak count       | To stay motivated             |
| User      | Delete a habit         | To remove irrelevant tasks    |
| User      | Toggle dark mode       | For better visual comfort     |
| User      | View progress          | To understand completion rate |

---

## Technologies Used

* HTML5 – Structure
* CSS3 – Styling and layout
* JavaScript (ES6) – Interactivity and logic
* localStorage – Data persistence

---

## Design and User Experience

The application was designed with simplicity and usability in mind:

* Clean and minimal interface
* Clear visual feedback for completed habits
* Responsive layout suitable for different screen sizes
* Dark mode option for improved accessibility
* Logical layout with clear hierarchy

---

## Testing

The application was manually tested to ensure all features function correctly:

* Habits can be added successfully
* Empty inputs are prevented
* Habits can be marked as completed
* Streak system updates correctly (once per day)
* Habits can be deleted without errors
* Data persists after page refresh
* Dark mode preference is saved
* Progress tracker updates dynamically

### Known Issues

* Streak system does not reset automatically if a day is missed
* No calendar-based tracking for long-term habit analysis

---

## Challenges and Solutions

### JavaScript Not Executing

Initially, the application appeared unresponsive, with buttons not functioning. This was caused by the script running before the DOM had fully loaded.

**Solution:**
Wrapped all JavaScript inside a `DOMContentLoaded` event listener to ensure elements were available before interaction.

---

### GitHub Authentication Errors

During deployment, multiple permission errors occurred due to incorrect authentication and the use of a password instead of a personal access token.

**Solution:**
Generated and used a GitHub Personal Access Token and reset stored credentials to ensure proper authentication.

---

### Commit History Issues

Previous submissions lacked a clear development process, with too few commits.

**Solution:**
Implemented a structured commit workflow with multiple small, descriptive commits representing each stage of development.

---

### JavaScript Event Handling Issues

Some functions were not accessible from inline HTML event handlers.

**Solution:**
Attached functions to the global `window` object to ensure accessibility.

---

## Deployment

The project was deployed using GitHub Pages.

### Steps:

1. The project was pushed to a GitHub repository
2. Navigated to Settings → Pages
3. Selected the main branch as the source
4. Saved settings to generate a live URL

---

## Live Project

Live Site:  https://simmyy00.github.io/habit-tracker/

Repository: https://github.com/simmyy00/habit-tracker

---

## Project Structure

* index.html
* style.css
* script.js
* README.md

---

## Future Improvements

* Add calendar-based habit tracking
* Improve streak logic with missed-day resets
* Add habit categories
* Enhance UI with animations
* Add user accounts for multi-device syncing

---

## Credits

This project was developed as part of a front-end development course to demonstrate interactive JavaScript functionality and a structured development workflow.
