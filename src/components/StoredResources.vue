<template>
    <ul>
        <li v-for="resource in resources" :key="resource.id">
            <learning-resources :id="resource.id" :title="resource.title" :description="resource.description"
                :link="resource.link">
            </learning-resources>
        </li>
    </ul>
</template>

<script>
import LearningResources from './LearningResources.vue'

export default {
    components: {
        LearningResources
    },
    inject: ['resources']
}
</script>
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>