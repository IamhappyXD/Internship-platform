import { useNavigate } from "react-router-dom";
import NewInternshipForm from "../components/Internships/NewInternshipForm";

function NewInternshipPage() {
  const history = useNavigate();

  function addInternshipHandler(internshipData) {
    fetch(
      "https://react-app-internships-default-rtdb.firebaseio.com/internships.json",
      {
        method: "POST",
        body: JSON.stringify(internshipData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history("/");
    });
  }

  return <NewInternshipForm onAddInternship={addInternshipHandler} />;
}

export default NewInternshipPage;
