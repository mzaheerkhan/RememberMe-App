<template>
    <the-header title="RememberMe"></the-header>
    <the-resources></the-resources>

</template>

<script>

import TheHeader from './TheHeader.vue';
import TheResources from './TheResouces.vue';

export default {
    components: {
        TheHeader,
        TheResources
    },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>
