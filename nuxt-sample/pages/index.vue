<template>
  <section class="container">
    <h1>Nuxt Sample</h1>
    <div>
      <h2>Hello</h2>
      <p>{{msg}}</p>

      <h2>カウントアップ/ダウン</h2>
      <p class="count">{{count}}</p>
      <button @click="countUp">＋</button>
      <button @click="countDown">－</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello, Nuxt!'
    }
  },
  computed: {
    count() {
      // stateの呼び出しは this.$store.state.[JSファイル名].[プロパティ]
      // [JSファイル名]はindexなら省略可。
      return this.$store.state.counter.count
    }
  },
  methods: {
    countUp (e) {
      // メソッドの呼び出しはthis.$store.commit('[JSファイル名]/[メソッド名]')
      // 「[JSファイル名]/」はindexなら省略可。
      this.$store.commit('counter/up')
    },
    countDown (e) {
      this.$store.commit('counter/down')
    }
  }
}
</script>

<style>
.count {
  font-size: 48px;
}
</style>

