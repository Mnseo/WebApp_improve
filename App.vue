<template>
  <div class="app">
      <!-- <TopHeader v-bind:pagename="title" v-bind:selectpage="page"></TopHeader> -->
      <div class="main-box">
          <div class="infoAndPage">
            <p class="infolabel" >약속 날짜 설정</p>
            <p class="pageNumber">2/5</p>
          </div>
          <div class="lineSet timelabelSet">
            
            <!-- <label class="exLabel">약속 일시</label> -->
        </div>
        <div class="datePick">
            <div class="lineSet timelineSet">
            <Datepicker class="dateLabel" :language="ko"
             v-model="date" :disabled-dates="disabledDates" :format="customFormatter"
             placeholder="날짜를 설정하세요" :highlighted="highlighted"></Datepicker>
            <i class="far fa-calendar-alt iconImg"></i>
             </div>
        </div>

        
        <br>
        <div class="lineSet timelineSet">
            <vue-timepicker class="timepickerSet" v-model="time" hide-clear-button close-on-complete></vue-timepicker>
            <label class="pickerLabel" style="font-size:16px">부터</label>
            <input class="sub-inputSet" v-model="limitTime" type="number" ><label style="font-size:16px">분 이내</label>
        </div>
        <br>
        <!-- <p class="rightLabel"><input class="sub-inputSet" v-model="limitTime" type="number" > 분 이내</p> -->
        <p >약속 시간 기준 <input class="cancelInput" v-model="cancelTime" type="number" >시간 전까지 취소 가능</p>
      </div>
    <br>
    <div id="buttonBox">
        <button class="preButton" v-on:click="preClick">뒤로</button>
        <button class="nextButton" v-on:click="nextClick">다음</button>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
  </div>
</template>

<script>
// import TopHeader from '../components/TopHeader.vue';
// import BottomMenu from '../components/BottomMenu.vue';
// import Map from '../components/Map.vue';
import Datepicker from 'vuejs-datepicker';
import {ko} from 'vuejs-datepicker/dist/locale';
import moment from 'moment';
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';
// import soundEffectModule from '../../js/soundEffect_426.js';



