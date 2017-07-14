<template>
  <div class="navbar">
    <div class="photo">
      <img src="https://avatars3.githubusercontent.com/u/7878965?v=4&u=fbe1fb4f05e20b5b2dd3e2a4f4000344ccf9d92d&s=400">
    </div>
    <div class="user-info">
      <ul>
        <li>
          <span class="icon-name">欧阳高广</span>
        </li>
        <li>
          <span class="icon-email">435641688@qq.com</span>
        </li>
        <li>
          <span class="icon-mobile">180****6295</span>
        </li>
        <li>
          <span class="icon-gitbub">Anglay</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar"
}
</script>
<style lang="less" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background: #42b983;
  .photo {
    width: 190px;
    padding: 5px;
    img {
      width: 100%;
      border-radius: 3px;
      display: inline-block;
      line-height: 1;
      overflow: hidden;
      vertical-align: middle;
    }
  }
  .user-info {
    height: auto;
    overflow: hidden;
    padding: 5px;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        margin: 0;
        padding: 0;
        list-style: none;
        span {
          display: inline-block;
          padding: 10px 0 10px 35px;
          color: #fff;
        }
        .icon-name {
          background: url(../../assets/icon_user.png) no-repeat center left;
          background-size: 25px auto;
          font-size: 16px;
        }
        .icon-email {
          background: url(../../assets/icon_email.png) no-repeat center left;
          background-size: 20px auto;
          padding-left: 25px;
          font-size: 14px;
        }
        .icon-mobile {
          background: url(../../assets/icon_mobile.png) no-repeat center left;
          background-size: 20px auto;
          padding-left: 25px;
          font-size: 14px;
          letter-spacing: 2px;
        }
        .icon-gitbub{
          display: inline-block;
          padding: 30px;
          margin-left: 40px;
          text-indent: -999999em;
          background: url(../../assets/icon_github.png) no-repeat center center;
        }
      }
    }
  }
}
</style>
