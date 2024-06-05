#!/bin/bash

# Prompt the user for the assignment number
read -p "Enter the number of the assignment: " assignment_number

# Validate the input (check if it's a positive integer)
if ! [[ "$assignment_number" =~ ^[0-9]+$ ]]; then
    echo "Error: Please enter a valid positive integer."
    exit 1
fi

# Create the assignment directory using npx create-vite
npx create-vite assignment-$assignment_number --template react

# Change directory to the created assignment
cd assignment-$assignment_number || { echo "Directory not found!"; exit 1; }

# Delete the specified files
rm -f public/vite.svg src/assets/react.svg

# Install the dependencies
npm install

# Install Tailwind CSS and other dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install axios
npm install react-router-dom

# Install react-icons
npm install react-icons

# Start the development server
npm run dev
