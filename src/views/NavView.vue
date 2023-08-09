<template>
    <div>
        <SideNav></SideNav>
        <BreadcrumbsPP class="topNav"></BreadcrumbsPP>
        <button id="exit" @click="$router.push('/')">退出</button>
    </div>
</template>

<style scoped>
.topNav{
  position: fixed;
  width: 100%;
  font-size: 0.7rem;
  padding: 0.5rem;
  margin-bottom: 1px;
  z-index: 10;
  margin-left: 10%;
}
#exit{
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 15;
}
</style>

<script lang="ts">
import SideNav from '@/components/SideNav.vue';
import BreadcrumbsPP from '@/components/Breadcrumbs.vue';

export default{
    components: {
        SideNav,
        BreadcrumbsPP
    },
}
</script>