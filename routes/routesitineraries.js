const Router = require("express").Router();

const itinerariesControllers = require("../controllers/itinerariesControllers");

const { getItineraries, addItinerary, removeItinerary, modifyItinerary, getOneItinerary, } = itinerariesControllers;

Router.route("/itineraries").get(getItineraries).post(addItinerary);

Router.route("/itineraries/:id")
  .delete(removeItinerary)
  .put(modifyItinerary)
  .get(getOneItinerary);

module.exports = Router;
