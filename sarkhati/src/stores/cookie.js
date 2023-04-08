// stores/counter.js
import { defineStore } from 'pinia'

export const useCookieStore = defineStore('cookie', {
  state: () => {
    return { 
        cookie: '',
        logged: false,
        authentication: ''
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    submit(cookie) {
      this.cookie = cookie
    },
    login(cookie,authentication){
        this.cookie = cookie
        this.logged = true
        this.authentication = authentication
    }
  },
  persist: {
    storage: localStorage,
  },
})
