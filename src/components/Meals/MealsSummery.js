import MealItem from './MealItems/MealItems';
import classes from './MealsSummery.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Order tasty & fresh food</h2><hr/>
      <h2 className={classes.heading2}>any time!</h2>
      <h6>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </h6>
      <h6>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </h6>
      {/* <button  type="button" className="btn btn-light">Check our food</button> */}
    </section>
  );
};

export default MealsSummary;