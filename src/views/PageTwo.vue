<template>
    <div class="wrapper">

      <h2>Турнирная таблица</h2>
      <table>
        <tr>
          <th>Команды</th>
          <th>Октан</th>
          <th>Молот</th>
          <th>Югра</th>
          <th>Трактор</th>
          </tr>
         <tr>
          <td>Октан</td>
          <td>----</td>
          <td>3:5</td>
          <td>2:5</td>
          <td>4:3</td>
         </tr>
        <tr>
          <td>Молот</td>
          <td>5:2</td>
          <td>----</td>
          <td>4:3</td>
          <td>4:3</td>
        </tr>
        <tr>
          <td>Югра</td>
          <td>2:4</td>
          <td>3:2</td>
          <td>----</td>
          <td>3:7</td>
        </tr>
        <tr>
          <td>Трактор</td>
          <td>2:4</td>
          <td>1:6</td>
          <td>2:3</td>
          <td>----</td>
        </tr>
        </table>
    </div>
</template>

<script>

export default {
  name: 'PageTwo',
  components: {

  }
}
</script>

<style scoped>

.wrapper{
  text-align: center;
  margin: 0 auto;
}

table {
    font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
    font-size: 14px;
    border-collapse: collapse;
    text-align: center;
    margin: 40px auto;
}
th, td:first-child {
    background: #AFCDE7;
    color: white;
    padding: 10px 20px;
}
th, td {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
}
td {
    background: #D8E6F3;
}
th:first-child, td:first-child {
    text-align: left;
} 
</style>
