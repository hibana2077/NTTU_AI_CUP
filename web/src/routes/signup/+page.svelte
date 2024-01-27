<script lang="ts">
    import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
    let username = '';
    let password = '';
    let email = '';

    let year = new Date().getFullYear();
    const toastStore = getToastStore();
    
    function signup() {
        if (username == '') {
            const username_empty_t: ToastSettings = {
                message: '⚠️ Error: Please input a username',
            };
            toastStore.trigger(username_empty_t);
        } else if (password == '') {
            const password_empty_t: ToastSettings = {
                message: '⚠️ Error: Please input a password',
            };
            toastStore.trigger(password_empty_t);
        } else if (password.length < 8) {
            const password_short_t: ToastSettings = {
                message: '⚠️ Error: Please input at least 8 characters',
            };
            toastStore.trigger(password_short_t);
        } else if (email == '') {
            const email_empty_t: ToastSettings = {
                message: '⚠️ Error: Please input an email',
            };
            toastStore.trigger(email_empty_t);
        } else if (!email.includes('@')) {
            const email_invalid_t: ToastSettings = {
                message: '⚠️ Error: Please input a valid email',
            };
            toastStore.trigger(email_invalid_t);
        } else {
            // Add API logic here
            const signup_success_t: ToastSettings = {
                message: '✅ Sign up successfully!',
            };
            toastStore.trigger(signup_success_t);
            window.location.href = './login';
        }
    }
</script>

<!-- signup text -->

<div class="flex flex-col items-center justify-center h-screen">

    <div class="flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold text-gray-200">Sign up</h1>
        <p class="text-gray-400 mb-8">Welcome to AI CUP!</p>
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
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******"
                    bind:value={password}
                />
                {#if password != '' && password.length < 8}
                    <p class="text-red-500 text-xs italic">Please input at least 8 characters.</p>
                {/if}
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="aicup@example.com"
                    bind:value={email}
                />
                {#if email != '' && !email.includes('@')}
                    <p class="text-red-500 text-xs italic">Please input a valid email.</p>
                {/if}
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    on:click={() => {
                        console.log(username, password, email);
                        signup();
                    }}
                >
                    Sign Up
                </button>
                <a
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="./login"
                >
                    Login
                </a>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy; {year} AI CUP. All rights reserved.
        </p>
    </div>
</div>