<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
            
            <div class="collapse navbar-collapse bg-info justify-content-around" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link"  href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Add Restuarant</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Edit Restuarant</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="logout" href="#">Logout</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
 
   </div>
</template>

<script>
    export default{
        name: "Header",

        methods: {
            logout(){
                localStorage.clear();
                this.$router.push({name:'Login'});
            }
        },
    }
</script>