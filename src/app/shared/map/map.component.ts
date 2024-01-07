// map.component.ts

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

declare var L: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() mapCoordinates: { latitude: number, longitude: number };
  @Output() mapCoordinatesChange = new EventEmitter<{ latitude: number, longitude: number }>();

  private map;

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    this.map = L.map('map').setView([34, -5], 7);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // Create a marker group to manage markers
    const markers = L.layerGroup().addTo(this.map);

    this.map.on('click', (e) => {
      this.mapCoordinates = { latitude: e.latlng.lat, longitude: e.latlng.lng };
      this.mapCoordinatesChange.emit(this.mapCoordinates);

      markers.clearLayers();
      L.marker(e.latlng).addTo(markers);
    });

    // If initial coordinates are provided, set the map view and marker
    if (this.mapCoordinates) {
      this.setMapViewAndMarker(this.mapCoordinates.latitude, this.mapCoordinates.longitude);
    }
  }

  private setMapViewAndMarker(latitude, longitude) {
    this.map.setView([latitude, longitude], 7);
    const markers = L.layerGroup().addTo(this.map);
    L.marker([latitude, longitude]).addTo(markers);
  }
}
