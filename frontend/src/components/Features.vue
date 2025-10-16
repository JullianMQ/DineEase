<script setup lang="ts">
import { ref } from 'vue'

const featuresItems = ref([
  {
    icon: `<svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-4.8" y="-4.8" width="33.60" height="33.60" rx="5.04" fill="none" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M18.9707 22H4.9707C1.9707 22 1.9707 20.65 1.9707 19V18C1.9707 17.45 2.4207 17 2.9707 17H20.9707C21.5207 17 21.9707 17.45 21.9707 18V19C21.9707 20.65 21.9707 22 18.9707 22Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.7195 13V17H3.26953V13C3.26953 9.16 5.97953 5.95 9.58953 5.18C10.1295 5.06 10.6895 5 11.2695 5H12.7195C13.2995 5 13.8695 5.06 14.4095 5.18C18.0195 5.96 20.7195 9.16 20.7195 13Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.34" d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.34" d="M15 11H9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    title: 'Smart Reservations',
    details:
      'Easily book a table in seconds. DineEase lets customers reserve seats instantly, while restaurants manage bookings effortlessly with real-time updates.',
  },
  {
    icon: `<svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4.8" y="-4.8" width="33.60" height="33.60" rx="5.04" fill="" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.9009 9.85L21.4909 19.74C21.5109 20.01 21.3809 20.19 21.3109 20.27C21.2309 20.36 21.0609 20.5 20.7809 20.5H18.0509L20.2109 9.85H20.9009ZM22.0009 6L21.9909 6.02C22.0109 6.26 21.9909 6.51 21.9309 6.76L14.5609 20.29C14.3209 21.3 13.4209 22 12.3809 22H20.7809C22.0709 22 23.0909 20.91 22.9909 19.62L22.0009 6Z" fill="#ffffff"></path> <path d="M11.4502 2.24136C11.5502 1.84136 11.3002 1.43136 10.9002 1.33136C10.5002 1.24136 10.0902 1.48136 9.99023 1.88136L9.49023 3.95136H11.0302L11.4502 2.24136Z" fill="#ffffff"></path> <path d="M18.0509 2.20859C18.1409 1.79859 17.8809 1.40859 17.4709 1.31859C17.0709 1.22859 16.6709 1.48859 16.5809 1.89859L16.1309 3.96859H17.6709L18.0509 2.20859Z" fill="#ffffff"></path> <path d="M21.8198 5.33141C21.4898 4.53141 20.7098 3.96141 19.7498 3.96141H17.6698L17.1098 6.55141C17.0298 6.90141 16.7198 7.14141 16.3798 7.14141C16.3298 7.14141 16.2698 7.14141 16.2198 7.12141C15.8198 7.03141 15.5598 6.63141 15.6398 6.23141L16.1298 3.95141H11.0298L10.3998 6.55141C10.3198 6.89141 10.0098 7.12141 9.66975 7.12141C9.60975 7.12141 9.54976 7.11141 9.48975 7.10141C9.08976 7.00141 8.83975 6.60141 8.93975 6.19141L9.47975 3.94141H7.44975C6.46975 3.94141 5.59975 4.58141 5.30975 5.52141L1.09975 19.0714C0.659754 20.5214 1.72975 22.0014 3.23975 22.0014H16.3798C17.4198 22.0014 18.3198 21.3014 18.5598 20.2914L21.9298 6.76141C21.9898 6.51141 22.0098 6.26141 21.9898 6.02141C21.9698 5.78141 21.9198 5.54141 21.8198 5.33141ZM14.6998 16.7514H6.69975C6.28975 16.7514 5.94975 16.4114 5.94975 16.0014C5.94975 15.5914 6.28975 15.2514 6.69975 15.2514H14.6998C15.1098 15.2514 15.4498 15.5914 15.4498 16.0014C15.4498 16.4114 15.1098 16.7514 14.6998 16.7514ZM15.6998 12.7514H7.69975C7.28975 12.7514 6.94975 12.4114 6.94975 12.0014C6.94975 11.5914 7.28975 11.2514 7.69975 11.2514H15.6998C16.1098 11.2514 16.4498 11.5914 16.4498 12.0014C16.4498 12.4114 16.1098 12.7514 15.6998 12.7514Z" fill="#ffffff"></path> </g></svg>`,
    title: 'Interactive Digital Menus',
    details:
      'Showcase your dishes beautifully. Menus are easy to browse, include mouthwatering photos, and update automatically when items change or sell out.',
  },
  {
    icon: `<svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4.8" y="-4.8" width="33.60" height="33.60" rx="5.04" fill="" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="10" cy="6" r="4" stroke="#ffffff" stroke-width="1.5"></circle> <path d="M18.0429 12.3656L18.4865 11.7609L18.4865 11.7609L18.0429 12.3656ZM19 8.69135L18.4813 9.23307C18.7713 9.51077 19.2287 9.51077 19.5187 9.23307L19 8.69135ZM19.9571 12.3656L19.5135 11.7609L19.5135 11.7609L19.9571 12.3656ZM19 12.8276L19 13.5776H19L19 12.8276ZM18.4865 11.7609C18.0686 11.4542 17.6081 11.0712 17.2595 10.6681C16.8912 10.2423 16.75 9.91131 16.75 9.69673H15.25C15.25 10.4666 15.6912 11.1479 16.1249 11.6493C16.5782 12.1735 17.1391 12.6327 17.5992 12.9703L18.4865 11.7609ZM16.75 9.69673C16.75 9.12068 17.0126 8.87002 17.2419 8.78964C17.4922 8.70189 17.9558 8.72986 18.4813 9.23307L19.5187 8.14963C18.6943 7.36028 17.6579 7.05432 16.7457 7.3741C15.8125 7.70123 15.25 8.59955 15.25 9.69673H16.75ZM20.4008 12.9703C20.8609 12.6327 21.4218 12.1735 21.8751 11.6493C22.3088 11.1479 22.75 10.4666 22.75 9.69672H21.25C21.25 9.91132 21.1088 10.2424 20.7405 10.6681C20.3919 11.0713 19.9314 11.4542 19.5135 11.7609L20.4008 12.9703ZM22.75 9.69672C22.75 8.59954 22.1875 7.70123 21.2543 7.37409C20.3421 7.05432 19.3057 7.36028 18.4813 8.14963L19.5187 9.23307C20.0442 8.72986 20.5078 8.70189 20.7581 8.78964C20.9874 8.87002 21.25 9.12068 21.25 9.69672H22.75ZM17.5992 12.9703C17.9678 13.2407 18.3816 13.5776 19 13.5776L19 12.0776C18.9756 12.0776 18.9605 12.0775 18.9061 12.0488C18.8202 12.0034 18.7128 11.9269 18.4865 11.7609L17.5992 12.9703ZM19.5135 11.7609C19.2872 11.9269 19.1798 12.0034 19.0939 12.0488C19.0395 12.0775 19.0244 12.0776 19 12.0776L19 13.5776C19.6184 13.5776 20.0322 13.2407 20.4008 12.9703L19.5135 11.7609Z" fill="#ffffff"></path> <path d="M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`,
    title: 'Personalized Dining Experience',
    details:
      'DineEase remembers user preferences — from favorite dishes to seating choices — for a smoother and more personal dining journey.',
  },
  {
    icon: `<svg viewBox="-9.6 -9.6 67.20 67.20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-9.6" y="-9.6" width="67.20" height="67.20" rx="10.08" fill="none" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>device-multiple</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <g> <path d="M42,23V41H34V23h8m2-4H32a2,2,0,0,0-2,2V43a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V21a2,2,0,0,0-2-2Z"></path> <path d="M38,7H7A2,2,0,0,0,5,9V31a2,2,0,0,0,2,2H26V29H9V11H36v4h4V9A2,2,0,0,0,38,7Z"></path> <path d="M26,37v4H4a2,2,0,0,1,0-4Z"></path> </g> </g> </g> </g></svg>`,
    title: 'Multi-Device Friendly',
    details:
      'Whether on mobile, tablet, or desktop, DineEase is designed to look stunning and perform flawlessly across all platforms.',
  },
  {
    icon: `<svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4.8" y="-4.8" width="33.60" height="33.60" rx="5.04" fill="none" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V10.5C22.75 10.0858 22.4142 9.75 22 9.75C21.5858 9.75 21.25 10.0858 21.25 10.5V12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75H13.5C13.9142 2.75 14.25 2.41421 14.25 2C14.25 1.58579 13.9142 1.25 13.5 1.25H11.9426Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M19 1.25C16.9289 1.25 15.25 2.92893 15.25 5C15.25 7.07107 16.9289 8.75 19 8.75C21.0711 8.75 22.75 7.07107 22.75 5C22.75 2.92893 21.0711 1.25 19 1.25ZM16.75 5C16.75 3.75736 17.7574 2.75 19 2.75C20.2426 2.75 21.25 3.75736 21.25 5C21.25 6.24264 20.2426 7.25 19 7.25C17.7574 7.25 16.75 6.24264 16.75 5Z" fill="#ffffff"></path> <path d="M6.25 14C6.25 13.5858 6.58579 13.25 7 13.25H16C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75H7C6.58579 14.75 6.25 14.4142 6.25 14Z" fill="#ffffff"></path> <path d="M7 16.75C6.58579 16.75 6.25 17.0858 6.25 17.5C6.25 17.9142 6.58579 18.25 7 18.25H13C13.4142 18.25 13.75 17.9142 13.75 17.5C13.75 17.0858 13.4142 16.75 13 16.75H7Z" fill="#ffffff"></path> </g></svg>`,
    title: 'Real-Time Notifications',
    details:
      'Stay updated with instant confirmations, reminders, and order status alerts — so no one misses their reservation or special offer.',
  },
  {
    icon: `<svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4.8" y="-4.8" width="33.60" height="33.60" rx="5.04" fill="none" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>`,
    title: 'Restaurant Dashboard',
    details:
      'A powerful yet simple admin panel where restaurant owners can manage reservations, edit menus, and monitor analytics in one place.',
  },
])
</script>

<template>
  <!-- ====== Services Section Start -->
  <section class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span class="text-primary mb-2 block text-lg font-semibold"> Our Services </span>
            <h2 class="text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
              What We Offer
            </h2>
            <p class="text-body-color text-base">
              DineEase simplifies dining — from browsing menus to booking tables — all in one
              seamless, modern experience designed for both diners and restaurants.
            </p>
          </div>
        </div>
      </div>
      <div class="-mx-4 flex flex-wrap">
        <template v-for="(item, index) in featuresItems" :key="index">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              class="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
            >
              <div
                class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                v-html="item.icon"
              ></div>
              <h4 class="text-dark mb-[14px] text-2xl font-semibold">
                {{ item.title }}
              </h4>
              <p class="text-body-color">
                {{ item.details }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- ====== Services Section End -->
</template>
