<template>
    <div class="icon-bar">
        <router-link to="/home"><i class="fa-solid fa-house">홈</i></router-link>
        <router-link to="/user"><i class="fa-solid fa-users-line">사용자 리스트</i></router-link>
        <router-link to="/certified"><i class="fa-solid fa-user-lock">본인인증</i> </router-link>
        <router-link to="/experience"><i class="fa-solid fa-square-poll-vertical">경력 별 회원현황</i></router-link>
        <router-link to="/result"><i class="fa-solid fa-square-poll-vertical">중재건수 별 회원현황</i></router-link>
        <router-link to="/rating"><i class="fa-solid fa-square-poll-vertical">중재평점 별 회원현황</i></router-link>
    </div>
</template>

<style>
.icon-bar {
    margin-left: 4vmin;
    height: 100vh;
    width: 28vmin;
    background-color: white;
    border-right: 0.3vmin solid #bdc0c1;
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    /*z-index: 1;*/ /* Stay on top */
    top: 0vh; /* Stay at the top */
    left: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 0;
}

.icon-bar a {
    margin-top:5vmin;
    margin-right:2vmin;
    display: block;
    text-align: center;
    padding: 1vh;
    transition: all 0.3s ease;
    color: black;
    font-size: 2.0vmin;
}
.icon-bar a:hover {
    background-color: #858585;
}
.active {
    background-color: #f1f5fb;
}
</style>
