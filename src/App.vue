<template>
  <div id="app">
    <div class="container">
      <div class="leftMenu">
        <LeftMenu currentSelectedItem=0 />
      </div>
      <div class="rightSection">
        <div class="TopMenu">
          <TopMenu msg="topMenu" />
        </div>
        <div class="workWindow">
          <div class="InfoBar">
            <InfoBar msg="infoBar" />
          </div>
          <button class="AddEmployeeBtn">
            <svg class="AddEmployeeBtn__plus" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="20" rx="6" fill="white" fill-opacity="0.2" />
              <path d="M10 6V14" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 10H6" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="AddEmployeeBtn__text" @click="addEmployee()">
              Add new Employee
            </div>
          </button>
          <div class="employeesList">
            <EmployeesList msg="employeesList" />
          </div>
          <div class="paginationBar">
            <PaginationBar msg="paginationBar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeesList from './components/EmployeesList.vue';
import InfoBar from './components/InfoBar.vue';
import LeftMenu from './components/LeftMenu.vue';
import TopMenu from './components/TopMenu.vue';
import PaginationBar from './components/PaginationBar.vue';

export default {
  name: 'App',
  components: {
    EmployeesList,
    InfoBar,
    LeftMenu,
    TopMenu,
    PaginationBar,
  },
  methods: {
    addEmployee() {
      console.log('AddEmployee');
    },
  },
}
</script>

<style lang="scss">

@font-face {
    font-family: "Commissioner";
    src: url('../src/assets/fonts/Commissioner-VariableFont_FLAR\,VOLM\,slnt\,wght.ttf');
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

html,
body {
  height: 100%;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  border-radius: 10px;

}

.leftMenu {
  border-radius: 10px;
}

.rightSection {
  background-color: #F5F7FB;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.workWindow {
  padding: 2.5vh;
    display: flex;
  flex-direction: column;
  gap: 28px;
  border-radius: 0 0 10px 0;
 
}

.AddEmployeeBtn {
  width: 184px;
  height: 4.4vh;
  padding: 14px, 16px, 14px, 16px;
  border-radius: 12px;
  gap: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  background: #8F20EF;

  &__text {
    font-family: Commissioner;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }

}
</style>
