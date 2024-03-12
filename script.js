// const generateRandomNumbers = (min, max, times) => {
//     const randoms = []

//     for (let i = 0; i < times; i++) {
//         randoms.push(Math.floor(Math.random() * (max - min) + min))
//     }

//     document.getElementById('output').innerHTML = randoms
// }

document.querySelector('.btn').addEventListener('click',()=>{
    // const min = document.querySelector('.minInput').value;
    const max = document.querySelector('.maxInput').value;
    const times = document.querySelector('.randNos').value;
    const randoms = []

    for (let i = 0; i < times; i++) {
        randoms.push(Math.round((Math.random() * max)*100)/100);
    }

    document.getElementById('output').innerHTML = `<span>${randoms}</span>`
})
