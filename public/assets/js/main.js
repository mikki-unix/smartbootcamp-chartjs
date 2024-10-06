Chart.defaults.font.family = "Barlow";

new Chart(grafico_linhas, {
    type: 'line',
    data: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        datasets: [{
            label: 'Temperatura',
            data: [30, 29, 28, 25, 22, 23],
            backgroundColor: 'rgb(240, 128, 128)',
            borderColor: 'rgb(240, 128, 128)',
        },
        {
            label: 'Umidade',
            data: [80, 82, 80, 85, 80, 83],
            backgroundColor: 'rgb(173, 216, 230)',
            borderColor: 'rgb(173, 216, 230)',
        }]
    },
    options: {
        scales: {
            maintainAspectRatio: false,
            y: {
                beginAtZero: false,
            }
        }
    }
});

new Chart(grafico_barras, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Temperatura Média',
            data: [22, 24, 27, 23, 20, 18],
            backgroundColor: 'rgb(240, 128, 128)',
            borderColor: 'rgb(240, 128, 128)',
        },
        {
            label: 'Umidade Média',
            data: [90, 89, 93, 87, 88, 82],
            backgroundColor: 'rgb(173, 216, 230)',
            borderColor: 'rgb(173, 216, 230)',
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});