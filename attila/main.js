<!DOCTYPE html>
<html>

  <head>
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css" />
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>

    <script type="text/javascript" src="phaser.min.js"></script>
    <script type="text/javascript" src="main.js"></script>
    
    <title>Bear Jump</title>
    <style>
      #game_div,
      p {
        width: 100%;
        margin: auto;
        margin-top: 20px;
      }
      .center {
        text-align: center
      }
    }
    </style>
  </head>

  <body>
    <div data-role="page" id="page1">
      <div data-role="header">
        <h1>Page 1</h1>
      </div>
      <div data-role="main" class="ui-content">
          
       
        <div id="topscore"></div>
        <p>This is page one.</p> <a href="#page2" data-role="button">Page two</a>
      </div>
    </div>
    <div data-role="page" id="page2">
      <div data-role="header">
        <h1>Page 2</h1>
      </div>
      <div data-role="main" class="ui-content">
      <center>
          <div id="game_div"></div>
        </center>
        <p>This is page two</p> <a href="#page1" data-role="button">Page one</a>
      </div>
    </div>
  </body>

</html>