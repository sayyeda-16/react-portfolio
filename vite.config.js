import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration for GitHub Pages Deployment
const REPO_NAME = '/react-portfolio/'

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base path for assets in production (required for GitHub Pages deployment)
  // This ensures CSS/JS/images load correctly when hosted in a subdirectory (your repository)
  base: process.env.NODE_ENV === 'production' ? REPO_NAME : '/',

  // List of Vite plugins to use
  plugins: [react()],

  // Configuration for CSS
  css: {
    // Enable CSS Modules configuration
    modules: {
      // Use camelCase for local class names when importing CSS modules
      localsConvention: "camelCase"
    }
  }
});