<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,700;1,400;1,700&display=swap');
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  p {
    margin: 0;
    color: white;
  }
  div, ul, section,button{
    &:focus{
      outline: none;
    }
  }
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
