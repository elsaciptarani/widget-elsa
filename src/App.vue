<template>
  <div class="app">
    <nav class="nav-bar">
      <ul class="nav-list">
        <li>
          <router-link to="/location" class="nav-link" :class="{ 'active': $route.path === '/location' }">Location</router-link>
        </li>
        <li>
          <router-link to="/stopwatch" class="nav-link" :class="{ 'active': $route.path === '/stopwatch' }">Stopwatch</router-link>
        </li>
        <li>
          <router-link to="/weather" class="nav-link" :class="{ 'active': $route.path === '/weather' }">Weather</router-link>
        </li>
        <li>
          <router-link to="/scrambleword" class="nav-link" :class="{ 'active': $route.path === '/scrambleword' }">Scramble Word</router-link>
        </li>
        <li>
          <router-link to="/photo" class="nav-link" :class="{ 'active': $route.path === '/photo' }">Photo</router-link>
        </li>
      </ul>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(223,170,255);
background: radial-gradient(circle, rgba(223,170,255,1) 0%, rgba(79,12,110,1) 47%, rgba(239,203,255,1) 100%);
  padding: 20px;
}

.nav-bar {
  background-color: #6b317f;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-link {
  color: #f5f5f5;
  text-decoration: none;
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #dbbcd8;
}

.active {
  background-color: #dbbcd8;
}

.content {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
}
</style>
