<template>
  <div class="temochi">
    <table class="temochi__table">
      <tbody>
        <tr>
          <td class="temochi__each" v-for="(temochiA, i) in temochiListA" :key="i"> {{ temochiA.size }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <table>
    <tbody v-for="(row, i) in boardList" :key="i">
      <tr>
        <td class="masu" :class="{ active: isActive(i, j) }" v-for="(ox, j) in row" :key="j" @click="clickCell(i, j)">{{
          ox.color }}</td>
      </tr>
    </tbody>
  </table>
  <div class="temochi">
    <table class="temochi__table">
      <tbody>
        <tr>
          <td class="temochi__each" v-for="(temochiB, i) in temochiListB" :key="i"> {{ temochiB.size }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p v-if="turn == 'o'">〇のターンです</p>
  <p v-else>✕のターンです</p>
  {{ temochi }}
</template>

<script>
import { Koma, createTemochiKomaList } from '@/common/koma.js'

export default {
  name: 'MarubatsuArea',
  data() {
    return {
      boardList: [[new Koma({ size: "small", color: "red", child: null }), '', ''], ['', '', ''], ['', '', '']],
      turn: "o",
      temochiListA: createTemochiKomaList("red"),
      temochiListB: createTemochiKomaList("blue"),
      temochi: null,
      stock: {
        i: null,
        j: null,
        value: "" // Koma型になる！
      }
    }
  },
  methods: {
    setmarubatsu(i, j) {
      if (!this.boardList[i][j]) {
        if (this.turn == "o") {
          this.boardList[i][j] = new Koma({ size: "small", color: "red", child: new Koma({ size: "small", color: "red", child: null }) })
          this.turn = "x"
        }
        else if (this.turn == "x") {
          this.boardList[i][j] = "x"
          this.turn = "o"
        }
      }
    },
    clickCell(i, j) {
      if (this.stock.value) {
        this.hanasu(i, j)

      }
      else {
        this.motsu(i, j)
      }

    },

    motsu(i, j) {
      if (this.boardList[i][j]) {
        this.stock.value = this.boardList[i][j]
        this.stock.i = i
        this.stock.j = j
      }
    },

    hanasu(i, j) {
      // はなせるのはboardにだけ
      if (!this.boardList[i][j]) {

        if (this.boardList[this.stock.i][this.stock.j].child == null) {
          this.boardList[this.stock.i][this.stock.j] = ""
        } else {
          this.boardList[this.stock.i][this.stock.j] = this.boardList[this.stock.i][this.stock.j].child
        }

        this.boardList[i][j] = this.stock.value
        this.stock.value = ""
        this.stock.i = null
        this.stock.j = null
        // this.setmarubatsu(i, j)
      }
    },

    isActive(i, j) {
      if (i == this.stock.i && j == this.stock.j) {
        return true;
      }
    }

  }
}
</script>

<style scoped>
table {
  margin: auto
}

.masu {
  border: 1px solid #333;
  height: 80px;
  width: 80px;
  text-align: center;
}

.temochi {
  margin: 10px;
}

.temochi__table {
  border: 1px solid #DDD;
}

.temochi__each {
  height: 80px;
  width: 80px;
  text-align: center;
}
</style>
