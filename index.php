<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Change text every 3 seconds</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta https-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>
    <div class="row-outer">
      <div class="container">
        <div class="column">
        <h1>Transaksi Harian</h1><br>
          <h2 style="border:1px solid black"> <span id="trxHarian"></span></h2>
       
        </div>
      </div>
    </div>
    
     <div class="row-outer">
      <div class="container">
        <div class="column2">
        <h1>Pendapatan Harian</h1><br>
          <h2 style="border:1px solid black"> RP <span id="pendHarian">5.000</span></h2>
      
        </div>
      </div>
    </div>
    
     <div><iframe width="100%" height="630" src="https://lookerstudio.google.com/embed/reporting/ace23e4b-3383-4c77-91c0-c774d3ddabc2/page/p_m2bt0kg00c" frameborder="0" style="border:0" allowfullscreen></iframe></div>
      </div>
      <div class="px-2 bg-light "><marquee class="py-0" scrollamount="7" direction="right">Rawabening <span id="jenis"> motor B 1624 TUF</span> <span id="rp">Rp 2.000</span> </marquee></div>
      <script src="script.js"></script>
  </body>
</html>