export default function operations(num1, num2) {
    const add = num1 + num2;
    const substract = num1 - num2;
    const multi = num1 * num2;
    const division = num1 / num2;

    let message = `
    El resultado de la suma es ${add}.<br>
    El resultado de la resta es ${substract}.<br>
    El resultado de la multiplicación es ${multi}.<br>
    El resultado de la división es ${division}.
    `;

    document.getElementsByClassName('operaciones')[0].innerHTML = message;
}
