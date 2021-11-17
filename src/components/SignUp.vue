<template>
    <div>
        <div>
            

            <div class="row d-flex justify-content-center">
                
                <div class="col-lg-6">
                    <div class="d-block m-auto">
                        <img class="signup_logo" src="../assets/signup.jpg" alt="">
                        <h2 class="text-center">Restaurant Sign Up</h2>
                    </div>
                    <div class="row py-3 justify-content-center">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control"  id="name" >
                        </div>
                    </div>

                    <div  class="row py-3 justify-content-center">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-6">
                            <input type="email" class="form-control" id="email">
                        </div>
                    </div>
                        
                    <div  class="row py-3 justify-content-center">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-6">
                            <input type="password" class="form-control" id="password">
                        </div>
                    </div> 
                    <div class="row py-3">
                       <label for="staticEmail" class="col-sm-2 col-form-label"></label>
                        <div class="col-sm-6" style="text-align:left">
                            <button class="btn btn-info">Submit</button>
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
.signup_logo{
    width: 100px;
}
</style>