class Temperature {
    constructor(degreeC){
        this.degreeC = degreeC;
    }
    getCToF(){
        return (this.degreeC *1.8) +32;
    }
    getCToK(){
        return this.degreeC + 273.15;
    }
}
let temperature1 = new Temperature(25);
document.write("do c sang f la: " + temperature1.getCToF());
document.write("<br/>");
document.write("do c sang k la: " + temperature1.getCToK());
