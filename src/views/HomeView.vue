<script setup></script>

<template>
    <main class="container">
        <img src="/img/logo2.png" alt="iank.im logo">
        <h1>Ian Kim</h1>
        <div class="links">
            <a href="https://iank.im/">iank.im</a>
        </div>
    </main>
</template>

<style scoped>
.container {
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

img {
    max-width: 300px;
    height: auto;
    margin-bottom: 20px;
    filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
}

h1 {
    color: #333;
    font-weight: 300;
    letter-spacing: 2px;
}

.links {
    margin-top: 20px;
}

.links a {
    text-decoration: none;
    color: #0070f3;
    margin: 0 15px;
    font-weight: 500;
    transition: color 0.2s;
}

.links a:hover {
    color: #0051af;
}
</style>