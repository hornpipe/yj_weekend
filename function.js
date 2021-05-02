// {"coord":{"lon":126.9778,"lat":37.5683},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":283.16,"feels_like":282.07,"temp_min":282.15,"temp_max":284.15,"pressure":1005,"humidity":71},"visibility":10000,"wind":{"speed":4.12,"deg":350},"rain":{"1h":0.13},"clouds":{"all":75},"dt":1619851010,"sys":{"type":1,"id":8105,"country":"KR","sunrise":1619815019,"sunset":1619864475},"timezone":32400,"id":1835848,"name":"Seoul","cod":200}
//http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=f7493ae0c87cc82e6b2aab6142034e0b
//fetch > http 주소형태로 넣을 수 있게 해주는 코드



let weatherImg = document.querySelector('.weather-img img');
let weatherText = document.querySelector('.weather-text');
let weatherTemp = document.querySelector('.weather-temp span');
let weatherTempMin = document.querySelector('.weather-temp-minmax .min');
let weatherTempMax = document.querySelector('.weather-temp-minmax .max');

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

/*
fetch('https://api.openweathermap.org/data/2.5/weather?lat=33.450701&lon=126.570667&appid=f7493ae0c87cc82e6b2aab6142034e0b')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        console.log(myJson.weather[0].icon);
        console.log(myJson.weather[0].main);
        console.log(myJson.main.temp - 284.17);
        console.log(myJson.main.temp_min - 282.15);
        console.log(myJson.main.temp_max - 283.52);
        weatherImg.src = '../img/' + myJson.weather[0].icon + '@2x.png';
        weatherText.innerHTML = myJson.weather[0].main;
        weatherTemp.innerHTML =   Math.floor(myJson.main.temp - 283.52);
        weatherTempMin.innerHTML = Math.floor(myJson.main.temp_min - 282.15);
        weatherTempMax.innerHTML = Math.floor(myJson.main.temp_max - 283.52);
    });
 */

// fetch().then().then()  <<<메소드 체이닝 (함수를 연달아 연결)
//json()이라는 함수가 모든데이터를 잘 읽어올수있도록 해준다.
//읽어온 데이터를 myjason
//myjason에 담긴 데이터를 함수로



// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커 생성
var marker = new kakao.maps.Marker({
    position:map.getCenter()
}); // 매개변수 값 : 마커위치

// 마커 표시
// marker.setMap(map);

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {

    // 클릭한 위도, 경도 정보를 가져옵니다
    var latlng = mouseEvent.latLng;

    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);

    console.log(latlng.getLat());
    console.log(latlng.getLng());

});

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

// 주소로 좌표를 검색합니다
geocoder.addressSearch('서울특별시 강남구 강남대로96길 16', function(result, status) {

    // 정상적으로 검색이 완료됐으면
    if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        console.log(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);


        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' +result[0].y+ '&lon=' +result[0].x+ '&appid=34a4feed02a685fbf04d590839d8d4d2&libraries=services')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                console.log(myJson.weather[0].icon);
                console.log(myJson.weather[0].main);
                console.log(myJson.main.temp - 284.17);
                console.log(myJson.main.temp_min - 282.15);
                console.log(myJson.main.temp_max - 283.52);
                weatherImg.src = '../img/' + myJson.weather[0].icon + '@2x.png';
                weatherText.innerHTML = myJson.weather[0].main;
                weatherTemp.innerHTML =   Math.floor(myJson.main.temp - 283.52);
                weatherTempMin.innerHTML = Math.floor(myJson.main.temp_min - 282.15);
                weatherTempMax.innerHTML = Math.floor(myJson.main.temp_max - 283.52);
            });

    }
});

