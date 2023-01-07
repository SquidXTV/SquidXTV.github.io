const ageElement = document.querySelector('[data-birthdate]');
const birthdate = ageElement.getAttribute('data-birthdate');

const calculateAge = () => {
    const now = new Date();
    const birthdateArray = birthdate.split('-');
    const birthyear = parseInt(birthdateArray[0]);
    const birthmonth = parseInt(birthdateArray[1]);
    const birthday = parseInt(birthdateArray[2]);
    let age = now.getFullYear() - birthyear;

    if (now.getMonth() < birthmonth || (now.getMonth() === birthmonth && now.getDate() < birthday)) {
        age -= 1;
    }

    ageElement.innerHTML = `Software Developer | ${age} years old`;
};

calculateAge();