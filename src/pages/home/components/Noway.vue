<template>
  <div class="noway">
    <div class="queue">
      <h4 class="queue-info_name">欢迎，{{user.name}}</h4>
      <p class="queue-info_order">{{currentOrder}}</p>
      <p class="queue-info_latencyTime">预计等待 {{latenctTime}}</p>
      <i-button>预先点餐</i-button>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '顾客 0574',
        order: ['A', '32'],
        latenctTime: 10000
      }
    }
  },
  computed: {
    currentOrder: function(){
      let tableTpye = {
        'A' : '小桌',
        'B' : '四人桌',
        'C' : '八人桌',
        'D' : '包间'
      }
      return tableTpye[this.user.order[0]] + ' ' + this.user.order[1] + '号'
    },
    latenctTime: function() {
      let time = Math.floor(Math.random()*this.user.latenctTime)
      let hour = Math.floor(time / 3600)
      let minute = Math.floor((time%3600)/60)
      let format = hour ? hour + '小时 ' + minute + '分': minute + '分'
      return format 
    }
  }
  
}
</script>

<style lang="stylus">
.noway
  padding-top .4rem
  .queue
    height 4rem
    background-color rgba(254,216,215,.3)
    border-radius .1rem
</style>
