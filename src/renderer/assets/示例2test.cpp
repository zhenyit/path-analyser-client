
int function(int totallocks, int totalstocks, int totalbarrels)
{
    double  lockprice = 45.0 ;
    double  stockprice = 30.0 ;
    double  barrelprice = 25.0 ;
    double  locksales = lockprice * totallocks ;
    double  stocksales = stockprice * totalstocks ;
    double  barrelsales = barrelprice * totalbarrels ;
    double  sales = locksales + stocksales + barrelsales ;
    double commission ;
if(sales > 1800.0)
{
  commission = 0.10*1000.0 ;
  commission = commission + 0.15*800.0 ;
  commission = commission + 0.20*(sales - 1800.0) ;
}
else if(sales > 1000.0)
{
  commission = 0.10*1000.0 ;
  commission = commission + 0.15*(sales - 1000.0) ;
}
else
{
   commission = 0.10*sales ;
}
 return 0;
}
