/**
 * @param {string} url - The URL.
 * @param {string} method - The method.
 */
export default (url, method = "GET") => {
	const request = new XMLHttpRequest();

	return new Promise(function(resolve, reject) {
		request.onreadystatechange = function() {
			if (request.readyState !== 4) return;
			if (request.status >= 200 && request.status < 300) {
				resolve(request);
			} else {
				reject({
					status: request.status,
					statusText: request.statusText
				});
			}
		};
		request.open(method, url, true);
		request.send();
	});
};
