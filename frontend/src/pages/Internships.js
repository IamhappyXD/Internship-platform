import { useState, useEffect } from "react";
import InternshipList from "../components/Internships/InternshipList";
import SearchBar from "../components/SearchBar";

function Internships() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedInternships, setLoadedInternships] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-app-internships-default-rtdb.firebaseio.com/internships.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const internships = [];

        for (const key in data) {
          const internship = {
            id: key,
            ...data[key],
          };

          internships.push(internship);
        }

        setIsLoading(false);
        setLoadedInternships(internships);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <SearchBar />
      <h1>All Internships</h1>
      <InternshipList internships={loadedInternships} />
    </section>
  );
}

export default Internships;
