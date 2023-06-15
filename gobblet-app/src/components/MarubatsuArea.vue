<template>
  <table>
    <tbody v-for="(row, i) in marubatsuList" :key="i">
      <tr>
        <td v-for="(ox, j) in row" :key="j" @click="setmarubatsu(i, j)">{{ ox }}</td>
      </tr>
    </tbody>
  </table>

  <p v-if="turn == 'o'">〇のターンです</p>
  <p v-else>✕のターンです</p>
</template>

<script>
import { sayHello } from '@/common/hello.js'
export default {
  name: 'MarubatsuArea',
  data() {
    return {
      marubatsuList: [['', '', ''], ['', '', ''], ['', '', '']],
      turn: "o"
    }
  },
  methods: {
    setmarubatsu(i, j) {
      if (!this.marubatsuList[i][j]) {
        if (this.turn == "o") {
          this.marubatsuList[i][j] = "o"
          this.turn = "x"
        }
        else if (this.turn == "x") {
          this.marubatsuList[i][j] = "x"
          this.turn = "o"
        }
      }
      sayHello()
    },

  }
}
</script>

<style scoped>
table {
  margin: auto
}

td {
  border: 1px solid #333;
  height: 80px;
  width: 80px;
  text-align: center;
}
</style>
