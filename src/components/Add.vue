<template>
    <div class="container">
        <div class="card fat">
            <div class="card-body">
                <h4 class="card-title">Add Resturant</h4>
                <form method="POST" class="my-login-validation" novalidate="">
                    
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                           <div class="mb-3">
                                <label class="form-label" style="float:left;">Resturant Name</label>
                                <input type="text" class="form-control" v-model="restaurants.name"  placeholder="Resturant Name">
                            </div>
                        </div>                        
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                           <div class="mb-3">
                                <label class="form-label" style="float:left;">Address</label>
                                <input type="text" class="form-control" v-model="restaurants.address" placeholder="Address">
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                           <div class="mb-3">
                                <label class="form-label" style="float:left;">Phone</label>
                                <input type="text" class="form-control" v-model="restaurants.phone"  placeholder="Phone">
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                           <div class="mb-3">
                                <label class="form-label" style="float:left;"></label>
                                <button type="button" style="float:left;" v-on:click="addRestuarant" class="btn btn-primary">
                                    Save
                                </button>                            
                            </div>
                        </div>                        
                    </div>

                    
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default{
        
        data(){
            return{
                restaurants: {
                    name: '',
                    address: '',
                    phone: ''
                }
            }
        },

        methods: {
           async addRestuarant(){
              const result = await axios.post("http://localhost:3000/restaurants",{
                    name : this.restaurants.name,
                    address : this.restaurants.address,
                    phone : this.restaurants.phone,
                })

                if(result.status == 201){
                    this.$router.push({name:"home"});
                }
            }
        },

        mounted(){
            let user = localStorage.getItem('user-info');
                if(!user){
                    this.$router.push({name:"SignUp"});
            }
        }
    }


</script>