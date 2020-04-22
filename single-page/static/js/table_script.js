$(document).ready(function () {
  var table = $("#table-ref").DataTable({
    responsive: true,
    scroller: true,
    scrollY: 600,
    scrollX: 700,
  });

  new $.fn.dataTable.FixedHeader(table);
});
