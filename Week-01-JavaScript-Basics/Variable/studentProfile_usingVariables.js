
let studentProfile; 

studentProfile = {
    name: "Jeeva",
    age: 25,
    city: "pondy",
    isEnrolled: true
};
studentProfile.age = 30; // updating the age property

function updateProfile() {
    const newstudentProfile = {
        name: "Yuvi",
        age: 30,
        city: "pondy",
        isEnrolled: false
    };
    newstudentProfile.age = 22; // updating the age property
    console.log(newstudentProfile.name,newstudentProfile.age, newstudentProfile.city, newstudentProfile.isEnrolled); // { name: 'Yuvi', age: 22, city: 'pondi', isEnrolled: false }
}

updateProfile(); // calling the function to update the profile


console.log(studentProfile); // { name: 'Jeeva', age: 30, city: 'pondi', isEnrolled: true }
