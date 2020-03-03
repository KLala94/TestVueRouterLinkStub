<template>
  <div>
    <div class="vertical-menu">
      <div class="dropdown-content">
        <ul style="list-style-type: none;" class="ul-link">
          <li>
            <router-link id="testFirst" to="/first">first</router-link>
          </li>
          <li>
            <router-link id="testSecond" to="/second">second</router-link>
          </li>
          <li>
            <router-link id="testThird" to="/third">third</router-link>
          </li>
          <li>
            <router-link id="testMain" to="/">Main Page</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.vertical-menu a {
  color: black;
  display: inline-block;
  padding: 12px;
  text-decoration: none;
  width: 100px;
}

.vertical-menu a:hover {
  background-color: rgb(37, 196, 130);
}

.vertical-menu a.active {
  background-color: rgb(0, 68, 255);
  color: white;
}
.dropdown-content {
  display: block;
  position: absolute;
  width: 190px;
  min-width: 145px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 18%;
  height: 130px;
}
.palceholderImg {
  width: 90%;
}
li {
  width: 180px;
  height: 100px;
  font-size: 30px;
}
.ul-link {
  width: 200px;
}
</style>