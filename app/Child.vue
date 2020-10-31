<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$breakpoint.subscribe(this.test);
  },
  methods: {
    test() {
      console.log(2);
    },
  },
};
</script>
