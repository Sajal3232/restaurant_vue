<template>
    <div>
        <div class="my-login-page">
            <div class="h-100">
                <div class="container h-100">
                    <div class="row justify-content-md-center h-100">
                        <div class="card-wrapper">
                            <div class="brand">
                                <img src="../assets/signup.jpg" alt="logo">
                            </div>
                            <div class="card fat">
                                <div class="card-body">
                                    <h4 class="card-title">Login</h4>
                                    <form method="POST" class="my-login-validation" novalidate="">
                                        
                                        <div class="form-group">
                                            <label for="email" style="text-align:left">E-Mail Address</label>
                                            <input id="email" type="email" class="form-control" v-model="email" name="email" value="" required autofocus>
                                            <div class="invalid-feedback">
                                                Email is invalid
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="password" style="text-align:left">Password
                                                <a href="forgot.html"  class="float-right" style="float:right" >
                                                    Forgot Password?
                                                </a>
                                            </label>
                                            <input id="password" type="password" v-model="password" class="form-control" name="password" required data-eye>
                                            <div class="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>

                                        <div class="form-group m-2">
                                            <button type="button" style="float:left;" v-on:click="login" class="btn btn-primary">
                                                Login
                                            </button>
                                            <router-link style="float:right;" to="/signup" class="btn btn-info">sign up Here</router-link>
                                        </div>
                                        <div class="form-group  text-center " style="margin-top: 75px;">
                                            Don't have an account? <a href="">Create One</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        data(){
            return {
                email: '',
                password: '',
            }
        },
        methods: {
           async login(){
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                )
                if(result.status == 200 && result.data.length>0){
                localStorage.setItem("user-info", JSON.stringify(result.data));
                 this.$router.push({name:"home"});
             }
            }
        },

        mounted(){
            let user = localStorage.getItem('user-info');
                if(user){
                    this.$router.push({name:"home"});
            }
        }
    }
</script>

<style scoped>
html,body {
	height: 100%;
}

body.my-login-page {
	background-color: #f7f9fb;
	font-size: 14px;
}
.custom-control {
    position: relative;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
}
.my-login-page .brand {
	width: 90px;
	height: 90px;
	overflow: hidden;
	border-radius: 50%;
	margin: 40px auto;
	box-shadow: 0 4px 8px rgba(0,0,0,.05);
	position: relative;
	z-index: 1;
}

.my-login-page .brand img {
	width: 100%;
}

.my-login-page .card-wrapper {
	width: 400px;
}

.my-login-page .card {
	border-color: transparent;
	box-shadow: 0 4px 8px rgba(0,0,0,.05);
}

.my-login-page .card.fat {
	padding: 10px;
}

.my-login-page .card .card-title {
	margin-bottom: 30px;
}

.my-login-page .form-control {
	border-width: 2.3px;
}

.my-login-page .form-group label {
	width: 100%;
}

.my-login-page .btn.btn-block {
	padding: 12px 10px;
}

.my-login-page .footer {
	margin: 40px 0;
	color: #888;
	text-align: center;
}

@media screen and (max-width: 425px) {
	.my-login-page .card-wrapper {
		width: 90%;
		margin: 0 auto;
	}
}

@media screen and (max-width: 320px) {
	.my-login-page .card.fat {
		padding: 0;
	}

	.my-login-page .card.fat .card-body {
		padding: 15px;
	}
}


</style>