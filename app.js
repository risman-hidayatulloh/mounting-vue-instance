let vm = Vue.createApp({
  data() {
    return {
      message: 'Vue.js',
    };
  },
  beforeCreate() {
    console.log('beforeCreate() function is called', this.message);
  },
  created() {
    console.log('created() function is called', this.message);
  },
  beforeMount() {
    console.log('beforeMount() function is called', this.$el);
  },
  mounted() {
    console.log('mounted() function is called', this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate() function is called');
  },
  updated() {
    console.log('updated() function is called');
  },
  beforeUnmount() {
    console.log('beforeUnmount() function is called');
  },
  unmounted() {
    console.log('unmounted() function is called');
  },
});

vm.mount('#app');

// setTimeout(() => {
//   vm.mount('#app');
// }, 3000);
