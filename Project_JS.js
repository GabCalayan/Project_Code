//Adding mapbox token 
mapboxgl.accessToken = 'pk.eyJ1IjoiaGVpc2VuemlsbGEiLCJhIjoiY2xjcXlmaHlqMGE5eTNwbjJsZDhxODhpMSJ9.Ib4qz6M3pZ7pBDGXJr8DiA';

//Adding basemap 
const map = new mapboxgl.Map ({
    container: 'cult_attract',
    style: 'mapbox://styles/heisenzilla/cleg0trsv002001s135zy7mr3',
    center: [-79.347015, 43.651070],
    zoom: 10,
})

//Adding GEOJSON source 
map.on('load', () => {

map.addSource ('Cultural_Attract', {
    type:'geojson',
    data: 'https://gabcalayan.github.io/Project_Code/points-of-interest.geojson'
});

//Drawing GEOJSON point as circles to try it out 
map.addLayer({
    id: 'Cu_At',
    type: 'circle',
    source: 'Cultural_Attract',
    paint: {
        'circle-radius': 6,
        'circle-color': '#333333'
    }
   
    });
});