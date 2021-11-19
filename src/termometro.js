class Termometro {

    constructor(temperaturas, fechas, anotaciones) {
        this.temperaturas = temperaturas;
        this.fechas = fechas;
        this.anotaciones = anotaciones;
    }

    obtenerNumeroAnotaciones() {
        return this.anotaciones;
    }

    anotarTemperatura(temperatura, fecha) {
        if ((temperatura == undefined && temperatura == null) || (fecha == undefined && fecha == null)) {
            return "Temperatura or fecha are not defined";
        }
        this.temperaturas.push(temperatura);;
        this.anotaciones += 1;
        return "Success"
    }

    obtenerTemperaturaMax() {
        let temperaturaMax = this.temperaturas[0];
        for (let i = 0; i < this.temperaturas.length; i++) {
            if (this.temperaturas[i] > temperaturaMax) {
                temperaturaMax = this.temperaturas[i];
            }
        }
        return temperaturaMax;
    }

    obtenerTemperaturaMin() {
        let temperaturaMin = this.temperaturas[0];
        for (let i = 0; i < this.temperaturas.length; i++) {
            if (this.temperaturas[i] < temperaturaMin) {
                temperaturaMin = this.temperaturas[i];
            }
        }
        return temperaturaMin;
    }

    obtenerTemperaturaMedia() {
        if (this.temperaturas.length <= 0) {
            return "No hay temperaturas";
        }
        let suma = 0;
        for (let i = 0; i < this.temperaturas.length; i++) {
            suma += this.temperaturas[i];
        }
        return suma / this.temperaturas.length;
    }

    obtenerTablaTemperaturasHTML(tableData) {
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');

        tableData.forEach(function (rowData, rowIndex) {
            var row = document.createElement('tr');

            rowData.forEach(function (cellData) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        document.body.appendChild(table);


        //createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
    }


    static convertirCelsiusAFahrenheit(celsius) {
        if (celsius == undefined || celsius == null) {
            return "Error"
        }
        return ((celsius * 9) / 5) + 32;
    }

    static convertirFahrenheitACelsius(farenheit) {
        if (farenheit == undefined || farenheit == null) {
            return "Error"
        }
        return ((farenheit - 32) * 5) / 9;
    }
}

module.exports = Termometro