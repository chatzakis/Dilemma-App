# Dilemma App | Node.js - MongoDB API

A simple web application for users to create and answer dilemmas (questions with two possible answers). The app allows users to choose between two options, incrementing the count of the selected answer. After the selection, they get the Percentage of users that answered the same way! The users can also submit their own questions to the DB. Built using **Node.js, Express.js, and MongoDB**, the app also includes a clean frontend for user interaction.

## Images
### Main page
![dilemma-quiz-1](https://github.com/user-attachments/assets/013673e3-1fcd-4ee9-bdf8-3ddac0bdbb86)

### Feedback for player choice
![dilemma-quiz-2](https://github.com/user-attachments/assets/060a0858-3cbc-46e5-92d4-ec1a2b459225)

### Submit your question
![dilemma-quiz-3](https://github.com/user-attachments/assets/e385902e-aa63-4582-afe5-87be558924f8)

## Features

- Submit dilemmas (questions with two answers)
- Vote for one of the two options in each question
- Track how many users have selected each answer
- Backend API built with Express.js

### Responsive design
![dilemma-quiz-4](https://github.com/user-attachments/assets/86fb6db3-3cb9-44b6-9083-e49abcd57639)

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: HTML, CSS - Bootstrap, Javascript
- **Other**: Mongoose (ODM for MongoDB), JavaScript (for interaction between frontend and backend)

### Database preview (MongoDB Cloud)
![dilemma-quiz-5](https://github.com/user-attachments/assets/db355489-bdbe-49d2-a681-7df3715ab693)

## Getting Started

### Prerequisites

To run this project locally, you need the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/chatzakis/Dilemma-App.git
    cd Dilemma-App
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env` file in the root directory. Example `.env` file:
    ```env
    MONGO_URI=mongodb://localhost:27017/dilemma_app
    PORT=3000
    ```

4. Start the server:
    ```bash
    npm start
    ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

### API Endpoints

- **GET /questions**: Fetch 10 random question
- **GET /questions/:num**: Fetch :num random question
- **PATCH /questions/:questionId/answer/:answerId**: Increment the count of a selected answer
- **POST /questions**: Submit a new question with two answers

### Frontend

- The frontend page allows users to fetch questions, submit answers, and view the results dynamically.


## Community Guidelines

Please follow the community guidelines when submitting questions or interacting with the app:

- Be respectful and use appropriate language
- Avoid sensitive topics like politics or religion
- Do not submit explicit or inappropriate content
- Stay positive and create engaging questions for users

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
