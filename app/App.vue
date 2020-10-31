<template>
  <div>
    <child />
  </div>
</template>

<script>
import Child from './Child';

export default {
  components: { Child },
  mounted() {
    this.$breakpoint.subscribe(this.test);

    setTimeout(() => {
      this.$breakpoint.unsubscribe(this.test);
    }, 5000);
  },
  methods: {
    test() {
      console.log(1);
    },
  },
};
</script>
