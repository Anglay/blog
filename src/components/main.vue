<template>
    <div class="content">
        <div class="wraper">
            <div class="main">
                <div class="project">
                    <span>项目列表</span>
                    <router-link to="/project"><em></em></router-link>
                </div>
                <div class="resume">
                    <span>简历</span>
                    <router-link to="/resume"><em></em></router-link>
                </div>
                <div class="github">
                    <span>GITHUB</span>
                    <a href="https://github.com/Anglay" target="_black"><em></em></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 5px;
    background: #fff;
    border-radius: 3px;
    overflow: hidden;
    .wraper {
        position: relative;
        height: auto;
        overflow: hidden;
        width: 800px;
        margin: 50px auto;
        .main {
            height: auto;
            overflow: hidden;
            margin-top: 20%;
            top: -250px;
            div {
                position: relative;
                width: 100%;
                height: 250px;
                font-size: 40px;
                line-height: 250px;
                color: #fff;
                text-align: center;
                span {
                    display: inline-block;
                    padding-left: 100px;
                }
                em {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    display: inline-block;
                    width: 80px;
                    height: 60px;
                    background: url(../assets/icon_link.png) no-repeat center center;
                    cursor: pointer;
                }
            }
            .project {
                margin: 0 auto 0;
                background: #e0620d;
                span {
                    background: url(../assets/project.png) no-repeat center left;
                }
            }
            .resume {
                background: #1aaba8;
                float: left;
                width: 50%;
                span {
                    background: url(../assets/resume.png) no-repeat center left;
                }
            }
            .github {
                background: #87c38f;
                float: left;
                width: 50%;
                span {
                    background: url(../assets/github.png) no-repeat center left;
                }
            }
        }
    }
}
</style>
