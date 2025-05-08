<!-- src/components/ScrollToTop.vue -->
<template>
  <p
    v-show="showButton"
    @click="scrollToTop"
    class="scroll-top-btn"
  >
    <img :src="arrowImg" alt="Up" class="icon-size-s up-btn" />
  </p>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
      arrowImg: require('@/assets/img/right-arrow.png'),
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 1000;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.class-header {
  background-color: transparent;
}
.scroll-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #1E2129;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  z-index: 1000;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.scroll-top-btn:hover {
  transform: scale(1.1);
  background-color: #2b2e38;
}

.icon-size-s.up-btn {
  width: 24px;
  height: 24px;
  transform: rotate(-90deg);
}
</style>