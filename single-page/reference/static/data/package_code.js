var dataSet = [
['1A', 'Drum, steel'],
['1B', 'Drum, aluminium'],
['1D', 'Drum, plywood'],
['1F', 'Container, flexible'],
['1G', 'Drum, fibre'],
['1W', 'Drum, wooden'],
['2C', 'Barrel, wooden'],
['3A', 'Jerrican, steel'],
['3H', 'Jerrican, plastic'],
['43', 'Bag, super bulk'],
['44', 'Bag, polybag'],
['4A', 'Box, steel'],
['4B', 'Box, aluminium'],
['4C', 'Box, natural wood'],
['4D', 'Box, plywood'],
['4F', 'Box, reconstituted wood'],
['4G', 'Box, fibreboard'],
['4H', 'Box, plastic'],
['5H', 'Bag, woven plastic'],
['5L', 'Bag, textile'],
['5M', 'Bag, paper'],
['6H', 'Composite packaging, plastic receptacle'],
['6P', 'Composite packaging, glass receptacle'],
['7A', 'Case, car'],
['7B', 'Case, wooden'],
['8A', 'Pallet, wooden'],
['8B', 'Crate, wooden'],
['8C', 'Bundle, wooden'],
['AA', 'Intermediate bulk container, rigid plastic'],
['AB', 'Receptacle, fibre'],
['AC', 'Receptacle, paper'],
['AD', 'Receptacle, wooden'],
['AE', 'Aerosol'],
['AF', 'Pallet, modular, collars 80cms * 60cms'],
['AG', 'Pallet, shrinkwrapped'],
['AH', 'Pallet, 100cms * 110cms'],
['AI', 'Clamshell'],
['AJ', 'Cone'],
['AL', 'Ball'],
['AM', 'Ampoule, non-protected'],
['AP', 'Ampoule, protected'],
['AT', 'Atomizer'],
['AV', 'Capsule'],
['B4', 'Belt'],
['BA', 'Barrel'],
['BB', 'Bobbin'],
['BC', 'Bottlecrate / bottlerack'],
['BD', 'Board'],
['BE', 'Bundle'],
['BF', 'Balloon, non-protected'],
['BG', 'Bag'],
['BH', 'Bunch'],
['BI', 'Bin'],
['BJ', 'Bucket'],
['BK', 'Basket'],
['BL', 'Bale, compressed'],
['BM', 'Basin'],
['BN', 'Bale, non-compressed'],
['BO', 'Bottle, non-protected, cylindrical'],
['BP', 'Balloon, protected'],
['BQ', 'Bottle, protected cylindrical'],
['BR', 'Bar'],
['BS', 'Bottle, non-protected, bulbous'],
['BT', 'Bolt'],
['BU', 'Butt'],
['BV', 'Bottle, protected bulbous'],
['BW', 'Box, for liquids'],
['BX', 'Box'],
['BY', 'Board, in bundle/bunch/truss'],
['BZ', 'Bars, in bundle/bunch/truss'],
['CA', 'Can, rectangular'],
['CB', 'Crate, beer'],
['CC', 'Churn'],
['CD', 'Can, with handle and spout'],
['CE', 'Creel'],
['CF', 'Coffer'],
['CG', 'Cage'],
['CH', 'Chest'],
['CI', 'Canister'],
['CJ', 'Coffin'],
['CK', 'Cask'],
['CL', 'Coil'],
['CM', 'Card'],
['CN', 'Container, not otherwise specified as transport equipment'],
['CO', 'Carboy, non-protected'],
['CP', 'Carboy, protected'],
['CQ', 'Cartridge'],
['CR', 'Crate'],
['CS', 'Case'],
['CT', 'Carton'],
['CU', 'Cup'],
['CV', 'Cover'],
['CW', 'Cage, roll'],
['CX', 'Can, cylindrical'],
['CY', 'Cylinder'],
['CZ', 'Canvas'],
['DA', 'Crate, multiple layer, plastic'],
['DB', 'Crate, multiple layer, wooden'],
['DC', 'Crate, multiple layer, cardboard'],
['DG', 'Cage, Commonwealth Handling Equipment Pool  (CHEP)'],
['DH', 'Box, Commonwealth Handling Equipment Pool (CHEP), Eurobox'],
['DI', 'Drum, iron'],
['DJ', 'Demijohn, non-protected'],
['DK', 'Crate, bulk, cardboard'],
['DL', 'Crate, bulk, plastic'],
['DM', 'Crate, bulk, wooden'],
['DN', 'Dispenser'],
['DP', 'Demijohn, protected'],
['DR', 'Drum'],
['DS', 'Tray, one layer no cover, plastic'],
['DT', 'Tray, one layer no cover, wooden'],
['DU', 'Tray, one layer no cover, polystyrene'],
['DV', 'Tray, one layer no cover, cardboard'],
['DW', 'Tray, two layers no cover, plastic tray'],
['DX', 'Tray, two layers no cover, wooden'],
['DY', 'Tray, two layers no cover, cardboard'],
['EC', 'Bag, plastic'],
['ED', 'Case, with pallet base'],
['EE', 'Case, with pallet base, wooden'],
['EF', 'Case, with pallet base, cardboard'],
['EG', 'Case, with pallet base, plastic'],
['EH', 'Case, with pallet base, metal'],
['EI', 'Case, isothermic'],
['EN', 'Envelope'],
['FB', 'Flexibag'],
['FC', 'Crate, fruit'],
['FD', 'Crate, framed'],
['FE', 'Flexitank'],
['FI', 'Firkin'],
['FL', 'Flask'],
['FO', 'Footlocker'],
['FP', 'Filmpack'],
['FR', 'Frame'],
['FT', 'Foodtainer'],
['FW', 'Cart, flatbed'],
['FX', 'Bag, flexible container'],
['GB', 'Bottle, gas'],
['GI', 'Girder'],
['GL', 'Container, gallon'],
['GR', 'Receptacle, glass'],
['GU', 'Tray, containing horizontally stacked flat items'],
['GY', 'Bag, gunny'],
['GZ', 'Girders, in bundle/bunch/truss'],
['HA', 'Basket, with handle, plastic'],
['HB', 'Basket, with handle, wooden'],
['HC', 'Basket, with handle, cardboard'],
['HG', 'Hogshead'],
['HN', 'Hanger'],
['HR', 'Hamper'],
['IA', 'Package, display, wooden'],
['IB', 'Package, display, cardboard'],
['IC', 'Package, display, plastic'],
['ID', 'Package, display, metal'],
['IE', 'Package, show'],
['IF', 'Package, flow'],
['IG', 'Package, paper wrapped'],
['IH', 'Drum, plastic'],
['IK', 'Package, cardboard, with bottle grip-holes'],
['IL', 'Tray, rigid, lidded stackable (CEN TS 14482:2002)'],
['IN', 'Ingot'],
['IZ', 'Ingots, in bundle/bunch/truss'],
['JB', 'Bag, jumbo'],
['JC', 'Jerrican, rectangular'],
['JG', 'Jug'],
['JR', 'Jar'],
['JT', 'Jutebag'],
['JY', 'Jerrican, cylindrical'],
['KG', 'Keg'],
['KI', 'Kit'],
['LE', 'Luggage'],
['LG', 'Log'],
['LT', 'Lot'],
['LU', 'Lug'],
['LV', 'Liftvan'],
['LZ', 'Logs, in bundle/bunch/truss'],
['MA', 'Crate, metal'],
['MB', 'Bag, multiply'],
['MC', 'Crate, milk'],
['ME', 'Container, metal'],
['MR', 'Receptacle, metal'],
['MS', 'Sack, multi-wall'],
['MT', 'Mat'],
['MW', 'Receptacle, plastic wrapped'],
['MX', 'Matchbox'],
['NA', 'Not available'],
['NE', 'Unpacked or unpackaged'],
['NF', 'Unpacked or unpackaged, single unit'],
['NG', 'Unpacked or unpackaged, multiple units'],
['NS', 'Nest'],
['NT', 'Net'],
['NU', 'Net, tube, plastic'],
['NV', 'Net, tube, textile'],
['OA', 'Pallet, CHEP 40 cm x 60 cm'],
['OB', 'Pallet, CHEP 80 cm x 120 cm'],
['OC', 'Pallet, CHEP 100 cm x 120 cm'],
['OD', 'Pallet, AS 4068-1993'],
['OE', 'Pallet, ISO T11'],
['OF', 'Platform, unspecified weight or dimension'],
['OK', 'Block'],
['OT', 'Octabin'],
['OU', 'Container, outer'],
['P2', 'Pan'],
['PA', 'Packet'],
['PB', 'Pallet, box Combined open-ended box and pallet'],
['PC', 'Parcel'],
['PD', 'Pallet, modular, collars 80cms * 100cms'],
['PE', 'Pallet, modular, collars 80cms * 120cms'],
['PF', 'Pen'],
['PG', 'Plate'],
['PH', 'Pitcher'],
['PI', 'Pipe'],
['PJ', 'Punnet'],
['PK', 'Package'],
['PL', 'Pail'],
['PN', 'Plank'],
['PO', 'Pouch'],
['PP', 'Piece'],
['PR', 'Receptacle, plastic'],
['PT', 'Pot'],
['PU', 'Tray'],
['PV', 'Pipes, in bundle/bunch/truss'],
['PX', 'Pallet'],
['PY', 'Plates, in bundle/bunch/truss'],
['PZ', 'Planks, in bundle/bunch/truss'],
['QA', 'Drum, steel, non-removable head'],
['QB', 'Drum, steel, removable head'],
['QC', 'Drum, aluminium, non-removable head'],
['QD', 'Drum, aluminium, removable head'],
['QF', 'Drum, plastic, non-removable head'],
['QG', 'Drum, plastic, removable head'],
['QH', 'Barrel, wooden, bung type'],
['QJ', 'Barrel, wooden, removable head'],
['QK', 'Jerrican, steel, non-removable head'],
['QL', 'Jerrican, steel, removable head'],
['QM', 'Jerrican, plastic, non-removable head'],
['QN', 'Jerrican, plastic, removable head'],
['QP', 'Box, wooden, natural wood, ordinary'],
['QQ', 'Box, wooden, natural wood, with sift proof walls'],
['QR', 'Box, plastic, expanded'],
['QS', 'Box, plastic, solid'],
['RD', 'Rod'],
['RG', 'Ring'],
['RJ', 'Rack, clothing hanger'],
['RK', 'Rack'],
['RL', 'Reel'],
['RO', 'Roll'],
['RT', 'Rednet'],
['RZ', 'Rods, in bundle/bunch/truss'],
['SA', 'Sack'],
['SB', 'Slab'],
['SC', 'Crate, shallow'],
['SD', 'Spindle'],
['SE', 'Sea-chest'],
['SH', 'Sachet'],
['SI', 'Skid'],
['SK', 'Case, skeleton'],
['SL', 'Slipsheet'],
['SM', 'Sheetmetal'],
['SO', 'Spool'],
['SP', 'Sheet, plastic wrapping'],
['SS', 'Case, steel'],
['ST', 'Sheet'],
['SU', 'Suitcase'],
['SV', 'Envelope, steel'],
['SW', 'Shrinkwrapped'],
['SX', 'Set'],
['SY', 'Sleeve'],
['SZ', 'Sheets, in bundle/bunch/truss'],
['T1', 'Tablet'],
['TB', 'Tub'],
['TC', 'Tea-chest'],
['TD', 'Tube, collapsible'],
['TE', 'Tyre'],
['TG', 'Tank container, generic'],
['TI', 'Tierce'],
['TK', 'Tank, rectangular'],
['TL', 'Tub, with lid'],
['TN', 'Tin'],
['TO', 'Tun'],
['TR', 'Trunk'],
['TS', 'Truss'],
['TT', 'Bag, tote'],
['TU', 'Tube'],
['TV', 'Tube, with nozzle'],
['TW', 'Pallet, triwall'],
['TY', 'Tank, cylindrical'],
['TZ', 'Tubes, in bundle/bunch/truss'],
['UC', 'Uncaged'],
['UN', 'Unit'],
['VA', 'Vat'],
['VG', 'Bulk, gas (at 1031 mbar and 15?C)'],
['VI', 'Vial'],
['VK', 'Vanpack'],
['VL', 'Bulk, liquid'],
['VN', 'Vehicle'],
['VO', 'Bulk, solid, large particles (?nodules?)'],
['VP', 'Vacuum-packed'],
['VQ', 'Bulk, liquefied gas (at abnormal temperature/pressure)'],
['VR', 'Bulk, solid, granular particles (?grains?)'],
['VS', 'Bulk, scrap metal'],
['VY', 'Bulk, solid, fine particles (?powders?)'],
['WA', 'Intermediate bulk container'],
['WB', 'Wickerbottle'],
['WC', 'Intermediate bulk container, steel'],
['WD', 'Intermediate bulk container, aluminium'],
['WF', 'Intermediate bulk container, metal'],
['WG', 'Intermediate bulk container, steel, pressurised > 10 kpa'],
['WH', 'Intermediate bulk container, aluminium, pressurised > 10 kpa'],
['WJ', 'Intermediate bulk container, metal, pressure 10 kpa'],
['WK', 'Intermediate bulk container, steel, liquid'],
['WL', 'Intermediate bulk container, aluminium, liquid'],
['WM', 'Intermediate bulk container, metal, liquid'],
['WN', 'Intermediate bulk container, woven plastic, without coat/liner'],
['WP', 'Intermediate bulk container, woven plastic, coated'],
['WQ', 'Intermediate bulk container, woven plastic, with liner'],
['WR', 'Intermediate bulk container, woven plastic, coated and liner'],
['WS', 'Intermediate bulk container, plastic film'],
['WT', 'Intermediate bulk container, textile with out coat/liner'],
['WU', 'Intermediate bulk container, natural wood, with inner liner'],
['WV', 'Intermediate bulk container, textile, coated'],
['WW', 'Intermediate bulk container, textile, with liner'],
['WX', 'Intermediate bulk container, textile, coated and liner'],
['WY', 'Intermediate bulk container, plywood, with inner liner'],
['WZ', 'Intermediate bulk container, reconstituted wood, with inner liner'],
['XA', 'Bag, woven plastic, without inner coat/liner'],
['XB', 'Bag, woven plastic, sift proof'],
['XC', 'Bag, woven plastic, water resistant'],
['XD', 'Bag, plastics film'],
['XF', 'Bag, textile, without inner coat/liner'],
['XG', 'Bag, textile, sift proof'],
['XH', 'Bag, textile, water resistant'],
['XJ', 'Bag, paper, multi-wall'],
['XK', 'Bag, paper, multi-wall, water resistant'],
['YA', 'Composite packaging, plastic receptacle in steel drum'],
['YB', 'Composite packaging, plastic receptacle in steel crate box'],
['YC', 'Composite packaging, plastic receptacle in aluminium drum'],
['YD', 'Composite packaging, plastic receptacle in aluminium crate'],
['YF', 'Composite packaging, plastic receptacle in wooden box'],
['YG', 'Composite packaging, plastic receptacle in plywood drum'],
['YH', 'Composite packaging, plastic receptacle in plywood box'],
['YJ', 'Composite packaging, plastic receptacle in fibre drum'],
['YK', 'Composite packaging, plastic receptacle in fibreboard box'],
['YL', 'Composite packaging, plastic receptacle in plastic drum'],
['YM', 'Composite packaging, plastic receptacle in solid plastic box'],
['YN', 'Composite packaging, glass receptacle in steel drum'],
['YP', 'Composite packaging, glass receptacle in steel crate box'],
['YQ', 'Composite packaging, glass receptacle in aluminium drum'],
['YR', 'Composite packaging, glass receptacle in aluminium crate'],
['YS', 'Composite packaging, glass receptacle in wooden box'],
['YT', 'Composite packaging, glass receptacle in plywood drum'],
['YV', 'Composite packaging, glass receptacle in wickerwork hamper'],
['YW', 'Composite packaging, glass receptacle in fibre drum'],
['YX', 'Composite packaging, glass receptacle in fibreboard box'],
['YY', 'Composite packaging, glass receptacle in expandable plastic pack'],
['YZ', 'Composite packaging, glass receptacle in solid plastic pack'],
['ZA', 'Intermediate bulk container, paper, multi-wall'],
['ZB', 'Bag, large'],
['ZC', 'Intermediate bulk container, paper, multi-wall, water resistant'],
['ZD', 'Intermediate bulk container, rigid plastic, with structural equipment, solids'],
['ZF', 'Intermediate bulk container, rigid plastic, freestanding, solids'],
['ZG', 'Intermediate bulk container, rigid plastic, with structural equipment, pressurised'],
['ZH', 'Intermediate bulk container, rigid plastic, freestanding, pressurised'],
['ZJ', 'Intermediate bulk container, rigid plastic, with structural equipment, liquids'],
['ZK', 'Intermediate bulk container, rigid plastic, freestanding, liquids'],
['ZL', 'Intermediate bulk container, composite, rigid plastic, solids'],
['ZM', 'Intermediate bulk container, composite, flexible plastic, solids'],
['ZN', 'Intermediate bulk container, composite, rigid plastic, pressurised'],
['ZP', 'Intermediate bulk container, composite, flexible plastic, pressurised'],
['ZQ', 'Intermediate bulk container, composite, rigid plastic, liquids'],
['ZR', 'Intermediate bulk container, composite, flexible plastic, liquids'],
['ZS', 'Intermediate bulk container, composite'],
['ZT', 'Intermediate bulk container, fibreboard'],
['ZU', 'Intermediate bulk container, flexible'],
['ZV', 'Intermediate bulk container, metal, other than steel'],
['ZW', 'Intermediate bulk container, natural wood'],
['ZX', 'Intermediate bulk container, plywood'],
['ZY', 'Intermediate bulk container, reconstituted wood'],
['ZZ', 'Mutually defined'],

];

$(document).ready(function () {
  $("#table-ref").DataTable({
    data: dataSet,
    columns: [
      { title: "รหัสลักษณะหีบห่อ", className: "txt-center" },
      { title: "ลักษณะหีบห่อ"},
      
    ],
    responsive: true,
    scroller: true,
    scrollY: 650,
    scrollX: true,
  });

  dataTable.FixedHeader(table);
});