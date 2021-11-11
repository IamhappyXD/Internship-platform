import classes from "./InternshipList.module.css";
import InternshipItem from "./InternshipItem";

function InternshipList(props) {
  return (
    <ul className={classes.list}>
      {props.internships.map((internship) => (
        <InternshipItem
          key={internship.id}
          id={internship.id}
          image={internship.image}
          title={internship.title}
          address={internship.address}
          description={internship.description}
        />
      ))}
    </ul>
  );
}

export default InternshipList;
