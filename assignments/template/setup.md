# Setup Steps

## Create React app

```sh
npx create-react-app assignment-x
```

## Start the development server

```sh
npm start
```

## Build the app for production

```sh
npm run build
```

## Start the test runner

```sh
npm start
```

## Eject the tool (Note: This is irreversible!)

```sh
npm run eject
```

## Tailwind

```sh
npm install -D tailwindcss
npx tailwindcss init
```

To add Tailwind CSS to your project, follow these steps:

1. Install Tailwind CSS and its dependencies.
2. Configure Tailwind CSS for your project.

Update your `package.json` file:

```json
{
  "name": "assignment-x",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4",
    "tailwindcss": "^3.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

Create a Tailwind configuration file:

```sh
npx tailwindcss init
```

Include Tailwind CSS in your project's CSS files (e.g., `src/index.css`):

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

With these steps completed, Tailwind CSS should now be installed and configured in your React project.

```sh
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
```

## Creating a React Project using Vite

To create a React project using Vite, you can follow these steps:

1. **Install Node.js**: Make sure you have Node.js installed on your machine. You can download and install it from [Node.js website](https://nodejs.org/).

2. **Create a New React Project**: Open your terminal and navigate to the directory where you want to create your project. Then run the following command to create a new React project using Create React App (CRA):

   ```bash
   npx create-react-app my-vite-react-project
   ```

3. **Install Vite as a Development Dependency**: Once your React project is created, navigate into the project directory and install Vite as a development dependency:

   ```bash
   cd my-vite-react-project
   npm install --save-dev vite
   ```

4. **Set up Vite Configuration**: Create a `vite.config.js` file in the root of your project directory with the following content:

   ```javascript
   import { defineConfig } from 'vite';
   import reactRefresh from '@vitejs/plugin-react-refresh';

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [reactRefresh()],
   });
   ```

5. **Modify Scripts in `package.json`**: Modify the scripts in your `package.json` file to use Vite for development:

   ```json
   "scripts": {
     "start": "vite",
     "build": "react-scripts build",
     "test": "react-scripts test",
     "eject": "react-scripts eject"
   }
   ```

6. **Run the Development Server**: Now you can start the development server using Vite:

   ```bash
   npm start
   ```

   This will start the development server using Vite, which provides fast hot module reloading (HMR) and other modern build features.

7. **Build Your Project**: When you're ready to build your project for production, you can still use Create React App's build script:

   ```bash
   npm run build
   ```

---

```sh
npx create-vite my-app-example --template react
```

## Understanding the Difference: JavaScript vs. JavaScript + SWC

JavaScript and "JavaScript + SWC" refer to different ways of working with JavaScript code, particularly in the context of web development. Here's a breakdown of the key differences between the two:

1. **JavaScript (JS) Alone**: This refers to using plain JavaScript code without any additional tools or pre-processing. Developers write JavaScript code directly and execute it in the browser or server-side environment without any intermediate steps.

2. **JavaScript + SWC**: SWC (Speedy Web Compiler) is a tool for transforming JavaScript code. It is particularly known for its fast performance and support for modern JavaScript features. When using JavaScript + SWC, developers write JavaScript code as usual, but before deploying it, they pass it through the SWC compiler. SWC then transforms the code, optimizing it for performance and compatibility, and produces optimized JavaScript output.

Here are some key points about JavaScript + SWC:

- **Performance**: SWC is designed to optimize JavaScript code for better performance. It can produce output that is more efficient and executes faster compared to traditional JavaScript code.

- **Compatibility**: SWC supports modern JavaScript features such as ES6, ES7, and beyond. It ensures that code written using the latest language features can be transformed into a version compatible with older browsers or environments that do not support those features natively.

- **Tooling**: JavaScript + SWC is often used in conjunction with other development tools and workflows. For example, it can be integrated into build systems like webpack or used with frameworks like React or Vue.js to optimize the entire development process.

In summary, while JavaScript alone is the standard language for web development, JavaScript + SWC offers additional benefits such as performance optimization and support for modern language features, making it a compelling choice for many developers.
