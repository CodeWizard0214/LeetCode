class UndergroundSystem {
  constructor() {
    // store checkIn time and station info for each customer
    this.checkIns = new Map();
    // store total time and count of trips between each start-end station pair
    this.trips = new Map();
  }

  checkIn(id, stationName, t) {
    // add the checkIn info for the customer to the checkIns map
    this.checkIns.set(id, { startStation: stationName, startTime: t });
  }

  checkOut(id, stationName, t) {
    // get the checkIn info for the customer
    const { startStation, startTime } = this.checkIns.get(id);
    // calculate the trip time
    const tripTime = t - startTime;
    // get the trips info for the start-end station pair
    const key = `${startStation}-${stationName}`;
    const { totalTime = 0, count = 0 } = this.trips.get(key) || {};
    // update the trips info with the new trip time
    this.trips.set(key, { totalTime: totalTime + tripTime, count: count + 1 });
    // remove the checkIn info for the customer
    this.checkIns.delete(id);
  }

  getAverageTime(startStation, endStation) {
    // get the trips info for the start-end station pair
    const key = `${startStation}-${endStation}`;
    const { totalTime, count } = this.trips.get(key);
    // calculate and return the average trip time
    return totalTime / count;
  }
}