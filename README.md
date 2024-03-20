# Calculator App

This is a simple calculator web application built with React. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

## High-level Explanation

The code consists of a single React component called Calculator. It manages the state of the calculator display value and handles button click events to update the display accordingly.

## Technical Choices

- **React**: Chosen for its simplicity in building UI components and managing state.
- **CSS Grid**: Used for layout and responsive design of calculator buttons.
- **useState Hook**: Used to manage the display value state.
- **CSS Modules**: Used for local CSS styling to ensure encapsulation and maintainability.

## Trade-offs

- **Eval Function**: Used for simplicity in evaluating mathematical expressions. However, it's not recommended for production use due to security risks.
- **Limited Error Handling**: Basic error handling is implemented, but it could be improved for better user experience.
- **Single Component**: While suitable for a small project like this, breaking down the component into smaller ones could improve readability and maintainability for larger projects.

## Additional Improvements

- **Keyboard Support**: Adding keyboard event listeners to allow users to input numbers and operators via keyboard.
- **Unit Tests**: Writing unit tests to ensure component functionality and prevent regressions.
- **Theme Support**: Implementing theme functionality to allow users to switch between light and dark themes.
- **Accessibility**: Ensuring the calculator is accessible to users with disabilities by adding ARIA attributes and focus management.

## Deployment

The calculator app is deployed and hosted on Vercel. You can access it. [here](https://calculator-app-task.vercel.app/)

## Authorship

This code was written by [Your Name]. I take pride in the simplicity and functionality of the Calculator component, which effectively manages state and handles user interactions.

