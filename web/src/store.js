/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-01-27 19:58:29
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-01-27 22:41:53
 * @FilePath: /NTTU_AI_CUP/web/src/store.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

// get local storage
// export const token = writable(localStorage.getItem('token'));

export const login_status = localStorageStore('login_status', false);
export const storeExample = localStorageStore('storeExample', 'initialValueHere');