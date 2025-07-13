# Armando Saboia - Personal Portfolio

Welcome to my personal portfolio, showcasing my work as a Data Scientist/Engineer and Freelance Consultant.

## About Me

I'm a Data Scientist with a BSc degree in data science, machine learning, and data analysis. I thrive on tackling challenging problems and have a proven track record of developing data-driven solutions that provide significant business value.

My expertise lies in the full data science lifecycle: from data collection and preprocessing to model development, deployment, and monitoring. I'm proficient with Python and its data science ecosystem (Pandas, NumPy, Scikit-learn, PyTorch), and experienced in deploying models using tools like Streamlit and Docker.

## Features

- **Responsive Design**: Built with React and Tailwind CSS for a seamless experience across devices.
- **Dynamic Project Listing**: Fetches and displays my latest projects from GitHub (with a fallback to hardcoded data).
- **Contact Information**: Easy access to my GitHub, LinkedIn, and email.
- **Skills Section**: Highlights my core technical skills.

## Technologies Used

- React.js
- Tailwind CSS
- Lucide React (for icons)
- GitHub API

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ArmandoSaboia/armandosaboia.github.io.git
    cd armando-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```
    This will open the application in your browser at `http://localhost:3000`.

## Important Note on Building the Project

During the development of this project, a persistent issue was encountered with the `npm run build` command related to Tailwind CSS and PostCSS configuration within the `create-react-app` environment. The error message consistently indicated:

```
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
```

Despite attempts to resolve this by installing `@tailwindcss/postcss`, adjusting `postcss.config.js` in various ways, and reinstalling dependencies, the build issue remains. This suggests a potential incompatibility between the specific versions of `tailwindcss` (v4 initially, then v3), `postcss`, `autoprefixer`, and `react-scripts` (used by `create-react-app`), or an environmental factor.

**If you encounter this build error, here are some potential troubleshooting steps:**

-   **Verify Tailwind CSS and PostCSS versions:** Ensure compatibility between `tailwindcss`, `postcss`, `autoprefixer`, and `react-scripts`. You might need to experiment with different version combinations.
-   **Consult `create-react-app` and Tailwind CSS documentation:** Refer to the official documentation for the latest recommended setup for integrating Tailwind CSS with `create-react-app`.
-   **Clear npm cache and reinstall:** Sometimes, a fresh installation can resolve dependency conflicts:
    ```bash
    npm cache clean --force
    rm -rf node_modules package-lock.json
    npm install
    ```
-   **Consider alternative build tools:** If the issue persists, you might consider ejecting from `create-react-app` (use `npm run eject` - **this is irreversible!**) to gain full control over the Webpack configuration, or migrating to a different build tool like Vite or Next.js, which often have more straightforward Tailwind CSS integration.

## Project Structure

```
armando-portfolio/
├── public/
│   ├── assets/             # Place your profile image (e.g., profile.jpg) here
│   └── ...
├── src/
│   ├── App.js              # Main React component
│   ├── index.css           # Tailwind CSS imports
│   └── ...
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Customization

-   **Profile Image**: Place your profile image (e.g., `profile.jpg`) in the `public/assets/` directory. The `src/App.js` file is configured to look for `/assets/profile.jpg`.
-   **Projects**: Update the `fallbackProjects` array in `src/App.js` with your actual project details (name, GitHub URL, description).
-   **Contact Information**: Modify the links in the `Header` and `Hero Section` in `src/App.js` to your GitHub, LinkedIn, and email.
-   **About Me & Skills**: Edit the content in the `About Me Section` in `src/App.js` to reflect your experience and skills.

## License

This project is open source and available under the [MIT License](LICENSE).