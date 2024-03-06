<template>
  <div class="leftMenuWrapper">
    <div class="leftMenuWrapper__top">
      <div class="leftMenuLogo">
        <img
          src="../assets/images/HubNero Logo Horisontal.png"
          alt="hubnero logo"
        />
      </div>
      <div
        v-for="(item, index) in getLeftMenuItems"
        :key="index"
        @click="routeTo(item.id)"
        class="menuItem"
        v-html="item.picture"
      ></div>
    </div>
    <div class="leftMenuWrapper__down">
      <svg
        class="leftMenuWrapperPlus"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" rx="6" fill="#F5F7FB" />
        <path
          d="M10 6V14"
          stroke="#8591AE"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 10H6"
          stroke="#8591AE"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LeftMenu",
  props: {
    currentSelectedItem: String,
  },
  computed: {
    ...mapGetters(["getLeftMenuItems"]),
  },
  methods: {
    routeTo(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped lang="scss">
.leftMenuWrapper {
  width: 72px;
  height: 100%;
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px 0 0 10px;

  &__top {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 28px;
  }

  &__down {
    height: 76px;
    border-top: 1px solid #e5e8ef;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  &__down:hover svg path {
    stroke: #8f20ef;
  }
}

.menuItem {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.leftMenuLogo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.menuItem:hover {
  background: url(../assets/images/leftMenuPointer.svg) left no-repeat;
}

::v-deep .menuItem:hover > svg path {
  stroke: #8f20ef;
}
</style>
