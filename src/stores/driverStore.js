
import { observable, computed } from 'mobx';
import { computedAsync } from 'computed-async-mobx';
import FireBase from './fireBase';
import GeoFire from 'geofire';

class DriverStore {
  fireBaseRef = null
  geoFire = null
  @observable drivers = []
  @observable radius = 0

  constructor() {
    this.fireBaseRef = FireBase.database().ref().child('locs/');
    this.geoFire = new GeoFire(this.fireBaseRef);
  }

  findDrivers(location, radius) {
    var GeoQuery = this.geoFire.query({
      center: location,
      radius: radius,
    });

    GeoQuery.on("key_entered", (key, location, distance) => {
      index = this.lookup(key)
      if(index != -1)
        return;

      // console.log(key);
      this.drivers.push({
        key: key,
        location: location,
        distance: distance,
      });
    });

  }

  lookup( key ) {
    for(var i=0; i < this.drivers.length; ++i){
      if( this.drivers[i].key === key)
        return i;
    }

    return -1;
  }
}

export default DriverStore;