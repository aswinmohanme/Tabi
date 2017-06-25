
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
    console.log(location);
    var GeoQuery = this.geoFire.query({
      center: location,
      radius: radius,
    });

    GeoQuery.on("key_entered", (key, location, distance) => {
      index = this.lookup(key)
      if(index === -1)
        console.log(key + index)
        // return;

      // console.log(key);
      this.drivers.push({
        key: key,
        location: location,
        distance: distance,
      });
    });

    GeoQuery.on("ready", () => {
      GeoQuery.cancel();
    });
  }

  lookup( key ) {
    if (this.drivers.length === 0)
      return 0;

    for(var i=0; i < this.drivers.length; ++i){
      if( this.drivers[i].key === key)
        return i;
    }

    return -1;
  }
}

export default DriverStore;