<template>
    <Popover class="lg:hidden relative">
        <PopoverButton
            class="flex items-center gap-x-1 text-xl text-primary justify-center w-fit mx-auto shadow-md shadow-primary-lighter px-4 rounded-full my-4">
            <span>
                <font-awesome-icon :icon="['fas', 'ellipsis']" />
            </span>
        </PopoverButton>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div
                    class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-primary-lighter/5">
                    <div class="p-4">
                        <div v-for="item in Menu" :key="item.name"
                            class="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-primary-lighter hover:text-white text-primary-lighter">
                            <div
                                class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary-lighter group-hover:bg-white">
                                <font-awesome-icon :icon="item.icon" class="text-2xl text-white group-hover:text-primary-lighter"
                                    aria-hidden="true" />
                            </div>
                            <div>
                                <a :href="item.href" class="font-semibold">
                                    {{ item.name }}
                                    <span class="absolute inset-0" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>
  
<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const props = defineProps({
    Menu: {
        type: Array,
        default: () => []
    }
})
</script>