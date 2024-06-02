<template>
  <div class="content-container">
  <section class="section-container" id="factions" style="width:894px; height:714px;">
    <div style="height:52px; overflow:hidden;">
      <div class="section-header clipped-medium-backward-pilot">
        <img src="/icons/pilot-icon.svg" />
        <h1>Factions</h1>
      </div>
      <div class="rhombus-back">&nbsp;</div>
    </div>
    <div class="section-content-container">
      <div class="faction-list-container">
        <div v-for="faction in factions" :key="faction.slug" class="faction-item">
          <img :src="faction.image" alt="Faction Image" class="faction-image"/>
          <h2 class="faction-name">{{ faction.name }}</h2>
          <p class="faction-description">{{ faction.description }}</p>
        </div>
      </div>
    </div>
  </section>
    <section class="section-container" id="pilots" style="width:894px; height:714px;">
      <div style="height:52px; overflow:hidden;">
        <div class="section-header clipped-medium-backward-pilot">
          <img src="/icons/pilot-icon.svg" />
          <h1>People of Interest</h1>
        </div>
        <div class="rhombus-back">&nbsp;</div>
      </div>
      <div class="section-content-container">
        <div class="pilot-list-container">
          <Pilot v-for="item in this.pilots" :key="item.slug" :pilot="item" />
        </div>
      </div>
    </section>
  </div>
  <svg
    style="visibility: hidden; position: absolute;"
    width="0"
    height="0"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <filter id="round">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -5"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
  <audio autoplay>
    <source src="/startup.ogg" type="audio/ogg" />
  </audio>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import Mission from './components/Mission.vue';
import Pilot from './components/Pilot.vue';
import Markdown from 'vue3-markdown-it';

export default {
  components: {
    Header,
    Footer,
    Mission,
    Pilot,
    Markdown
  },

  data() {
    return {
      "header": {
        "planet": "Ishtar",
        "year": "5016u",
        "system": "Anu-ki",
        "gate": "Karakoram-Saltoro-Kangri",
        "ring": "Karakoram-Line",
        "headerTitle": "Union",
        "headerSubtitle": "Naval Department",
        "subheaderTitle": "Lancer Cadets",
        "subheaderSubtitle": "Delta-Squad",
        "debrief": "Debrief",
      },
      "options": {
        "eventsMarkdownPerMission": true
      },
      factions: [
        {
          slug: 'faction-1',
          name: 'Allied Republics of Ishtar',
          description: 'Description for Faction 1',
          image: '/path/to/image1.jpg'
        },
        {
          slug: 'faction-2',
          name: 'Union',
          description: 'Description for Faction 2',
          image: '/path/to/image2.jpg'
        },
        // Add more factions as needed
      ]
    }
  },

  created() {
    this.loadMissionMarkdown()
    this.loadEventsMarkdown()
  },

  computed: {

  },

  methods: {
    selectMission(mission) {
      this.mission_slug = mission.slug;
      this.loadMissionMarkdown()
      if(this.options.eventsMarkdownPerMission){
        this.loadEventsMarkdown();
      }
    },
    loadMissionMarkdown() {
      let self = this;
      let md = `/missions/${self.mission_slug}.md`
      var client = new XMLHttpRequest();
      client.open('GET', md);
      client.onreadystatechange = function () {
        self.current_md = client.responseText;
      }
      client.send();
    },
    loadEventsMarkdown() {
      let self = this;
      let md = "";

      if(self.options.eventsMarkdownPerMission){
        md = `/events/${self.mission_slug}.md`
      }
      else {
        md = "/events.md"
      }

      var client = new XMLHttpRequest();
      client.open('GET', md);
      client.onreadystatechange = function () {
        self.events = client.responseText;
      }
      client.send();
    }
  }
}
</script>


<style lang="scss">
#app {
  width: 1902px;
  height: 910px;
  overflow: hidden;
}
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

.section-container {
  font-family: 'Raleway', sans-serif;
  color: white;
}

.section-header {
  /* Add your styles here */
}

.rhombus-back {
  /* Add your styles here */
}

.section-content-container {
  padding: 20px;
}

.faction-list-container {
  display: flex;
  flex-wrap: wrap;
}

.faction-item {
  width: 200px;
  margin: 10px;
  text-align: center;
  border: 2px solid rgb(0, 117, 153);
  padding: 10px;
  box-sizing: border-box;
}

.faction-image {
  width: 100%;
  height: auto;
}

.faction-name {
  font-size: 1.2em;
  margin: 10px 0;
}

.faction-description {
  font-size: 1em;
}
</style>
