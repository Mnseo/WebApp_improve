<template>
<div class="content">
    <div class="title">
        <h3>중재평점별 회원현황</h3>
    </div>
    <div class="container_parent">
        <div class="group">
            <h6>5점</h6>
            <p><b>{{res5Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>4점</h6>
            <p><b>{{res4Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>3점</h6>
            <p><b>{{res3Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>2점</h6>
            <p><b>{{res2Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>1점</h6>
            <p><b>{{res1Data}}</b>명</p>
        </div>
    </div>
</div>
</template>


<script>
import axios from 'axios'
export default {
    data: function() {
        return { //1점부터 5점까지 각 데이터 별 결과값
            res1Data: 0,
            res2Data: 0,
            res3Data: 0,
            res4Data: 0,
            res5Data: 0
        }
    },
    created() {
        this.getRateData();
    },
    methods: {
        getRateData: function() {
            axios.get("http://localhost:5000/rating")
            .then((res) => {
            this.res1Data = res.data[4];
            this.res2Data = res.data[3];
            this.res3Data = res.data[2];
            this.res4Data = res.data[1];
            this.res5Data = res.data[0];
            })
        }
    }
}
</script>

<style scoped>
/* @mixin mobile {

} */

.content {
    top: 5vmax;
    width: 90vmax;
    left:32.3vmin;
    height: 100vmax;
    position: fixed;
    border-top: 0.3vmin solid #bdc0c1;
    background-color: #f1f5f8;
    overflow-x: hidden;
}
.title {
    margin-top: 3vh;
    margin-left: 5vmin;
    font-size: 2.0vmin;
    font:bold; 
}

.container_parent {
    display: flex;
    margin-top:3vh;
    margin-left: 5vmin;
    width:60vmin;
    flex-direction: row;
    background-color: #ffffff;
}

.group h6 {
    font-size: 1.8vmin;
}
.group b {
    font-size: 2.0vmin;
    font:bold;
}
.group {
    margin-left: 1vmin;
    margin-right: 1vmin;
    font-size: 1.3vmin;
    width:40vw;
    text-align: center;
    /* display:flex; */
    justify-content: space-between;
    /* flex-wrap: wrap; */
}

/*Galaxy Fold*/
@media (max-width: 280px) {
    .container_parent 
    {flex-direction: column;}
} 


/*IPHONE 12 PRO*/
@media (max-width: 390px) {
       .container_parent 
       {
        width: 30vmin;
        text-align:center;
        flex-direction: column;    
       }
       .group 
       {
          width: 25vw;
       }
}

/*Galaxy S20 Ultra*/
@media (max-width: 414px) {
    .container_parent {
        width: 40vmin;
        flex-direction: column;
        
    }
    .group {width: 35vw;}
}

</style>