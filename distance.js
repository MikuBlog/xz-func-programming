// 获取地球两点间直线距离
function getDistance(p1, p2) {
	let radLat1 = (p1.lat * Math.PI) / 180.0;
	let radLat2 = (p2.lat * Math.PI) / 180.0;
	let a = radLat1 - radLat2;
	let b = (p1.lng * Math.PI) / 180.0 - (p2.lng * Math.PI) / 180.0;
	let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(
		b / 2), 2)));
	s = s * 6371.393; // EARTH_RADIUS;
	s = Math.round(s * 10000) / 10000;
	return s;
}