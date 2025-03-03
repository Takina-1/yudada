// @ts-ignore
/* eslint-disable */
import request from '@/request';
/** addScoringResult POST /api/scoringResult/add */
export async function addScoringResultUsingPost(body, options) {
    return request('/api/scoringResult/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** deleteScoringResult POST /api/scoringResult/delete */
export async function deleteScoringResultUsingPost(body, options) {
    return request('/api/scoringResult/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** editScoringResult POST /api/scoringResult/edit */
export async function editScoringResultUsingPost(body, options) {
    return request('/api/scoringResult/edit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** getScoringResultVOById GET /api/scoringResult/get/vo */
export async function getScoringResultVoByIdUsingGet(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return request('/api/scoringResult/get/vo', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
/** listScoringResultByPage POST /api/scoringResult/list/page */
export async function listScoringResultByPageUsingPost(body, options) {
    return request('/api/scoringResult/list/page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** listScoringResultVOByPage POST /api/scoringResult/list/page/vo */
export async function listScoringResultVoByPageUsingPost(body, options) {
    return request('/api/scoringResult/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** listMyScoringResultVOByPage POST /api/scoringResult/my/list/page/vo */
export async function listMyScoringResultVoByPageUsingPost(body, options) {
    return request('/api/scoringResult/my/list/page/vo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** updateScoringResult POST /api/scoringResult/update */
export async function updateScoringResultUsingPost(body, options) {
    return request('/api/scoringResult/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
//# sourceMappingURL=scoringResultController.js.map