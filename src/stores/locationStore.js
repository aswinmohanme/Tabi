
import { observable } from 'mobx';

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
}