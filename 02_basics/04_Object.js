// const tinderUser = new Object() //singleton

const tinderUser = {} //non Singleton

tinderUser.id = "123abc"
tinderUser.name = "SAMMY"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "yash",
            lastname: "Rathee"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

const Object1 = {1: "a", 2: "b"}
const Object2 = {3: "a", 4: "b"}
const Object4 = {5: "a", 6: "b"}

// const obj3 = {Object1, Object2} //same array problem

//const obj3 = Object.assign({}, Object1, Object2, Object4);
//{} is target and O1, O2, O3 acts as the source 
//if bracket not given all the values goes to Object1

const obj3 = {...Object1, ...Object2} //anothe way to combine 
//console.log(obj3);


const users = [
    {
    id: 1,
    email: "yash@google.com",
    }, 

    {
    id: 1,
    email: "yash@google.com",
    },

    {
    id: 1,
    email: "yash@google.com",
    },

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));



//18th video 

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Yash"
}

//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

// {
//     name: "Yash",
//     coursename: "JS is Hindi",
//     price: "free"
// }


[
    {},
    {},
    {}
]

