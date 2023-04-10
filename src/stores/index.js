// store.js
import { reactive } from 'vue'

export const store = reactive({
  cookie: '',
  submitCookie(cookie){
    this.cookie = cookie
  }
})
