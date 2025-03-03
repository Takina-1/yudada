// @ts-ignore
/* eslint-disable */
import request from '@/request';
/** addApp POST /api/app/add */
export async function addAppUsingPost(body, options) {
    return request('/api/app/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** deleteApp POST /api/app/delete */
export async function deleteAppUsingPost(body, options) {
    return request('/api/app/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** editApp POST /api/app/edit */
export async function editAppUsingPost(body, options) {
    return request('/api/app/edit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** getAppVOById GET /api/app/get/vo */
export async function getAppVoByIdUsingGet(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return request('/api/app/get/vo', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
/** listAppByPage POST /api/app/list/page */
export async function listAppByPageUsingPost(body, options) {
    return request('/api/app/list/page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** listAppVOByPage POST /api/app/list/page/vo */
export async function listAppVoByPageUsingPost(body, options) {
    return request('/api/app/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** listMyAppVOByPage POST /api/app/my/list/page/vo */
export async function listMyAppVoByPageUsingPost(body, options) {
    return request('/api/app/my/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** doAppReview POST /api/app/review */
export async function doAppReviewUsingPost(body, options) {
    return request('/api/app/review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** updateApp POST /api/app/update */
export async function updateAppUsingPost(body, options) {
    return request('/api/app/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
//# sourceMappingURL=appController.js.map