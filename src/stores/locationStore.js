
import { observable, computed } from 'mobx';
import Expo, {Permissions} from 'expo';

export default class LocationStore {
  @observable curLocation = {}
  @observable destination = {}

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

  @computed get curRegion() {
    return this.regionFrom(this.curLocation.lat, this.curLocation.lon, 600)
  }

  @computed get destRegion() {
    return this.regionFrom(this.destination.lat, this.destination.lon, 600)
  }

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