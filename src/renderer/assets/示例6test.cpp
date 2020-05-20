



int function(int driverage, int point)
{
    int baseRate = 500;
    int safedrivingreduction;
    int age;
    if(driverage >= 16 && driverage < 20)
    {
        age = 2.8;
        if( point < 1)
        {
            safedrivingreduction = 50;
        }
        else
        {
            safedrivingreduction = 0;
        }
    }
    else if(driverage >= 20 && driverage < 25)
    {
        age = 1.8;
        if(point < 3)
        {
            safedrivingreduction = 50;
        }
        else
        {
            safedrivingreduction = 0;
        }
    }
    else if ( driverage >= 25 && driverage < 45)
    {
        age = 1;
        if(point < 5)
        {
            safedrivingreduction = 100;
        }
        else
        {
            safedrivingreduction = 0;
        }
    }
    else if(driverage >= 45 && driverage < 60)
    {
        age = 0.8;
        if(point < 7)
        {
            safedrivingreduction = 150;
        }
        else
        {
            safedrivingreduction = 0;
        }
    }
    else if(driverage >= 60 && driverage < 120)
    {
        age = 1.5;
        if( point < 5)
        {
            safedrivingreduction = 200;
        }
        else
        {
            safedrivingreduction = 0;
        }
    }
    else
    {
        
    }

   
    return 0;
}