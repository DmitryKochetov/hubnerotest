<template>
  <div class="paginationBarWrapper">
    <div class="arrowLeft arrow">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="6" fill="#F5F7FB" />
        <path d="M11.6667 6.66663L8.33333 9.99996L11.6667 13.3333" stroke="#8591AE" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>
    <div class="paginationElement" v-for="(page, index) in getPagination" :key="index">
      {{ page.value }}
    </div>

    <div class="arrowRight arrow">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="6" fill="#F5F7FB" />
        <path d="M8.33334 13.3334L11.6667 10L8.33334 6.66671" stroke="#8591AE" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'PaginationBar',
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(["getPagination"]),
  },
}
</script>

<style scoped lang="scss">
.paginationBarWrapper {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 6.2vh;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 16px;
  gap: 15px;
}

.paginationElement {
  height: 36px;
  width: 36px;
  border-radius: 10px;
  font-family: Commissioner;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #8591AE;
  display: flex;
  align-items: center;
  justify-content: center;
}

.paginationElement:hover {
  background-color: #e5e8ef;
  color: #2A355A;
}

.arrow {
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>