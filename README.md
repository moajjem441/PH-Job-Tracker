# Job Application Tracker

A lightweight job application tracker built with vanilla JavaScript. It lets you review a set of available opportunities, move applications between interview and rejected views, monitor status counts, and remove jobs from the main list.

## Features

- View all available job applications in one list.
- See total, interview, and rejected application counts at a glance.
- Mark an application as `INTERVIEWED` or `REJECTED`.
- Switch between All, Interview, and Rejected views.
- Display an empty-state message when a filtered view has no applications.
- Delete an application after confirmation.
- Responsive layout for desktop, tablet, and mobile screens.

## Tech Stack

- HTML5
- CSS utility classes from Tailwind CSS via the browser CDN
- daisyUI via CDN
- Vanilla JavaScript
- Font Awesome for icons
- Google Fonts: Manrope, Inter, and Outfit

## Project Structure

```text
.
├── index.html                # Application markup and starter job data
├── assets/
│   └── jobs.png              # Empty-state illustration
├── script/
│   ├── common.js             # View switching, active buttons, and shared UI logic
│   ├── all.js                # Counts, status changes, event delegation, and deletion
│   ├── interview.js          # Interview list rendering
│   └── rejected.js           # Rejected list rendering
├── tailwind.config.js        # Tailwind configuration placeholder
└── README.md
```

## Getting Started

This is a static front-end project, so no package installation or build step is required.

### Run locally

1. Clone or download the repository.
2. Open the project folder in a code editor.
3. Open `index.html` in a modern web browser.

For a smoother development workflow, serve the folder with any local static server. For example, with VS Code, use the Live Server extension and open `index.html`.

The page requires an internet connection when it loads because Tailwind CSS, daisyUI, Font Awesome, and Google Fonts are loaded from CDNs.

## How to Use

1. Start on the **All** view to see the available jobs.
2. Select **INTERVIEW** on a job to mark it as interviewed.
3. Select **REJECTED** to move it to the rejected list.
4. Use the top filters to view all jobs, interviewed jobs, or rejected jobs.
5. Select the trash icon and confirm the prompt to remove a job.

An application can move from one status list to the other. For example, marking a rejected application as an interview removes it from the rejected list and adds it to the interview list.

## State and Data

- The starter jobs are defined directly in `index.html`.
- Interview and rejected lists are held in JavaScript arrays in memory.
- There is no database, API, authentication, or local-storage integration.
- All status changes are lost when the page is refreshed.
- There is no form for adding new jobs; the tracker operates on the supplied starter jobs.

## Implementation Notes

- Click handling is implemented with event delegation on the main content area, so status and delete actions work for dynamically rendered cards.
- `common.js` controls which list is visible and updates the selected filter styling.
- `all.js` maintains shared counts and the current filter state.
- `interview.js` and `rejected.js` rebuild their filtered card lists from the in-memory status arrays.
- The empty-state illustration is shown when either filtered list has no entries.

## Browser Support

Use a current version of Chrome, Edge, Firefox, or Safari with JavaScript enabled. Because the project uses modern DOM APIs and external CDN resources, older browsers may not render it correctly.

## License

This project is an educational assignment and does not currently include a separate license file.


