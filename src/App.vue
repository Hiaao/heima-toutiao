<template>
  <div id="app">
      <Catagtory></Catagtory>
      <NewList></NewList>
    </div>
</template>

<script>
import Catagtory from './components/catagtory'
import NewList from './components/NewList'

export default {
  name: 'App',
  components: {
    Catagtory, NewList
  }
}
</script>
