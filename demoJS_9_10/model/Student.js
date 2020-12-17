function Student(code, name, type, math, phy, chem, morality){
    this.txtNameStu = name;
    this.txtCodeStu = code;
    this.txtTypeStu = type;
    this.math = math;
    this.physical = phy;
    this.chemistry = chem;
    this.morality = morality;

    this.calcAverage = function(){
        return (this.math + this.physical + this.chemistry + this.morality)/4;
    };
    this.ranking = function(point){
        if(point >= 8 && point <= 10){
            return "Excellent!";
        }else if(point >= 6.5 && point < 8){
            return "Good!";
        }else if(point >= 5 && point < 6.5){
            return "Medium!";
        }else{
            return "Failed!";
        }  
    };
}