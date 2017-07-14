import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Resume from '@/components/resume'
import Project from '@/components/project'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Main',
        component: Main
    }, {
        path: '/resume',
        name: 'Resume',
        component: Resume
    }, {
        path: '/project',
        name: 'Project',
        component: Project
    }]
})