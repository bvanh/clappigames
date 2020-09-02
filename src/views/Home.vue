<template>
  <div class="home">
    <Header />
    <Frame1/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header/Header'
import Frame1 from '../components/homepage/fame1/Fame1'
export default {
  name: 'Home',
  components: {
    Header,
    Frame1
  }
}
</script>
