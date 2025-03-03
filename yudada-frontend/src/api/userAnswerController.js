// @ts-ignore
/* eslint-disable */
import request from '@/request';
/** addUserAnswer POST /api/userAnswer/add */
export async function addUserAnswerUsingPost(body, options) {
    return request('/api/userAnswer/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** deleteUserAnswer POST /api/userAnswer/delete */
export async function deleteUserAnswerUsingPost(body, options) {
    return request('/api/userAnswer/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** editUserAnswer POST /api/userAnswer/edit */
export async function editUserAnswerUsingPost(body, options) {
    return request('/api/userAnswer/edit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** getUserAnswerVOById GET /api/userAnswer/get/vo */
export async function getUserAnswerVoByIdUsingGet(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return request('/api/userAnswer/get/vo', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
/** listUserAnswerByPage POST /api/userAnswer/list/page */
export async function listUserAnswerByPageUsingPost(body, options) {
    return request('/api/userAnswer/list/page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** listUserAnswerVOByPage POST /api/userAnswer/list/page/vo */
export async function listUserAnswerVoByPageUsingPost(body, options) {
    return request('/api/userAnswer/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** listMyUserAnswerVOByPage POST /api/userAnswer/my/list/page/vo */
export async function listMyUserAnswerVoByPageUsingPost(body, options) {
    return request('/api/userAnswer/my/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** updateUserAnswer POST /api/userAnswer/update */
export async function updateUserAnswerUsingPost(body, options) {
    return request('/api/userAnswer/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
//# sourceMappingURL=userAnswerController.js.map