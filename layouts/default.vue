<template>
    <div class="min-h-screen flex flex-col">
        <div class="mb-2">
            <LayoutHeader />
        </div>
        <div class="flex-1">
            <slot />
        </div>
        <div class="mt-auto">
            <LayoutFooter />
        </div>
    </div>
</template>
  
