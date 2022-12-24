// sidebar toggle //

let sidebarOpen = false;
let sidebar = document.getElementById("sidebar")

const openSidebar = ()=>{
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen=true;
    }
}

const closeSidebar = ()=>{
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen= false;
    }
}

// CHARTS //

let barChartOptions = {
    series: [{
    data: [14, 7, 9, 5, 3]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: false
    },
  },
  colors:[
      "#246dec",
      "#cc3c43",
      "#367952",
      "#f5b74f",
      "#4f35a1",
  ],
  plotOptions: {
    bar: {
      distributed: true,  
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%'
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show: false
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'
    ],
  },
  yaxis: {
    title: {
        text: "count"
    }
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();


