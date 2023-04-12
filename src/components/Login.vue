<template>
    <v-container class="fill-height">
        <v-responsive class="d-flex align-center text-center fill-height">
            <v-row class="d-flex align-center justify-center">
                <v-col cols="6">
                    <v-form @submit.prevent>
                        <v-textarea 
                            clearable 
                            label="Cookie Login: " 
                            rows="5"
                            v-model="cookie"
                        />
                        <v-btn
                            :loading="loading"
                            class="flex-grow-1"
                            height="48"
                            variant="flat"
                            color="green-darken-1"
                            type="submit"
                            @click="load"
                        >
                            Login
                        </v-btn>
                    </v-form>
                    
                </v-col>
            </v-row>
            <v-snackbar
                v-model="snackbar.activate"
                elevation="24"
                variant="elevated"
                :timeout="2000"
                :color="snackbar.status"
                location="bottom right"
                >
                <v-icon :icon="snackbar.icon"></v-icon>
                {{snackbar.text}}
            </v-snackbar>
        </v-responsive>
    </v-container>
</template>

<script>
import router from '@/router';
import { useCookieStore } from '@/stores/cookie'

const cookie = useCookieStore()
export default {
    data: () => ({ 
        loading: false,
        loginStatus: "primary",
        cookie: '',
        snackbar: {
            activate: false,
            status: "danger",
            text: "",
            icon: ""
        },
        }),
    methods: {
        async load () {
            this.loading = true
            const regex = /(?<=__apitoken__=)([^;]+)/;
            if (regex.exec(this.cookie)) {
                const authentication = regex.exec(this.cookie)[0]
                const result = await fetch("/V1/Accounting/Remain", {
                    "credentials": "include",
                    "headers": {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0",
                        "Accept": "*/*",
                        "Accept-Language": "en-US,en;q=0.5",
                        "X-Requested-With": "XMLHttpRequest",
                        "Authorization": "BasicAuthentication " + authentication,
                        "Sec-Fetch-Dest": "empty",
                        "Sec-Fetch-Mode": "cors",
                        "Sec-Fetch-Site": "same-site",
                        "Pragma": "no-cache",
                        "Cache-Control": "no-cache"
                    },
                    "referrer": "https://online.oibourse.ir/",
                    "method": "GET",
                    "Access-Control-Allow-Origin": "*",
                    "Host": "https://online.oibourse.ir/",
                    "Origin": "https://online.oibourse.ir/",
                    "mode": "cors"
                }).then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.IsSuccessfull) {
                        this.loading = false
                        // cookie.login(this.cookie,authentication)
                        this.$router.push("/sarkhat/")
                    }
                })
            } else {
                this.snackbar.activate = true
                this.snackbar.status = "red-accent-3"
                this.snackbar.text = "Cookie is not correct."
                this.snackbar.icon = "mdi-alert-rhombus-outline"
                this.loading = false
            }
            
            
      },
    },
}
</script>

<style>

</style>