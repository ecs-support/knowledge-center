$(document).ready(function() {
  $("#table_id").DataTable({
    columns: [
      { data: "CustomsTariff" },
      { data: "StatisticsCode" },
      { data: "Type" },
      { data: "Department" },
      { data: "ThaiDescription" },
      { data: "EnglishDescription" },
      { data: "StartDate" }
    ]
  });
});

