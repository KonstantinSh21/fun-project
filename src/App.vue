<template>
  <div id="app">
    <div id="nav">
      <router-link to="/pageone">Страница с таблицами</router-link>
      <router-link to="/pagetwo">Турнирная таблица</router-link>
      <router-link to="/pagethree">Видео о природе</router-link>
    </div>
    <router-view/>
    <h3>
      Данную работу выполнил Максим Терещенко
    </h3>
  </div>
</template>

<style>

body {
	background: linear-gradient(90deg, #f598a8, #f6edb2);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
