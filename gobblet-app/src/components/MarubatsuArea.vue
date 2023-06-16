<template>
  <table>
    <tbody>
      <tr>
        <td class="temochi" v-for="(temochiA, i) in temochiListA" :key="i"> {{ temochiA }}</td>
      </tr>
    </tbody>
  </table>

  <table>
    <tbody v-for="(row, i) in marubatsuList" :key="i">
      <tr>
        <td v-for="(ox, j) in row" :key="j" @click="setmarubatsu(i, j)">{{ ox }}</td>
      </tr>
    </tbody>
  </table>

  <table>
    <tbody>
      <tr>
        <td class="temochi" v-for="(temochiB, i) in temochiListB" :key="i"> {{ temochiB }}</td>
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
      turn: "o",
      temochiListA: ['大', '大', '中', '中', '小', '小'],
      temochiListB: ['', '大', '中', '中', '', '小'],
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

.temochi {
  background-color: lightgreen;
}
</style>
