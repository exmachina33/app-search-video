<template>
  <svg style="display: none">
    <symbol id="heart">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </symbol>
    <symbol id="eye-off">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_14753_10662)">
        <path d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94ZM9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19L9.9 4.24002Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 1L23 23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_14753_10662">
          <rect fill="white"/>
        </clipPath>
      </defs>
    </svg>
    </symbol>
    <symbol id="eye-on">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </symbol>
    <symbol id="logo">
      <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1487 43.5668L24.683 60.956V79.3991L59.1487 62.0099V43.5668Z" fill="#1390E5"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6831 26.1787L59.1488 43.5679V62.0111L24.6831 44.6218V26.1787Z" fill="#1180CB"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1487 8.79065L24.683 26.1799V44.623L59.1487 27.2338V8.79065Z" fill="#35A2EC"/>
      </svg>
    </symbol>
    <symbol id="list">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M8 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 6H3.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 12H3.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 18H3.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>

    </symbol>
    <symbol id="grid">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5H5V10H10V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19 5H14V10H19V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19 14H14V19H19V14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 14H5V19H10V14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </symbol>
    <symbol id="arrow">
      <svg viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.29289 4.29289L0.853553 0.853553C0.538571 0.538571 0.761654 0 1.20711 0H8.79289C9.23835 0 9.46143 0.53857 9.14645 0.853553L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289Z" fill="currentColor"/>
      </svg>
    </symbol>
    <symbol id="close">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18 18L6 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M6 18L18 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
      </svg>
    </symbol>
    <symbol id="heart-fill">
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8401 3.61012C20.3294 3.09912 19.7229 2.69376 19.0555 2.4172C18.388 2.14064 17.6726 1.99829 16.9501 1.99829C16.2276 1.99829 15.5122 2.14064 14.8448 2.4172C14.1773 2.69376 13.5709 3.09912 13.0601 3.61012L12.0001 4.67012L10.9401 3.61012C9.90843 2.57842 8.50915 1.99883 7.05012 1.99883C5.59109 1.99883 4.19181 2.57842 3.16012 3.61012C2.12843 4.64181 1.54883 6.04108 1.54883 7.50012C1.54883 8.95915 2.12843 10.3584 3.16012 11.3901L4.22012 12.4501L12.0001 20.2301L19.7801 12.4501L20.8401 11.3901C21.3511 10.8794 21.7565 10.2729 22.033 9.60547C22.3096 8.93801 22.4519 8.2226 22.4519 7.50012C22.4519 6.77763 22.3096 6.06222 22.033 5.39476C21.7565 4.7273 21.3511 4.12087 20.8401 3.61012Z" fill="#C5E4F9" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </symbol>
  </svg>
</template>

<script>
export default {
  name: "IconList"
}
</script>

<style scoped>

</style>
