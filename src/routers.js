import compHome from './components/Home.vue'
import copmSignUp from './components/SignUp.vue'
import compLogin from './components/Login.vue'
import compAdd from './components/Add.vue'
import compUpdate from './components/Update.vue'


export const routes = [
    {
        path: '/',
        component : compHome,
        name: "home"

    },
    {
        path: '/signup',
        component : copmSignUp,
        name: "SignUp"
    },
    {
        path: '/login',
        component : compLogin,
        name: "Login"
    },
    {
        path: '/add',
        component : compAdd,
        name: "Add"
    },
    {
        path: '/update',
        component : compUpdate,
        name: "Update"
    },
]