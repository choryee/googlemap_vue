<template>
  <div className="hello">
    <hr>
    <p>---------밑은 HellWord.vue 컴포넌트 임--</p>
    <h3> MESSAGE==> {{ msg }}</h3>
    <table class="my-table">
      <th>아이디</th>
      <th>사용자이름</th>
      <th>목적지</th>
      <th>등록날짜</th>
      <tr v-for="s in sdata" :key="s.username">
        <td>{{ s.id }}</td>
        <td>{{ s.username }}</td>
        <td>{{ s.destination }}</td>
        <td>{{ s.createDate }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    title: {},
    people: {},
    sdata: [] // 변경된 부분
  }
}
</script>

<style scoped>
.my-table {
  border-collapse: collapse;
  width: 100%;
}

.my-table th,
.my-table td {
  border: 1px solid white;
  padding: 8px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
