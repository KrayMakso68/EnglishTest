<template>
  <q-layout view="fHh Lpr lFf">
    <q-header
      elevated
      class="bg-indigo-6 text-white"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="text-h6 q-ml-lg-xs">Menu</div>
        <q-toolbar-title class="text-center absolute-center text-weight-bold">
          English grammar test
        </q-toolbar-title>

        <div>

        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      elevated
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {computed, defineComponent, ref} from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import {useStore} from "vuex";

const linksList = [
  {
    title: 'Home',
    caption: 'home page',
    icon: 'home',
    link: '/'
  },
  {
    title: 'About',
    caption: 'about program',
    icon: 'list',
    link: 'about'
  },
  {
    title: 'Authors',
    caption: 'about authors',
    icon: 'stars',
    link: 'authors'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
