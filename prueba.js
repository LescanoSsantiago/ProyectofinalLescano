const capital = document.getElementById('capital');
const cuotas = document.getElementById('cuotas');
const interes = document.getElementById('interes');
const btnCalcular = document.getElementById('btnCalcular');
const alerta = document.getElementById('alert-error');
const llenarTabla = document.querySelector('#lista-tabla tbody')

btnCalcular.addEventListener('click', () => {
    if (capital.value === '' || cuotas.value === '' || interes.value === '') {
        alerta.hidden = false;
        setTimeout(() => {
            alerta.hidden = true;
        }, 2000);
    } else {
        calcularCronograma(capital.value, interes.value, cuotas.value);
    }
})

function calcularCronograma(capital, interes, cuotas) {

    while (llenarTabla.firstChild) {
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let mesActual = dayjs().add(1, 'month');
    let amortizacionConstante, pagoInteres, cuota;
    amortizacionConstante = capital / cuotas;
    for (let i = 1; i <= cuotas; i++) {
        pagoInteres = capital * (interes / 100);
        cuota = amortizacionConstante + pagoInteres;
        capital = capital - amortizacionConstante;

        let fecha = mesActual.format('DD-MM-YYYY');
        mesActual = mesActual.add(1, 'month');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fecha}</td>
            <td>${amortizacionConstante.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${capital.toFixed(2)}</td>  
        `;

        localStorage.setItem("resFecha", mesActual);
        localStorage.setItem("resCapital", amortizacionConstante);
        localStorage.setItem("interes", interes);
        llenarTabla.appendChild(row);

    }
}