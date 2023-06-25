<template>
  <div class="temochi">
    <table class="temochi__table">
      <tbody>
        <tr>
          <td class="temochi__each" :class="{ active: turn == 'red' ? isTemochiActive(i) : '' }"
            v-for="(temochiA, i) in temochiListA" :key="i" @click="turn == 'red' ? clickTemochi(i) : ''">
            <img v-if="temochiA.size != null" class="komaimg"
              :src="require(`@/assets/images/${komaImgFilename(temochiA.color, temochiA.size)}`)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <table>
    <tbody v-for="(row, i) in boardList" :key="i">
      <tr>
        <td class="masu" :class="{ active: isActive(i, j) }" v-for="(ox, j) in row" :key="j" @click="clickBoard(i, j)">
          <img v-if="ox.size != null" class="komaimg"
            :src="require(`@/assets/images/${komaImgFilename(ox.color, ox.size)}`)" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="temochi">
    <table class="temochi__table">
      <tbody>
        <tr>
          <td class="temochi__each" :class="{ active: turn == 'blue' ? isTemochiActive(i) : '' }"
            v-for="(temochiB, i) in temochiListB" :key="i" @click="turn == 'blue' ? clickTemochi(i) : ''">

            <img v-if="temochiB.size != null" class="komaimg"
              :src="require(`@/assets/images/${komaImgFilename(temochiB.color, temochiB.size)}`)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p v-if="turn == 'red'">red のターンです</p>
  <p v-else>blue のターンです</p>
</template>

<script>
import { createTemochiKomaList } from '@/common/koma.js'

export default {
  name: 'MarubatsuArea',
  data() {
    return {
      boardList: [['', '', ''], ['', '', ''], ['', '', '']],
      turn: 'red',
      temochiListA: createTemochiKomaList("red"),
      temochiListB: createTemochiKomaList("blue"),
      stock: {
        i: null,
        j: null,
        value: '' // Koma型になる！
      }
    }
  },
  methods: {
    clickBoard(i, j) {
      if (this.stock.value) {
        this.hanasu(i, j)
      }
      else {
        this.motsu(i, j)
      }
    },

    clickTemochi(i) {
      if (!this.stock.value) {
        this.temochiMotsu(i)
      }
    },

    temochiMotsu(i) {
      if (this.turn == 'red') {
        if (this.temochiListA[i]) {
          if (this.temochiListA[i].color == 'red') {
            this.stock.value = this.temochiListA[i]
            this.stock.i = i
          }
        }
      }
      else {
        if (this.temochiListB[i]) {
          if (this.temochiListB[i].color == 'blue') {
            this.stock.value = this.temochiListB[i]
            this.stock.i = i
          }
        }
      }
    },

    motsu(i, j) {
      if (this.boardList[i][j]) {
        if (this.boardList[i][j].color == this.turn) {
          this.stock.value = this.boardList[i][j]
          this.stock.i = i
          this.stock.j = j
        }
      }
    },

    hanasu(i, j) {
      // boardからboardに移動
      if (this.stock.j != null) {
        // stockのchildに駒があったら、元いたマスに置く
        if (this.stock.value.child) {
          this.boardList[this.stock.i][this.stock.j] = this.stock.value.child
          this.stock.value.child = null
        }
        else {
          this.boardList[this.stock.i][this.stock.j] = ""
        }
      }
      // 手持ちからboardに移動
      else {
        if (this.turn == 'red') {
          this.temochiListA[this.stock.i] = ""
        }
        else {
          this.temochiListB[this.stock.i] = ""
        }
      }

      // 置こうとしているマスに既に駒があったら、自分のchildに格納
      if (this.boardList[i][j]) {
        this.stock.value.child = this.boardList[i][j]
      }
      // 駒を放す
      this.boardList[i][j] = this.stock.value

      this.stock.value = ""
      this.stock.i = null
      this.stock.j = null
      if (this.turn == 'red') {
        this.turn = 'blue'
      }
      else {
        this.turn = 'red'
      }
    },

    isActive(i, j) {
      if (i == this.stock.i && j == this.stock.j) {
        return true;
      }
    },
    isTemochiActive(i) {
      if (i == this.stock.i && this.stock.j == null) {
        return true;
      }
    },
    komaImgFilename(color, size) {
      const filename = `${color}_${size}.png`
      return filename
    }
    // 置けるか判定
    ,
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

.komaimg {
  height: 80px;
  width: 80px;
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

.active {
  background-color: yellow;
}
</style>
