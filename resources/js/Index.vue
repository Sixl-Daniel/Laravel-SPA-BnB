<template>
    <div>
        <Nav />
        <div class="container my-4 px-1">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Nav from "./components/NavigationMainComponent";

export default {
    components: {
        Nav
    }
};
</script>
