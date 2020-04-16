$(document).ready(function () {
  var table = $("#table-ref").DataTable({
    responsive: true,
  });

  new $.fn.dataTable.FixedHeader(table);
});
