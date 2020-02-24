module.exports = function toReadable (number) {
  let result="";
  let number_1="one",number_2="two",number_3="three",number_4="four",number_5="five",number_6="six",number_7="seven",number_8="eight",number_9="nine",number_10="ten";
  let number_11="eleven",number_12="twelve",number_13="thirteen",number_14="fourteen",number_15="fifteen",number_16="sixteen",number_17="seventeen",number_18="eighteen";
  let number_19="nineteen",number_20="twenty";
  if(number>99)
   {
      switch(number/100-(number/100)%1)
      {
        case 1:result+=number_1;
        break;
        case 2:result+=number_2;
        break;
        case 3:result+=number_3;
        break;
        case 4:result+=number_4;
        break;
        case 5:result+=number_5;
        break;
        case 6:result+=number_6;
        break;
        case 7:result+=number_7;
        break;
        case 8:result+=number_8;
        break;
        case 9:result+=number_9;
        break;
      }
      result+=" hundred";
    if(number-100*(number/100-(number/100)%1)>=20)
    {
        switch(number-100*(number/100-(number/100)%1)-number%10)
        {   
            case 20:result+=" twenty";
            break;
            case 30:result+=" thirty";
            break;
            case 40:result+=" forty";
            break;
            case 50:result+=" fifty";
            break;
            case 60:result+=" sixty";
            break;
            case 70:result+=" seventy";
            break;
            case 80:result+=" eighty";
            break;
            case 90:result+=" ninety";
            break;
        }
        switch(number%10)
        {
            case 0:break;
            case 1:result+=" ";
                result+=number_1;
            break;
            case 2:result+=" ";
                result+=number_2;
            break;
            case 3:result+=" ";
                result+=number_3;
            break;
            case 4:result+=" ";
                result+=number_4;
            break;
            case 5:result+=" ";
                result+=number_5;
            break;
            case 6:result+=" ";
                result+=number_6;
            break;
            case 7:result+=" ";
                result+=number_7;
            break;
            case 8:result+=" ";
                result+=number_8;
            break;
            case 9:result+=" ";
                result+=number_9;
            break;
        }
    }
    if(number-100*(number/100-(number/100)%1)<20)
    {
        switch(number-100*(number/100-(number/100)%1)){
            case 0:break;
            case 1:result+=" ";
                result+=number_1;
            break;
            case 2:result+=" ";
                result+=number_2;
            break;
            case 3:result+=" ";
                result+=number_3;
            break;
            case 4:result+=" ";
                result+=number_4;
            break;
            case 5:result+=" ";
                result+=number_5;
            break;
            case 6:result+=" ";
                result+=number_6;
            break;
            case 7:result+=" ";
                result+=number_7;
            break;
            case 8:result+=" ";
                result+=number_8;
            break;
            case 9:result+=" ";
                result+=number_9;
            break;
            case 10:result+=" ";
                result+=number_10;
            break;
            case 11:result+=" ";
                result+=number_11;
            break;
            case 12:result+=" ";
                result+=number_12;
            break;
            case 13:result+=" ";
                result+=number_13;
            break;
            case 14:result+=" ";
                result+=number_14;
            break;
            case 15:result+=" ";
                result+=number_15;
            break;
            case 16:result+=" ";
                result+=number_16;
            break;
            case 17:result+=" ";
                result+=number_17;
            break;
            case 18:result+=" ";
                result+=number_18;
            break;
            case 19:result+=" ";
                result+=number_19;
            break;
        }
    }
  }
  if(number<100 && number>19)
  {
    switch(number-number%10)
    {
        case 20:result+="twenty";
        break;
        case 30:result+="thirty";
        break;
        case 40:result+="forty";
        break;
        case 50:result+="fifty";
        break;
        case 60:result+="sixty";
        break;
        case 70:result+="seventy";
        break;
        case 80:result+="eighty";
        break;
        case 90:result+="ninety";
        break;
    }
    switch(number%10)
    {
        case 0:break;
        case 1:result+=" ";
            result+=number_1;
        break;
        case 2:result+=" ";
            result+=number_2;
        break;
        case 3:result+=" ";
            result+=number_3;
        break;
        case 4:result+=" ";
            result+=number_4;
        break;
        case 5:result+=" ";
            result+=number_5;
        break;
        case 6:result+=" ";
            result+=number_6;
        break;
        case 7:result+=" ";
            result+=number_7;
        break;
        case 8:result+=" ";
            result+=number_8;
        break;
        case 9:result+=" ";
            result+=number_9;
        break;
    }
  }
  if(number<20)
  {
      switch(number){
          case 0:result+="zero";
          break;
          case 1:result+=number_1;
          break;
          case 2:result+=number_2;
          break;
          case 3:result+=number_3;
          break;
          case 4:result+=number_4;
          break;
          case 5:result+=number_5;
          break;
          case 6:result+=number_6;
          break;
          case 7:result+=number_7;
          break;
          case 8:result+=number_8;
          break;
          case 9:result+=number_9;
          break;
          case 10:result+=number_10;
          break;
          case 11:result+=number_11;
          break;
          case 12:result+=number_12;
          break;
          case 13:result+=number_13;
          break;
          case 14:result+=number_14;
          break;
          case 15:result+=number_15;
          break;
          case 16:result+=number_16;
          break;
          case 17:result+=number_17;
          break;
          case 18:result+=number_18;
          break;
          case 19:result+=number_19;
          break;
      }
  }
  return result;
 
}
