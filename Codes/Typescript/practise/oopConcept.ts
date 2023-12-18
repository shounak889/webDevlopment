class Car {
    model: string;
    year: number;
    price: string;
  
    drive() {
      console.log('The Car has Started driving'+this.model);
    }
  
    stop() {
      console.log('The car has stopped'+this.year);
    }
  }

  var c1 = new Car();
  var c2 = new Car();

  c1.model = "Tata";
  c1.year = 2023;
  c1.price = "323131";

  c2.model = "Mahindrs";
  c2.year = 2024;
  c2.price = "43535";

  c1.drive();
  c2.drive();

  c1.stop();
  c2.stop();

  class superCar extends Car
  {
        topSpeed : string;
        abs : boolean;

        feat1()
        {
            console.log("Car top speed is"+this.topSpeed);
        }

        feat2()
        {
            console.log("Do car has ABS "+this.abs);
        }
  }

  var c3 = new superCar();

  c3.model = "Gt";
  c3.price = "313113131";
  c3.year = 3023;
  c3.topSpeed = "230KM";
  c3.abs = true;

  c3.drive();
  c3.stop();
  c3.feat1();
  c3.feat2();

