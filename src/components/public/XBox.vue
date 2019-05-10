<template>
  <div class="Title">
    <h4>
      {{data}}
    </h4>
  </div>
</template>

<script>
export default {
  name: 'XBox',
  props: {
    data: {
      default: '标题'
    }
  }
}
</script>

<style scoped>
  .Title{
    padding: 32px 0 20px 30px;
  }
  h4{
    font-size: 26px;
    font-weight: 400;
  }
</style>
