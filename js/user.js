export default function user() {
    const name = 'Sergio';
    const surname = 'Paniagua';
    const age = 39;
    const message = `Me llamo ${name} ${surname}, y tengo una edad de ${age} años.`;

    document.getElementById('message').innerHTML = message;
}
