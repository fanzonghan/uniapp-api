import {
	HTTP_REQUEST_URL,
	HEADER,
	TOKENNAME
} from '@/config/app';
import store from '../store';

/**
 * 发送请求
 */
function baseRequest(url, method, data, {
	noAuth = false,
	isUpload = false
}) {
	let Url = HTTP_REQUEST_URL,
		header = HEADER;

	if (!noAuth) {
		if (!store.state.token) {
			return Promise.reject({
				info: "未登录"
			});
		}
	}
	if (store.state.token) header[TOKENNAME] = store.state.token;

	// 如果是上传请求
	if (isUpload) {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: Url + '/api/' + url,
				filePath: data.filePath,
				name: 'file',
				header: header,
				success: (res) => {
					resolve(JSON.parse(res.data))
				},
				fail: (msg) => {
					console.log(msg)
					uni.showModal({
						title: '上传失败',
						content: "系统开小车啦~",
						showCancel: false,
					})
				}
			});
		})
	}
	return new Promise((reslove, reject) => {
		if (uni.getStorageSync('locale')) {
			header['Cb-lang'] = uni.getStorageSync('locale')
		}
		uni.request({
			url: Url + '/api/' + url,
			method: method || 'GET',
			header: header,
			data: data || {},
			success: (res) => {
				console.log(res)
				if (res.data.code == 1){
					reslove(res.data, res);
				}else if(res.data.code == 0){
					reject(res.data);
				}else{
					console.log("系统开小车啦~")
				}
				// if(res.data.code == 4000){
				// 	store.commit('clear')
				// }
			},
			fail: (err) => {
				uni.showModal({
					title: '请求失败',
					content: "系统开小车啦~",
					showCancel: false,
				})
			}
		})
	});
}

const request = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
	request[method] = (api, data, opt) => baseRequest(api, method, data, opt || {})
});



export default request;
