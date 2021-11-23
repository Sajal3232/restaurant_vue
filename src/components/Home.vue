<template>
    <div class="container">
        <h1>hello {{ name }} this is a home page</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="item in restuarants" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.address}}</td>
                    <td>{{item.phone}}</td>
                    <td>
                        <router-link class="btn btn-info" :to="'/update/'+ item.id ">Update</router-link>
                        <button type="button" class="btn btn-danger" v-on:click="deleteRestuarant(item.id)">Delete</button>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios";
    export default{
        data(){
            return {
                name: ' ',
                restuarants : []
            }
        },

        methods: {
           async deleteRestuarant(id){
                let result = await axios.delete("http://localhost:3000/restaurants/"+id)

                if(result.status == 200){
                    this.loadView();
                }
               
            },

            async loadView(){
                let user = localStorage.getItem('user-info');
                this.name = JSON.parse(user)[0].name;
                
                if(!user){
                    this.$router.push({name:"SignUp"});
                }

                let results = await axios.get("http://localhost:3000/restaurants");
                this.restuarants = results.data;
            }
        },
        
        async mounted(){
             this.loadView();
        }
    }


</script>