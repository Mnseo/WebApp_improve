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


<style>
.content {
    top: 60px;
    width: 1000px;
    left:242px;
    height: 100%;
    position: fixed;
    border-top: 2px solid #bdc0c1;
    background-color: #f1f5f8;
    overflow-x: hidden;
}

.title {
    margin-top: 50px;
    margin-left: 30px;
    font:bold;
    

}
.container_parent {
    display: flex;
    margin-top:40px;
    margin-left: 30px;
    margin-right: 30px;
    width:900px;
    text-align: center;
    background-color: #ffffff;

}
.group {
    width:180px;
    /* display:inline-block; */
    justify-content: space-between;

}

</style>