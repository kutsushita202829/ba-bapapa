<template>
    <div id="app">   
        <table border="1">
            <tr v-for="(row) in states" :key=row>
                <td v-for="(column) in row" :key=column>
                    <div class="maru" v-if="column == 1">
                        ◯
                    </div>
                    <div class="batsu" v-if="column == 2">
                        x
                    </div>
                </td>
            </tr>
        </table>
          <p class="player1" v-if="playerId == 1">
            プレイヤー1さんの番です
        </p>
        <p  class="player2" v-if="playerId == 2">
            プレイヤー2さんの番です
        </p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            states:[
                [-1,-1,-1],
                [-1,-1,-1],
                [-1,-1,-1],
            ],
            playerId:1
        }
    }
 }
</script>

<style lang="scss" scoped>
  #app{
      width: 500px;
      margin:200px auto;
  }
  .maru,
  .player1{
      color:red;
  }
  .batsu,
  .player2{
      color:blue;
  }
  td{
      width: 50px;
      height: 50px;
      text-align: center;
  }
</style>