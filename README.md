# Recipe Book Application OOP Integration
## rebin reji vazhavilayil , Joyal Gregory
## Overview

The Recipe Book application utilizes Object-Oriented Programming (OOP) principles to structure the code effectively and enhance code maintenance and scalability. By organizing functionality into reusable classes, the application becomes more modular, making it easier to expand and manage in the future.

**Classes and Their Responsibilities**
Recipe Class

Purpose: The Recipe class represents a single recipe, encapsulating its properties and behaviors.
**Properties:**
name: A string that holds the name of the recipe.
ingredients: An array of strings representing the ingredients required for the recipe.
Constructor: Initializes a new instance of the Recipe class with a specified name and ingredients list.

## How I Built It

1. **HTML Structure**: Created a basic layout with input fields for the recipe name and ingredients, along with a submission button.
2. **JavaScript**:
   - Implemented event listeners for user interactions, capturing input when the button is clicked.
   - Added validation to ensure both fields are filled before submission.
   - Used DOM manipulation to display the entered recipes in a formatted manner.
3. **Styling**: Basic styling using CSS was applied to enhance visual clarity and usability.

## Installation

To get a copy of the Recipe Book Application running on your local machine, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine. You can check if it’s installed by running:

```
node -v
npm init -y
npm install parcel
```

### Clone the Repository

1. **Clone the Repository**:
   ```
   git clone https://github.com/JoyxL/Gregory_Joyal_rebin_reji_vazhavilayil.git
   ```

2. **Navigate to the Project Directory**:
   ```
   cd Gregory_Joyal_rebin_reji_vazhavilayil
   ```

### Install Dependencies

If there are any dependencies, install them using npm:

```
npm install
```

### Open the Application

- Open the `index.html` file in a web browser of your choice.
```
npx parcel src/index.html
```

## Usage

1. Enter a recipe name in the "Recipe Name" input field.
2. Enter the recipe ingredients in the "Ingredients" input field, separated by commas.
3. Click the "Add Recipe" button to display the recipe.
4. An alert will prompt you if either field is empty.

## License

This project is licensed under the MIT License.

---
