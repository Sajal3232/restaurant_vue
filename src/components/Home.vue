<template>
    <div class="container">
        <p>hello {{ name }}this is a home page</p>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="item in restuarants" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.address}}</td>
                    <td>{{item.phone}}</td>
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
        
        async mounted(){
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user)[0].name;
            
            if(!user){
                this.$router.push({name:"SignUp"});
            }

            let results = await axios.get("http://localhost:3000/restaurants");
            this.restuarants = results.data;
        }
    }


</script>