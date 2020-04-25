    function currentTime() {
        var date = new Date(); 

        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var monthDate = date.getDate();

        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); 
        hour = updateTime(hour);
        min = updateTime(min);
        sec = updateTime(sec);

        var time = year + "-" + month + "-" + monthDate + "  " + hour + " : " + min + " : " + sec;
        document.getElementById("clock").innerText = time; 
          var t = setTimeout(currentTime, 1000); 
      }
      
      function updateTime(k) { 
        if (k < 10) {
          return "0" + k;
        }
        else {
          return k;
        }
      }
      
      currentTime();