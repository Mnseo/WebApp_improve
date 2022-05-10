<template>
    <div class="icon-bar">
        <router-link to="/home">홈</router-link>
        <router-link to="/user">사용자 리스트</router-link>
        <router-link to="/"><i class="fa-solid fa-house">경력 별 회원현황</i></router-link>
        <router-link to="/result"><i class="fa-solid fa-question">중재건수 별 회원현황</i></router-link>
        <router-link to="/rating"><i class="fa-regular fa-ranking-star"></i>중재평점 별 회원현황</router-link>
    </div>
</template>

<style>
.icon-bar {
    height: 100%;
    width: 240px;
    background-color: white;
    border-right: 2px solid #bdc0c1;
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    /*z-index: 1;*/ /* Stay on top */
    top: 0px; /* Stay at the top */
    left: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 0;
}

.icon-bar a {
    margin-top:40px;
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: black;
    font-size: 16px;
}

.icon-bar a:hover {
    background-color: #858585;
}

.active {
    background-color: #f1f5fb;
}

</style>


