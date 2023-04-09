import { Swipe, SwipeItem, Button, popup } from "vant";
let plugins = [Swipe, SwipeItem, Button, popup];

export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item);
  });
}
