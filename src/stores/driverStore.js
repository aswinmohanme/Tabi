
import { observable, computed } from 'mobx';
import LocationStore from './locationStore';
import { computedAsync } from 'computed-async-mobx';

class DriverStore {

  driversList = computedAsync({
    init: [],
    fetch: async() => {

    }
  });
}

export default new DriverStore();