<template>


  <div>

   <router-link :to="{ name: 'Create' }" class="button is-success mt-5">Add Employe</router-link>
    
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Employe Id</th>
          <th>Employe Name</th>
          <th>Employe email</th>
          <th>Employe telephone nu</th>
          <th>Employe Registered Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in emp" :key="emp.id">
          <td>{{ emp.id }}</td>
          <td>{{ emp.name }}</td>
          <td>{{ emp.email }}</td>
          <td>{{ emp.tele }}</td>
          <td>{{ emp.date }}</td>
         
        </tr>
      </tbody>
    </table>

  


  </div>

</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "Employelist",
  data() {
    return {
     emp: [],
    };
  },
  
  created() {
    this.getEmployes();
  },
  
  methods: {

    async getEmployes() {
    
        const response = await axios.get("http://localhost:8080/");
        this.items = response.data;
     
    },
  

  },
};
</script>
