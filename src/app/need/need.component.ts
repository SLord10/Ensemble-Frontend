import { Component, OnInit } from '@angular/core';

declare var L: any;

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.css']
})
export class NeedComponent implements OnInit {

  focus: any;
  focus1: any;
  nn: any;

  constructor() { }

  ngOnInit() {
    let map = L.map('map').setView([34, -5], 7);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Create a marker group to manage markers
    var markers = L.layerGroup().addTo(map);

    // Using an arrow function to retain the component's context
    const onMapClick = (e) => {
      // Remove existing markers
      markers.clearLayers();

      // Create a new marker at the clicked location
      var newMarker = L.marker(e.latlng).addTo(markers);

      // You can also open a popup for the marker if needed
      newMarker.bindPopup("You clicked the map at " + e.latlng.toString()).openPopup();

      // Extract latitude and longitude separately
      const coordinates = e.latlng.toString().match(/\(([^,]+),\s*([^)]+)\)/);
      if (coordinates && coordinates.length === 3) {
        this.nn = {
          latitude: parseFloat(coordinates[1]),
          longitude: parseFloat(coordinates[2])
        };
      } else {
        console.error('Invalid coordinates format');
      }
    };

    map.on('click', onMapClick);
  }
}
