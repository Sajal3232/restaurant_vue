<template>
    <div>
        <p>hello {{ name }}this is a home page</p>
    </div>
</template>

<script>
    export default{

        data(){
            return {
                name: ' '
            }
        },
        
        mounted(){
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user)[0].name;
            
            if(!user){
                this.$router.push({name:"SignUp"});
            }
        }
    }


</script>