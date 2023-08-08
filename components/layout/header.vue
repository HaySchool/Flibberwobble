<template>
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <nav class="my-4 hidden w-full max-w-[500px] lg:flex lg:space-x-8 justify-between shadow-md shadow-primary-lighter mx-auto lg:px-8 lg:py-2 rounded-full"
            aria-label="Global">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'text-primary-lighter font-semibold' : 'text-gray-default/50 hover:text-gray-default', 'inline-flex items-center rounded-full text-base font-semibold']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
        </nav>
        <div class="w-full mx-auto">
            <LayoutHeaderMobile :Menu="navigation" />
        </div>
    </div>
</template>
<script setup>
const navigation = [
    { name: 'Accueil', href: '#', current: true, icon: 'fas fa-home' },
    { name: 'Calendrier', href: '#', current: false, icon: 'fas fa-calendar' },
    { name: 'CUMP', href: '#', current: false, icon: 'fas fa-layer-group' },
    { name: 'Utilisateur', href: '#', current: false, icon: 'fas fa-users' },
]
</script>