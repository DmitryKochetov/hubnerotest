import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leftMenuItems: [
      {
        id: 0,
        picture: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.8625 12.5L14.0292 16.6667C14.7192 17.3567 15.8392 17.3567 16.5292 16.6667V16.6667C17.2192 15.9767 17.2192 14.8567 16.5292 14.1667L12.3625 10" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.70004 5.83334L8.61671 8.75001" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.44417 3.5775L3.00583 5.26333C3.11917 5.60417 3.4375 5.83333 3.79667 5.83333H5.69583V3.93417C5.69583 3.57583 5.46667 3.25667 5.12583 3.14333L3.44 2.58167C3.29 2.53167 3.125 2.57083 3.01333 2.6825L2.545 3.15083C2.43333 3.2625 2.39417 3.4275 2.44417 3.5775V3.5775Z" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.43 4.8725C17.45 4.89167 17.465 4.91667 17.4725 4.94333C17.8642 6.24917 17.5608 7.71833 16.5292 8.75C15.4867 9.7925 13.9975 10.0908 12.6817 9.68083L5.72583 16.6367C5.04833 17.3142 3.94333 17.365 3.2425 16.7117C2.50583 16.0258 2.49083 14.8725 3.19583 14.1667L10.1817 7.18083C9.77167 5.865 10.07 4.37583 11.1125 3.33333C12.1442 2.30167 13.6133 1.99833 14.9192 2.39C14.9458 2.39833 14.9708 2.4125 14.99 2.4325L15.125 2.5675C15.19 2.6325 15.19 2.73833 15.125 2.80333L12.9292 5L14.8625 6.93333L17.0592 4.73667C17.1242 4.67167 17.23 4.67167 17.295 4.73667L17.43 4.8725V4.8725Z" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        link: "",
      },
      {
        id: 1,
        picture: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7358 17.2917L11.7358 7.29166L14.7917 7.29166C15.2517 7.29166 15.625 7.66499 15.625 8.12499L15.625 17.2917L11.7358 17.2917Z" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.8475 17.2917L7.8475 3.12499C7.8475 2.66499 8.22083 2.29166 8.68083 2.29166L10.9033 2.29166C11.3633 2.29166 11.7367 2.66499 11.7367 3.12499L11.7367 17.2917L7.8475 17.2917Z" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.95833 17.2917L3.95833 5.62499C3.95833 5.16499 4.33167 4.79166 4.79167 4.79166L7.8475 4.79166L7.8475 17.2917L3.95833 17.2917Z" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.29167 17.2917L17.2917 17.2917" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        link: "",
      },
      {
        id: 2,
        picture: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6667 5.83334L8.9225 3.08918C8.59667 2.76334 8.06917 2.76334 7.74417 3.08918L5 5.83334" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 4.16668L11.0775 3.08918C11.4033 2.76334 11.9308 2.76334 12.2558 3.08918L15 5.83334" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5 10H14.5158C13.8625 10 13.3333 10.5292 13.3333 11.1825V12.1508C13.3333 12.8042 13.8625 13.3333 14.5158 13.3333H17.5" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8333 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333L2.5 7.49999C2.5 6.57916 3.24583 5.83333 4.16667 5.83333L15.8333 5.83333C16.7542 5.83333 17.5 6.57916 17.5 7.49999V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5Z" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        link: "",
      },
      {
        id: 3,
        picture: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 2.49999L8.33333 2.49999" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.5 4.99999L8.33333 4.99999" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.5 7.49999H5" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.2242 7.60916C14.2025 6.63083 15.7875 6.63083 16.7658 7.60916V7.60916C17.7442 8.5875 17.7442 10.1725 16.7658 11.1508L12.6017 15.315C11.6233 16.2933 10.0383 16.2933 9.06 15.315V15.315C8.08166 14.3367 8.08166 12.7517 9.06 11.7733L9.6825 11.1508" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.60917 16.7667C6.63083 17.745 5.04583 17.745 4.0675 16.7667V16.7667C3.08917 15.7883 3.08917 14.2033 4.0675 13.225L8.23167 9.06084C9.21 8.0825 10.795 8.0825 11.7733 9.06084V9.06084C12.7517 10.0392 12.7517 11.6242 11.7733 12.6025L11.125 13.25" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        link: "",
      },
      {
        id: 4,
        picture: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 10.8333L13.3333 10.8333" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66667 14.1667L13.3333 14.1667" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 2.5L12.6433 2.5C13.085 2.5 13.5092 2.67583 13.8217 2.98833L16.1783 5.345C16.4908 5.6575 16.6667 6.08167 16.6667 6.52333V15.8333C16.6667 16.7542 15.9208 17.5 15 17.5H5C4.07917 17.5 3.33333 16.7542 3.33333 15.8333L3.33333 4.16667C3.33333 3.24583 4.07917 2.5 5 2.5Z" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.6667 6.66667L13.3333 6.66667C12.8733 6.66667 12.5 6.29333 12.5 5.83333V2.5" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66667 7.50001H9.16667" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        link: "",
      },
      {
        id: 5,
        picture: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.3794 8.62058C12.1413 9.38243 12.1413 10.6176 11.3794 11.3795C10.6176 12.1413 9.38237 12.1413 8.62053 11.3795C7.85868 10.6176 7.85868 9.38242 8.62053 8.62058C9.38237 7.85873 10.6176 7.85873 11.3794 8.62058" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.8741 8.75841C18.5598 9.44411 18.5598 10.5558 17.8741 11.2415C17.1884 11.9272 16.0767 11.9272 15.391 11.2415C14.7053 10.5558 14.7053 9.44411 15.391 8.75841C16.0767 8.07272 17.1884 8.07272 17.8741 8.75841" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.60906 8.75841C5.29475 9.44411 5.29475 10.5558 4.60906 11.2415C3.92336 11.9272 2.81163 11.9272 2.12593 11.2415C1.44024 10.5558 1.44024 9.44411 2.12593 8.75841C2.81163 8.07272 3.92336 8.07272 4.60906 8.75841" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.5574 3.01427C15.2431 3.69997 15.2431 4.8117 14.5574 5.4974C13.8717 6.18309 12.76 6.18309 12.0743 5.4974C11.3886 4.8117 11.3886 3.69997 12.0743 3.01427C12.76 2.32858 13.8717 2.32858 14.5574 3.01427" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.92573 14.5026C8.61142 15.1883 8.61142 16.3 7.92573 16.9857C7.24003 17.6714 6.1283 17.6714 5.4426 16.9857C4.75691 16.3 4.75691 15.1883 5.4426 14.5026C6.1283 13.8169 7.24003 13.8169 7.92573 14.5026" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.92573 3.01427C8.61142 3.69997 8.61142 4.8117 7.92573 5.4974C7.24003 6.18309 6.1283 6.18309 5.4426 5.4974C4.75691 4.8117 4.75691 3.69997 5.4426 3.01427C6.1283 2.32858 7.24003 2.32858 7.92573 3.01427" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.5574 14.5026C15.2431 15.1883 15.2431 16.3 14.5574 16.9857C13.8717 17.6714 12.76 17.6714 12.0743 16.9857C11.3886 16.3 11.3886 15.1883 12.0743 14.5026C12.76 13.8169 13.8717 13.8169 14.5574 14.5026" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.55833 14.225L9.025 11.6833" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.55833 5.77499L9.025 8.31666" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.875 10H11.95" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        link: "",
      },
      {
        id: 6,
        picture: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.591 8.40901C12.4697 9.2877 12.4697 10.7123 11.591 11.591C10.7123 12.4697 9.2877 12.4697 8.40902 11.591C7.53033 10.7123 7.53033 9.2877 8.40902 8.40901C9.2877 7.53033 10.7123 7.53033 11.591 8.40901" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 10C4.375 10.2475 4.3975 10.495 4.4275 10.735L3.10417 11.77C2.81083 12 2.73083 12.4108 2.9175 12.7333L4.09417 14.7692C4.28 15.0917 4.675 15.2275 5.02083 15.0892L6.20583 14.6133C6.44 14.5192 6.70083 14.5567 6.91083 14.6958C7.09417 14.8175 7.28417 14.9292 7.48083 15.0292C7.70583 15.1433 7.86917 15.3475 7.905 15.5975L8.08583 16.8583C8.13833 17.2267 8.45417 17.5 8.82583 17.5H11.1733C11.545 17.5 11.8608 17.2267 11.9133 16.8583L12.0942 15.5983C12.13 15.3483 12.295 15.1425 12.5208 15.0292C12.7167 14.9308 12.9058 14.82 13.0883 14.6992C13.3 14.5592 13.5617 14.5192 13.7967 14.6142L14.9792 15.0892C15.3242 15.2275 15.7192 15.0917 15.9058 14.7692L17.0825 12.7333C17.2692 12.4108 17.1892 11.9992 16.8958 11.77L15.5725 10.735C15.6025 10.495 15.625 10.2475 15.625 10C15.625 9.7525 15.6025 9.505 15.5725 9.265L16.8958 8.23C17.1892 8 17.2692 7.58917 17.0825 7.26667L15.9058 5.23083C15.72 4.90833 15.325 4.7725 14.9792 4.91083L13.7967 5.38583C13.5617 5.48 13.3 5.44083 13.0883 5.30083C12.9058 5.18 12.7167 5.06917 12.5208 4.97083C12.295 4.8575 12.13 4.65167 12.0942 4.40167L11.9142 3.14167C11.8617 2.77333 11.5458 2.5 11.1742 2.5L8.82667 2.5C8.455 2.5 8.13917 2.77333 8.08667 3.14167L7.905 4.40333C7.86917 4.6525 7.705 4.8575 7.48083 4.97167C7.28417 5.07167 7.09417 5.18417 6.91083 5.305C6.7 5.44333 6.43917 5.48083 6.205 5.38667L5.02083 4.91083C4.675 4.7725 4.28 4.90833 4.09417 5.23083L2.9175 7.26667C2.73083 7.58917 2.81083 8.00083 3.10417 8.23L4.4275 9.265C4.3975 9.505 4.375 9.7525 4.375 10V10Z" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        link: "",
      },
      {
        id: 7,
        picture: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33333 14.1225V15.8333C3.33333 16.7542 4.07917 17.5 5 17.5H15C15.9208 17.5 16.6667 16.7542 16.6667 15.8333V8.95334" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.33333 11.2058L3.33333 4.16667C3.33333 3.24583 4.07917 2.5 5 2.5L15 2.5C15.9208 2.5 16.6667 3.24583 16.6667 4.16667V6.03667" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.35953 11.633C4.92905 12.2025 4.92905 13.1259 4.35953 13.6954C3.79002 14.2649 2.86665 14.2649 2.29714 13.6954C1.72763 13.1259 1.72763 12.2025 2.29714 11.633C2.86666 11.0635 3.79002 11.0635 4.35953 11.633" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7908 12.4975C10.7908 11.6925 11.4433 11.0392 12.2492 11.0392C13.055 11.0392 13.7075 11.6917 13.7075 12.4975C13.7075 13.3033 13.055 13.9558 12.2492 13.9558C11.4467 13.9592 10.7942 13.3117 10.7908 12.5092C10.7908 12.505 10.7908 12.5017 10.7908 12.4975Z" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.8545 6.46379C9.42401 7.0333 9.42401 7.95667 8.8545 8.52618C8.28498 9.09569 7.36162 9.09569 6.79211 8.52618C6.22259 7.95666 6.22259 7.0333 6.79211 6.46379C7.36162 5.89427 8.28499 5.89427 8.8545 6.46379" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.7028 6.46379C18.2723 7.0333 18.2723 7.95667 17.7028 8.52618C17.1333 9.09569 16.2099 9.09569 15.6404 8.52618C15.0709 7.95666 15.0709 7.0333 15.6404 6.46379C16.21 5.89427 17.1333 5.89427 17.7028 6.46379" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.6583 8.54166L13.2417 11.4333" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.31667 11.5917L6.83333 8.55832" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.2583 11.4333L8.81667 8.55832" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        link: "",
      },
      {
        id: 8,
        picture: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.4732 9.15182C12.2868 9.96541 12.2868 11.2845 11.4732 12.0981C10.6596 12.9117 9.34048 12.9117 8.52689 12.0981C7.7133 11.2845 7.7133 9.96541 8.52689 9.15182C9.34048 8.33823 10.6596 8.33823 11.4732 9.15182" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.0448 4.15185C16.8584 4.96544 16.8584 6.28453 16.0448 7.09813C15.2312 7.91172 13.9122 7.91172 13.0986 7.09813C12.285 6.28453 12.285 4.96544 13.0986 4.15185C13.9122 3.33826 15.2312 3.33826 16.0448 4.15185" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 10.2083C16.2775 10.2083 17.5 10.6525 18.3333 11.3191" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.90147 4.15185C7.71507 4.96544 7.71507 6.28453 6.90147 7.09813C6.08788 7.91172 4.76879 7.91172 3.9552 7.09813C3.14161 6.28453 3.14161 4.96544 3.9552 4.15185C4.76879 3.33826 6.08788 3.33826 6.90147 4.15185" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.66667 11.3191C2.5 10.6525 3.7225 10.2083 5 10.2083" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.8258 16.4583C12.855 15.7075 11.46 15.2083 10 15.2083C8.54 15.2083 7.145 15.7075 6.17417 16.4583" stroke="#8591AE" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        link: "",
      },
    ],
    currentUser: {
      photo: require("@/assets/images/userPhoto.png"),
      userName: "Ernest Eberly",
    },
    teamInformation: {
      members: 130,
      online: 36,
      men: 50,
      women: 80,
      averageAge: 29,
      daysWorkOnAverage: 265,
      daysWorkNewest: 36,
      daysWorkOldest: 1256,
    },
    users: [
      {
        id: 0,
        photo: require("@/assets/images/users/Logo.png"),
        name: "Sarah Connor",
        team: "Crosty",
        role: "Team Lead",
        Gmail: "sarahconnor@gmail.com",
        birthday: "25.04.1994",
        telegram: "@sarahconnor",
        lastLogin: "03.11.2021",
      },
      {
        id: 1,
        photo: "",
        name: "Arnold Brown",
        team: "Gunters",
        role: "Seo Specialist",
        Gmail: "arnoldbrown@gmail.com",
        birthday: "12.04.1989",
        telegram: "@arnoldbrown",
        lastLogin: "02.11.2021",
      },
      {
        id: 2,
        photo: require("@/assets/images/users/Logo1.png"),
        name: "Ernest Eberly",
        team: "Flamethrower",
        role: "Semantic Specialist",
        Gmail: "ernesteberly@gmail.com",
        birthday: "17.06.1993",
        telegram: "@ErnestEberly",
        lastLogin: "03.11.2021",
      },
      {
        id: 3,
        photo: require("@/assets/images/users/Logo2.png"),
        name: "Lance Thomas",
        team: "Wizards",
        role: "Seo Specialist",
        Gmail: "lancethomas@gmail.com",
        birthday: "12.04.1989",
        telegram: "@LanceThomas",
        lastLogin: "01.11.2021",
      },
      {
        id: 4,
        photo: require("@/assets/images/users/Logo3.png"),
        name: "Cheryl Glover",
        team: "Gunters",
        role: "Python Programmist",
        Gmail: "cherylglover@gmail.com",
        birthday: "15.08.1985",
        telegram: "@CherylGlover",
        lastLogin: "03.11.2021",
      },
      {
        id: 5,
        photo: "",
        name: "Lance Thomas",
        team: "Crosty",
        role: "Seo Specialist",
        Gmail: "lancethomas@gmail.com",
        birthday: "12.04.1989",
        telegram: "@LanceThomas",
        lastLogin: "01.11.2021",
      },
      {
        id: 6,
        photo: require("@/assets/images/users/Logo4.png"),
        name: "Ernest Eberly",
        team: "Flamethrower",
        role: "Semantic Specialist",
        Gmail: "ernesteberly@gmail.com",
        birthday: "17.06.1993",
        telegram: "@ErnestEberly",
        lastLogin: "03.11.2021",
      },
      {
        id: 7,
        photo: require("@/assets/images/users/Logo5.png"),
        name: "Lance Thomas",
        team: "Wizards",
        role: "Seo Specialist",
        Gmail: "lancethomas@gmail.com",
        birthday: "12.04.1989",
        telegram: "@LanceThomas",
        lastLogin: "03.11.2021",
      },
      {
        id: 8,
        photo: require("@/assets/images/users/Logo6.png"),
        name: "Cheryl Glover",
        team: "Gunters",
        role: "Python Programmist",
        Gmail: "cherylglover@gmail.com",
        birthday: "15.08.1985",
        telegram: "@CherylGlover",
        lastLogin: "03.11.2021",
      },
    ],
    sortedUsers: [],
    pagination: [
      { id: 1, value: "1" },
      { id: 2, value: "2" },
      { id: 3, value: "3" },
      { id: 4, value: "..." },
      { id: 5, value: "12" },
    ],
  },
  getters: {
    getLeftMenuItems(state) {
      return state.leftMenuItems;
    },
    getCurrentUser(state) {
      return state.currentUser;
    },
    getInfoBarItems(state) {
      return state.teamInformation;
    },
    getEmployees(state) {
      for (const iterator of state.users) {
        if (iterator.photo == "") {
          iterator.photo = require("@/assets/images/users/NoAvatar.png");
        }
      }
      return state.users;
    },
    getPagination(state) {
      return state.pagination;
    }
  },
  mutations: {
    SortUp(state, sortBy) {
      state.users.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
    },
    SortDown(state, sortBy) {
      state.users.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    },
  },
  actions: {},
  modules: {},
});
