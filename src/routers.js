import compHome from './components/Home'
import copmSignUp from './components/SignUp.vue'


export const routes = [
    {
        path: '',
        component : compHome,
        name: "home"

    },
    {
        path: '/signup',
        component : copmSignUp,
    },
]