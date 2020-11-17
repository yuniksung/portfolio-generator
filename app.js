// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//       console.log(profileDataArr[i]);
//     }

  
//   console.log('================');

//   profileDataArr.forEach((profileItem) => {
//       console.log(profileItem);
//   });
// profileDataArr.forEach(profileItem => console.log(profileItem));
// };

//  const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

//  console.log(generatePage('jane', 'janehub'));
const [name, github] = profileDataArgs;


const generatePage = (userName, githubName) => {
  
  return `
  Name: ${userName}
  Github: ${githubName}
  `;
}
console.log(generatePage(name, github));