export default {
  name: 'App',
  components: {
      // TopHeader,
      // BottomMenu,
      Datepicker,
      // Map,
      VueTimepicker
  },

  data: function() {
    return {
        title:'약속 송금',
        page:'promise',
        date : this.$store.state.p.date,
        time: this.$store.state.p.time,
        cancelTime: 1, //this.$store.state.p.cancel_time,
        limitTime: 10, //this.$store.state.p.limit_time,
        limitRadius: 50, //this.$store.state.p.limit_radius,
        disabledDates:'',
        ko:ko
    }
  },

  created(){
    this.scrollToTop();
    this.Date();
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },

    Date:function() {
      var now = new Date();
      this.disabledDates = {
        to: new Date(now.setDate(now.getDate()-1)),
        from: ''
      }
      this.highlighted = {
        dates: [new Date()]
      }
    },
    customFormatter() {
        return moment(this.date).format('YYYY년 M월 D일');
    },
    priceToString:function(price){
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
    },
    dateString(){
        var t = '';
        var ms = '';
        t = this.time.replaceAll(":", "시 ");
        t += '분';
        ms += moment(this.date).format('YYYY년 MM월 DD일') + ' ' + t;
        return ms;
    },
    calTimeStamp:function(){
            
    },
    preClick:function(){
        this.$router.push({path:'one'})
    },
    nextClick:function(){
            
    }

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
/* #app {
    font-family: 'Noto Sans KR', sans-serif;
} */
/* html {font-size: 62.5%;} 1rem = 10px */

.main-box{
    margin: 60px 20px 320px 20px;
}

.infoAndPage{
    width:300px;
    justify-content: space-between;
    display: flex;
}

.infolabel{
    /* text-align: left; */
    color:#333333;
    margin-bottom:0.313em;
    font-size: 16px;
}

.pageNumber{
    /* text-align: right; */
    color:gray;
    margin-bottom:0.313em;
    font-size: 13px;

}

.lineSet{
    display: flex;
    align-items: center;
    margin:1.250em 0em;
}
.timelabelSet{
    /* margin-top:0em; */
    text-align: center;
}
.timelineSet{
    margin-top:28px;
    /* margin-bottom: 0.188; */
}

.timeSet{
    display: flex;
    align-items: center;
    margin:1.563em 0;
    margin-bottom: 0.938em;
}
.placeSet{
    display: flex;
    align-items: flex-start;
    margin:1.563em 0;
    margin-bottom: 0px;
}
.exLabel{
    color:grey;
    margin-right: auto;
    font-size:0.938em;
}
.iconImg{
    color:gray;
    font-size:0.938em;
    width: 1.25em;
    margin-left: 5px;
    /* margin-left: -50px; */
}
.markerIcon{
    margin-top:0.125em;
}
.inputBox{
    display: flex;
    margin-left: auto;
    color:gray;
    font-size:0.813em;
}
.inputLine{
    border:none;
    border-bottom: 0.063em solid gray;
    color:black;
    caret-color:red;
    font-size: 0.938em;
    margin-left: auto;
}
.inputLine:focus{
    outline: none;
    border-bottom: 0.125em solid rgb(255, 0, 98);
}
.mapDiv{
    width: 99%;
    margin-left:auto;
    /* margin-right:5px; */
}
.mapSet{
    width: 100%;
    height: 11.875em;
}
.cancelLabel{
    font-size:0.875em;
    /* margin-bottom: 0px; */
}
.cancelInput{
    font-size:16px;
    border: none;
    border-bottom: 0.063em solid gray;
    font-weight: bold;
    color:#3263ff;
    caret-color:red;
    width:1.438em;
    /* margin:0 0.125em; */
    text-align: center;
}
.sub-inputSet{
    border: none;
    border-bottom: 0.063em solid gray;
    color: #3263ff;
    font-weight: bold;
    /* caret-color:red; */
    width:2.5em;
    margin:0 0.125em;
    text-align: center;
    font-size:16px;
}
.sub-inputSet:focus{
    outline: none;
    border-bottom: 0.125em solid rgb(255, 0, 98);
}
.inputSet{
    width: 45%;
    margin:0 0.313em;
    text-align: center;
}
#spanSet{
    font-size: 0.813em;
    color:gray;
}
.rightLabel{
  color:black;
  text-align: right;
  font-size: 0.875em;
  margin:0;
}
#buttonBox{   
    /* padding:0 10px; */
    width:360px;
    max-width: 480px;
    margin-bottom: 100px; /* 100px*/
    text-align: center;

}
.preButton{
  width:145px; /*145px*/
  height: 48px;
  border:0.125em solid #3263ff;
  background: white;
  font-weight: bold;
  color: #3263ff;
  margin: 0 1%;
  border-radius: 4px;
}
.nextButton{
  width: 145px; /*145px*/
  height: 48px;
  border:none;
  background: #3263ff;
  font-weight: bold;
  color:white;
  margin: 0 1%;
  border-radius: 4px;
}

/* .dateLabel {
    padding: 5px;
} */

.datePick {
    display:relative;
    width:300px;
    height: 30px;
    border: 0.063em solid rgb(201, 201, 201);
    padding-bottom: 0.125em;
  
}

.dateLabel >>> input{
    display: absolute;
    width: 250px;
    /* border-radius: 4px; */
    /* text-align: center; */
    padding-bottom: 0.125em;
    font-size:0.938em;
    height: 30px;
    cursor: pointer;
}

.dateLabel >>> .vdp-datepicker__calendar{
    
    /* 가운데에 picker 띄우기 */
    position: absolute;
    transform:translateX(50%);
    transform:translateY(50%);
    border-radius: 4px;
    
    /*기존 속성*/
    width:300px;
    text-align: center;

    /* height:35vh; */
    /* left:10%; */
    /* left:-35%; */
}

.dateLabel ::placeholder {
    display: absolute;
    color: #999999;
    text-align: left;
    text-indent: 5px; /*place holder 옆으로 5px 옮기기 */
}

.timepickerSet{
    margin-right:0.313em;
    /* margin-left:0.313em; */
    width: 72px;
    font-size: 15px;
    border-radius: 4px;

}
.timepickerSet >>> input{
    width: 72px;
    height: 30px;

}



</style>