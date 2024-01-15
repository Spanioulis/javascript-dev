// function transform(message) {
//     return message.toLowerCase();
// }

// console.log(transform('HOLA'));

function counter(message) {
    const result = message.split(' ');
    const count = {};

    // for (i = 0; i < result.length; i++) {
    //     if (result[i]) {

    //         console.log(result[i], 'SÍ existe');
    //     } else {
    //         console.log(result[i], 'NO existe');
    //     }
    // }

    result.forEach((element) => {
        if (count[element]) {
            console.log(element);
        } else {
            console.log(element);
        }
    });

    return count;
}

console.log(counter('hola adios nunca cuenca hola'));
