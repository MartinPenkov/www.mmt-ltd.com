<template>
  <div id="app">
    <app-navigation />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from '@/components/Navigation'
import AppFooter from '@/components/Footer'

export default {
  data: () => ({
  }),
  components: {
    'app-navigation': AppNavigation,
    'app-footer': AppFooter
  }
}
</script>

<style>
</style>
