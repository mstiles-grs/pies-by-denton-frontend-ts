// useGlobal.ts
import axios from './axios'; // Update this import path according to your project structure
import router from './router'; // Update this import path according to your project structure

export function useGlobal() {
  return {
    $axios: axios,
    $router: router,
  };
}
