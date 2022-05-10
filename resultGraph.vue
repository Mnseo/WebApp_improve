<template>
<div class="content">
    <div class="title">
        <h3>중재건수별 회원현황</h3>
    </div>
    <div class="container_parent">
        <div class="group">
            <h6>20건~</h6>
            <p><b>{{resUp20Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>15~20건</h6>
            <p><b>{{res15to20Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>10~15건</h6>
            <p><b>{{res10to15Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>5건~10건</h6>
            <p><b>{{res5to10Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>~5건</h6>
            <p><b>{{resUnder5Data}}</b>명</p>
        </div>
    </div>
</div>
</template>


<script>
import axios from 'axios'
export default {
    data: function() {
        return {
            resUnder5Data: 0,
            res5to10Data: 0,
            res10to15Data: 0,
            res15to20Data: 0,
            resUp20Data: 0
        }
    },
    created() {
        this.getResultData();
    },
    methods: {
        getResultData : function() {
            axios.get("http://localhost:5000/result")
            .then((res) => {
            console.log(res.data);
            this.resUnder5Data = res.data[0];
            this.res5to10Data = res.data[1];
            this.res10to15Data = res.data[2];
            this.res15to20Data = res.data[3];
            this.resUp20Data = res.data[4];
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
    width:12vw;
    text-align: center;
    /* display:flex; */
    justify-content: space-between;
    /* flex-wrap: wrap; */
}

/*미디어 쿼리 단순 나열*/

/*Galaxy Fold*/
@media (max-width: 280px) {
    .container_parent {
        flex-direction: column;
        width: 30vmin;
        text-align:center;
    }
} 


/*IPHONE 12 PRO*/
@media (max-width: 390px) {
       .container_parent {
        width: 30vmin;
        text-align:center;
        flex-direction: column;    
       }
        .group { width: 25vw;}
}

/*Galaxy S20 Ultra*/
@media (max-width: 414px) {
    .container_parent {
        flex-direction: column;
        width: 40vmin;
    }
    .group {width: 35vw;}
}


</style>