// @ts-ignore
/* eslint-disable */
import request from '@/request';
/** doThumb POST /api/post_thumb/ */
export async function doThumbUsingPost(body, options) {
    return request('/api/post_thumb/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
//# sourceMappingURL=postThumbController.js.map