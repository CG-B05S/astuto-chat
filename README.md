# Astuto Chat

Welcome to Astuto Chat! Astuto Chat is a conversational chat interface that provides insights and answers to common questions related to cloud costs and savings. It uses a predefined dataset to offer suggestions and insights based on user queries.

You can access the deployed application on [Netlify](https://astuto-chat.netlify.app/).

## Features

- **Conversational Interface**: Chat with the bot to get insights on cloud costs and savings.
- **Suggested Responses**: Click on suggested messages to get detailed responses.
- **Interactive Charts**: View pie charts and Sankey diagrams to visualize data.
- **Feedback System**: Provide feedback on the responses received.
- **Export Data**: Export data for further analysis.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **React Google Charts**: For rendering interactive charts.
- **FontAwesome**: For icons.
- **JSON**: Data source for messages and responses.
- **Tailwind**: For styling

## Components

### App.js

This is the main component that handles the state management and rendering of the chat interface. It manages messages, suggestions, and loading states. The component also handles sending and receiving messages, and scrolling to the latest message.

### ButtonActions.js

This component renders buttons for adding to dashboard, exporting data, or ending the prototype. It receives props to handle different actions.

### Card.js

This component renders a card with tips, title, and body content. It's used to display saving areas or any additional information.

### EnterMessage.js

This component renders the input field for typing messages. It captures user input and sends it to the parent component to handle the message.

### Feedback.js

This component provides a thumbs up/down feedback system for user satisfaction.

### ReceivedMessage.js

This component renders the received messages from the bot. It displays the bot's response, charts (if any), and additional information in the form of cards.

### SentMessage.js

This component renders the sent messages from the user.

### Suggetions.js

This component renders suggested messages. It provides clickable suggestions that the user can click to send as a message.

## Data

The `data.json` file contains predefined messages, topics, responses, and chart data used by the bot to provide insights and answers.

## How to Run Locally

1. Clone the repository:
  `git clone https://github.com/CG-B05S/astuto-chat.git`

2. Navigate to the project directory:
  `cd astuto-chat`

3. Install dependencies:
  `npm install`

4. Run the app
  `npm start`

6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Feedback

We welcome your feedback! Feel free to provide feedback through the chat interface or by raising issues on GitHub.

---

Thank you for checking out Astuto Chat! We hope you find it helpful and informative.
