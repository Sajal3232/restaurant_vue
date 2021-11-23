<template>
    <div class="container">
        <div class="card fat">
            <div class="card-body">
                <h4 class="card-title">Update Resturant</h4>
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
                                <button type="button" style="float:left;" v-on:click="updateRestuarant" class="btn btn-primary">
                                    Update Restuarant
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
import axios from 'axios';
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

        methods:{
           async updateRestuarant(){
                const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id,{
                    name : this.restaurants.name,
                    address : this.restaurants.address,
                    phone : this.restaurants.phone,
                })

                if(result.status == 200){
                    this.$router.push({name:"home"});
                }
            }
        },
        
        async mounted(){
            let user = localStorage.getItem('user-info');
                if(!user){
                    this.$router.push({name:"SignUp"});
            }
            let result = await axios.get("http://localhost:3000/restaurants/"+ this.$route.params.id)
            console.log('ghdg',result)
            this.restaurants = result.data;

        },

        
    }


</script>