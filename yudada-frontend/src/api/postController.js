// @ts-ignore
/* eslint-disable */
import request from '@/request';
/** addPost POST /api/post/add */
export async function addPostUsingPost(body, options) {
    return request('/api/post/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** deletePost POST /api/post/delete */
export async function deletePostUsingPost(body, options) {
    return request('/api/post/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** editPost POST /api/post/edit */
export async function editPostUsingPost(body, options) {
    return request('/api/post/edit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** getPostVOById GET /api/post/get/vo */
export async function getPostVoByIdUsingGet(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return request('/api/post/get/vo', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
/** listPostByPage POST /api/post/list/page */
export async function listPostByPageUsingPost(body, options) {
    return request('/api/post/list/page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** listPostVOByPage POST /api/post/list/page/vo */
export async function listPostVoByPageUsingPost(body, options) {
    return request('/api/post/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** listMyPostVOByPage POST /api/post/my/list/page/vo */
export async function listMyPostVoByPageUsingPost(body, options) {
    return request('/api/post/my/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** updatePost POST /api/post/update */
export async function updatePostUsingPost(body, options) {
    return request('/api/post/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
//# sourceMappingURL=postController.js.map