<script lang="ts">
    import { login_status } from "../../store";
    import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
    import { get } from 'svelte/store';

    get(login_status);

    let username = '';
    let password = '';
    let click_password_input = false;

    let test_username = 'test';
    let test_password = 'test';

    const toastStore = getToastStore();
    const login_fail_t: ToastSettings = {
		message: '⚠️ Error: Username or Password is incorrect',
	};

    function login() {
        if (username == test_username && password == test_password) {
            console.log('login success');
            login_status.set(true);
            console.log($login_status);
            // sleep 1 second
            setTimeout(() => {
                window.location.href = '../';
            }, 1000);
        } else {
            console.log('login failed');
            toastStore.trigger(login_fail_t);
        }
    }

    let year = new Date().getFullYear();
</script>

<!-- login text -->

<div class="flex flex-col items-center justify-center h-screen">

    <div class="flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold text-gray-200">Login</h1>
        <p class="text-gray-400 mb-8">Welcome back!</p>
    </div>

    <div class="w-full max-w-md">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    bind:value={username}
                />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******"
                    bind:value={password}
                    on:click={() => { click_password_input = true;}}
                />
                {#if click_password_input && password == ''}
                    <p class="text-red-500 text-xs italic">Please input a password.</p>
                {/if}
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    on:click={login}
                >
                    Login
                </button>
                <a
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
                <a
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="../signup"
                >
                    Sign Up
                </a>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy; {year} AI CUP. All rights reserved.
        </p>
    </div>
</div>