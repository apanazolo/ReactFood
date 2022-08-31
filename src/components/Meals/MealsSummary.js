import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to Your Doorstep.</h2>
      <p>
        Choose your favorite meal from our vast selection of available meals and
        get to enjoy our delicacies at home.
      </p>
      <p>
        All dishes seen on this page are cooked with fresh, high-quality
        ingredients, by the finest chefs around!
      </p>
    </section>
  );
};

export default MealsSummary;
