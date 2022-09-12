import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../views/Todos.vue';
import NewTask from '../views/NewTask.vue';
import EditTask from '../views/EditTask.vue';

const routes = [
    {
        path: '/',
        name: 'Todos',
        component : Todos
    },
    {
        path: '/add-task',
        name: 'NewTask',
        component: NewTask
    },
    {
        path: '/edit-task/:id',
        name: 'EditTask',
        component: EditTask,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;