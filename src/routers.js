import compHome from './components/Home'
import copmSignUp from './components/SignUp.vue'
import compLogin from './components/Login.vue'


export const routes = [
    {
        path: '',
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
]