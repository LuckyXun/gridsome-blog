/*
 * @Author: XunL
 * @Date: 2021-07-17 10:41:16
 * @LastEditTime: 2021-07-17 12:59:01
 * @Description: file content
 */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/font/fontawesome.js'
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/index.css';


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
