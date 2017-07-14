<template>
  <div id="app">
    <v-navbar></v-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar"
export default {
  name: 'blog',
  components: {
    "v-navbar": navbar
  }
}
</script>

<style lang="less">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}

html,
body {
  height: 100%;
  overflow: hidden;
  background: #f7f9fc;
}






/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
  .container {
    position: relative;
    height: auto;
    overflow: hidden;
    margin-left: 200px;
    height: 100%;
    background: #42b983;
  }
}
</style>
