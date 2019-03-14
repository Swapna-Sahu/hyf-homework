function weatherForeCast(temp)
{
var num=temp;
var clothesToWear;

if(num<(-10))  {clothesToWear="Extreme cold and low pressure.Do not go outside. Wear Thermal dress,Sweater,Shirt and pant at indoor. ";}

else if(num<0 && num>(-10)) {clothesToWear="Frezzing .Snowsuit,Jacket,thermal wear, muffler ,gloves,shirt and pant.";}

else if(num<=13&&num>=0) {clothesToWear="Winter.Jacket,sweater,Muffler,Gloves,shirt and Pant.";}

else if (num>=13 && num<= 27) {clothesToWear="Summer.shorts and a t-shirt.";}

else if(num>27 && num<=40) {clothesToWear="Extreme Hot.Do not go outside. Wear shorts and a t-shirt at indoor";}

else {clothesToWear="Boiling Point.Go for vacation.Wear shorts and a t-shirt";}

return clothesToWear;
}
var clothesToWear = weatherForeCast (-18);
console.log(clothesToWear);
