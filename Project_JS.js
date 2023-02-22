//Adding mapbox token 
mapboxgl.accessToken = 'pk.eyJ1IjoiaGVpc2VuemlsbGEiLCJhIjoiY2xjcXlmaHlqMGE5eTNwbjJsZDhxODhpMSJ9.Ib4qz6M3pZ7pBDGXJr8DiA';

//Adding basemap 
const map = new mapboxgl.Map ({
    container: 'cult_attract',
    style: 'mapbox://styles/heisenzilla/cleg0trsv002001s135zy7mr3',
    center: [-79.347015, 43.651070],
    zoom: 9,
})