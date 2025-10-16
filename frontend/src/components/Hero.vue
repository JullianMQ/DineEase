<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="relative bg-white pt-20 pb-[110px]">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full px-4 lg:w-5/12">
          <div class="hero-content ml-2 lg:ml-0">
            <h1
              class="mb-5 text-4xl font-bold !leading-[1.208] text-foreground sm:text-[42px] lg:text-[40px] xl:text-5xl"
            >
              The All in One <br />
              Web Application for <br />
              Dining.
            </h1>
            <p class="mb-8 max-w-[480px] text-base text-foreground">
              With DineEase, eating and reserving seats has never been easier. Diners can easily see
              and reserve seats for their favorite restaurant. While helping restaurants manage seat reservations easily.
            </p>
            <ul class="flex flex-wrap items-center">
              <li>
                <RouterLink
                  to="/sign-up"
                  class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
                >
                  Get Started
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="hidden px-4 lg:block lg:w-1/12"></div>
        <div class="w-full px-4 lg:w-6/12">
          <div class="lg:ml-auto lg:text-right">
            <div class="relative z-10 inline-block pt-11 lg:pt-0">
              <img
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=710"
                alt="hero"
                class="max-w-full lg:ml-auto rounded-tl-full rounded-br-full"
              />
              <span class="absolute -left-8 -bottom-8 z-[-1]">
                <svg
                  width="93"
                  height="93"
                  viewBox="0 0 93 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="2.5" cy="46.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="2.5" cy="68.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="2.5" cy="90.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="24.5" cy="2.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="24.5" cy="24.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="24.5" cy="46.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="24.5" cy="68.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="24.5" cy="90.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="46.5" cy="2.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="46.5" cy="24.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="46.5" cy="46.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="46.5" cy="68.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="46.5" cy="90.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="68.5" cy="2.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="68.5" cy="24.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="68.5" cy="46.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="68.5" cy="68.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="68.5" cy="90.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="90.5" cy="2.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="90.5" cy="24.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="90.5" cy="46.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="90.5" cy="68.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                  <circle cx="90.5" cy="90.5" r="2.5" fill="oklch(0.7040 0.1910 22.2160)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
