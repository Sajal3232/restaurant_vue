<template>
    <div>
        <div>
            

            <div class="row d-flex justify-content-center">
                
                <div class="col-lg-6">
                    <div class="d-block m-auto">
                        <img class="signup_logo" src="../assets/signup.jpg" alt="">
                        <h2 class="text-center">Sign Up</h2>
                    </div>
                    <div class="row py-3 justify-content-center">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="name" id="name" >
                        </div>
                    </div>

                    <div  class="row py-3 justify-content-center">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-6">
                            <input type="email" class="form-control" v-model="email" id="email">
                        </div>
                    </div>
                        
                    <div  class="row py-3 justify-content-center">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-6">
                            <input type="password" class="form-control" v-model="password"  id="password">
                        </div>
                    </div> 
                    <div class="row py-3">
                       <label for="staticEmail" class="col-sm-2 col-form-label"></label>
                        <div class="col-sm-6" >
                            <button v-on:click="signUp" class="btn btn-info">Submit</button>
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                name: '',
                email : '',
                password : ''
            }
        },

        methods : {

            async signUp(){
               let  result = await axios.post('http://localhost:3000/users',{
                email: this.email,
                password: this.password,
                name: this.name,
                 
             });

             if(result.status == 201){
                 this.$router.push({name:"home"});
             }
           }
        }

    }
</script>

<style scoped>
.signup_logo{
    width: 100px;
}
</style>