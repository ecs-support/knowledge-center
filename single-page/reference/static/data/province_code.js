var dataSet = [
  ["1", "10", "กรุงเทพมหานคร"],
  ["2", "11", "สมุทรปราการ"],
  ["3", "12", "นนทบุรี"],
  ["4", "13", "ปทุมธานี"],
  ["5", "14", "พระนครศรีอยุธยา"],
  ["6", "15", "อ่างทอง"],
  ["7", "16", "ลพบุรี"],
  ["8", "17", "สิงห์บุรี"],
  ["9", "18", "ชัยนาท"],
  ["10", "19", "สระบุรี"],
  ["11", "20", "ชลบุรี"],
  ["12", "21", "ระยอง"],
  ["13", "22", "จันทบุรี"],
  ["14", "23", "ตราด"],
  ["15", "24", "ฉะเชิงเทรา"],
  ["16", "25", "ปราจีนบุรี"],
  ["17", "26", "นครนายก"],
  ["18", "27", "สระแก้ว"],
  ["19", "30", "นครราชสีมา"],
  ["20", "31", "บุรีรัมย์"],
  ["21", "32", "สุรินทร์"],
  ["22", "33", "ศรีสะเกษ"],
  ["23", "34", "อุบลราชธานี"],
  ["24", "35", "ยโสธร"],
  ["25", "36", "ชัยภูมิ"],
  ["26", "37", "อำนาจเจริญ"],
  ["27", "38", "บึงกาฬ"],
  ["28", "39", "หนองบัวลำภู"],
  ["29", "40", "ขอนแก่น"],
  ["30", "41", "อุดรธานี"],
  ["31", "42", "เลย"],
  ["32", "43", "หนองคาย"],
  ["33", "44", "มหาสารคาม"],
  ["34", "45", "ร้อยเอ็ด"],
  ["35", "46", "กาฬสินธุ์"],
  ["36", "47", "สกลนคร"],
  ["37", "48", "นครพนม"],
  ["38", "49", "มุกดาหาร"],
  ["39", "50", "เชียงใหม่"],
  ["40", "51", "ลำพูน"],
  ["41", "52", "ลำปาง"],
  ["42", "53", "อุตรดิตถ์"],
  ["43", "54", "แพร่"],
  ["44", "55", "น่าน"],
  ["45", "56", "พะเยา"],
  ["46", "57", "เชียงราย"],
  ["47", "58", "แม่ฮ่องสอน"],
  ["48", "60", "นครสวรรค์"],
  ["49", "61", "อุทัยธานี"],
  ["50", "62", "กำแพงเพชร"],
  ["51", "63", "ตาก"],
  ["52", "64", "สุโขทัย"],
  ["53", "65", "พิษณุโลก"],
  ["54", "66", "พิจิตร"],
  ["55", "67", "เพชรบูรณ์"],
  ["56", "70", "ราชบุรี"],
  ["57", "71", "กาญจนบุรี"],
  ["58", "72", "สุพรรณบุรี"],
  ["59", "73", "นครปฐม"],
  ["60", "74", "สมุทรสาคร"],
  ["61", "75", "สมุทรสงคราม"],
  ["62", "76", "เพชรบุรี"],
  ["63", "77", "ประจวบคีรีขันธ์"],
  ["64", "80", "นครศรีธรรมราช"],
  ["65", "81", "กระบี่"],
  ["66", "82", "พังงา"],
  ["67", "83", "ภูเก็ต"],
  ["68", "84", "สุราษฎร์ธานี"],
  ["69", "85", "ระนอง"],
  ["70", "86", "ชุมพร"],
  ["71", "90", "สงขลา"],
  ["72", "91", "สตูล"],
  ["73", "92", "ตรัง"],
  ["74", "93", "พัทลุง"],
  ["75", "94", "ปัตตานี"],
  ["76", "95", "ยะลา"],
  ["77", "96", "นราธิวาส"],
];
$(document).ready(function () {
  $("#table-ref").DataTable({
    data: dataSet,
    columns: [
      { title: "ลำดับ", className: "txt-center" },
      { title: "รหัสจังหวัด", className: "txt-center" },
      { title: "ชื่อจังหวัด" },
    ],
    responsive: true,
    scroller: true,
    scrollY: 650,
    scrollX: true,
  });

  dataTable.FixedHeader(table);
});

