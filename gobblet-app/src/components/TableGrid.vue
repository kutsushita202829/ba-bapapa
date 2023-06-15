<template>
  <!-- v-forについてのチュートリアル https://ja.vuejs.org/tutorial/#step-7 -->
  <!-- ぐるぐるしないでそのまま出してみる -->
  <div class="marubatsu">{{ marubatsuList }}</div>

  <!-- vforでぐるぐる３列がわけて出る -->
  <div v-for="row in marubatsuList" :key="row" class="row">
    {{ row }}
  </div>

  <!-- vforでぐるぐる３列になったのをさらにぐるぐるしてわけてみる -->
  <div v-for="row in marubatsuList" :key="row" class="ox">
    れつのはじまり
    <div v-for="ox in row" :key="ox">
      {{ ox }}
    </div>
  </div>

  <!-- 上をtableの形にしてみる -->
  <table>
    <tbody v-for="(row, i) in marubatsuList" :key="row">
      <tr>
        <td v-for="(ox, j) in row" :key="ox" @click="setmarubatsu(i, j)">{{ ox }}</td>
      </tr>
    </tbody>
  </table>
  <!-- vforのindexをとる
    https://qiita.com/shin_moto/items/85dd2ed2f7341592da73 -->
  <!-- table書き方例 
  <table>
    <tbody>
        <tr>
            <td>1行目1個目</td>
            <td>1行目2個目</td>
        </tr>
        <tr>
            <td>2行目1個目</td>
            <td>2行目2個目</td>
        </tr>
    </tbody>
</table> -->
</template>

<script>
export default {
  name: 'TableGrid',
  data() {
    return {
      marubatsuList: [['o', 'x', 'o'], ['x', 'o', 'x'], ['o', 'x', 'x']],
    }
  },
  methods: {
    setmarubatsu(i, j) {
      this.marubatsuList[i][j] = "a"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.marubatsu {
  background: red;
}

.row {
  background: blue;
}

.ox {
  background: yellow;
}


td {
  border: 1px solid #333;
}
</style>
