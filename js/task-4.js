const usersArr = [
    {
        name: "Moore Hensley",
        gender: "male",
        balance: 2811
    },
    {
        name: "Sharlene Bush",
        gender: "female",
        balance: 3821
    },
    {
        name: "Ross Vazquez",
        gender: "male",
        balance: 3793
    },
    {
        name: "Elma Head",
        gender: "female",
        balance: 2278
    },
    {
        name: "Carey Barr",
        gender: "male",
        balance: 3951
    },
    {
        name: "Blackburn Dotson",
        gender: "male",
        balance: 1498
    },
    {
        name: "Sheree Anthony",
        gender: "female",
        balance: 2764
    }
];

const getTotalBalanceByGender = (users, gender) => {
    let genderBalanceCount = 0;

    users.map((user) => {
        if (user.gender === gender) {
            genderBalanceCount += user.balance;
        }
    });

    return genderBalanceCount;
}

console.log(getTotalBalanceByGender(usersArr, "male")); // 12053

console.log(getTotalBalanceByGender(usersArr, "female")); // 8863