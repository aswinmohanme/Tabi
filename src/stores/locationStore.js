import {observable, computed} from 'mobx';
import Expo, {Permissions} from 'expo';
import Polyline from '@mapbox/polyline';
import {computedAsync} from 'computed-async-mobx';
import {DIRECTION_API} from '../config';

class LocationStore {
  @observable curLocation = null
  @observable destination = null
  @observable distance = 600
  @observable time = 0
  @observable didLoad = false

  get didLoad() {
    return this.didLoad;
  }

  set didLoad(value) {
    this.didLoad = value;
  }
  get curLocation() {
    return this.curLocation;
  }

  set curLocation(location) {
    this.curLocation = location;
  }

  get destination() {
    return this.destination;
  }

  set destination(location) {
    this.destination = location;
  }

  @computed get region() {
    if (this.destination === null) 
      return this.curRegion;
    
    return this.regionFrom(this.destination.lat, this.destination.lon, this.distance)

  }

  @computed get curRegion() {
    return this.regionFrom(this.curLocation.lat, this.curLocation.lon, 600)
  }

  @computed get destRegion() {
    return this.regionFrom(this.destination.lat, this.destination.lon, 600)
  }

  @computed get wayPoints() {
    return this.wayCoords.value;
  }

  wayCoords = computedAsync({
    init: [],
    fetch: async() => {
      startLoc = `${this.curLocation.lat},${this.curLocation.lon}`
      destinationLoc = `${this.destination.lat},${this.destination.lon}`
      try {
        let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${DIRECTION_API}`)
        let respJson = await resp.json();
        this.distance = respJson.routes[0].legs[0].distance.value;
        this.time = respJson.routes[0].legs[0].duration.value;
        let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
        let coords = points.map((point, index) => {
          return {latitude: point[0], longitude: point[1]}
        })
        return coords;
      } catch (error) {
        console.log(error);
      }
    }
  });

  regionFrom(lat, lon, distance) {
    distance = distance / 2
    const circumference = 40075
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000
    const angularDistance = distance / circumference

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
    const longitudeDelta = Math.abs(Math.atan2(Math.sin(angularDistance) * Math.cos(lat), Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

    return result = {
      latitude: lat,
      longitude: lon,
      latitudeDelta,
      longitudeDelta
    }
  }
}

export default LocationStore;