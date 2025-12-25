Suwen Campaign Popup Project

This project is a simple campaign landing page built with vanilla HTML, CSS and JavaScript.

Live Demo
https://anlaydn11.github.io/personaclick-SuwenStudyCase/

Features
- Campaign popup appears after 10 seconds
- Popup is shown only twice:
 - First visit
 - Second time after 2 hours
- Popup logic persists after page refresh and browser restart
- Dismissible popup
- Responsive campaign layout
- Navbar with search, login and cart icons
- Snow animation effect on campaign images

Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript

How to Run
Simply open `index.html` in your browser.

Notes
This project was built without any frameworks as requested.
Why localStorage?

`localStorage` was used to persist popup state across page refreshes and browser restarts.

Reasons for using `localStorage`:
- Data persists even after browser restart
- Simple key-value API
- No backend or cookies required
- Ensures popup display rules are not broken by page refresh

Using `sessionStorage` was avoided because it resets when the browser tab is closed, which would break the 2-hour popup logic.
