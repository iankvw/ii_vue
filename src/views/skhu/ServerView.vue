<script setup>
</script>

<template>
    <main>
        <div class="container">
            <h1>💻 서버구축및형상관리 💻</h1>
            <br>

            <div class="link-list">
                <a href="/server/student2v/">📂 student2v</a>
                <a href="/server/student2r/">📂 student2r</a>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    font-family: 'Pretendard', -apple-system, sans-serif;
    background-color: #F8F9FA;
    padding: 50px 20px;
    color: #212529;
    line-height: 1.6;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.container {
    max-width: 650px;
    margin: 0 auto;
}

h1 {
    color: #A91D3A;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
    letter-spacing: -1px;
}

.link-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

a {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    background-color: #FFF;
    border: 1px solid #DEE2E6;
    border-radius: 14px;
    text-decoration: none;
    color: #212529;
    font-weight: 500;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

a:hover {
    border-color: #A91D3A;
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(169, 29, 58, 0.08);
    color: #A91D3A;
}

a.main {
    background-color: #A91D3A;
    color: white;
    border: none;
    font-size: 1.1rem;
    padding: 20px;
    margin-bottom: 10px;
}

a.main:hover {
    background-color: #C12745;
    color: white;
    transform: translateX(5px);
}
</style>