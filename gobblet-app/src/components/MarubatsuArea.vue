<template>
  <table>
    <tbody v-for="(row, i) in marubatsuList" :key="i">
      <tr>
        <td v-for="(ox, j) in row" :key="j" :class="{ active: isActive(i, j)}" @click="clickCell(i, j)">{{ ox }}</td>
      </tr>
    </tbody>
  </table>
  <p>te: {{ stock.value }}</p>
<!--
  <p v-if="turn == 'o'">〇のターンです</p>
  <p v-else>✕のターンです</p>
  -->
</template>

<script>
export default {
  name: 'MarubatsuArea',
  data() {
    return {
      marubatsuList: [['o', '', ''], ['', '', ''], ['', '', '']],
      turn: "o",
      stock: {
        i: null,
        j: null,
        value: ""
      }
    }
  },
  methods: {
    clickCell(i, j) {
      if (this.stock.value) {
        this.hanasu(i, j)
      }
      else {
        this.motsu(i, j)
      }
    },

    motsu(i, j) {
      if (this.marubatsuList[i][j]) {
        this.stock.value = this.marubatsuList[i][j]
        this.stock.i = i
        this.stock.j = j
      }
    },

    hanasu(i, j) {
      if (!this.marubatsuList[i][j]) {
        this.marubatsuList[this.stock.i][this.stock.j] = ""
        this.marubatsuList[i][j] = this.stock.value
        this.stock.value = ""
        this.stock.i = null
        this.stock.j = null
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

td {
  border: 1px solid #333;
  height: 80px;
  width: 80px;
  text-align: center;
}

.active {
  background: yellow;
}
</style>
