<template>
  <div class="tabs">
    <classify-card :src="src"/>  
  </div>
</template>

<script>
import ClassifyCard from './ClassifyCard'
export default {
  data() {
    return {
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555487403&di=4a6d2c025cf40c181a60854bb83ac59f&imgtype=jpg&er=1&src=http%3A%2F%2Fspider.nosdn.127.net%2F81592457305afc2733ba65b5cb3b83ad.jpeg'
    }
  },
  components: {
    ClassifyCard
  }
}
</script>

<style lang="stylus">

</style>
