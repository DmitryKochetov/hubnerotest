<template>
  <div class="infoBarWrapper">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="infoBarWrapper__team">
      <svg class="infoBarWrapper__teamPic" width="32" height="33" viewBox="0 0 32 33" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="32" height="32" rx="8" fill="#F3F9FF" />
        <path
          d="M17.4732 15.6518C18.2868 16.4654 18.2868 17.7845 17.4732 18.5981C16.6596 19.4117 15.3405 19.4117 14.5269 18.5981C13.7133 17.7845 13.7133 16.4654 14.5269 15.6518C15.3405 14.8382 16.6596 14.8382 17.4732 15.6518"
          stroke="#1E96FC" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M22.0448 10.6519C22.8584 11.4654 22.8584 12.7845 22.0448 13.5981C21.2312 14.4117 19.9122 14.4117 19.0986 13.5981C18.285 12.7845 18.285 11.4654 19.0986 10.6519C19.9122 9.83826 21.2312 9.83826 22.0448 10.6519"
          stroke="#1E96FC" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 16.7083C22.2775 16.7083 23.5 17.1525 24.3333 17.8192" stroke="#1E96FC" stroke-linecap="round"
          stroke-linejoin="round" />
        <path
          d="M12.9015 10.6519C13.7151 11.4654 13.7151 12.7845 12.9015 13.5981C12.0879 14.4117 10.7688 14.4117 9.95521 13.5981C9.14162 12.7845 9.14162 11.4654 9.95521 10.6519C10.7688 9.83826 12.0879 9.83826 12.9015 10.6519"
          stroke="#1E96FC" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.66667 17.8192C8.50001 17.1525 9.72251 16.7083 11 16.7083" stroke="#1E96FC" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M19.8258 22.9583C18.855 22.2075 17.46 21.7083 16 21.7083C14.54 21.7083 13.145 22.2075 12.1742 22.9583"
          stroke="#1E96FC" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      Team
      <div class="infoBarWrapper__teamInfo" v-if="hasTeamInfo">
        <svg class="infoBarWrapper__element" width="14" height="15" viewBox="0 0 14 15" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="14" height="14" rx="7" fill="#F5F7FB" />
          <path d="M7.00053 7.00003V11" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="7.00101" cy="4.25003" r="0.75" fill="#8591AE" />
        </svg>
      </div>
    </div>
    <div class="infoBarWrapper__members infoBarWrapper__element">
      {{ getInfoBarItems.members }}
      <div class="infoBarWrapper__text">members</div>
    </div>
    <svg class="infoBarWrapper__element" width="1" height="47" viewBox="0 0 1 47" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" x2="0.5" y2="47" stroke="#E5E8EF" />
    </svg>
    <div class="infoBarWrapper__online infoBarWrapper__element">
      {{ getInfoBarItems.online }}
      <div class="infoBarWrapper__text">online</div>
    </div>
    <svg class="infoBarWrapper__element" width="1" height="47" viewBox="0 0 1 47" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" x2="0.5" y2="47" stroke="#E5E8EF" />
    </svg>
    <div class="infoBarWrapper__menWomen infoBarWrapper__element">
      {{ getInfoBarItems.men }}
      <div class="infoBarWrapper__text">men</div>
    </div>
    <div class="infoBarWrapper__members infoBarWrapper__element">
      {{ getInfoBarItems.women }}
      <div class="infoBarWrapper__text">women</div>
    </div>
    <svg class="infoBarWrapper__element" width="1" height="47" viewBox="0 0 1 47" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" x2="0.5" y2="47" stroke="#E5E8EF" />
    </svg>
    <div class="infoBarWrapper__averageAge infoBarWrapper__element">
      {{ getInfoBarItems.averageAge }}
      <div class="infoBarWrapper__text">average age</div>
    </div>
    <svg class="infoBarWrapper__element" width="1" height="47" viewBox="0 0 1 47" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" x2="0.5" y2="47" stroke="#E5E8EF" />
    </svg>
    <div class="infoBarWrapper__daysWorkNewest infoBarWrapper__element">
      {{ getInfoBarItems.daysWorkOnAverage }}
      <div class="infoBarWrapper__text">days work on average</div>
    </div>
    <svg class="infoBarWrapper__element" width="1" height="47" viewBox="0 0 1 47" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" x2="0.5" y2="47" stroke="#E5E8EF" />
    </svg>
    <div class="infoBarWrapper__daysWorkOldest infoBarWrapper__element">
      {{ getInfoBarItems.daysWorkNewest }}
      <div class="infoBarWrapper__text">days work newest employee</div>
    </div>
    <svg class="infoBarWrapper__element" width="1" height="47" viewBox="0 0 1 47" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" x2="0.5" y2="47" stroke="#E5E8EF" />
    </svg>
    <div class="infoBarWrapper__daysWorkOldest infoBarWrapper__element">
      {{ getInfoBarItems.daysWorkOldest }}
      <div class="infoBarWrapper__text">days work oldest employee</div>
    </div>

  </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'InfoBar',
  props: {
    msg: String
  },
  data() {
    return {
      hasTeamInfo: true,
    }
  },
  computed: {
    ...mapGetters(["getInfoBarItems"]),
  },
}
</script>

<style scoped lang="scss">
.infoBarWrapper {
  width: max-content;
  height: 7.2vh;
  background-color: #FFFFFF;
  padding: 0 28px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &__team {
    display: flex;
    align-items: center;
    font-family: Commissioner;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;

  }

  &__teamPic {
    margin-right: 16px;
  }

  &__teamInfo {
    margin-left: 4px;
  }

  &__element {
    font-family: Commissioner;
    font-size: 22px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    margin-right: 36px;
  }

  &__text {
    font-family: Commissioner;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
  }
}
</style>