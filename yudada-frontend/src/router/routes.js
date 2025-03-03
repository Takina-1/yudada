import HomeView from "@/views/HomeView.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import NoAuthPage from "@/views/NoAuthPage.vue";
import UserLoginPage from "@/views/user/UserLoginPage.vue";
import UserRegisterPage from "@/views/user/UserRegisterPage.vue";
import AdminUserPage from "@/views/admin/AdminUserPage.vue";
import AdminAppPage from "@/views/admin/AdminAppPage.vue";
import AdminQuestionPage from "@/views/admin/AdminQuestionPage.vue";
import AdminScoringResultPage from "@/views/admin/AdminScoringResultPage.vue";
import AdminUserAnswerPage from "@/views/admin/AdminUserAnswerPage.vue";
export const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/admin/user",
        name: "用户管理",
        component: AdminUserPage,
        // 配置路由的元（权限，标题，是否登录），
        // 这里用于控制路由的访问权限
        meta: {
            access: ACCESS_ENUM.ADMIN,
        },
    },
    {
        path: "/admin/app",
        name: "应用管理",
        component: AdminAppPage,
        meta: {
            access: ACCESS_ENUM.ADMIN,
        },
    },
    {
        path: "/admin/question",
        name: "题目管理",
        component: AdminQuestionPage,
        meta: {
            access: ACCESS_ENUM.ADMIN,
        },
    },
    {
        path: "/admin/scoring_result",
        name: "评分管理",
        component: AdminScoringResultPage,
        meta: {
            access: ACCESS_ENUM.ADMIN,
        },
    },
    {
        path: "/admin/user_answer",
        name: "回答管理",
        component: AdminUserAnswerPage,
        meta: {
            access: ACCESS_ENUM.ADMIN,
        }
    },
    {
        path: "/noAuth",
        name: "无权限",
        component: NoAuthPage,
        meta: {
            // 而 hideInMenu 是开发者自定义的一个属性，
            // 用于控制该路由是否在导航菜单中显示。
            //可以过滤为真的组件
            hideInMenu: true,
        },
    },
    {
        path: "/hide",
        name: "隐藏页面",
        component: HomeView,
        meta: {
            hideInMenu: true,
        },
    },
    {
        path: "/user",
        name: "用户",
        component: UserLayout,
        children: [
            {
                path: "/user/login",
                name: "用户登录",
                component: UserLoginPage,
            },
            {
                path: "/user/register",
                name: "用户注册",
                component: UserRegisterPage,
            },
        ],
        meta: {
            hideInMenu: true,
        },
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];
//# sourceMappingURL=routes.js.map