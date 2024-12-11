<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const user = {
    email: 'admin@example.com',
    password: 'easypass'
}

const email = ref('');
const password = ref('');

function onSubmit() {
    if (email.value == user.email && password.value == user.password) {
        window.localStorage.setItem('user', JSON.stringify(user));
        router.push('/logged-in');
    } else {
        alert('Неверный email или пароль');
    }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1>Страница логина</h1>
                <p>Для входа введите email "{{ user.email }}" и пароль "{{ user.password }}".</p>
                <form @submit.prevent="onSubmit">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Пароль</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Войти</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
