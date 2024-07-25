var ctx = document.getElementsByClassName("barra-chart");

const flores = [120, 90, 82, 62, 53, 0];
const labels = ["Rosas", "Girassóis", "Margaridas", "Violetas", "Orquídeas"];

var chartGraph = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Flores",
        data: flores,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: "#800080",
      },
    ],
  },



  options: {
    title: {
      fontSize: 20,
      text: "Flores mais vendidas",
    },
    yAxis: {
      title: {
        text: "Porcentagem",
        fontSize: 20,
        color: "red",
      },
    },
  }
});
