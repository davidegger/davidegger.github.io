$ (function(){

    var model = {
        cats: []

      };


    var octopus = {
        init: function(){
          this.addCat('Oliver', 'Oliver.jpeg');
          this.addCat('Sophie', 'Sophie.jpeg');
          this.addCat('Howie', 'Howie.jpeg');
          this.addCat('Rory', 'Rory.jpeg');
          this.addCat('Lucy', 'Lucy.jpeg');
          viewInit.init();
          viewCats.init();

        },

        addCat: function(catname, catimage) {
          model.cats.push({name: catname, image: catimage, count: 0});
        },

        getLength: function() {
          return model.cats.length;
        },

        getCatName: function(catID) {
          return model.cats[catID].name;
        },

        getCatCount: function(catID) {
          return model.cats[catID].count;
        },

        getCatIMG: function(catID) {
          return model.cats[catID].image;
        },

        getCat: function(catID) {
          return model.cats[catID];
        },

        incrementCat: function(catID) {
          model.cats[catID].count++;
          viewCats.render(catID)
        },

        getCurrentCat: function (catName){
          for(i = 0; i < model.cats.length; i++){
            if (model.cats[i].name == catName) {
              return i;
            }
          return 0;
          }
        }

    };


    var viewInit = {
      init: function() {
        //var table = document.getElementById('catNamesTable');
        this.table = $('#catList')
        var tableHTML = '<table>';
        for (i = 0; i < octopus.getLength(); i++){
          tableHTML += '<tr><td>';
          tableHTML += '<button type = "submit" onclick="renderCat('+
                        i + ')">' + octopus.getCat(i).name + '</button>';
          //tableHTML += "<h3 id = " + octopus.getCatName(i) +
          //                  "><a onclick='viewCats.render(" + i +
          //                ")' href = '#'>" + octopus.getCatName(i) +
          //                 "</a></h3>";
          tableHTML += '</td></tr>'
        };
        tableHTML += '</table>'
        this.table.html(tableHTML);

        $(document).ready(function(catID) {
          renderCat = function(catID) {
              viewCats.render(catID);
            }
          incrementCat = function(catID) {
              octopus.incrementCat(catID);
          }
        });
      }
    };

    var viewCats = {
      init: function(){
        this.catView = $('#catView');
        viewCats.render(0);
        this.catName = $('#catName');
        //render initial cat

        //event listener for cat picture
        var elem = document.getElementById('catClick');
        //elem.addEventListener('click', function(){
        //  catID = octopus.getCurrentCat(this.catName.innerText);
        //  octopus.incrementCat(catID);
        //}, false);
      },

      render: function(currentCat){
        console.log(currentCat);
        var htmlStr = ''
        htmlStr += '<div><h2 id = "catName">' + octopus.getCat(currentCat).name;
        htmlStr += '</h2>';
        htmlStr += '<img width = "300" id = catClick height = "300"'+
                   ' onclick = "incrementCat('+ currentCat + ')" src="';
        htmlStr += octopus.getCat(currentCat).image +
                  '" onclick=render(' + currentCat + ')"></div>';
        htmlStr += '<div align = "center"><h3>';
        htmlStr += octopus.getCat(currentCat).count;
        htmlStr += '</h3></div>';
        this.catView.html(htmlStr);
      }

    };

    octopus.init();
});
