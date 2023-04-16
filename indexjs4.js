function gen_table() {
    document.getElementById("tab").innerHTML;
    let n = Number(document.getElementById("capital").value);
    let n2 = Number(document.getElementById("couta").value);
    let n3 = Number(document.getElementById("interes").value);
    if (n > 0) {
        for (i = 1; i <= n2; i++) {
            capital = n / n2;
            d1 = capital.toFixed(2);
            interes = ((n * n3) / 100) / n2;
            d2 = interes.toFixed(2);
            resultado = capital + interes;
            d3 = resultado.toFixed(2);
            document.getElementById("tab").innerHTML = document.getElementById("tab").innerHTML +
                `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1 = n.toFixed(2);
        total = interes * n2;
        d4 = total.toFixed(2);
        total_p = resultado * n2;
        d5 = total.toFixed(2);
        document.getElementById("t1").innerHTML = n1;
        document.getElementById("t2").innerHTML = d4;
        document.getElementById("t3").innerHTML = d5;
    } else {
        alert("Falta ingresar un Número");
    }
}

