<template>
    <footer class="sticky top-[100vh] bg-neutral-100 text-center text-neutral-600 lg:text-left">
        <div class="mx-6 py-10 text-center md:text-left">
            <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <FooterAbout />
                <FooterAccount />
                <FooterContact />
                <FooterMap />
            </div>
        </div>
        <div class="bg-neutral-200 p-4 text-center">
            <span>© 2024 BẢN QUYỀN THUỘC CÔNG TY TNHH UNIQLO.</span>
        </div>
    </footer>
</template>

<script setup>
import FooterAbout from './FooterAbout.vue';
import FooterAccount from './FooterAccount.vue';
import FooterContact from './FooterContact.vue';
import FooterMap from './FooterMap.vue';
</script>

<style></style>