<template>
  <table>
    <tbody>
      <tr>
        <td class="temochi" v-for="(temochiA, i) in temochiListA" :key="i"> {{ temochiA.size }}</td>
      </tr>
    </tbody>
  </table>

  <table>
    <tbody v-for="(row, i) in boardList" :key="i">
      <tr>
        <td v-for="(ox, j) in row" :key="j" @click="setmarubatsu(i, j)">{{ ox }}</td>
      </tr>
    </tbody>
  </table>

  <table>
    <tbody>
      <tr>
        <td class="temochi" v-for="(temochiB, i) in temochiListB" :key="i"> {{ temochiB.size }}</td>
      </tr>
    </tbody>
  </table>
  <p v-if="turn == 'o'">〇のターンです</p>
  <p v-else>✕のターンです</p>
  {{ temochi }}
</template>

<script>
import { sayHello } from '@/common/hello.js'
import { Koma, createTemochiKomaList } from '@/common/koma.js'

export default {
  name: 'MarubatsuArea',
  data() {
    return {
      boardList: [['', '', ''], ['', '', ''], ['', '', '']],
      turn: "o",
      temochiListA: createTemochiKomaList(),
      temochiListB: createTemochiKomaList(),
      temochi: null
    }
  },
  methods: {
    setKoma() {

      const childKoma = new Koma({ size: "small", child: null })
      this.temochi = new Koma({ size: "big", child: childKoma })
    },
    setmarubatsu(i, j) {
      if (!this.boardList[i][j]) {
        if (this.turn == "o") {
          this.boardList[i][j] = "o"
          this.turn = "x"
        }
        else if (this.turn == "x") {
          this.boardList[i][j] = "x"
          this.turn = "o"
        }
      }
      sayHello()
      this.setKoma()
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
