<template>
    <based-card>
        <base-button @click="setSelectedTabs('stored-resources')" :mode="storedResButtonMode">Stored
            Resources</base-button>
        <base-button @click="setSelectedTabs('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </based-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>


<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'
export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official guide',
                    description: 'It\'s the official guide related to Vue.js',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to use Google......',
                    link: 'https://google.com'
                }
            ]

        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addresource: this.addResource,
            removeResource: this.removeResource

        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? 'null' : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? 'null' : 'flat'
        }
    },
    methods: {
        setSelectedTabs(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources'
        },
        removeResource(resId) {
            const resIndex = this.storedResources.findIndex(res => res.id === resId)
            if (resIndex !== -1) {
                this.storedResources.splice(resIndex, 1);
            }

        }
    }

}
</script>