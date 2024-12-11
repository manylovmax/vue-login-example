<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function logout() {
    window.localStorage.removeItem('user');
    router.push('/');
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1>Защищенная страница</h1>
                <button @click="logout">Log out</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
