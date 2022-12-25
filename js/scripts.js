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
    categories: ['Laptops', 'Phones', 'Monitors', 'Headphones', 'Cameras'
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




  let areaChartOptions = {
    series: [{
    name: 'Purchase Orders',
    // type: 'area',
    data: [44, 55, 31, 47, 31, 109, 100]
  }, {
    name: 'Sales Order',
    type: 'line',
    data: [11, 32, 45, 32, 43, 54, 37]
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar: {
        show: false
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();


  // invenotory //
  var InventoryOptionsOne = {
    series: [55, 44, 35, 18, 15],
    chart: {
    type: 'donut',
  },
  labels: ['Laptops', 'Phones', 'Monitors', 'Headphones', 'Others'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var InventoryOnechart = new ApexCharts(document.querySelector("#chart-inventoryOne"), InventoryOptionsOne);
  InventoryOnechart.render();
