<template>
  <div class="hello">
  <nav>
    <router-link to="/cv">Cv</router-link>
  </nav>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
