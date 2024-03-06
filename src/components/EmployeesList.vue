<template>
  <div class="employeesListWrapper">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="employeesListTop employee">
      <div class="employeesListTop__Name employeesListTop__menuElement">
        <div class="employeesListTop__left">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.0948 5.69849C15.1373 7.74093 15.1373 11.0524 13.0948 13.0948C11.0524 15.1373 7.74095 15.1373 5.6985 13.0948C3.65606 11.0524 3.65606 7.74093 5.6985 5.69849C7.74095 3.65605 11.0524 3.65605 13.0948 5.69849"
              stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.8333 15.8333L13.0917 13.0917" stroke="#8591AE" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          Business Name
          <div class="employeesListTop__sort">
            <svg @click="SortUp('name')" class="employeesListTop__arrowTop" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.51833 0.187909C3.78354 -0.0625281 4.21646 -0.0625281 4.48166 0.187909L7.55262 3.08781C7.97615 3.48775 7.67303 4.16675 7.07095 4.16675L0.929049 4.16675C0.326972 4.16675 0.0238514 3.48775 0.447384 3.08781L3.51833 0.187909Z"
                fill="#C2C9DA" />
            </svg>
            <svg @click="SortDown('name')" class="employeesListTop__arrowBottom" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.48167 4.14559C4.21646 4.39602 3.78354 4.39602 3.51834 4.14559L0.447385 1.24568C0.0238523 0.845743 0.326973 0.166748 0.929049 0.166748L7.07095 0.166749C7.67303 0.166749 7.97615 0.845743 7.55262 1.24569L4.48167 4.14559Z"
                fill="#C2C9DA" />
            </svg>
          </div>
        </div>
      </div>
      <div class="employeesListTop__Team employeesListTop__menuElement" v-if="teamVisible">
        <div class="employeesListTop__left">
          <svg @click="closeTeamColumn()" width="21" height="20" viewBox="0 0 21 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6.80951 6.66666L13.4762 13.3333" stroke="#8591AE" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M13.4762 6.66666L6.80951 13.3333" stroke="#8591AE" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          Team
          <div class="employeesListTop__sort">
            <svg @click="SortUp('team')" class="employeesListTop__arrowTop" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.51833 0.187909C3.78354 -0.0625281 4.21646 -0.0625281 4.48166 0.187909L7.55262 3.08781C7.97615 3.48775 7.67303 4.16675 7.07095 4.16675L0.929049 4.16675C0.326972 4.16675 0.0238514 3.48775 0.447384 3.08781L3.51833 0.187909Z"
                fill="#C2C9DA" />
            </svg>
            <svg @click="SortDown('team')" class="employeesListTop__arrowBottom" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.48167 4.14559C4.21646 4.39602 3.78354 4.39602 3.51834 4.14559L0.447385 1.24568C0.0238523 0.845743 0.326973 0.166748 0.929049 0.166748L7.07095 0.166749C7.67303 0.166749 7.97615 0.845743 7.55262 1.24569L4.48167 4.14559Z"
                fill="#C2C9DA" />
            </svg>
          </div>
        </div>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.285706" width="20" height="20" rx="6" fill="white" />
          <path d="M6.95239 8.33334L10.2857 11.6667L13.6191 8.33334" stroke="#8591AE" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
      <div class="employeesListTop__Role employeesListTop__menuElement" v-if="roleVisible">
        <div class="employeesListTop__left">
          <svg @click="closeRoleColumn()" width="21" height="20" viewBox="0 0 21 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6.80951 6.66666L13.4762 13.3333" stroke="#8591AE" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M13.4762 6.66666L6.80951 13.3333" stroke="#8591AE" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          Role
          <div class="employeesListTop__sort">
            <svg @click="SortUp('role')" class="employeesListTop__arrowTop" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.51833 0.187909C3.78354 -0.0625281 4.21646 -0.0625281 4.48166 0.187909L7.55262 3.08781C7.97615 3.48775 7.67303 4.16675 7.07095 4.16675L0.929049 4.16675C0.326972 4.16675 0.0238514 3.48775 0.447384 3.08781L3.51833 0.187909Z"
                fill="#C2C9DA" />
            </svg>
            <svg @click="SortDown('role')" class="employeesListTop__arrowBottom" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.48167 4.14559C4.21646 4.39602 3.78354 4.39602 3.51834 4.14559L0.447385 1.24568C0.0238523 0.845743 0.326973 0.166748 0.929049 0.166748L7.07095 0.166749C7.67303 0.166749 7.97615 0.845743 7.55262 1.24569L4.48167 4.14559Z"
                fill="#C2C9DA" />
            </svg>
          </div>
        </div>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.285706" width="20" height="20" rx="6" fill="white" />
          <path d="M6.95239 8.33334L10.2857 11.6667L13.6191 8.33334" stroke="#8591AE" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
      <div class="employeesListTop__mail employeesListTop__menuElement">
        <div class="employeesListTop__left">Gmail
          <div class="employeesListTop__sort">
            <svg @click="SortUp('Gmail')" class="employeesListTop__arrowTop" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.51833 0.187909C3.78354 -0.0625281 4.21646 -0.0625281 4.48166 0.187909L7.55262 3.08781C7.97615 3.48775 7.67303 4.16675 7.07095 4.16675L0.929049 4.16675C0.326972 4.16675 0.0238514 3.48775 0.447384 3.08781L3.51833 0.187909Z"
                fill="#C2C9DA" />
            </svg>
            <svg @click="SortDown('Gmail')" class="employeesListTop__arrowBottom" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.48167 4.14559C4.21646 4.39602 3.78354 4.39602 3.51834 4.14559L0.447385 1.24568C0.0238523 0.845743 0.326973 0.166748 0.929049 0.166748L7.07095 0.166749C7.67303 0.166749 7.97615 0.845743 7.55262 1.24569L4.48167 4.14559Z"
                fill="#C2C9DA" />
            </svg>
          </div>
        </div>
      </div>
      <div class="employeesListTop__birthday employeesListTop__menuElement" v-if="birthdayVisible">
        <div class="employeesListTop__left">
          <svg @click="closeBirthdayColumn()" width="21" height="20" viewBox="0 0 21 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6.80951 6.66666L13.4762 13.3333" stroke="#8591AE" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M13.4762 6.66666L6.80951 13.3333" stroke="#8591AE" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          Birthday
          <div class="employeesListTop__sort">
            <svg @click="SortUp('birthday')" class="employeesListTop__arrowTop" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.51833 0.187909C3.78354 -0.0625281 4.21646 -0.0625281 4.48166 0.187909L7.55262 3.08781C7.97615 3.48775 7.67303 4.16675 7.07095 4.16675L0.929049 4.16675C0.326972 4.16675 0.0238514 3.48775 0.447384 3.08781L3.51833 0.187909Z"
                fill="#C2C9DA" />
            </svg>
            <svg @click="SortDown('birthday')" class="employeesListTop__arrowBottom" width="8" height="5"
              viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.48167 4.14559C4.21646 4.39602 3.78354 4.39602 3.51834 4.14559L0.447385 1.24568C0.0238523 0.845743 0.326973 0.166748 0.929049 0.166748L7.07095 0.166749C7.67303 0.166749 7.97615 0.845743 7.55262 1.24569L4.48167 4.14559Z"
                fill="#C2C9DA" />
            </svg>
          </div>
        </div>
        <div class="employeesListTop__right">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.285706" width="20" height="20" rx="6" fill="white" />
            <path d="M6.95239 8.33334L10.2857 11.6667L13.6191 8.33334" stroke="#8591AE" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div class="employeesListTop__Telegram employeesListTop__menuElement">
        <div class="employeesListTop__left">Telegram
          <div class="employeesListTop__sort">
            <svg @click="SortUp('telegram')" class="employeesListTop__arrowTop" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.51833 0.187909C3.78354 -0.0625281 4.21646 -0.0625281 4.48166 0.187909L7.55262 3.08781C7.97615 3.48775 7.67303 4.16675 7.07095 4.16675L0.929049 4.16675C0.326972 4.16675 0.0238514 3.48775 0.447384 3.08781L3.51833 0.187909Z"
                fill="#C2C9DA" />
            </svg>
            <svg @click="SortDown('telegram')" class="employeesListTop__arrowBottom" width="8" height="5"
              viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.48167 4.14559C4.21646 4.39602 3.78354 4.39602 3.51834 4.14559L0.447385 1.24568C0.0238523 0.845743 0.326973 0.166748 0.929049 0.166748L7.07095 0.166749C7.67303 0.166749 7.97615 0.845743 7.55262 1.24569L4.48167 4.14559Z"
                fill="#C2C9DA" />
            </svg>
          </div>
        </div>
      </div>
      <div class="employeesListTop__LastLogin employeesListTop__menuElement">
        <div class="employeesListTop__left">
          Last Login
          <div class="employeesListTop__sort">
            <svg @click="SortUp('lastLogin')" class="employeesListTop__arrowTop" width="8" height="5" viewBox="0 0 8 5"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.51833 0.187909C3.78354 -0.0625281 4.21646 -0.0625281 4.48166 0.187909L7.55262 3.08781C7.97615 3.48775 7.67303 4.16675 7.07095 4.16675L0.929049 4.16675C0.326972 4.16675 0.0238514 3.48775 0.447384 3.08781L3.51833 0.187909Z"
                fill="#C2C9DA" />
            </svg>
            <svg @click="SortDown('lastLogin')" class="employeesListTop__arrowBottom" width="8" height="5"
              viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.48167 4.14559C4.21646 4.39602 3.78354 4.39602 3.51834 4.14559L0.447385 1.24568C0.0238523 0.845743 0.326973 0.166748 0.929049 0.166748L7.07095 0.166749C7.67303 0.166749 7.97615 0.845743 7.55262 1.24569L4.48167 4.14559Z"
                fill="#C2C9DA" />
            </svg>
          </div>
        </div>
      </div>
      <div class="employeesListTop__Permissions employeesListTop__menuElement">User permissions</div>
    </div>
    <div class="employeesList">
      <div class="employee bottomBar" v-for="(employee, index) in getEmployees" :key="index">
        <div class="employee__Photo employee__element"><img :src=employee.photo alt="">{{ employee.name }}</div>
        <div class="employee__Team employee__element" v-if="teamVisible">{{ employee.team }}</div>
        <div class="employee__Role employee__element" v-if="roleVisible">{{ employee.role }}</div>
        <div class="employee__mail employee__element">{{ employee.Gmail }}</div>
        <div class="employee__birthday employee__element" v-if="birthdayVisible">{{ employee.birthday }}</div>
        <div class="employee__Telegram employee__element">{{ employee.telegram }}</div>
        <div class="employee__LastLogin employee__element">{{ employee.lastLogin }}</div>
        <div class="employee__Permissions employee__element">
          <svg @click="editUser(employee.id)" width="78" height="36" viewBox="0 0 78 36" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="0.499878" y="0.5" width="77" height="35" rx="7.5" stroke="#E5E8EF" />
            <path d="M25.6932 16.7467L23.2532 14.3067" stroke="#8591AE" stroke-linecap="round"
              stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M18.1672 24H15.9999V21.8327C15.9999 21.656 16.0699 21.486 16.1952 21.3613L25.0845 12.4713C25.3452 12.2107 25.7672 12.2107 26.0272 12.4713L27.5279 13.972C27.7885 14.2327 27.7885 14.6547 27.5279 14.9147L18.6385 23.8047C18.5139 23.93 18.3439 24 18.1672 24V24Z"
              stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M39.2949 24C39.2949 23.4447 39.2949 22.9103 39.2949 22.397C39.2949 21.8837 39.2949 21.319 39.2949 20.703V17.35C39.2949 16.7293 39.2949 16.1577 39.2949 15.635C39.2949 15.1123 39.2949 14.5733 39.2949 14.018H45.4969V15.103C45.0302 15.103 44.5285 15.103 43.9919 15.103C43.4599 15.103 42.8299 15.103 42.1019 15.103H39.8339L40.5339 14.2C40.5339 14.76 40.5339 15.3013 40.5339 15.824C40.5339 16.342 40.5339 16.9113 40.5339 17.532V20.514C40.5339 21.1253 40.5339 21.69 40.5339 22.208C40.5339 22.7213 40.5339 23.2557 40.5339 23.811L39.9039 22.915H42.2139C42.8252 22.915 43.4015 22.915 43.9429 22.915C44.4889 22.915 45.0115 22.915 45.5109 22.915V24H39.2949ZM40.2609 19.471V18.414H42.1999C42.8439 18.414 43.3992 18.414 43.8659 18.414C44.3325 18.414 44.7829 18.414 45.2169 18.414V19.471C44.7595 19.471 44.2975 19.471 43.8309 19.471C43.3689 19.471 42.8229 19.471 42.1929 19.471H40.2609ZM49.9874 24.154C49.3247 24.154 48.774 23.986 48.3354 23.65C47.8967 23.3093 47.5677 22.8637 47.3484 22.313C47.129 21.7577 47.0194 21.1557 47.0194 20.507C47.0194 19.8163 47.136 19.198 47.3694 18.652C47.6027 18.106 47.941 17.6767 48.3844 17.364C48.8324 17.0467 49.3737 16.888 50.0084 16.888C50.3304 16.888 50.6244 16.9323 50.8904 17.021C51.161 17.105 51.399 17.2193 51.6044 17.364C51.8097 17.504 51.98 17.6603 52.1154 17.833H52.2344V17.091C52.2344 16.503 52.2344 15.9337 52.2344 15.383C52.2344 14.8277 52.2344 14.284 52.2344 13.752L53.3894 13.612C53.3894 14.1767 53.3894 14.7437 53.3894 15.313C53.3894 15.8777 53.3894 16.4703 53.3894 17.091V20.934C53.3894 21.508 53.3894 22.033 53.3894 22.509C53.3894 22.985 53.3894 23.482 53.3894 24H52.3814L52.3254 23.048H52.2134C52.0314 23.286 51.8284 23.4867 51.6044 23.65C51.3804 23.8133 51.133 23.937 50.8624 24.021C50.5964 24.1097 50.3047 24.154 49.9874 24.154ZM50.3374 23.118C50.6267 23.118 50.888 23.0737 51.1214 22.985C51.3547 22.8917 51.5624 22.761 51.7444 22.593C51.931 22.425 52.0944 22.222 52.2344 21.984V18.897C52.0897 18.687 51.917 18.512 51.7164 18.372C51.5204 18.2273 51.3057 18.12 51.0724 18.05C50.839 17.9753 50.601 17.938 50.3584 17.938C49.8684 17.938 49.4647 18.0547 49.1474 18.288C48.83 18.5213 48.592 18.834 48.4334 19.226C48.2794 19.6133 48.2024 20.0427 48.2024 20.514C48.2024 20.9667 48.277 21.3913 48.4264 21.788C48.5757 22.18 48.8067 22.4997 49.1194 22.747C49.432 22.9943 49.838 23.118 50.3374 23.118ZM55.6105 24C55.6105 23.482 55.6105 22.985 55.6105 22.509C55.6105 22.033 55.6105 21.508 55.6105 20.934V20.234C55.6105 19.8187 55.6105 19.436 55.6105 19.086C55.6105 18.7313 55.6105 18.3907 55.6105 18.064C55.6105 17.7327 55.6105 17.3967 55.6105 17.056L56.7725 17.014C56.7725 17.3593 56.7725 17.7 56.7725 18.036C56.7725 18.3673 56.7725 18.7127 56.7725 19.072C56.7725 19.4267 56.7725 19.814 56.7725 20.234V20.934C56.7725 21.508 56.7725 22.033 56.7725 22.509C56.7725 22.985 56.7725 23.482 56.7725 24H55.6105ZM56.1705 15.453C55.9185 15.453 55.7131 15.383 55.5545 15.243C55.3958 15.103 55.3165 14.8883 55.3165 14.599C55.3165 14.3143 55.3958 14.102 55.5545 13.962C55.7131 13.8173 55.9231 13.745 56.1845 13.745C56.4411 13.745 56.6465 13.8197 56.8005 13.969C56.9545 14.1137 57.0315 14.3237 57.0315 14.599C57.0315 14.8883 56.9545 15.103 56.8005 15.243C56.6465 15.383 56.4365 15.453 56.1705 15.453ZM61.8242 24.154C61.3622 24.154 60.9702 24.0747 60.6482 23.916C60.3262 23.7527 60.0812 23.5077 59.9132 23.181C59.7498 22.8497 59.6682 22.4273 59.6682 21.914C59.6682 21.508 59.6682 21.1067 59.6682 20.71C59.6682 20.3087 59.6682 19.9167 59.6682 19.534C59.6682 19.1467 59.6682 18.7757 59.6682 18.421C59.6682 18.0617 59.6682 17.7187 59.6682 17.392C59.6682 16.916 59.6682 16.475 59.6682 16.069C59.6682 15.663 59.6682 15.2407 59.6682 14.802L60.8092 14.55C60.8092 14.8953 60.8092 15.215 60.8092 15.509C60.8092 15.803 60.8092 16.0993 60.8092 16.398C60.8092 16.6967 60.8092 17.028 60.8092 17.392V21.641C60.8092 22.1403 60.9142 22.516 61.1242 22.768C61.3388 23.02 61.6655 23.146 62.1042 23.146C62.2768 23.146 62.4658 23.118 62.6712 23.062C62.8765 23.0013 63.0585 22.908 63.2172 22.782L63.3152 23.797C63.2218 23.867 63.0958 23.93 62.9372 23.986C62.7785 24.0373 62.6035 24.077 62.4122 24.105C62.2208 24.1377 62.0248 24.154 61.8242 24.154ZM58.3312 17.973V17.056H63.2452V17.973C62.7785 17.973 62.3072 17.973 61.8312 17.973C61.3598 17.973 60.9002 17.973 60.4522 17.973H59.9762H58.3312Z"
              fill="#2A355A" />
          </svg>
          <svg @click="deleteUser(employee.id)" width="14" height="16" viewBox="0 0 14 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.49784 5.49894C2.49784 5.2228 2.27398 4.99894 1.99784 4.99894C1.72169 4.99894 1.49784 5.2228 1.49784 5.49894H2.49784ZM12.502 5.49894C12.502 5.2228 12.2781 4.99894 12.002 4.99894C11.7259 4.99894 11.502 5.2228 11.502 5.49894H12.502ZM9.16728 6.33262C9.16728 6.05648 8.94342 5.83262 8.66728 5.83262C8.39114 5.83262 8.16728 6.05648 8.16728 6.33262H9.16728ZM8.16728 12.1684C8.16728 12.4445 8.39114 12.6684 8.66728 12.6684C8.94342 12.6684 9.16728 12.4445 9.16728 12.1684H8.16728ZM5.83256 6.33262C5.83256 6.05648 5.6087 5.83262 5.33256 5.83262C5.05642 5.83262 4.83256 6.05648 4.83256 6.33262H5.83256ZM4.83256 12.1684C4.83256 12.4445 5.05642 12.6684 5.33256 12.6684C5.6087 12.6684 5.83256 12.4445 5.83256 12.1684H4.83256ZM0.747314 2.4979C0.471172 2.4979 0.247314 2.72176 0.247314 2.9979C0.247314 3.27404 0.471172 3.4979 0.747314 3.4979V2.4979ZM13.2525 3.4979C13.5287 3.4979 13.7525 3.27404 13.7525 2.9979C13.7525 2.72176 13.5287 2.4979 13.2525 2.4979V3.4979ZM3.19086 2.83979C3.10353 3.10176 3.24511 3.38492 3.50708 3.47224C3.76905 3.55957 4.05221 3.41799 4.13954 3.15601L3.19086 2.83979ZM4.11872 1.63733L4.59306 1.79545L4.5931 1.79533L4.11872 1.63733ZM5.70104 0.496858L5.70092 0.996858H5.70104V0.496858ZM8.29879 0.496858V0.996858L8.29941 0.996858L8.29879 0.496858ZM9.88279 1.63733L10.3573 1.47974L10.3572 1.47933L9.88279 1.63733ZM9.86012 3.15549C9.94716 3.41756 10.2302 3.55945 10.4922 3.47242C10.7543 3.38538 10.8962 3.10238 10.8092 2.84031L9.86012 3.15549ZM1.49784 5.49894V13.8357H2.49784V5.49894H1.49784ZM1.49784 13.8357C1.49784 15.0327 2.4682 16.0031 3.6652 16.0031V15.0031C3.02048 15.0031 2.49784 14.4805 2.49784 13.8357H1.49784ZM3.6652 16.0031H10.3346V15.0031H3.6652V16.0031ZM10.3346 16.0031C11.5316 16.0031 12.502 15.0327 12.502 13.8357H11.502C11.502 14.4805 10.9794 15.0031 10.3346 15.0031V16.0031ZM12.502 13.8357V5.49894H11.502V13.8357H12.502ZM8.16728 6.33262V12.1684H9.16728V6.33262H8.16728ZM4.83256 6.33262V12.1684H5.83256V6.33262H4.83256ZM0.747314 3.4979H13.2525V2.4979H0.747314V3.4979ZM4.13954 3.15601L4.59306 1.79545L3.64438 1.47922L3.19086 2.83979L4.13954 3.15601ZM4.5931 1.79533C4.75194 1.31842 5.19825 0.996738 5.70092 0.996858L5.70116 -0.003142C4.76788 -0.00336504 3.93926 0.593874 3.64434 1.47933L4.5931 1.79533ZM5.70104 0.996858H8.29879V-0.00314203H5.70104V0.996858ZM8.29941 0.996858C8.80252 0.996234 9.24943 1.31801 9.40841 1.79533L10.3572 1.47933C10.062 0.593117 9.23225 -0.00429875 8.29817 -0.00314164L8.29941 0.996858ZM9.40827 1.79492L9.86012 3.15549L10.8092 2.84031L10.3573 1.47974L9.40827 1.79492Z"
              fill="#8591AE" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: 'EmployeesList',
  props: {
    msg: String,
  },
  data() {
    return {
      columnsCount: 8,
      roleVisible: true,
      birthdayVisible: true,
      teamVisible: true,
    };
  },
  computed: {
    ...mapGetters(["getEmployees"]),
  },
  methods: {
    ...mapMutations(["SortUp", "SortDown"]),
    editUser(id) {
      console.log(id);
    },
    deleteUser(id) {
      console.log(id);
    },
    closeTeamColumn() {
      this.teamVisible = false;
      this.columnsCount--;
    },
    closeRoleColumn() {
      this.roleVisible = false;
      this.columnsCount--;
    },
    closeBirthdayColumn() {
      this.birthdayVisible = false;
      this.columnsCount--;
    },
  }

}
</script>

<style scoped lang="scss">
.employeesListWrapper {
  width: 100%;
  background-color: #FFFFFF;
  padding: 16px;
  border-radius: 10px;

}

.employeesList {
  display: grid;
  grid-template-rows: repeat(9, 1fr);
}

.employeesListTop {
  background-color: #F5F7FB;
  border-radius: 10px;

  &__menuElement {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background: url("../assets/images/Line17.svg") left no-repeat;
    padding-left: 16px;
    padding-right: 22px;
    height: 100%;

  }

  &__left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }


  &__menuElement:first-child {
    background: none;
  }

  &__sort {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  &__arrowTop:hover path {
    fill: #2A355A;
  }

  &__arrowBottom:hover path {
    fill: #2A355A;
  }
}

.employee {
  font-family: Commissioner;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  height: 5.9vh;
  display: grid;
  grid-template-columns: repeat(v-bind(columnsCount), 1fr);
  align-items: center;

  &__element {
    padding-left: 16px;
  }

  &__Photo {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 8px;
  }

  &__Permissions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 24px;
  }
}

.bottomBar:last-child {
  background: none;
}

.bottomBar {
  background: url("../assets/images/Line.svg") bottom no-repeat;
}
</style>