import data from '../../data/data.js';
import FeaturesItem from '../FeaturesItem/FeaturesItem.jsx';

const Features = () => {

  const { features } = data;

  return (
    <section className="features">
      {features.map((feat, index) => (
        <FeaturesItem
          key={index}
          icon={feat.icon}
          title={feat.title}
          text={feat.text}
        />
      ))}
    </section>
  );
};

export default Features;