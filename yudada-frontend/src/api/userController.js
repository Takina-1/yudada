// @ts-ignore
/* eslint-disable */
import request from '@/request';
/** addUser POST /api/user/add */
export async function addUserUsingPost(body, options) {
    return request('/api/user/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** deleteUser POST /api/user/delete */
export async function deleteUserUsingPost(body, options) {
    return request('/api/user/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** getUserById GET /api/user/get */
export async function getUserByIdUsingGet(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return request('/api/user/get', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
/** getLoginUser GET /api/user/get/login */
export async function getLoginUserUsingGet(options) {
    return request('/api/user/get/login', {
        method: 'GET',
        ...(options || {}),
    });
}
/** getUserVOById GET /api/user/get/vo */
export async function getUserVoByIdUsingGet(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return request('/api/user/get/vo', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
/** listUserByPage POST /api/user/list/page */
export async function listUserByPageUsingPost(body, options) {
    return request('/api/user/list/page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
// ...(options || {})：合并额外的配置选项（如果有）。
/** listUserVOByPage POST /api/user/list/page/vo */
export async function listUserVoByPageUsingPost(body, options) {
    return request('/api/user/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** userLogin POST /api/user/login */
export async function userLoginUsingPost(body, options) {
    return request('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** userLogout POST /api/user/logout */
export async function userLogoutUsingPost(options) {
    return request('/api/user/logout', {
        method: 'POST',
        ...(options || {}),
    });
}
/** userRegister POST /api/user/register */
export async function userRegisterUsingPost(body, options) {
    return request('/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** updateUser POST /api/user/update */
export async function updateUserUsingPost(body, options) {
    return request('/api/user/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** updateMyUser POST /api/user/update/my */
export async function updateMyUserUsingPost(body, options) {
    return request('/api/user/update/my', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
//# sourceMappingURL=userController.js.map