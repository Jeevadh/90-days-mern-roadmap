

let studentProfile;  

studentProfile = {
    name: "Jeeva",
    age: 25,
    city: "pondi",
    isEnrolled: true,
    mark: 92,
    average: 90,
    total: 100,
};

      if (typeof studentProfile.mark === "number") {
        if (studentProfile.mark >= 90) {
          const Percentage = (studentProfile.mark / studentProfile.total) * 100;
          console.log(
            studentProfile.name +
              " has scored " +
              studentProfile.mark +
              " out of " +
              studentProfile.total +
              ", which is " +
              Percentage +
              "%",
          );
        } else {
          console.log("Student mark is not a number");
        }
      } else {
        console.log("Student scored less than 90");
      }

