<template>
    <div class="flex flex-col h-screen">
      <div class="flex flex-col md:flex-row h-screen">
        <div class="bg-pink-600 text-white py-32 px-10 md:w-1/2 relative overflow-hidden">
          <div class="absolute inset-0 w-full h-full z-10 opacity-25 bg-gradient-to-r from-pink-800"></div>
          <div class="absolute inset-0 w-full h-full z-20 opacity-25 bg-gradient-to-r from-pink-800"></div>
          <div class="absolute inset-0 w-full h-full z-30 flex items-center justify-center">
              <div class="w-40 h-40 relative">
                  <div class="pie-side-animation">
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    <div class="line-3"></div>
                  </div>
                </div>
          </div>
          <div class="absolute inset-0 w-full h-full z-40 flex items-center justify-center">
            <h1 class="text-4xl font-bold">Pies by Denton</h1>
          </div>
        </div>
        <div class="bg-white p-10 md:w-1/2 flex items-center justify-center">
          <form class="w-full max-w-md">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
              </label>
              <input
              v-model="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 font-bold mb-2" for="password">
                Password
              </label>
              <input
                v-model="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="login"
                >
                Sign In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
  import { useGlobal } from '../UseGlobal'; // Update this import path according to your project structure

  const email = ref('');
  const password = ref('');
  const { $axios, $router } = useGlobal();

  const login = async () => {
    try {
      const response = await $axios.post('/login/user', {
        email: email.value,
        password: password.value,
      });

      if (response.status === 200) {
        // Navigate the user to the dashboard
        $router.push('/dashboard/');
      } else {
        // Handle invalid login
        // TODO: Figure out if you want a pop-up or a message near the bottom of Log in.
      }

      // Reset form fields and state
      email.value = '';
      password.value = '';
    } catch (err) {
      console.error(err);
    }
  };
  </script>


<style>

.pie-side-animation {
  background: linear-gradient(to right, #fcbf49, #fa9425);
  border-radius: 50% 50% 40% 60% / 50% 50% 60% 40%;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-15deg);
  animation: pie-bake 2s ease-in-out infinite;
}

.line-1, .line-2, .line-3 {
  position: absolute;
  width: 0.75rem;
  height: 1.5rem;
  background-color: #ff6347;
  border-radius: 0.5rem;
  transform: translateY(-2rem);
  animation: line-shake 2s ease-in-out infinite;
}

.line-1 {
  left: 1rem;
}

.line-2 {
  left: 3.5rem;
}

.line-3 {
  left: 6rem;
}

@keyframes pie-bake {
  0% {
    transform: rotate(-15deg);
    box-shadow: 0px 5px 0px #fa9425;
  }
  25% {
    transform: rotate(15deg);
    box-shadow: 0px 5px 0px #fa9425;
  }
  50% {
    transform: rotate(-15deg);
    box-shadow: 0px 5px 0px #fa9425;
  }
  75% {
    transform: rotate(15deg);
    box-shadow: 0px 5px 0px #fa9425;
  }
  100% {
    transform: rotate(-15deg);
    box-shadow: 0px 5px 0px #fa9425;
  }
}

@keyframes line-shake {
  0%, 100% {
    transform: translateY(-2rem);
  }
  50% {
    transform: translateY(-3rem);
  }
}


</style>