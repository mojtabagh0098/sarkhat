<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <!-- <v-sheet width="180" class="mx-auto"> -->
            <!-- <v-form @submit.prevent> -->
                <v-col cols="2">
                    <v-text-field
                        v-model="startTime"
                        :rules="rules"
                        label="Start Time"
                    ></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-text-field
                        v-model="endTime"
                        :rules="rules"
                        label="End Time"
                    ></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-text-field
                        v-model="delay"
                        model-value="350"
                        :rules="rules"
                        label="Delay Time (mili seconds)"
                    ></v-text-field>
                </v-col>
                <v-col cols="1">
                    <v-row class="d-flex align-center justify-center">
                        <v-btn class="w-100" variant="flat" color="red" size="small" prepend-icon="mdi-stop" v-on:click="stop" :disabled="!this.botStatus" >Stop</v-btn>
                        <v-btn class="w-100 mt-3" variant="flat" color="green" size="small" prepend-icon="mdi-play" v-on:click="start" :disabled="this.botStatus" >Start</v-btn>
                    </v-row>
                </v-col>
            
            <!-- </v-form> -->
        <!-- </v-sheet> -->
      </v-row>
      <v-row class="d-flex align-center justify-center mt-10">
            <v-table height="300px">
                <thead>
                <tr>
                    <th class="text-right">
                    #
                    </th>
                    <th class="text-right">
                    Time
                    </th>
                    <th class="text-right">
                    Status
                    </th>
                    <th class="text-right">
                    Message
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="(item, index) in items"
                    :key="item.name"
                >
                    <td>{{ index }}</td>
                    <td>{{ new Date(item.time).getHours() }}:{{ new Date(item.time).getMinutes() }}:{{ new Date(item.time).getSeconds() }}:{{ new Date(item.time).getMilliseconds() }}</td>
                    <td><v-chip variant="elevated" :color="(item.status) ? 'green': 'red'">{{ (item.status) ? 'Success': 'Failed' }}</v-chip></td>
                    <td>{{ item.message }}</td>
                </tr>
                </tbody>
            </v-table>
      </v-row>
    </v-responsive>
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
    <v-dialog
        transition="dialog-bottom-transition"
        width="auto"
        v-model="isActive"
      >
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
              title="Opening from the bottom"
            ></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">
                <VueCountdown :time="timeRemaining" v-slot="{ days, hours, minutes, seconds }">
                    Time Remaining：{{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
                </VueCountdown>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                variant="text"
                @click="isActive = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
  </v-container>
</template>

<script>
import { useCookieStore } from '@/stores/cookie'
import VueCountdown from '@chenfengyuan/vue-countdown';

const cookie = useCookieStore()
  export default {
    data: () => ({
      firstName: '',
      headers: [
        {
          title: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Calories', align: 'end', key: 'calories' },
        { title: 'Fat (g)', align: 'end', key: 'fat' },
        { title: 'Carbs (g)', align: 'end', key: 'carbs' },
        { title: 'Protein (g)', align: 'end', key: 'protein' },
        { title: 'Iron (%)', align: 'end', key: 'iron' },
      ],
      items: [],
      rules: [
        value => {
          if (value) return true

          return 'You must enter a first name.'
        },
      ],
      delay: 350,
      startTime: new Date().toLocaleString("en-GB",{hour: 'numeric', minute: 'numeric', second: 'numeric'}),
      endTime: new Date().toLocaleString("en-GB",{hour: 'numeric', minute: 'numeric', second: 'numeric'}),
      timerId: null,
      botStatus: false,
      snackbar: {
        activate: false,
        status: "danger",
        text: "",
        icon: ""
      },
      isActive: false,
      timeRemaining: 0,
      timeout: 0
    }),
    components: {
        VueCountdown,
    },
    methods: {
        start() {
            let start = new Date()
            let now = new Date().getTime()
            start.setHours(this.startTime.split(":")[0])
            start.setMinutes(this.startTime.split(":")[1])
            start.setSeconds(this.startTime.split(":")[2])
            let end = new Date()
            end.setHours(this.endTime.split(":")[0])
            end.setMinutes(this.endTime.split(":")[1])
            end.setSeconds(this.endTime.split(":")[2])
            if (now > end.getTime() && now < start.getTime()) {
                this.snackbar.activate = true
                this.snackbar.status = "red-accent-3"
                this.snackbar.text = "Time is out of range."
                this.snackbar.icon = "mdi-alert-rhombus-outline"
            } else {
                this.snackbar.activate = true
                this.snackbar.status = "green-accent-3"
                this.snackbar.text = "The bot started successfuly."
                this.snackbar.icon = "mdi-check-circle-outline"
                this.botStatus = true
                this.timeRemaining = start.getTime() - now
                this.isActive = true
                this.timeout = setTimeout(()=>{
                    this.timerId = setInterval(()=>{
                        let time = new Date().getTime()
                        if (time > start.getTime() && time < end.getTime()) {
                            this.isActive = false
                            this.buy(time)
                        }
                        else{
                            clearInterval( this.timerId );
                            this.botStatus = false
                        }
                    },300)
                },start.getTime() - now)
                
            }
        },
        stop(){
            clearInterval( this.timerId );
            clearTimeout(this.timeout);
            this.botStatus = false
        },
        async buy(time){
            await fetch("V1/Order/Post", {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0",
                    "Accept": "*/*",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Content-Type": "application/json",
                    "Authorization": "BasicAuthentication " + cookie.authentication,
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-site",
                    "Pragma": "no-cache",
                    "Cache-Control": "no-cache"
                },
                "referrer": "https://online.oibourse.ir/",
                "body": "{\"IsSymbolCautionAgreement\":false,\"CautionAgreementSelected\":false,\"IsSymbolSepahAgreement\":false,\"SepahAgreementSelected\":false,\"orderCount\":1600,\"orderPrice\":16040,\"FinancialProviderId\":1,\"minimumQuantity\":0,\"maxShow\":0,\"orderId\":0,\"isin\":\"IRO1PYPD0001\",\"orderSide\":65,\"orderValidity\":74,\"orderValiditydate\":null,\"shortSellIsEnabled\":false,\"shortSellIncentivePercent\":0}",
                "method": "POST",
                "mode": "cors"
            }).then(response => response.json())
            .then(response => {
                this.items.push({
                    time: time,
                    status: response.IsSuccessfull,
                    message: response.MessageDesc
                })
            })
        }
    },
    computed: {
      virtualDesserts () {
        return [...Array(10000).keys()].map(i => {
          const dessert = { ...this.desserts[i % 10] }
          dessert.name = `${dessert.name} #${i}`

          return dessert
        })
      },
    //   start(){
    //     console.log('okkkkk');
    //   }
    },
    async mounted () {
        Date.prototype.addMins = function(m) {
            this.setTime(this.getTime() + (m*60*1000));
            return this;
        }
        this.startTime = new Date().addMins(0.5).toLocaleString("en-GB",{hour: 'numeric', minute: 'numeric', second: 'numeric'})
        this.endTime = new Date().addMins(1).toLocaleString("en-GB",{hour: 'numeric', minute: 'numeric', second: 'numeric'})
        await fetch("/V1/Accounting/Remain", {
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "BasicAuthentication " + cookie.authentication,
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
            if (!response.IsSuccessfull) {
                router.push("/login")
            }
        })
    },
  }
</script>
