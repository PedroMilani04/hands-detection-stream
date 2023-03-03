import handGestureFactory from "./factories/handGestureFactory.js";
import cardsFactory from "./factories/cardsFactory.js";

await cardsFactory.initialize();
await handGestureFactory.initialize();
