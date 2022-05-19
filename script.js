function Plan(name, price, space, transfer, pages, discountMonths)
    {
        this.name = name;
        this.price = price;
        this.space = space;
        this.transfer = transfer;
        this.pages = pages;
        this.discountMonths = discountMonths;
        this.calcAnnual = function(percentIfDisc)
        {
            var bestPrice = this.price;
            console.log("Price: " + bestPrice);

            var currDate = new Date();
            console.log("Current Date: " + currDate);

            var thisMo = currDate.getMonth();
            var secondMonth = 7;
            var thirdMonth = 11;
            
            console.log("This Month: " + thisMo);
                for (var i = 0; i < this.discountMonths.length; i++)
                {
                    console.log(this.discountMonths.length);

                    if (this.discountMonths[i] === thisMo || this.discountMonths[i] === secondMonth|| this.discountMonths[i] === thirdMonth)
                    {
                        bestPrice = this.price * percentIfDisc;
                        console.log("Price after discount: " + bestPrice);
                        break;
                    }
                }
                return bestPrice * 12;
                console.log("Price before discount: " + bestPrice);

        }
    }
                // Plan(name, price, space, transfer, pages, discountMonths)
    var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [0, 7]);
    var p2 = new Plan("Professional", 5.99, 500, 5000, 50, [0, 7, 11]);
    var p3 = new Plan("Ultimate", 10.99, 2000, 20000, 50, [0, 7]);

// DISPLAYS
    //Plan1
        document.getElementById("p1-monthly").innerHTML= "$" + p1.price + " / Month";
        document.getElementById("p1-space").innerHTML= p1.space + " GB";
        document.getElementById("p1-transfer").innerHTML= p1.transfer + " GB / Mo";
        document.getElementById("p1-pages").innerHTML= p1.pages;
    //Plan2
        document.getElementById("p2-monthly").innerHTML= "$" + p2.price + " / Month";
        document.getElementById("p2-space").innerHTML= p2.space + " GB";
        document.getElementById("p2-transfer").innerHTML= p2.transfer + " GB / Mo";
        document.getElementById("p2-pages").innerHTML= p2.pages;
    //Plan2
        document.getElementById("p3-monthly").innerHTML= "$" + p3.price + " / Month";
        document.getElementById("p3-space").innerHTML= p3.space + " GB";
        document.getElementById("p3-transfer").innerHTML= p3.transfer + " GB / Mo";
        document.getElementById("p3-pages").innerHTML= p3.pages;

// DISPLAYS

    var annualPrice = p1.calcAnnual(.80)
    var annualPrice = annualPrice.toFixed(2);
        console.log(annualPrice);
        // alert("Annual Price: " + annualPrice);

    var annualPrice2 = p2.calcAnnual(.80);
    var annualPrice2 = annualPrice2.toFixed(2);
        console.log(annualPrice2)
        // alert("Annual price: " + annualPrice2)

    var annualPrice3 = p3.calcAnnual(.80);
    var annualPrice3 = annualPrice3.toFixed(2);
        console.log(annualPrice2)
        // alert("Annual price: " + annualPrice3)

        document.getElementById("p1-annual").innerHTML= "$" + annualPrice + " / Year";
        document.getElementById("p2-annual").innerHTML= "$" + annualPrice2 + " / Year";
        document.getElementById("p3-annual").innerHTML= "$" + annualPrice3 + " / Year";

// Checkout Window

        function openWindow1() {
            window.open("basic.html");
    }
        function openWindow2() {
            window.open("professional.html");
    }
        function openWindow3() {
            window.open("ultimate.html");
    }

// Confirmation Message

    function confirmationMsg() {
        alert("Thank you for subscribing!");
    }