function startTimer(){
    var counter = 75;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('Times Up!');
          clearInterval(counter);
      }
    }, 1000);
};

function hidePage1() {
    var x = document.getElementById("page1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function showPage2() {
    var x = document.getElementById("page2")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function wrongAnswer() {
    var x = document.getElementById("wrong")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function correctAnswer() {
    var x = document.getElementById("correct")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};


function hidePage2() {
    var x = document.getElementById("page2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function showPage3() {
    var x = document.getElementById("page3")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function hidePage3() {
    var x = document.getElementById("page3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function showPage4() {
    var x = document.getElementById("page4")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function hidePage4() {
    var x = document.getElementById("page4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function showPage5() {
    var x = document.getElementById("page5")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function hidePage5() {
    var x = document.getElementById("page5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function showPage6() {
    var x = document.getElementById("page6")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function hidePage6() {
    var x = document.getElementById("page6");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function showPage7() {
    var x = document.getElementById("page7")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function hidePage7() {
    var x = document.getElementById("page7");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function showPage1() {
    var x = document.getElementById("page1")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};
  
  function start()
  {
      document.getElementById("count");
      startTimer();
  };
  
