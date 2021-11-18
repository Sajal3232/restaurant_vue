<template>
    <div>
        <p>this is a home page</p>
    </div>
</template>

<script>
    export default{
        
        mounted(){
            let user = localStorage.getItem('user-info');
                if(!user){
                    this.$router.push({name:"SignUp"});
            }
        }
    }


</script>