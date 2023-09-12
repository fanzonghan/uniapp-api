import request from "@/utils/request.js";
// GET方式
export function getIndexData() {
	return request.get("url", {}, {
		noAuth: true
	});
}

export function seckillCode(data) {
	return request.get("url", data);
}

export function getPayOrder(uni){
  return request.get('order/status/'+uni);
}

/**
 * POST方式
 */
export function getCombinationPoster(data) {
	return request.post('url', data)
}