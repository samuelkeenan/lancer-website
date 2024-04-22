<template>
  <header class="clipped-x-large-forward">
    <div class="title clipped-x-large-forward">
    <div style="position: relative; display: inline-block;">
      <img src="icon-image.png" @click="isOpen = !isOpen" alt="Dropdown Icon" style="cursor: pointer;">
      <div v-if="isOpen" style="display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;">
        <router-link to="/main" style="color: black; padding: 12px 16px; text-decoration: none; display: block;">Debrief</router-link>
        <router-link to="/debrief" style="color: black; padding: 12px 16px; text-decoration: none; display: block;">Dossier</router-link>
      </div>
    </div>
      <div class="title-container">
        <div class="title-row" id="title-first-line">
          <span id="title-header">{{ header.headerTitle }}</span>
          <span id="title-subheader">{{ header.headerSubtitle }}</span>
        </div>
        <div class="title-row">
          <span id="subtitle-header">{{ header.subheaderTitle }}</span>
          <span id="subtitle-subheader">// {{ header.subheaderSubtitle }}</span>
        </div>
      </div>
    </div>
    <div class="rhombus">&nbsp;</div>
    <video autoplay muted loop width="90px" height="90px">
      <source src="/planet.webm" type="video/webm" />
    </video>
    <div class="location-info">
      <div class="location-row" id="planet-year">
        <div id="planet">
          <h4>Deployment Info</h4>
          <span class="subtitle">{{ header.planet }}</span>
        </div>
        <div id="year">
          <h4>Year</h4>
          <span class="subtitle">{{ header.year }}</span>
        </div>
      </div>
      <div class="location-row" id="system-gate-ring">
        <div id="system">
          <h4>System</h4>
          <span class="subtitle">{{ header.system }}</span>
        </div>
        <div id="gate">
          <h4>Gate</h4>
          <span class="subtitle">{{ header.gate }}</span>
        </div>
        <div id="ring">
          <h4>Ring</h4>
          <span class="subtitle">{{ header.ring }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>


export default {
  components: {
  },
  props: {
    header: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
