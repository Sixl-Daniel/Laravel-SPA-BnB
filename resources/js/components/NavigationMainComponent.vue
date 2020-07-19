<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{ name: 'home' }" class="navbar-brand mr-auto" href="#">LaravaelBnB</router-link>
        <ul class="navbar-nav">
            <router-link tag="li" class="nav-item" :to="{ name: 'home' }">
                <a class="nav-link">Home</a>
            </router-link>
            <router-link tag="li" class="nav-item" :to="{ name: 'p1' }">
                <a class="nav-link">Page 1</a>
            </router-link>
            <router-link tag="li" class="nav-item" :to="{ name: 'p2' }">
                <a class="nav-link">Page 2</a>
            </router-link>
            <router-link tag="li" class="nav-item" :to="{ name: 'p3' }">
                <a class="nav-link">Page 3</a>
            </router-link>
        </ul>
    </nav>
</template>
