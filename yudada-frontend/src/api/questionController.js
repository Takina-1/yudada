// @ts-ignore
/* eslint-disable */
import request from '@/request';
/** addQuestion POST /api/question/add */
export async function addQuestionUsingPost(body, options) {
    return request('/api/question/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** deleteQuestion POST /api/question/delete */
export async function deleteQuestionUsingPost(body, options) {
    return request('/api/question/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** editQuestion POST /api/question/edit */
export async function editQuestionUsingPost(body, options) {
    return request('/api/question/edit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** getQuestionVOById GET /api/question/get/vo */
export async function getQuestionVoByIdUsingGet(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return request('/api/question/get/vo', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
/** listQuestionByPage POST /api/question/list/page */
export async function listQuestionByPageUsingPost(body, options) {
    return request('/api/question/list/page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** listQuestionVOByPage POST /api/question/list/page/vo */
export async function listQuestionVoByPageUsingPost(body, options) {
    return request('/api/question/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** listMyQuestionVOByPage POST /api/question/my/list/page/vo */
export async function listMyQuestionVoByPageUsingPost(body, options) {
    return request('/api/question/my/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** updateQuestion POST /api/question/update */
export async function updateQuestionUsingPost(body, options) {
    return request('/api/question/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
//# sourceMappingURL=questionController.js.map