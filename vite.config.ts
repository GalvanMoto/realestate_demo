import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Explicitly define the API key from the loaded environment variables
      // This stringifies the value so it can be injected into the client code
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      
      // Polyfill process.env as an empty object to prevent "ReferenceError: process is not defined"
      // crashing libraries or code that access process.env directly.
      'process.env': JSON.stringify({}),
    },
  };
});