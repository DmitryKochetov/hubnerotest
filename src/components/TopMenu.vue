<template>
  <div class="topMenuWrapper">
    <div class="topMenuleftSide">
      <div class="topMenuleftSide__burger" @click="burgerMenuHandler">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.000999451" y="0.5" width="16" height="1" rx="0.5" fill="#2A355A" />
          <rect x="0.000999451" y="5.5" width="16" height="1" rx="0.5" fill="#2A355A" />
          <rect x="0.000999451" y="10.5" width="16" height="1" rx="0.5" fill="#2A355A" />
        </svg>
      </div>
      <div class="topMenuleftSide__heading">
        Team
      </div>
    </div>
    <div class="topMenuRightSide">
      <div class="topMenuRightSide__magnify" @click="searchHandler">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382"
            stroke="#2A355A" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19 19L15.71 15.71" stroke="#2A355A" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="topMenuRightSide__bell" @click="notificationHandler">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.70801 18.344V18.709C9.70801 19.974 10.734 21 12 21V21C13.266 21 14.292 19.974 14.292 18.708V18.343"
            stroke="#2A355A" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13.833 5.751V4.833C13.833 3.821 13.013 3 12 3V3C10.987 3 10.167 3.821 10.167 4.833V5.751"
            stroke="#2A355A" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6.563 10.188V10.188C6.563 7.685 8.592 5.657 11.094 5.657H12.907C15.41 5.657 17.438 7.686 17.438 10.188V10.188V12.985C17.438 13.515 17.649 14.024 18.024 14.399L18.665 15.04C19.04 15.415 19.251 15.924 19.251 16.454V16.454C19.251 17.498 18.405 18.344 17.361 18.344H6.64C5.596 18.344 4.75 17.498 4.75 16.454V16.454C4.75 15.924 4.961 15.415 5.336 15.04L5.977 14.399C6.352 14.024 6.563 13.515 6.563 12.985V10.188Z"
            stroke="#2A355A" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="bellNotification" v-if="hasNotification">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5" fill="#FC5A5A" stroke="white" stroke-width="2" />
          </svg>
        </div>

      </div>
      <div class="topMenuRightSide__verticalBar">
        <svg width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" x2="0.5" y2="32" stroke="#E5E8EF" />
        </svg>
      </div>
      <div class="topMenuRightSide__user">
        <img :src="getCurrentUser.photo" alt="user photo">
        <div class="topMenuRightSide__userName">
          {{ getCurrentUser.userName }}
        </div>
        <div class="topMenuRightSide__arrow" @click="dropDownMenuHandler">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="6" fill="#F5F7FB" />
            <path d="M6.66663 8.33333L9.99996 11.6667L13.3333 8.33333" stroke="#8591AE" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'TopMenu',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  data() {
    return {
      hasNotification: true,
    }
  },
  methods: {
    dropDownMenuHandler() {
      console.log("dropDownMenu");
    },
    notificationHandler() {
      console.log("notification");
    },
    searchHandler() {
      console.log("search");
    },
    burgerMenuHandler() {
      console.log("burgerMenu");
    }
  }
}
</script>

<style scoped lang="scss">
.topMenuWrapper {
  background: url(../assets/images/topMenuShadow.png) left no-repeat;
  background-color: #fff;
  height: 7vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 10px 0 0;
}

.topMenuleftSide {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 127px;
  padding-left: 28px;

  &__heading {
    font-family: Commissioner;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0px;
    text-align: left;
    margin-left: 28px;
    color: #2A355A;
    ;
  }
}

.topMenuRightSide {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding-right: 28px;
  gap: 28px;


  &__bell {
    position: relative;
  }

  &__userName {
    font-family: Commissioner;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #2A355A;
  }

  &__user {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
}

.bellNotification {
  position: absolute;
  top: 0;
  right: 0;
}
</style>